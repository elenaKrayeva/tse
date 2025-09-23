"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Укажите имя (минимум 2 символа)").max(100),
  phone: z.string().min(7, "Укажите телефон").max(30),
  message: z.string().min(5, "Напишите кратко, что нужно").max(1000),
  company: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm({
  variant = "standalone",
}: {
  variant?: "standalone" | "modal";
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", message: "", company: "" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      if (values.company && values.company.trim() !== "") {
        setStatus("success");
        reset();
        toast.success("Заявка отправлена");
        return;
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const templateParams = {
        from_name: values.name,
        from_phone: values.phone,
        message: values.message,
        page_url: typeof window !== "undefined" ? window.location.href : "",
      };

      // Если SMTP/ключи ещё не настроены — просто лог и фейковый успех
      if (!serviceId || !templateId || !publicKey) {
        console.log("[ContactForm] values:", values);
        setStatus("success");
        reset();
        toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
        return;
      }

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      setStatus("success");
      reset();
      toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
    } catch {
      setStatus("error");
      toast.error("Не удалось отправить. Попробуйте ещё раз.");
    }
  };

  const FormUI = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md"
      noValidate
    >
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("company")}
      />

      <h3 className="text-xl font-semibold mb-4">Оставьте заявку</h3>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Ваше имя"
          {...register("name")}
          className="w-full border border-gray-300 rounded p-3 focus:border-orange-500 focus:ring focus:ring-orange-200 outline-none"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-3">
        <input
          type="tel"
          placeholder="Телефон"
          {...register("phone")}
          className="w-full border border-gray-300 rounded p-3 focus:border-orange-500 focus:ring focus:ring-orange-200 outline-none"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Сообщение"
          rows={4}
          {...register("message")}
          className="w-full border border-gray-300 rounded p-3 focus:border-orange-500 focus:ring focus:ring-orange-200 outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 text-base bg-gradient-to-b from-yellow-300 to-[#ffa500] text-black font-semibold rounded-md shadow-md hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Отправка..." : "Отправить"}
      </button>

      {status === "success" && (
        <p className="mt-3 text-center text-green-600">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-red-600">
          Не удалось отправить. Попробуйте ещё раз.
        </p>
      )}
    </form>
  );

  if (variant === "modal") {
    return <div className="w-full max-w-xl">{FormUI}</div>;
  }

  // standalone секция
  return (
    <section className="py-16 bg-gray-50" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">{FormUI}</div>
      </div>
    </section>
  );
}

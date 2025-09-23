"use client";

import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const schema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  phone: z.string().min(5, "Введите телефон"),
});

type FormValues = z.infer<typeof schema>;

export default function HomePage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    // имитация отправки
    await new Promise((r) => setTimeout(r, 500));
    toast.success(`Заявка отправлена: ${values.name}`);
    reset();
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      {/* Анимационный заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold tracking-tight"
      >
        Проверка интеграций: анимации, иконки, форма, слайдер
      </motion.h1>

      {/* Маленький слайдер */}
      <div className="mt-8 rounded-lg overflow-hidden shadow">
        <Swiper spaceBetween={12} slidesPerView={1} loop>
          <SwiperSlide>
            <img src="/slide1.jpg" alt="slide1" className="w-full h-64 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide2.jpg" alt="slide2" className="w-full h-64 object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Форма с валидацией */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 grid gap-4 rounded-lg border border-neutral-200 bg-white p-4 md:p-6 shadow-sm"
      >
        <label className="grid gap-1">
          <span className="text-sm font-medium">Ваше имя</span>
          <input
            {...register("name")}
            className="h-10 rounded-md border border-neutral-300 px-3 outline-none focus:border-neutral-400"
            placeholder="Иван"
          />
          {errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>}
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-medium">Телефон</span>
          <input
            {...register("phone")}
            className="h-10 rounded-md border border-neutral-300 px-3 outline-none focus:border-neutral-400"
            placeholder="+375 29 …"
          />
          {errors.phone && <span className="text-sm text-red-600">{errors.phone.message}</span>}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-yellow-300 to-[#ffa500] px-5 py-2.5 font-semibold text-white shadow hover:brightness-110 disabled:opacity-70"
        >
          <Send className="size-4" />
          {isSubmitting ? "Отправка…" : "Отправить заявку"}
        </button>
      </form>

      {/* Блок иконок */}
      <div className="mt-8 flex items-center gap-3 text-neutral-700">
        <Phone className="size-5" />
        <a href="tel:+375297391236" className="font-semibold hover:text-[#ffa500]">
          +375 29 739 12 36
        </a>
      </div>
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { withBasePath } from "@/lib/prefix";

const features = [
  "Работаем по ГОСТ",
  "Собственное производство",
  "Сроки 7–60 дней",
  "Доставка и монтаж",
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    // TODO: подключить реальную отправку 
    console.log("FORM_DATA:", data);
    setOpen(false);
  };

  return (
    <section
      id="hero"
      className={cn(
        "relative overflow-hidden",
        "bg-gradient-to-b from-gray-900 via-white to-gray-100"
      )}
    >
      {/* фоновая сетка/ореол */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* мягкий радиальный свет сверху */}
        <div className="absolute -top-20 left-1/2 h-[420px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,_rgba(255,255,255,0.45),_transparent_70%)]" />
        {/* сетка */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(1200px 600px at 50% 0%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(1200px 600px at 50% 0%, black 60%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-4 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-28 lg:pt-20">
        {/* Левая колонка: текст + CTA */}
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70 shadow-sm backdrop-blur"
          >
            Металлоконструкции под ключ
            <span className="inline-block h-1 w-1 rounded-full bg-orange-500" />
            Беларусь
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="mt-4 text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl"
          >
            Сильные конструкции.{" "}
            <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent">
              Сильные сроки.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.4 }}
            className="mt-4 max-w-[56ch] text-base text-gray-700 sm:text-lg"
          >
            Проектирование, производство и монтаж ангаров, навесов, каркасов и
            балок. Работаем с юр. и физ. лицами, держим сроки и отвечаем за
            качество.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.4 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-yellow-300 to-[#ffa500] px-5 py-3 font-semibold text-black shadow hover:brightness-110"
            >
              Рассчитать стоимость <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white/70 px-5 py-3 font-semibold text-gray-900 backdrop-blur hover:bg-white"
            >
              Последние проекты
            </Link>
          </motion.div>

          {/* Фишки */}
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.4 }}
            className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2"
          >
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-gray-800"
              >
                <CheckCircle2 className="h-4 w-4 text-orange-500" />
                {f}
              </li>
            ))}
          </motion.ul>

          {/* подсказка прокрутки */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="pointer-events-none mt-10 hidden items-center gap-2 text-xs text-gray-500 sm:flex"
          >
            <span className="h-3 w-3 animate-bounce rounded-full bg-gray-500/50" />
            Пролистайте вниз — познакомимся ближе
          </motion.div>
        </div>

        {/* Правая колонка: карточка-фото производства */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="relative"
        >
          {/* светящийся подтон за фото */}
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-[radial-gradient(400px_200px_at_70%_20%,rgba(255,165,0,0.25),transparent)]" />
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
            <Image
              src={withBasePath("/hero.jpg")}
              alt="Производство металлоконструкций"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
            {/* нижняя плашка со статистикой */}
            <div className="border-t border-black/10 bg-white/80 p-4 backdrop-blur sm:p-5">
              <div className="grid grid-cols-3 gap-3 text-center text-sm sm:text-base">
                <div>
                  <div className="font-extrabold text-gray-900">
                    500<span className="text-gray-500"> м²</span>
                  </div>
                  <div className="text-gray-600">производство</div>
                </div>
                <div>
                  <div className="font-extrabold text-gray-900">
                    10<span className="text-gray-500">+</span>
                  </div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div>
                  <div className="font-extrabold text-gray-900">
                    24<span className="text-gray-500">/7</span>
                  </div>
                  <div className="text-gray-600">сроки & связь</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Диалог с формой заявки */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg border-black/10 bg-white">
          <DialogHeader>
            <DialogTitle>Рассчитать стоимость</DialogTitle>
            <DialogDescription className="text-gray-600">
              Заполните форму — перезвоним в рабочее время и уточним детали.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-800">
                  Имя *
                </label>
                <input
                  name="name"
                  required
                  placeholder="Имя"
                  className="w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-black/30"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-800">
                  Телефон *
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="+375 29 000 00 00"
                  className="w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-black/30"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-black/30"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-800">
                Комментарий / задача
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Например: ангар 18×36 м, ворота, кровля — рассчитать полный комплект..."
                className="w-full resize-y rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-black/30"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-800">
                Какой тип конструкции интересует?
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" name="types" value="Ангар" />
                  Ангар
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" name="types" value="Навес" />
                  Навес
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" name="types" value="Каркас" />
                  Каркас
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" name="types" value="Балка/ферма" />
                  Балка/ферма
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-b from-yellow-300 to-[#ffa500] px-5 py-3 font-semibold text-black shadow hover:brightness-110"
            >
              Отправить заявку <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-center text-xs text-gray-500">
              Нажимая «Отправить», вы соглашаетесь с обработкой персональных
              данных.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Clock, Users, Factory } from "lucide-react";

const features = [
  { icon: Factory, title: "Собственное производство" },
  { icon: ShieldCheck, title: "Работаем по ГОСТ" },
  { icon: Clock, title: "Соблюдаем сроки" },
  { icon: Users, title: "Опытная команда" },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="bg-white pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20">
        {/* Фотоблок: две перекрывающиеся карточки */}
        <div className="relative">
          {/* мягкое свечение позади */}
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(500px_240px_at_30%_20%,rgba(255,165,0,0.22),transparent_70%)]" />

          {/* нижняя карточка (основная) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5 }}
            whileHover={reduce ? undefined : { y: -2 }}
            className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl"
          >
            <Image
              src="/about1.png"
              alt="Производство металлоконструкций"
              width={400}
              height={200}
              className="h-auto w-full object-cover"
              priority={false}
            />
          </motion.div>

          {/* верхняя карточка (накладка) */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            whileHover={reduce ? undefined : { y: -6, rotate: -1 }}
            className="absolute -right-4 -bottom-12 w-[70%] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl sm:-right-6 sm:-bottom-8 lg:-right-10 lg:-bottom-10"
          >
            {/* тонкая оранжевая линия сверху как акцент */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-[#ffa500]" />
            <Image
              src="/about.jpg"
              alt="Сборка и контроль качества"
              width={500}
              height={200}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Текстовый блок */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">О компании</h2>
          <p className="mt-4 text-gray-600">
            Мы — молодая команда, собранная из опытных профессионалов с многолетним стажем.
            Используем современное и надёжное оборудование, выполняем проекты любой сложности в срок.
          </p>
          <p className="mt-2 text-gray-600">
            Ответственность и уважение к вашему времени — наш принцип. С нами легко работать: слышим
            клиента, предлагаем решения под задачи и гарантируем результат.
          </p>

          {/* Преимущества */}
          <ul className="mt-6 grid grid-cols-2 gap-4">
            {features.map((f) => (
              <li key={f.title} className="flex items-center gap-2 text-gray-800">
                <f.icon className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium">{f.title}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

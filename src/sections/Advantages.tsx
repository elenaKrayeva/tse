"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Wrench, Building2, Users, Hammer } from "lucide-react";

const items = [
  { icon: Building2, title: "10+ лет опыта", text: "Проектируем и строим с гарантией качества" },
  { icon: ShieldCheck, title: "ГОСТ и стандарты", text: "Работаем по нормативам, документируем процесс" },
  { icon: Wrench, title: "Собственное производство", text: "500 м² современных мощностей" },
  { icon: Clock, title: "Сроки 7–60 дней", text: "Чётко планируем и соблюдаем дедлайны" },
  { icon: Hammer, title: "Монтаж под ключ", text: "От проекта до установки без посредников" },
  { icon: Users, title: "Индивидуальные решения", text: "Подбираем конструкции под ваши задачи" },
];

export default function Advantages() {
  return (
    <section id="advantages" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          Почему выбирают нас
        </motion.h2>
        <p className="mx-auto mt-2 max-w-[70ch] text-center text-gray-600">
          Мы отвечаем за результат: качество, сроки и удобство для клиента.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="rounded-xl border border-black/5 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <item.icon className="mx-auto h-8 w-8 text-orange-500" />
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

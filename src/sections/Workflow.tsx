"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Calculator,
  Factory,
  Truck,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Заявка",
    text: "Оставляете заявку или звоните нам — обсуждаем задачу и детали проекта.",
  },
  {
    icon: Calculator,
    title: "Расчёт",
    text: "Делаем точный расчёт, подбираем материалы и формируем КП.",
  },
  {
    icon: Factory,
    title: "Производство",
    text: "Изготавливаем конструкции на собственном производстве.",
  },
  {
    icon: Truck,
    title: "Доставка и монтаж",
    text: "Привозим готовые изделия и выполняем монтаж на объекте.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия",
    text: "Даём гарантию на продукцию и обеспечиваем сопровождение.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          Этапы работы
        </motion.h2>
        <p className="mx-auto mt-2 max-w-[65ch] text-center text-gray-600">
          От первого звонка до готового объекта — весь процесс прозрачен и
          понятен.
        </p>

        {/* Таймлайн */}
        <div className="relative mt-14 flex flex-col items-center sm:flex-row sm:justify-between">
          {/* анимируемая линия для десктопа */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-7 hidden h-[2px] w-full origin-left bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-600 sm:block"
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative z-10 mb-10 flex flex-col items-center text-center sm:mb-0 sm:w-1/5 min-h-[220px] justify-start"
            >
              {/* иконка */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-orange-500 text-white shadow-lg">
                <s.icon className="h-6 w-6" />
              </div>

              {/* текст */}
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[220px] text-sm text-gray-600">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

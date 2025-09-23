"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCT_GROUPS } from "@/data/products";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  return (
    <section id="products" className="bg-gray-50 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          Что мы производим
        </motion.h2>
        <p className="mx-auto mt-2 max-w-[70ch] text-center text-gray-600">
          Полный цикл: проектирование, изготовление и монтаж металлоконструкций — от каркасов и
          опор до ограждений и индивидуальных решений.
        </p>

        {PRODUCT_GROUPS.map((group, groupIdx) => (
          <GroupBlock key={group.id} {...group} index={groupIdx} />
        ))}
      </div>
    </section>
  );
}

function GroupBlock({
  id,
  title,
  items,
  index,
}: {
  id: string;
  title: string;
  items: { title: string; img: string; tag?: "hit" | "new" }[];
  index: number;
}) {
  return (
    <section id={id} className="mt-12 sm:mt-14">
      <div className="mb-5 flex items-end justify-between gap-4">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-left text-xl font-semibold text-gray-900 sm:text-2xl"
        >
          {title}
        </motion.h3>
        <a
          href="#contact-form"
          className="hidden items-center gap-1 rounded-md border border-black/10 bg-white/60 px-3 py-2 text-sm font-semibold text-gray-900 backdrop-blur hover:bg-white sm:inline-flex"
        >
          Запросить расчёт <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.03 * (i % 6) }}
            className={cn(
              "group relative overflow-hidden rounded-xl bg-white shadow-md transition-all",
              "hover:-translate-y-1 hover:shadow-xl"
            )}
          >
            <div className="relative h-52 w-full overflow-hidden sm:h-56">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority={index === 0 && i < 3}
              />
              {/* градиентный бордер при ховере */}
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-transparent transition group-hover:ring-2 group-hover:ring-orange-400/80" />
              {/* бейдж */}
              {p.tag && (
                <span
                  className={cn(
                    "absolute left-3 top-3 rounded-full px-2 py-1 text-[11px] font-semibold tracking-wide",
                    p.tag === "hit"
                      ? "bg-orange-500 text-white"
                      : "bg-green-500 text-white"
                  )}
                >
                  {p.tag === "hit" ? "Популярно" : "Новинка"}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <h4 className="text-base font-semibold text-gray-800">{p.title}</h4>
              <a
                href="#contact-form"
                className="shrink-0 rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 hover:bg-gray-50"
                aria-label={`Оставить заявку: ${p.title}`}
              >
                Заявка
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

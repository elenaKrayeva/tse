"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Keyboard,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const photos = [
  { src: "/proj1.jpg", alt: "Проект 1" },
  { src: "/proj2.jpg", alt: "Проект 2" },
  { src: "/proj3.jpg", alt: "Проект 3" },
  { src: "/proj4.jpg", alt: "Проект 4" },
  { src: "/proj5.jpg", alt: "Проект 5" },
  { src: "/proj6.jpg", alt: "Проект 6" },
  { src: "/proj7.jpg", alt: "Проект 7" },
  { src: "/proj8.jpg", alt: "Проект 8" },
  { src: "/proj9.jpg", alt: "Проект 9" },
  { src: "/proj10.jpg", alt: "Проект 10" },
  { src: "/proj11.jpg", alt: "Проект 11" },
  { src: "/proj12.jpg", alt: "Проект 12" },
  { src: "/proj13.jpg", alt: "Проект 13" },
  { src: "/proj14.jpg", alt: "Проект 14" },
  { src: "/proj15.jpg", alt: "Проект 15" },
  { src: "/proj16.jpg", alt: "Проект 16" },
  { src: "/proj17.jpg", alt: "Проект 17" },
  { src: "/proj18.jpg", alt: "Проект 18" },
  { src: "/proj19.jpg", alt: "Проект 19" },
  { src: "/proj20.jpg", alt: "Проект 20" },
  { src: "/proj21.jpg", alt: "Проект 21" },
  { src: "/proj22.jpg", alt: "Проект 22" },
  { src: "/proj23.jpg", alt: "Проект 23" },
  { src: "/proj24.jpg", alt: "Проект 24" },
  { src: "/proj25.jpg", alt: "Проект 25" },
];

export default function ProjectsPhotos() {
  return (
    <section id="projects" className="bg-white pt-32 pb-16 sm:pt-36 sm:pb-20">
      <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        Последние работы
      </h2>
      <p className="mx-auto mt-2 mb-6 max-w-[60ch] text-center text-gray-600">
        Реализуем проекты любой сложности — от навесов и заборов до крупных
        металлоконструкций.
      </p>
      <div className="mx-auto max-w-container px-4">
        <div className="relative">
          {/* стрелки показываем со sm+ */}
          <button
            className="proj-prev absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-black/10 bg-white/80 p-2 shadow backdrop-blur hover:bg-white sm:inline-flex"
            aria-label="Предыдущая фотография"
          >
            <span className="inline-block select-none">&larr;</span>
          </button>
          <button
            className="proj-next absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-black/10 bg-white/80 p-2 shadow backdrop-blur hover:bg-white sm:inline-flex"
            aria-label="Следующая фотография"
          >
            <span className="inline-block select-none">&rarr;</span>
          </button>

          <Swiper
            modules={[Pagination, Navigation, Keyboard, Autoplay, A11y]}
            pagination={{ clickable: true }}
            navigation={{ prevEl: ".proj-prev", nextEl: ".proj-next" }}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 18 },
              768: { slidesPerView: 1.6, spaceBetween: 20 },
              1024: { slidesPerView: 2.2, spaceBetween: 22 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-10"
          >
            {photos.map((p) => (
              <SwiperSlide key={p.src}>
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 60vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      priority={false}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

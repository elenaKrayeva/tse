"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm"; 

export default function Footer() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Лого / Название */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
              ТехноСтальИнжиниринг
            </h2>
            <p className="mt-4 text-sm text-gray-400">
              Производство и монтаж металлоконструкций в Беларуси.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:+375291234567" className="hover:underline">
                  +375 (29) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:info@tse.by" className="hover:underline">
                  info@tse.by
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>г. Минск, ул. Судмалиса, 20</span>
              </li>
            </ul>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-orange-400">
                  О компании
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400">
                  Продукция
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400">
                  Проекты
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-orange-400">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Кнопка заявка */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Связаться</h3>
            <button
              onClick={() => setOpenForm(true)}
              className="inline-block w-full text-center py-3 px-6 bg-gradient-to-b from-yellow-300 to-[#ffa500] text-black font-semibold rounded-md shadow-md hover:brightness-110 transition"
            >
              Оставить заявку
            </button>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TSE. Все права защищены.
        </div>
      </div>

      {/* Модалка с формой */}
      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent className="max-w-xl bg-white">
          <DialogHeader>
            <DialogTitle>Оставьте заявку</DialogTitle>
          </DialogHeader>
          <ContactForm variant="modal" />
        </DialogContent>
      </Dialog>
    </footer>
  );
}

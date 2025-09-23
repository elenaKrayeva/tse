"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm"; 

export default function Contacts() {
  return (
    <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 bg-gray-50" id="contacts">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Свяжитесь с нами
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Телефон */}
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-orange-500 text-white shadow-lg mb-3">
              <Phone className="h-6 w-6" />
            </div>
            <p className="font-semibold">Телефон</p>
            <a
              href="tel:+375291234567"
              className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-medium hover:underline"
            >
              +375 (29) 123-45-67
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-orange-500 text-white shadow-lg mb-3">
              <Mail className="h-6 w-6" />
            </div>
            <p className="font-semibold">Email</p>
            <a
              href="mailto:info@metall.by"
              className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-medium hover:underline"
            >
              info@metall.by
            </a>
          </div>

          {/* Адрес */}
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-orange-500 text-white shadow-lg mb-3">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="font-semibold">Адрес</p>
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-medium">
              г. Минск, ул. Судмалиса, 20
            </span>
          </div>
        </div>

        {/* Кнопка-Trigger модалки */}
        <div className="mt-12 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-8 py-2 bg-gradient-to-b from-yellow-300 to-[#ffa500] text-black font-semibold rounded-md shadow-md hover:brightness-110 transition">
                Оставить заявку
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[560px]">
              <DialogHeader>
                <DialogTitle className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Оставьте заявку
                </DialogTitle>
              </DialogHeader>
              <div className="mt-2">
                <ContactForm variant="modal" />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Карта */}
        <div className="mt-12 w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=27.587352,53.889916&z=16&pt=27.587352,53.889916,pm2rdl&lang=ru_RU"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

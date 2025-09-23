"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, Send, Mail, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/cn";

type NavItem = { href: `#${string}`; label: string };

const NAV: NavItem[] = [
  { href: "#about", label: "О компании" },
  { href: "#products", label: "Продукция" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#projects", label: "Проекты" },
  { href: "#contacts", label: "Контакты" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [elevated, setElevated] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - innerHeight;
      setProgress(total > 0 ? (scrollY / total) * 100 : 0);
      setElevated(scrollY > 8);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive("#" + visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const linkCls = useMemo(
    () => (href: string) =>
      cn(
        "relative text-sm font-medium transition-colors",
        "text-black/80 hover:text-black",
        active === href && "text-black font-semibold"
      ),
    [active]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* индикатор скролла */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-yellow-300 via-orange-400 to-[#ffa500]"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      {/* верхняя контактная полоска */}
      <div className="bg-black text-orange-200">
        <div className="mx-auto flex max-w-container flex-col gap-1 px-4 py-1.5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1">
            <a
              href="tel:+375297391236"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-5 w-5 text-orange-300" />
              <span className="hidden md:inline">+375 29 739 12 36</span>
            </a>
            <a
              href="https://t.me/metall"
              className="inline-flex items-center gap-1.5 hover:text-orange-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="h-3.5 w-3.5" /> Telegram
            </a>
            <a
              href="mailto:info@metall.by"
              className="inline-flex items-center gap-1.5 hover:text-orange-300"
            >
              <Mail className="h-3.5 w-3.5" /> info@metall.by
            </a>
          </div>
          <div className="flex items-start justify-center gap-2 text-center sm:items-center sm:justify-start sm:text-left">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="hover:text-orange-300 whitespace-normal break-words">
              Минск, ул. Судмалиса, 20
            </span>
          </div>
        </div>
      </div>

      {/* главный блок хедера */}
      <div
        className={cn(
          "border-b transition-all",
          "bg-gradient-to-b from-gray-800 from-0% via-white via-50% to-gray-800 to-100% backdrop-blur-md border-gray-300/40",
          elevated && "shadow-[0_8px_28px_-12px_rgba(0,0,0,.55)]"
        )}
      >
        <div className="mx-auto flex max-w-container items-center justify-between px-4 py-3 md:py-4">
          {/* логотип */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/logo_final.png"
              alt="Логотип"
              width={50}
              height={50}
              className="rounded-full ring-1 ring-black/20"
              priority
            />
            <span className="hidden sm:inline text-lg font-semibold tracking-wide text-black">
              ТехноСтальИнжиниринг
            </span>
          </Link>

          {/* десктоп меню */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkCls(item.href)}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-gradient-to-b from-yellow-300 to-[#ffa500] text-black hover:brightness-110 shadow"
            >
              <Link href="#contact-form">Заявка</Link>
            </Button>
          </nav>

          {/* мобильное меню */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Открыть меню"
                  className="text-black"
                >
                  {open ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-black text-white border-white/10 p-6"
              >
                <div className="space-y-6">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setOpen(false)}
                  >
                    <Image
                      src="/logo_final.png"
                      alt="Логотип"
                      width={36}
                      height={36}
                      className="rounded-full ring-1 ring-white/15"
                    />
                    <span className="text-base font-semibold">
                      ТехноСтальИнжиниринг
                    </span>
                  </Link>
                  <div className="h-px bg-white/10" />
                  <nav className="grid gap-2">
                    {NAV.map((n) => (
                      <Link
                        key={n.href}
                        href={n.href}
                        className={cn(
                          "rounded-md px-3 py-3 text-base font-medium",
                          active === n.href
                            ? "bg-white/10 text-white"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {n.label}
                      </Link>
                    ))}
                  </nav>
                  <Button
                    asChild
                    className="w-full py-6 text-base bg-gradient-to-b from-yellow-300 to-[#ffa500] text-black hover:brightness-110"
                  >
                    <Link href="#contact-form" onClick={() => setOpen(false)}>
                      Заявка
                    </Link>
                  </Button>
                  <div className="h-px bg-white/10" />
                  <div className="grid gap-3 text-white/80 text-sm">
                    <a
                      href="tel:+375297391236"
                      className="inline-flex items-center gap-2 hover:text-white"
                    >
                      <Phone className="h-4 w-4" /> +375 29 739 12 36
                    </a>
                    <a
                      href="mailto:info@metall.by"
                      className="inline-flex items-center gap-2 hover:text-white"
                    >
                      <Mail className="h-4 w-4" /> info@metall.by
                    </a>
                    <a
                      href="https://t.me/metall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-white"
                    >
                      <Send className="h-4 w-4" /> Telegram
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { Toaster } from "sonner";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"], weight: ["600","700"], variable: "--font-montserrat" });
const roboto = Roboto({ subsets: ["latin", "cyrillic"], weight: ["300","400","500","700"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Metall — металлоконструкции",
  description: "Современные металлоконструкции под ключ.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${roboto.variable} font-sans`}>
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

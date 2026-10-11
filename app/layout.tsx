import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cairo = localFont({
  src: "../public/fonts/Cairo-Variable.ttf",
  variable: "--font-cairo",
  weight: "200 1000",
});

export const metadata: Metadata = {
  title: "صاحب المتجر | StoreMate — إدير محلك من الواتساب",
  description:
    "منصة ذكية بتحوّل رسائل الواتساب لطلبات منظمة لباعة إنستجرام وفيسبوك: أوردر أوتوماتيك، تأكيد للعميل، متابعة شحن ودفع عند الاستلام، وتقارير مبيعات بالجنيه.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>{children}</body>
    </html>
  );
}

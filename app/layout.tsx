import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

let title = "LOVEKONG X AAM";
let description = "문화로운 프로젝트, LOVEKONG과 AAM의 콜라보레이션";
let ogimage = "https://lovekong.me/seon.png";
let sitename = "LOVEKONG X AAM";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://lovekong.me",
    siteName: sitename,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff] text-white">
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

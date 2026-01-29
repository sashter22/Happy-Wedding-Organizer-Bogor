"use client";
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import AOS from "aos";
// @ts-ignore
import "aos/dist/aos.css";
// @ts-ignore
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Inisialisasi efek muncul pelan-pelan (Scroll Reveal)
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Judul & Deskripsi SEO agar muncul di Google */}
        <title>
          Happy Wedding Bogor x Sierra | Catering & Wedding Specialist
        </title>
        <meta
          name="description"
          content="Layanan Wedding Organizer & Sierra Catering profesional di Bogor. Paket dekorasi elegan dan catering premium."
        />
        <meta
          name="keywords"
          content="Sierra Catering Bogor, Happy Wedding Sierra, WO Bogor Terpercaya, Wedding Organizer Ciherang"
        />

        {/* Link FontAwesome untuk Icon WA, IG, TikTok */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

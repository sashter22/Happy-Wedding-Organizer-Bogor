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
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <title>
          Happy Wedding Organizer Bogor x Sierra | Catering & Wedding Specialist
        </title>
        <meta
          name="description"
          content="Layanan Wedding Organizer & Sierra Catering profesional di Bogor. Paket dekorasi elegan dan catering premium untuk momen spesial Anda."
        />
        <meta
          name="keywords"
          content="Sierra Catering Bogor, Happy Wedding Sierra, WO Bogor Terpercaya, Wedding Organizer Ciherang, Paket Pernikahan Bogor"
        />

        {/* --- KODE VERIFIKASI GOOGLE SEARCH CONSOLE --- */}
        <meta
          name="google-site-verification"
          content="C7DTJi-DYv2phdDT6vSWhHCHrA92iT0C271_Nn-kS00"
        />

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

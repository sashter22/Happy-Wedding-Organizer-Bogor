"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-sm py-4 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-tight font-bold text-stone-800 uppercase leading-none">
              Happy Wedding
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#B8860B] font-bold uppercase">
              Organizer Bogor
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-[#B8860B] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-[#B8860B] transition-colors"
            >
              About Us
            </a>
            <a
              href="#package"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-[#B8860B] transition-colors"
            >
              Package
            </a>
            <a
              href="#gallery"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-[#B8860B] transition-colors"
            >
              Gallery
            </a>
            <a
              href="#location"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-[#B8860B] transition-colors"
            >
              Location
            </a>

            {/* Divider */}
            <div className="h-5 w-[1px] bg-stone-200"></div>

            <a
              href="#footer"
              className="bg-[#D4AF37] text-white px-6 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-[#B8860B] transition-all"
            >
              Contact Us
            </a>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-stone-800 text-2xl p-2"
          >
            {/* GANTI DISINI: fa-bars biar garisnya lurus sejajar */}
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[110] transition-all duration-500 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Mobile */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-stone-100">
          <div className="flex flex-col">
            <span className="font-serif text-lg leading-tight tracking-widest font-bold text-stone-800 uppercase">
              Happy Wedding
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#B8860B] font-bold uppercase">
              Organizer Bogor
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-stone-800 text-3xl p-2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* List Menu Mobile */}
        <nav className="flex flex-col w-full bg-white">
          {[
            { name: "Home", href: "#home" },
            { name: "About Us", href: "#about" },
            { name: "Package", href: "#package" },
            { name: "Gallery", href: "#gallery" },
            { name: "Location", href: "#location" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="w-full px-8 py-6 text-stone-700 text-sm font-bold uppercase tracking-[0.3em] border-b border-stone-100 
                         hover:text-[#B8860B] active:text-[#B8860B] active:bg-stone-50 transition-all"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#footer"
            onClick={() => setIsMenuOpen(false)}
            className="w-full px-8 py-6 text-[#B8860B] text-sm font-bold uppercase tracking-[0.3em] border-b border-stone-100 active:bg-stone-50 transition-colors"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
}

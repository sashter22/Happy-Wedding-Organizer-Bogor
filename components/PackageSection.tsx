"use client";
import { useState } from "react";
// 1. IMPORT DATA DAN MODAL
import PriceModal from "./PriceModal";
// @ts-ignore
import { weddingData } from "@/Data/WeddingData";

export default function PackageSection() {
  const [activeTab, setActiveTab] = useState("wedding");

  // 2. STATE UNTUK MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  // Fungsi untuk buka modal
  const openModal = (pkg: any) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  const cardInteraction =
    "transition-all duration-300 active:scale-95 hover:shadow-2xl cursor-pointer";

  return (
    <section id="package" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* JUDUL UTAMA */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 tracking-widest italic uppercase">
            Wedding Package
          </h2>
        </div>

        {/* TAB NAVIGATION */}
        <div
          className="flex justify-center space-x-8 md:space-x-16 mb-16 border-b border-stone-200"
          data-aos="fade-up"
        >
          <button
            onClick={() => setActiveTab("wedding")}
            className={`pb-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all relative ${activeTab === "wedding" ? "text-[#D4AF37]" : "text-stone-400"}`}
          >
            Pricelist Wedding
            {activeTab === "wedding" && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("catering")}
            className={`pb-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all relative ${activeTab === "catering" ? "text-[#D4AF37]" : "text-stone-400"}`}
          >
            Sierra Catering
            {activeTab === "catering" && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]" />
            )}
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTab === "wedding" ? (
            <>
              {/* Card 1: Gold - PASANG onClick */}
              <div
                onClick={() => openModal(weddingData.gold)}
                className={`bg-stone-100/50 p-8 rounded-[40px] shadow-sm border-t-8 border-[#D4AF37] flex flex-col items-center text-center ${cardInteraction}`}
                data-aos="fade-up"
              >
                <h3 className="font-serif text-2xl italic text-stone-800 mb-2 font-medium">
                  Gold Package
                </h3>
                <p className="text-[#D4AF37] font-bold text-xl mb-4 italic">
                  Rp. 89.000.000
                </p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-8 italic font-bold">
                  Include Venue • 500 Pax
                </p>
                <button className="mt-auto bg-stone-800 text-white w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest italic">
                  Lihat Detail Lengkap
                </button>
              </div>

              {/* Card 2: Platinum - PASANG onClick */}
              <div
                onClick={() => openModal(weddingData.platinum)}
                className={`bg-[#1C1917] p-8 rounded-[40px] shadow-2xl border-b-8 border-[#D4AF37] flex flex-col items-center text-center transform lg:scale-105 z-10 ${cardInteraction}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="font-serif text-2xl italic text-[#D4AF37] mb-2 font-medium">
                  Platinum Package
                </h3>
                <p className="text-white font-bold text-xl mb-4 italic">
                  Rp. 138.000.000
                </p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-8 italic font-bold">
                  Include Venue • 700 Pax
                </p>
                <button className="mt-auto bg-[#D4AF37] text-white w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest italic">
                  Lihat Detail Lengkap
                </button>
              </div>

              {/* Card 3: Silver - PASANG onClick */}
              <div
                onClick={() => openModal(weddingData.silver)}
                className={`bg-stone-100/50 p-8 rounded-[40px] shadow-sm border-b-8 border-stone-200 flex flex-col items-center text-center ${cardInteraction}`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="font-serif text-2xl italic text-stone-800 mb-2 font-medium">
                  Silver Package
                </h3>
                <p className="text-[#D4AF37] font-bold text-xl mb-4 italic">
                  Rp. 52.000.000
                </p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-8 italic font-bold">
                  Exclude Venue & Catering
                </p>
                <button className="mt-auto bg-stone-200 text-stone-500 w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest italic">
                  Lihat Detail Lengkap
                </button>
              </div>

              {/* Card 4: Gedung - PASANG onClick */}
              <div
                onClick={() => openModal(weddingData.gedung)}
                className={`bg-stone-100/30 p-8 rounded-[40px] border-2 border-dashed border-stone-200 flex flex-col items-center text-center ${cardInteraction}`}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="font-serif text-2xl italic text-stone-800 mb-2 font-medium">
                  Rekanan Gedung
                </h3>
                <p className="text-stone-800 font-bold text-xl mb-4 italic">
                  75 Gedung Total
                </p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-8 italic font-bold">
                  Bogor dan sekitarnya
                </p>
                <button className="mt-auto bg-stone-600 text-white w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest italic">
                  List 75 Gedung
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Card 5: Foodstall - PASANG onClick */}
              <div
                onClick={() => openModal(weddingData.foodstall)}
                className={`bg-stone-100/50 p-8 rounded-[40px] shadow-sm border-b-8 border-stone-800 flex flex-col items-center text-center ${cardInteraction}`}
                data-aos="fade-up"
              >
                <h3 className="font-serif text-2xl italic text-stone-800 mb-2 font-medium">
                  Foodstall Sierra
                </h3>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-8 italic font-bold">
                  65 Pilihan Menu
                </p>
                <button className="mt-auto bg-stone-800 text-white w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest italic">
                  Daftar Harga Menu
                </button>
              </div>

              {/* Card 6: Catering Gold - PASANG onClick */}
              <div
                onClick={() => openModal(weddingData["cat-gold"])}
                className={`bg-stone-100/50 p-8 rounded-[40px] shadow-sm border-b-8 border-[#D4AF37] flex flex-col items-center text-center ${cardInteraction}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="font-serif text-2xl italic text-stone-800 mb-2 font-medium">
                  Catering Gold
                </h3>
                <p className="text-[#D4AF37] font-bold text-xl mb-8 italic">
                  Rp. 75.000{" "}
                  <span className="text-xs text-stone-400 font-normal">
                    / Pax
                  </span>
                </p>
                <button className="mt-auto border border-[#D4AF37] text-[#D4AF37] w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all italic">
                  Rincian Menu
                </button>
              </div>

              {/* Card 7: Catering Platinum - PASANG onClick */}
              <div
                onClick={() => openModal(weddingData["cat-platinum"])}
                className={`bg-[#1C1917] p-8 rounded-[40px] shadow-2xl border-b-8 border-[#D4AF37] flex flex-col items-center text-center transform lg:scale-105 z-10 ${cardInteraction}`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="font-serif text-2xl italic text-[#D4AF37] mb-2 font-medium">
                  Catering Platinum
                </h3>
                <p className="text-white font-bold text-xl mb-8 italic">
                  Rp. 90.000{" "}
                  <span className="text-xs text-stone-400 font-normal">
                    / Pax
                  </span>
                </p>
                <button className="mt-auto bg-[#D4AF37] text-white w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest italic">
                  Rincian Menu
                </button>
              </div>

              {/* Card 8: Catering Bronze - PASANG onClick */}
              <div
                onClick={() => openModal(weddingData["cat-bronze"])}
                className={`bg-stone-100/80 p-8 rounded-[40px] shadow-sm border-b-8 border-stone-200 flex flex-col items-center text-center ${cardInteraction}`}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="font-serif text-2xl italic text-stone-800 mb-2 font-medium">
                  Catering Bronze
                </h3>
                <p className="text-stone-400 font-bold text-xl mb-8 italic">
                  Rp. 60.000{" "}
                  <span className="text-xs text-stone-300 font-normal">
                    / Pax
                  </span>
                </p>
                <button className="mt-auto bg-stone-200 text-stone-500 w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest italic">
                  Rincian Menu
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 3. PANGGIL COMPONENT MODAL DI BAWAH */}
      <PriceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pkg={selectedPkg}
      />
    </section>
  );
}

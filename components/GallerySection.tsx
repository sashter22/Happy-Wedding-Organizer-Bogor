"use client";
import { useState } from "react";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("decor");

  const decorImages = Array.from(
    { length: 12 },
    (_, i) => `/img/decor${i + 1}.jpeg`,
  );
  const cateringImages = Array.from(
    { length: 12 },
    (_, i) => `/img/catering${i + 1}.jpeg`,
  );

  return (
    <section id="gallery" className="bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl italic mb-10 uppercase tracking-widest text-stone-800">
          Our Gallery
        </h2>

        <div className="flex justify-center space-x-6 md:space-x-12 mb-12">
          <button
            onClick={() => setActiveTab("decor")}
            className={`pb-3 px-2 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${activeTab === "decor" ? "border-[#D4AF37] text-[#B8860B]" : "border-transparent text-stone-400"}`}
          >
            Decoration & Tent
          </button>
          <button
            onClick={() => setActiveTab("catering")}
            className={`pb-3 px-2 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${activeTab === "catering" ? "border-[#D4AF37] text-[#B8860B]" : "border-transparent text-stone-400"}`}
          >
            Catering Menu
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(activeTab === "decor" ? decorImages : cateringImages).map(
            (src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg aspect-[3/4]"
              >
                <img
                  src={src}
                  alt="Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

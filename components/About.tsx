"use client";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Sisi Kiri: Visual Gambar Bertumpuk & Badge */}
          <div className="w-full lg:w-1/2 relative" data-aos="zoom-in">
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=500"
                alt="Wedding Decor"
                className="rounded-2xl mt-10 shadow-xl aspect-[4/5] object-cover border-2 border-stone-50"
              />
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=500"
                alt="Wedding Catering"
                className="rounded-2xl shadow-xl aspect-[4/5] object-cover border-2 border-stone-50"
              />

              {/* Badge dengan RING EMAS TIPIS */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-2xl z-20 flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 ring-1 ring-[#D4AF37] ring-offset-4 border-2 border-stone-50">
                <span className="block text-2xl md:text-4xl font-serif font-bold text-[#D4AF37]">
                  7+
                </span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold leading-tight text-center italic">
                  Years <br /> Experience
                </span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Konten Teks */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left flex flex-col space-y-6"
            data-aos="fade-up"
          >
            <div>
              {/* TEKS gold */}
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-[10px] md:text-[11px] uppercase block mb-4 italic">
                Specialized in Decor & Catering
              </span>
              <h2 className="text-[28px] sm:text-3xl md:text-5xl font-serif text-stone-800 leading-tight">
                Harmoni keindahan <br className="hidden sm:block md:hidden" />
                <span className="block italic font-light text-stone-600 mt-1">
                  dalam setiap elemen
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Deskripsi Atas (Italic & Justify) */}
              <p className="text-stone-500 leading-relaxed text-sm md:text-base text-justify italic font-light">
                Happy Wedding Bogor hadir sebagai partner terpercaya yang
                berfokus pada dua elemen kunci hari bahagia Anda: dekorasi
                eksklusif dan catering berkualitas tinggi untuk memastikan momen
                Anda tak terlupakan.
              </p>

              {/* Deskripsi Bawah (Justify) */}
              <p className="text-stone-500 leading-relaxed text-sm md:text-base text-justify italic font-light">
                Dengan tim berpengalaman dan perhatian penuh pada setiap detail,
                kami menghadirkan konsep pernikahan yang elegan, harmonis, dan
                sesuai impian Anda. Kepuasan klien adalah prioritas kami, karena
                setiap cerita cinta layak dirayakan dengan sempurna dan penuh
                makna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

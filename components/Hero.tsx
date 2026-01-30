"use client";

export default function Hero() {
  return (
    <section
      id="home"
      // Menghilangkan min-h agar tinggi nya pas)
      className="relative flex items-center bg-white overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-6 items-center">
        {/* GAMBAR - Dibuat lebih kecil agar tidak mendorong halaman ke bawah */}
        <div
          className="relative flex justify-center lg:justify-end lg:pr-12 order-1 lg:order-2"
          data-aos="fade-down"
        >
          <div className="w-[200px] md:w-[280px] aspect-[4/5] bg-stone-100 rounded-t-full overflow-hidden border-[6px] border-white shadow-xl relative z-10">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
              alt="Happy Wedding Bogor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEKS - Rapat ke atas mengikuti gambar */}
        <div
          className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
          data-aos="fade-up"
        >
          <div className="mb-2">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] text-[10px] uppercase">
              EST. 2019
            </span>
          </div>

          <h1 className="font-serif text-[28px] md:text-5xl lg:text-[56px] text-stone-800 leading-tight tracking-tight mb-3">
            Mewujudkan <br className="hidden md:block" />
            <span className="italic font-light text-stone-600">
              {" "}
              Pernikahan Impian
            </span>
          </h1>

          <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-sm italic mb-6">
            Sentuhan dekorasi elegan serta layanan profesional untuk hari
            bahagia Anda di Bogor.
          </p>

          <div>
            <a
              href="#package"
              className="bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-[10px] shadow-md hover:bg-[#B8860B] transition-all inline-block"
            >
              View Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

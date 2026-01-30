"use client";

export default function Hero() {
  return (
    <section
      id="home"
      // min-h-0 tetap dipakai biar gak melar, pb dikit biar nempel ke About
      className="relative flex items-center bg-white overflow-hidden pt-20 pb-4 md:pt-32 md:pb-12"
    >
      {/* ganti layout jadi 2 kolom lebih awal,di HP mode desktop jadi berjajar.
       */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 grid sm:grid-cols-2 gap-4 md:gap-10 items-center">
        {/*  Pakai order-last di layar kecil biar pas berjajar gambar ada di kanan */}
        <div
          className="relative flex justify-center sm:justify-end sm:pr-8 order-1 sm:order-last"
          data-aos="fade-down"
        >
          <div className="w-[180px] md:w-[320px] aspect-[4/5] bg-stone-100 rounded-t-full overflow-hidden border-[6px] border-white shadow-xl relative z-10">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
              alt="Happy Wedding Bogor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEKS - otomatis di kiri pas jadi 2 kolom */}
        <div
          className="flex flex-col items-center text-center sm:items-start sm:text-left order-2 sm:order-first"
          data-aos="fade-up"
        >
          <div className="mb-2">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] text-[10px] uppercase">
              EST. 2019
            </span>
          </div>

          <h1 className="font-serif text-[24px] md:text-5xl lg:text-[60px] text-stone-800 leading-tight tracking-tight mb-3">
            Mewujudkan <br className="hidden sm:block" />
            <span className="italic font-light text-stone-600">
              {" "}
              Pernikahan Impian
            </span>
          </h1>

          <p className="text-stone-400 text-[11px] md:text-sm leading-relaxed max-w-xs italic mb-5">
            Sentuhan dekorasi elegan serta layanan profesional untuk hari
            bahagia Anda di Bogor.
          </p>

          <div>
            <a
              href="#package"
              className="bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-[9px] shadow-md hover:bg-[#B8860B] transition-all inline-block"
            >
              View Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

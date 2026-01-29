"use client";

export default function Hero() {
  return (
    // Tambah pt-20 di mobile agar tidak tertutup header
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center bg-white overflow-hidden pt-20 md:pt-40 pb-16"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* GAMBAR (Sisi Kanan di Desktop, Sisi Atas di Mobile) */}
        {/* Pakai 'order-1' agar muncul duluan di mobile, 'lg:order-2' untuk balik ke kanan di desktop */}
        <div
          className="relative flex justify-center lg:justify-end lg:pr-32 order-1 lg:order-2"
          data-aos="fade-down"
        >
          <div className="w-[260px] md:w-[310px] aspect-[4/5] bg-stone-100 rounded-t-full overflow-hidden border-[8px] md:border-[10px] border-white shadow-2xl relative z-10 lg:-mt-8">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
              alt="Happy Wedding Bogor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEKS (Sisi Kiri di Desktop, Sisi Bawah di Mobile) */}
        {/* Pakai 'items-center text-center' untuk mobile, 'lg:items-start lg:text-left' untuk desktop */}
        <div
          className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
          data-aos="fade-up"
        >
          <div className="mb-4">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] text-[10px] uppercase border-b-2 border-[#F1E5AC] pb-1">
              EST. 2019
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-[62px] text-stone-800 leading-[1.1] tracking-tight mb-4">
            Mewujudkan <br />
            <span className="italic font-light text-stone-600">
              Pernikahan Impian
            </span>
          </h1>

          <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-sm italic mb-8">
            Sentuhan dekorasi elegan serta layanan profesional lengkap untuk
            hari bahagia Anda di Bogor & sekitarnya.
          </p>

          <div>
            <a
              href="#package"
              className="bg-[#D4AF37] text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest text-[10px] shadow-lg hover:bg-[#B8860B] transition-all inline-block"
            >
              View Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

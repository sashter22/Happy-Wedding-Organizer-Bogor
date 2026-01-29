"use client";

export default function Location() {
  // Koordinat presisi yang kamu berikan
  const lat = "-6.583689";
  const lng = "106.745390";

  // Link untuk tombol "Petunjuk Jalan" (Membuka aplikasi Google Maps)
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  // Link untuk Iframe Embed (Tampilan peta di web)

  const iframeSrc = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lng}&zoom=18&maptype=roadmap`;

  // ALTERNATIF TANPA API KEY (Menggunakan mode pencarian koordinat)
  const iframeSrcSimple = `https://maps.google.com/maps?q=${lat},${lng}&z=18&output=embed`;

  return (
    <section id="location" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-8 italic">
            Our Home Location
          </h2>
          <p className="text-stone-600 mb-2 font-bold">
            Happy Wedding Organizer Bogor - Sierra Catering
          </p>
          <p className="text-stone-500 mb-10">
            Komplek perumahan the Manzil blok B26, Ciherang, Bogor, Jawa Barat
          </p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-white px-8 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-[#B8860B] transition-all inline-block"
          >
            Petunjuk Jalan
          </a>
        </div>

        <div className="h-[350px] bg-stone-100 rounded-[2.5rem] overflow-hidden border-[6px] border-[#FCFBFA] shadow-2xl">
          <iframe
            title="Lokasi The Manzil B26"
            src={iframeSrcSimple}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

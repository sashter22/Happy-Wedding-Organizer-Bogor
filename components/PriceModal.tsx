"use client";

interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: any;
}

export default function PriceModal({ isOpen, onClose, pkg }: PriceModalProps) {
  if (!isOpen || !pkg) return null;

  // Cek tipe data untuk menentukan tampilan
  const isGedung = pkg.type === "list";
  const isFoodstall = pkg.type === "grid-list";
  const isCateringOnly = pkg.type === "catering";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col relative shadow-2xl">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-stone-400 hover:text-red-500 text-3xl z-20"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="p-8 md:p-12 overflow-y-auto">
          <h2 className="font-serif text-2xl text-stone-800 italic uppercase mb-10 border-b pb-4 tracking-widest font-medium">
            {pkg.name}
          </h2>

          {/* --- TAMPILAN 1: LIST GEDUNG --- */}
          {isGedung ? (
            <div className="space-y-12">
              {pkg.sections?.map((sec: any, idx: number) => (
                <div key={idx}>
                  <h3 className="text-[#B8860B] font-bold text-sm mb-6 uppercase tracking-[0.2em] border-l-4 border-[#B8860B] pl-4">
                    {sec.title}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                    {sec.list?.map((item: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-stone-600 text-xs border-b border-stone-50 pb-2"
                      >
                        <span className="text-[#D4AF37]">✦</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : isFoodstall ? (
            /* --- TAMPILAN 2: FOODSTALL (GRID) --- */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
              {pkg.items?.map((item: string, i: number) => {
                const [name, price] = item.split(": ");
                return (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-stone-100 pb-2 group hover:border-[#B8860B] transition-colors"
                  >
                    <span className="text-stone-700 text-[11px] font-medium leading-tight">
                      {name}
                    </span>
                    <span className="text-[#B8860B] text-[10px] font-bold whitespace-nowrap ml-2 italic">
                      {price}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : isCateringOnly ? (
            /* --- TAMPILAN 3: CATERING DETAIL --- */
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {pkg.menu?.map((m: any, i: number) => (
                <div key={i} className="space-y-1">
                  <h4 className="text-[#B8860B] font-bold text-[10px] uppercase tracking-wider">
                    {m.label}
                  </h4>
                  {m.val && (
                    <p className="text-stone-500 text-xs leading-relaxed italic">
                      {m.val}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* --- TAMPILAN 4: WEDDING PACKAGE (GOLD/PLATINUM/SILVER) --- */
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-[#B8860B] font-bold text-[10px] mb-6 uppercase tracking-widest">
                  {pkg.priceTitle}
                </h3>
                {pkg.paxOptions.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-10">
                    {pkg.paxOptions.map((opt: any, i: number) => (
                      <div
                        key={i}
                        className="bg-stone-50 p-4 rounded-xl border border-stone-100 flex flex-col gap-1"
                      >
                        <span className="text-[10px] font-bold text-stone-400 uppercase">
                          {opt.pax} Pax
                        </span>
                        <span className="text-xs font-bold text-stone-800 italic">
                          {opt.price}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <h4 className="font-bold text-stone-800 text-[10px] mb-4 uppercase border-b pb-2 tracking-widest">
                  Paket Dekorasi Lengkap
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {pkg.decor?.map((item: any, i: number) => (
                    <li
                      key={i}
                      className="text-stone-500 text-xs flex items-start italic"
                    >
                      <span className="mr-2 text-[#D4AF37] font-bold">•</span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-10">
                <div>
                  <h4 className="font-bold text-stone-800 text-[10px] mb-4 uppercase border-b pb-2 tracking-widest">
                    Menu Catering
                  </h4>
                  <p className="text-stone-500 text-xs leading-relaxed italic">
                    {pkg.catering}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#B8860B] text-[10px] mb-4 uppercase border-b pb-2 tracking-widest">
                    Bonus & Hiburan
                  </h4>
                  <ul className="space-y-3">
                    {pkg.bonus?.map((item: any, i: number) => (
                      <li
                        key={i}
                        className="text-stone-600 text-xs leading-relaxed italic"
                      >
                        <span className="text-[#D4AF37] mr-2">✔</span> {item}
                      </li>
                    ))}
                  </ul>
                  {pkg.note && (
                    <p className="mt-6 text-[9px] text-stone-400 italic leading-loose">
                      {pkg.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer WhatsApp */}
        <div className="p-6 bg-stone-50 border-t flex justify-center">
          <a
            href="https://wa.me/6285894141698"
            target="_blank"
            className="w-full md:w-auto bg-[#25d366] text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all shadow-lg"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            Hubungi Via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

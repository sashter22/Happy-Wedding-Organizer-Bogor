"use client";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Media Section - Dengan Warna Brand */}
          <div className="flex items-center space-x-8">
            {/* WhatsApp - Ijo */}
            <a
              href="https://wa.me/6285894141698"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25d366] hover:scale-110 transition-transform"
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-3xl"></i>
            </a>

            {/* Instagram - Merah/Pink IG */}
            <a
              href="https://instagram.com/happyweddingbogor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e1306c] hover:scale-110 transition-transform"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram text-3xl"></i>
            </a>

            {/* TikTok - Hitam */}
            <a
              href="https://www.tiktok.com/@happy.wedding?_r=1&_t=ZS-9343gEsIcl8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:scale-110 transition-transform"
              title="TikTok"
            >
              <i className="fa-brands fa-tiktok text-2xl"></i>
            </a>
          </div>

          {/* Copyright Section - Di Bawah Sosmed */}
          <div className="text-center">
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.3em]">
              © 2026 Happy Wedding Organizer Bogor. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

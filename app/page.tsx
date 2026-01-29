import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PackageSection from "@/components/PackageSection";
import GallerySection from "@/components/GallerySection";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* 1. Navigasi Utama */}
      <Navbar />

      {/* 2. Banner  */}
      <Hero />

      {/* 3. Deksripsi singkat happy wedding Bogor (About Us)  */}
      <About />

      {/* 4. Daftar Harga & Modal Detail */}
      <PackageSection />

      {/* 5. Galeri Foto Dekorasi & Catering */}
      <GallerySection />

      {/* 6. Maps & Alamat (Ciherang, Bogor) */}
      <Location />

      {/* 7. Sosmed & Copyright */}
      <Footer />
    </main>
  );
}

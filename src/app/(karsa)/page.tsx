"use client"

import { Beranda } from "@/components/landing/beranda/Beranda"
import DotPattern from "@/components/ui/DotPattern"
import AboutKarsa from "@/components/landing/about/about-karsa/About"
import VisiMisi from "@/components/landing/about/visimisi-karsa/Visimisi"
import ProgramKarsa from "@/components/landing/about/program/program"
import DampakKarsa from "@/components/landing/about/dampak-karsa/Dampak"
import GallerySection from "@/components/landing/galeri/Galeri"
import LatestActivities from "@/components/landing/kegiatan/Kegiatan"

export default function LandingPage() {
  return (
    <main>
      {/* Beranda */}
      <section id="beranda" className="relative overflow-hidden py-5 pb-10">
        <DotPattern />
        <div className="relative z-10">
          <Beranda />
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-10 md:py-20">
        <div>
          <AboutKarsa />
        </div>
      </section>
      <section id="visimisi" className="py-10 md:py-20">
        <div>
          <VisiMisi />
        </div>
      </section>
      <section id="program" className="py-10 md:py-20">
        <div>
          <ProgramKarsa />
        </div>
      </section>
      <section id="dampak" className="py-10 md:py-20">
        <div>
          <DampakKarsa />
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-10 md:py-20">
        <div>
          <GallerySection />
        </div>
      </section>

      {/* Kegiatan */}
      <section id="galeri" className="py-10 md:py-20">
        <div>
          <LatestActivities />
        </div>
      </section>

      {/* Hubungi Kami */}
      <section id="hubungi"></section>
    </main>
  )
}
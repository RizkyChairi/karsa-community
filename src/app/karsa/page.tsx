"use client"

import { Beranda } from "@/components/landing/beranda/Beranda"
import DotPattern from "@/components/ui/DotPattern"
import AboutKarsa from "@/components/landing/about/about-karsa/About"
import ScrollReavel from "@/components/ui/ScrollReveal"


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
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri"></section>

      {/* Hubungi Kami */}
      <section id="hubungi"></section>
    </main>
  )
}
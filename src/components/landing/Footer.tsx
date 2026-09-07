"use client"

import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"

const navigation = [
  ["Beranda", "/"],
  ["Tentang Kami", "/tentang-kami"],
  ["Kegiatan", "/kegiatan"],
  ["Galeri", "/galeri"],
]

const information = [
  ["Hubungi Kami", "/hubungi-kami"],
  ["Program", "/kegiatan"],
  ["Dokumentasi", "/galeri"],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-karsa-black text-white">

      {/* Background Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-1rem] select-none overflow-hidden"
      >
        <p className="translate-y-5 whitespace-nowrap text-center text-[23vw] font-black leading-none tracking-[-0.09em] text-white/[0.035]">
          KARSA
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 md:px-10 md:pt-20">


      </div>
    </footer>
  )
}
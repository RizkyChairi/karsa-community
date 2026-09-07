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

        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-9 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
              Komunitas Karsa
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.05]">
              Bersama menciptakan
              <br />
              <span className="text-white/40">
                dampak yang berarti.
              </span>
            </h2>
          </div>

          <Link
            href="/hubungi-kami"
            className="group flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm text-white/75 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
          >
            Mari Terhubung

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* Content */}
        <div className="grid gap-10 pb-14 md:grid-cols-[1.7fr_1fr_1fr_1fr] md:gap-8">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-2xl font-bold tracking-tight"
            >
              Komunitas
              <span className="text-white/40 transition-colors group-hover:text-white">
                Karsa
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
              Bersama menciptakan ruang untuk bergerak, berbagi, dan
              memberikan dampak nyata bagi lingkungan dan masyarakat.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/45">
              <MapPin className="h-3.5 w-3.5" />
              Bogor, Jawa Barat
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Navigasi
            </p>

            <div className="flex flex-col gap-3.5">
              {navigation.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-white"
                >
                  {label}

                  <ArrowUpRight
                    className="h-3.5 w-3.5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Informasi */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Informasi
            </p>

            <div className="flex flex-col gap-3.5">
              {information.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-white"
                >
                  {label}

                  <ArrowUpRight
                    className="h-3.5 w-3.5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Tentang */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Tentang Karsa
            </p>

            <p className="max-w-xs text-sm leading-6 text-white/45">
              Komunitas yang hadir untuk membangun ruang kolaborasi,
              kepedulian, dan aksi nyata bagi lingkungan serta masyarakat.
            </p>

            <Link
              href="/tentang-kami"
              className="group mt-5 flex w-fit items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              Kenali Kami

              <ArrowUpRight
                className="h-3.5 w-3.5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative flex flex-col gap-4 border-t border-white/10 py-5 text-xs text-white/30 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Komunitas Karsa. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="transition-colors hover:text-white/70"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white/70"
            >
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { useState } from "react"

import ScrollReveal from "@/components/ui/ScrollReveal"
import { galleries } from "@/constants/Galleries"

const accentColors = [
  {
    dot: "bg-karsa-green",
    text: "text-karsa-primary",
    border: "group-hover:border-karsa-green",
    arrow: "group-hover:bg-karsa-green",
  },
  {
    dot: "bg-karsa-yellow",
    text: "text-karsa-black",
    border: "group-hover:border-karsa-yellow",
    arrow: "group-hover:bg-karsa-yellow",
  },
  {
    dot: "bg-karsa-purple",
    text: "text-karsa-purple",
    border: "group-hover:border-karsa-purple",
    arrow: "group-hover:bg-karsa-purple",
  },
  {
    dot: "bg-karsa-blue",
    text: "text-karsa-blue",
    border: "group-hover:border-karsa-blue",
    arrow: "group-hover:bg-karsa-blue",
  },
]

const categories = ["Semua", "Lingkungan", "Sosial", "Komunitas", "Generasi Muda"]

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filteredGalleries =
    activeCategory === "Semua"
      ? galleries
      : galleries.filter((gallery) => gallery.category === activeCategory)

  return (
    <main className="min-h-screen bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal direction="up" duration={0.7}>
          <header className="mb-10 sm:mb-14">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-medium text-karsa-black/45">
                  Galeri Karsa
                </p>
                <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-karsa-black sm:text-5xl md:text-6xl">
                  Cerita dari
                  <br />
                  setiap langkah
                  <span className="text-karsa-green">.</span>
                </h1>
              </div>

              <p className="max-w-sm text-sm leading-7 text-karsa-black/50 sm:text-base">
                Dokumentasi perjalanan Karsa dalam bergerak bersama komunitas, relawan, dan masyarakat.
              </p>
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.6}>
          <div className="mb-12 flex flex-wrap items-center gap-1 border-b border-karsa-black/10 pb-5">
            {categories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                    ? "bg-karsa-black text-white"
                    : "text-karsa-black/45 hover:bg-karsa-black/5 hover:text-karsa-black"
                    }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {filteredGalleries.map((gallery, index) => {
            const accent = accentColors[index % accentColors.length]

            return (
              <ScrollReveal
                key={gallery.id}
                direction="up"
                duration={0.6}
                delay={index * 0.04}
              >
                <Link href={`/galeri/${gallery.slug}`} className="group block">
                  <article>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={gallery.image}
                        alt={gallery.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="pt-4">
                      <div className="mb-3 flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                        <span className={`text-[11px] font-semibold uppercase tracking-[0.08em] ${accent.text}`}>
                          {gallery.category}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-5">
                        <h2 className="max-w-[85%] text-lg font-semibold leading-snug tracking-tight text-karsa-black sm:text-xl">
                          {gallery.title}
                          <span className="text-karsa-green">.</span>
                        </h2>

                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-karsa-black/10 text-karsa-black/45 transition-all duration-300 ${accent.border} ${accent.arrow} group-hover:text-karsa-black`}>
                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.7}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-xs text-karsa-black/40">
                        <MapPin size={12} strokeWidth={1.8} />
                        <span>{gallery.location}</span>
                        <span className="text-karsa-black/20">•</span>
                        <span>{gallery.date}</span>
                      </div>

                      <p className="mt-3 line-clamp-2 max-w-[90%] text-sm leading-6 text-karsa-black/48">
                        {gallery.shortDescription}
                      </p>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        {filteredGalleries.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-karsa-black/45">
              Belum ada kegiatan dalam kategori ini.
            </p>
          </div>
        )}

        <ScrollReveal direction="up" duration={0.7}>
          <section className="mt-20 border-t border-karsa-black/10 pt-8 sm:mt-24">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-karsa-black">
                  Setiap kegiatan meninggalkan jejak.
                </p>
                <p className="mt-1 text-sm text-karsa-black/45">
                  Dan setiap jejak menjadi bagian dari perjalanan Karsa.
                </p>
              </div>

              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-karsa-black transition-colors duration-300 hover:text-karsa-primary"
              >
                Kembali ke beranda
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  )
}
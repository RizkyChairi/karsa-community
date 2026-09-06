"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react"

import ScrollReveal from "@/components/ui/ScrollReveal"
import { galleries } from "@/constants/Galleries"

// Warna aksen
const accentColors = [
  { dot: "bg-karsa-green", text: "text-karsa-primary" },
  { dot: "bg-karsa-yellow", text: "text-karsa-black" },
  { dot: "bg-karsa-purple", text: "text-karsa-purple" },
  { dot: "bg-karsa-blue", text: "text-karsa-blue" },
]

export default async function GalleryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const galleryId = resolvedParams.id

  const gallery = galleries.find((item) => item.slug === galleryId)

  if (!gallery) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="text-center">
          <div className="mx-auto mb-5 h-2 w-2 rounded-full bg-karsa-green" />
          <h1 className="text-2xl font-semibold text-karsa-black">Galeri tidak ditemukan.</h1>
          <Link href="/galeri" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-karsa-primary">
            <ArrowLeft size={16} />
            Kembali ke galeri
          </Link>
        </div>
      </main>
    )
  }

  const currentIndex = galleries.findIndex((item) => item.id === gallery.id)
  const accent = accentColors[currentIndex % accentColors.length]
  const nextGallery = galleries[(currentIndex + 1) % galleries.length]

  return (
    <main className="min-h-screen bg-white text-karsa-black">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

        <ScrollReveal direction="up" duration={0.5}>
          <div className="flex items-center justify-between">
            <Link
              href="/galeri"
              className="group inline-flex items-center gap-2 text-sm font-medium text-karsa-black/40 hover:text-karsa-primary"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Semua Galeri
            </Link>
            <span className="text-xs text-karsa-black/30">
              {String(currentIndex + 1).padStart(2, "0")} / {String(galleries.length).padStart(2, "0")}
            </span>
          </div>
        </ScrollReveal>

        <section className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <ScrollReveal direction="up" duration={0.8} className="lg:col-span-7">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                  <span className={`text-[11px] font-bold uppercase tracking-[0.22em] ${accent.text}`}>
                    {gallery.category}
                  </span>
                </div>
                <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
                  {gallery.title}
                  <span className="text-karsa-green">.</span>
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" duration={0.7} className="lg:col-span-5">
              <p className="max-w-xl text-[15px] leading-relaxed text-gray-500 md:text-base">
                {gallery.shortDescription}
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-y border-karsa-black/10 py-4 text-xs text-karsa-black/40">
            <div className="flex items-center gap-2">
              <CalendarDays size={14} />
              <span>{gallery.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{gallery.location}</span>
            </div>
            <span>{gallery.images.length} dokumentasi</span>
          </div>
        </section>

        <section className="mt-10 sm:mt-14">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={gallery.image}
              alt={gallery.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-karsa-black/30">
                Tentang album
              </p>
              <div className={`mt-4 h-1 w-8 ${accent.dot}`} />
            </div>
            <div>
              <p className="max-w-xl text-[15px] leading-relaxed text-gray-500 md:text-base">
                {gallery.description}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 sm:mt-28">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-karsa-black/30">
                Dokumentasi
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Momen dalam perjalanan<span className="text-karsa-green">.</span>
              </h2>
            </div>
            <span className="text-xs text-karsa-black/30">{gallery.images.length} foto</span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {gallery.images.map((image, index) => {
              const isLarge = index === 0 || index === 3 || index === 6

              return (
                <figure key={image} className={isLarge ? "sm:col-span-2" : "sm:col-span-1"}>
                  <div className={`relative overflow-hidden rounded-2xl bg-gray-100 ${isLarge ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                    <Image
                      src={image}
                      alt={`${gallery.title} - foto ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-2 flex justify-between px-1 text-[10px] text-karsa-black/25">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{gallery.title}</span>
                  </figcaption>
                </figure>
              )
            })}
          </div>
        </section>

        <section className="mt-20 border-y border-karsa-black/10 sm:mt-28">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            <div className="border-r border-b border-karsa-black/10 p-5 sm:border-b-0 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-karsa-black/30">Kategori</p>
              <p className="mt-2 text-sm font-medium">{gallery.category}</p>
            </div>
            <div className="border-b border-karsa-black/10 p-5 sm:border-b-0 sm:border-r sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-karsa-black/30">Lokasi</p>
              <p className="mt-2 text-sm font-medium">{gallery.location}</p>
            </div>
            <div className="border-r border-karsa-black/10 p-5 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-karsa-black/30">Tanggal</p>
              <p className="mt-2 text-sm font-medium">{gallery.date}</p>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-karsa-black/30">Peserta</p>
              <p className="mt-2 text-sm font-medium">{gallery.participants}</p>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-karsa-black/10 pt-10 sm:mt-28">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-karsa-black/30">
                Album berikutnya
              </p>
              <Link href={`/galeri/${nextGallery.slug}`} className="group mt-3 block">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {nextGallery.title}
                  <span className="text-karsa-green">.</span>
                </h2>
                <div className="mt-3 flex items-center gap-2 text-sm text-karsa-black/40 group-hover:text-karsa-primary">
                  <span>Lihat dokumentasi</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <Link href="/galeri" className="inline-flex items-center gap-2 text-sm font-semibold text-karsa-primary">
              Semua galeri
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}
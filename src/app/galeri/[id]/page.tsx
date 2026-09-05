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

type PageProps = {
  params: Promise<{
    id: string
  }>
}

const accentColors = [
  {
    dot: "bg-karsa-green",
    text: "text-karsa-primary",
  },
  {
    dot: "bg-karsa-yellow",
    text: "text-karsa-black",
  },
  {
    dot: "bg-karsa-purple",
    text: "text-karsa-purple",
  },
  {
    dot: "bg-karsa-blue",
    text: "text-karsa-blue",
  },
]

export default async function GalleryDetailPage({ params, }: PageProps) {
  const { id } = await params

  const gallery = galleries.find(
    (item) => item.slug === id
  )

  if (!gallery) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="text-center">
          <div className="mx-auto mb-5 h-2 w-2 rounded-full bg-karsa-green" />

          <h1 className="text-2xl font-semibold tracking-tight text-karsa-black">
            Galeri tidak ditemukan.
          </h1>

          <Link
            href="/galeri"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-karsa-primary"
          >
            <ArrowLeft size={16} />
            Kembali ke galeri
          </Link>
        </div>
      </main>
    )
  }

  const originalIndex = galleries.findIndex(
    (item) => item.id === gallery.id
  )

  const accent =
    accentColors[originalIndex % accentColors.length]

  const nextGallery =
    galleries[(originalIndex + 1) % galleries.length]

  return (
    <main className="min-h-screen bg-white text-karsa-black">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

        <ScrollReveal
          direction="up"
          duration={0.5}
        >
          <div className="flex items-center justify-between">

            <Link
              href="/galeri"
              className="group inline-flex items-center gap-2 text-sm font-medium text-karsa-black/40 transition-colors hover:text-karsa-primary"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Semua Galeri
            </Link>

            <span className="text-xs text-karsa-black/30">
              {String(originalIndex + 1).padStart(2, "0")} /{" "}
              {String(galleries.length).padStart(2, "0")}
            </span>

          </div>
        </ScrollReveal>


        <section className="mt-16 sm:mt-24">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-20">

            <ScrollReveal
              direction="up"
              duration={0.8}
            >
              <div>

                <div className="mb-5 flex items-center gap-2">

                  <span
                    className={`h-2 w-2 rounded-full ${accent.dot}`}
                  />

                  <span
                    className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${accent.text}`}
                  >
                    {gallery.category}
                  </span>

                </div>

                <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[76px]">
                  {gallery.title}
                  <span className="text-karsa-green">
                    .
                  </span>
                </h1>

              </div>
            </ScrollReveal>


            <ScrollReveal
              direction="up"
              duration={0.7}
              delay={0.1}
            >
              <div className="max-w-sm">

                <p className="text-sm leading-7 text-karsa-black/50 sm:text-base sm:leading-8">
                  {gallery.shortDescription}
                </p>

              </div>
            </ScrollReveal>

          </div>

          <ScrollReveal
            direction="up"
            duration={0.6}
            delay={0.15}
          >
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-karsa-black/10 py-4">

              <div className="flex items-center gap-2 text-xs text-karsa-black/40">
                <CalendarDays
                  size={14}
                  strokeWidth={1.7}
                />

                <span>{gallery.date}</span>
              </div>


              <div className="flex items-center gap-2 text-xs text-karsa-black/40">
                <MapPin
                  size={14}
                  strokeWidth={1.7}
                />

                <span>{gallery.location}</span>
              </div>


              <span className="text-xs text-karsa-black/25">
                {gallery.images.length} dokumentasi
              </span>

            </div>
          </ScrollReveal>

        </section>

        <ScrollReveal
          direction="up"
          duration={0.9}
          delay={0.1}
        >
          <section className="mt-10 sm:mt-14">

            <div className="relative aspect-[16/8] overflow-hidden rounded-xl bg-[#f3f3f1]">

              <Image
                src={gallery.image}
                alt={gallery.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />

            </div>

          </section>
        </ScrollReveal>


        <section className="mt-16 sm:mt-24">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr] md:gap-16">

            <ScrollReveal
              direction="up"
              duration={0.6}
            >
              <div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-karsa-black/30">
                  Tentang album
                </p>

                <div
                  className={`mt-4 h-1 w-8 ${accent.dot}`}
                />

              </div>
            </ScrollReveal>


            <ScrollReveal
              direction="up"
              duration={0.7}
              delay={0.1}
            >
              <div className="max-w-3xl">

                <p className="text-lg leading-8 text-karsa-black/70 sm:text-xl sm:leading-9">
                  {gallery.description}
                </p>

              </div>
            </ScrollReveal>

          </div>

        </section>


        <section className="mt-20 sm:mt-28">

          <ScrollReveal
            direction="up"
            duration={0.6}
          >
            <div className="mb-8 flex items-end justify-between">

              <div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-karsa-black/30">
                  Dokumentasi
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Momen dalam
                  <br className="sm:hidden" />
                  perjalanan.
                  <span className="text-karsa-green">
                    .
                  </span>
                </h2>

              </div>


              <span className="text-xs text-karsa-black/30">
                {gallery.images.length} foto
              </span>

            </div>
          </ScrollReveal>


          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

            {gallery.images.map(
              (image, index) => {

                const isLarge =
                  index === 0 ||
                  index === 3 ||
                  index === 6

                return (
                  <ScrollReveal
                    key={image}
                    direction="up"
                    duration={0.7}
                    delay={index * 0.04}
                  >
                    <figure
                      className={
                        isLarge
                          ? "sm:col-span-2"
                          : "sm:col-span-1"
                      }
                    >

                      <div
                        className={`
                          relative overflow-hidden rounded-xl
                          bg-[#f3f3f1]
                          ${isLarge
                            ? "aspect-[16/8]"
                            : "aspect-[4/3]"
                          }
                        `}
                      >

                        <Image
                          src={image}
                          alt={`${gallery.title} - foto ${index + 1}`}
                          fill
                          sizes={
                            isLarge
                              ? "(max-width: 640px) 100vw, 100vw"
                              : "(max-width: 640px) 100vw, 50vw"
                          }
                          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
                        />

                      </div>


                      <figcaption className="mt-2 flex items-center justify-between px-1">

                        <span className="text-[10px] font-medium text-karsa-black/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-[10px] text-karsa-black/25">
                          {gallery.title}
                        </span>

                      </figcaption>

                    </figure>
                  </ScrollReveal>
                )
              }
            )}

          </div>

        </section>


        {/* =====================================================
            ALBUM INFO
        ===================================================== */}

        <section className="mt-20 border-y border-karsa-black/10 sm:mt-28">

          <div className="grid grid-cols-2 sm:grid-cols-4">

            <div className="border-r border-b border-karsa-black/10 p-5 sm:border-b-0 sm:p-6">

              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-karsa-black/30">
                Kategori
              </p>

              <p className="mt-2 text-sm font-medium">
                {gallery.category}
              </p>

            </div>


            <div className="border-b border-karsa-black/10 p-5 sm:border-b-0 sm:border-r sm:p-6">

              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-karsa-black/30">
                Lokasi
              </p>

              <p className="mt-2 text-sm font-medium">
                {gallery.location}
              </p>

            </div>


            <div className="border-r border-karsa-black/10 p-5 sm:p-6">

              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-karsa-black/30">
                Tanggal
              </p>

              <p className="mt-2 text-sm font-medium">
                {gallery.date}
              </p>

            </div>


            <div className="p-5 sm:p-6">

              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-karsa-black/30">
                Peserta
              </p>

              <p className="mt-2 text-sm font-medium">
                {gallery.participants}
              </p>

            </div>

          </div>

        </section>

        <ScrollReveal
          direction="up"
          duration={0.7}
        >
          <section className="mt-20 border-t border-karsa-black/10 pt-10 sm:mt-28">

            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-karsa-black/30">
                  Album berikutnya
                </p>

                <Link
                  href={`/galeri/${nextGallery.slug}`}
                  className="group mt-3 block"
                >

                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {nextGallery.title}
                    <span className="text-karsa-green">
                      .
                    </span>
                  </h2>

                  <div className="mt-3 flex items-center gap-2 text-sm text-karsa-black/40 transition-colors group-hover:text-karsa-primary">

                    <span>
                      Lihat dokumentasi
                    </span>

                    <ArrowRight
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </div>

                </Link>

              </div>


              <Link
                href="/galeri"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-karsa-primary"
              >
                Semua galeri

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </section>
        </ScrollReveal>


        <div className="pb-10 sm:pb-16" />

      </div>
    </main>
  )
}
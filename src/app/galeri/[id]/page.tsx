import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Check,
} from "lucide-react"
import { notFound } from "next/navigation"

import ScrollReveal from "@/components/ui/ScrollReveal"
import { galleries } from "@/constants/Galleries"

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function GaleriDetail({ params }: PageProps) {
  const { id } = await params

  const gallery = galleries.find((item) => item.slug === id)

  if (!gallery) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* =====================================================
            BACK
        ===================================================== */}
        <ScrollReveal direction="up" duration={0.5}>
          <Link
            href="/galeri"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-karsa-black/50 transition-colors hover:text-karsa-primary"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Kembali ke galeri
          </Link>
        </ScrollReveal>


        {/* =====================================================
            HEADER
        ===================================================== */}
        <ScrollReveal direction="up" duration={0.7}>
          <header className="max-w-4xl">

            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium sm:text-sm">
              <span className="text-karsa-primary">
                {gallery.category}
              </span>

              <span className="text-karsa-black/20">
                /
              </span>

              <span className="text-karsa-black/45">
                {gallery.location}
              </span>

              <span className="text-karsa-black/20">
                /
              </span>

              <span className="text-karsa-black/45">
                {gallery.date}
              </span>
            </div>

            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight text-karsa-black sm:text-4xl md:text-[48px]">
              {gallery.title}
              <span className="text-karsa-green">.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-karsa-black/55 sm:text-base sm:leading-8">
              {gallery.shortDescription}
            </p>

          </header>
        </ScrollReveal>


        {/* =====================================================
            MAIN IMAGE
        ===================================================== */}
        <ScrollReveal
          direction="up"
          duration={0.8}
          delay={0.1}
        >
          <div className="mt-8 overflow-hidden rounded-2xl bg-karsa-primary/5 sm:mt-10">
            <div className="relative aspect-[16/8]">
              <Image
                src={gallery.image}
                alt={gallery.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover transition-transform duration-700 hover:scale-[1.015]"
              />
            </div>
          </div>
        </ScrollReveal>


        {/* =====================================================
            QUICK INFO
        ===================================================== */}
        <ScrollReveal
          direction="up"
          duration={0.6}
          delay={0.15}
        >
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">

            {/* DATE */}
            <div className="rounded-xl bg-karsa-yellow p-4 sm:p-5">
              <CalendarDays
                size={19}
                strokeWidth={1.7}
                className="mb-6 text-karsa-black"
              />

              <p className="text-[11px] font-medium uppercase tracking-wider text-karsa-black/50">
                Tanggal
              </p>

              <p className="mt-1 text-sm font-semibold text-karsa-black">
                {gallery.date}
              </p>
            </div>


            {/* LOCATION */}
            <div className="rounded-xl bg-karsa-blue p-4 text-white sm:p-5">
              <MapPin
                size={19}
                strokeWidth={1.7}
                className="mb-6"
              />

              <p className="text-[11px] font-medium uppercase tracking-wider text-white/60">
                Lokasi
              </p>

              <p className="mt-1 text-sm font-semibold">
                {gallery.location}
              </p>
            </div>


            {/* PARTICIPANTS */}
            <div className="rounded-xl bg-karsa-purple p-4 text-white sm:p-5">
              <Users
                size={19}
                strokeWidth={1.7}
                className="mb-6"
              />

              <p className="text-[11px] font-medium uppercase tracking-wider text-white/60">
                Peserta
              </p>

              <p className="mt-1 text-sm font-semibold">
                {gallery.participants}
              </p>
            </div>


            {/* TIME */}
            <div className="rounded-xl bg-karsa-green p-4 sm:p-5">
              <Clock3
                size={19}
                strokeWidth={1.7}
                className="mb-6 text-karsa-black"
              />

              <p className="text-[11px] font-medium uppercase tracking-wider text-karsa-black/50">
                Waktu
              </p>

              <p className="mt-1 text-sm font-semibold text-karsa-black">
                {gallery.time}
              </p>
            </div>

          </div>
        </ScrollReveal>


        {/* =====================================================
            STORY
        ===================================================== */}
        <ScrollReveal
          direction="up"
          duration={0.7}
          delay={0.1}
        >
          <section className="mt-14 sm:mt-20">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr] md:gap-12">

              <div>
                <p className="text-sm font-semibold text-karsa-primary">
                  Tentang Kegiatan
                </p>

                <div className="mt-3 h-1 w-10 bg-karsa-green" />
              </div>

              <div className="max-w-2xl">
                <p className="text-sm leading-7 text-karsa-black/70 sm:text-base sm:leading-8">
                  {gallery.description}
                </p>
              </div>

            </div>

          </section>
        </ScrollReveal>


        {/* =====================================================
            IMPACT
        ===================================================== */}
        <ScrollReveal
          direction="up"
          duration={0.7}
          delay={0.1}
        >
          <section className="mt-14 sm:mt-16">

            <div className="grid overflow-hidden rounded-2xl bg-karsa-primary md:grid-cols-[0.7fr_1.3fr]">

              <div className="bg-karsa-green p-6 sm:p-8">
                <p className="text-sm font-semibold text-karsa-black">
                  Dampak
                </p>

                <p className="mt-10 text-4xl font-black tracking-tight text-karsa-black sm:text-5xl">
                  Nyata<span className="text-karsa-primary">.</span>
                </p>
              </div>

              <div className="p-6 text-white sm:p-8 md:p-10">
                <p className="max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  {gallery.impact}
                </p>
              </div>

            </div>

          </section>
        </ScrollReveal>


        {/* =====================================================
            ACTIVITIES
        ===================================================== */}
        <ScrollReveal
          direction="up"
          duration={0.7}
          delay={0.1}
        >
          <section className="mt-14 sm:mt-20">

            <div className="mb-6 flex items-end justify-between gap-4">

              <div>
                <p className="text-sm font-semibold text-karsa-black/45">
                  Aktivitas
                </p>

                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-karsa-black sm:text-3xl">
                  Yang kami lakukan
                  <span className="text-karsa-yellow">.</span>
                </h2>
              </div>

              <span className="hidden text-xs text-karsa-black/35 sm:block">
                {gallery.activities.length} aktivitas
              </span>

            </div>


            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

              {gallery.activities.map((activity, index) => (
                <div
                  key={activity}
                  className="group flex items-center gap-4 rounded-xl border border-karsa-black/10 px-4 py-4 transition-colors duration-300 hover:border-karsa-primary/30 hover:bg-karsa-primary/[0.03]"
                >

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-karsa-green text-xs font-bold text-karsa-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="flex-1 text-sm font-medium text-karsa-black">
                    {activity}
                  </p>

                  <Check
                    size={16}
                    strokeWidth={2}
                    className="text-karsa-primary opacity-30 transition-opacity duration-300 group-hover:opacity-100"
                  />

                </div>
              ))}

            </div>

          </section>
        </ScrollReveal>


        {/* =====================================================
            DOCUMENTATION
        ===================================================== */}
        {gallery.images?.length > 0 && (
          <ScrollReveal
            direction="up"
            duration={0.7}
            delay={0.1}
          >
            <section className="mt-14 sm:mt-20">

              <div className="mb-6 flex items-end justify-between">

                <div>
                  <p className="text-sm font-semibold text-karsa-black/45">
                    Dokumentasi
                  </p>

                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-karsa-black sm:text-3xl">
                    Momen kegiatan
                    <span className="text-karsa-purple">.</span>
                  </h2>
                </div>

                <span className="text-xs text-karsa-black/40">
                  {gallery.images.length} foto
                </span>

              </div>


              <div className="grid grid-cols-2 gap-3">

                {gallery.images.map((image, index) => (

                  <div
                    key={image}
                    className={`relative overflow-hidden rounded-xl bg-karsa-black/5 ${index === 0
                      ? "col-span-2 aspect-[16/8]"
                      : "aspect-[4/3]"
                      }`}
                  >

                    <Image
                      src={image}
                      alt={`${gallery.title} - dokumentasi ${index + 1}`}
                      fill
                      sizes={
                        index === 0
                          ? "100vw"
                          : "(max-width: 640px) 50vw, 33vw"
                      }
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />

                  </div>

                ))}

              </div>

            </section>
          </ScrollReveal>
        )}


        {gallery.partners?.length > 0 && (
          <ScrollReveal
            direction="up"
            duration={0.7}
            delay={0.1}
          >
            <section className="mt-14 border-t border-karsa-black/10 pt-8 sm:mt-20">

              <div className="grid grid-cols-1 gap-5 md:grid-cols-[180px_1fr] md:gap-10">

                <div>
                  <p className="text-sm font-semibold text-karsa-black/45">
                    Kolaborator
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">

                  {gallery.partners.map((partner, index) => (
                    <span
                      key={partner}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${index % 4 === 0
                        ? "bg-karsa-green text-karsa-black"
                        : index % 4 === 1
                          ? "bg-karsa-blue text-white"
                          : index % 4 === 2
                            ? "bg-karsa-purple text-white"
                            : "bg-karsa-yellow text-karsa-black"
                        }`}
                    >
                      {partner}
                    </span>
                  ))}

                </div>

              </div>

            </section>
          </ScrollReveal>
        )}


        {/* =====================================================
            FOOTER CTA
        ===================================================== */}
        <ScrollReveal
          direction="up"
          duration={0.6}
          delay={0.1}
        >
          <div className="mt-14 border-t border-karsa-black/10 pt-8 sm:mt-20">

            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

              <div>
                <p className="text-sm font-semibold text-karsa-black">
                  Masih ingin melihat kegiatan lainnya?
                </p>

                <p className="mt-1 text-xs text-karsa-black/45">
                  Lihat seluruh perjalanan Karsa.
                </p>
              </div>

              <Link
                href="/galeri"
                className="group flex items-center gap-2 text-sm font-medium text-karsa-black"
              >
                <span className="border-b border-karsa-black pb-1">
                  Lihat semua galeri
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </main>
  )
}
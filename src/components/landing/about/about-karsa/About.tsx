"use client"

import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { Camera, UsersRound } from "lucide-react"

const values = [
  {
    number: "01",
    title: "Peduli",
    description: "Peka terhadap lingkungan dan sesama.",
    bg: "bg-[#9BDB35]",
    dark: false,
  },
  {
    number: "02",
    title: "Kolaborasi",
    description: "Bergerak bersama untuk tujuan yang berarti.",
    bg: "bg-[#5076FF]",
    dark: true,
  },
  {
    number: "03",
    title: "Berbagi",
    description: "Memberikan manfaat melalui aksi nyata.",
    bg: "bg-[#B764FF]",
    dark: true,
  },
  {
    number: "04",
    title: "Dampak",
    description: "Menciptakan perubahan yang berkelanjutan.",
    bg: "bg-[#ECAB1D]",
    dark: false,
  },
]

export default function AboutKarsa() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 md:space-y-20">
      {/* Heading */}
      <div className="heading-title flex flex-col items-center justify-center text-center font-semibold">
        <ScrollReveal delay={0.15} direction="up" duration={0.8}>
          <h2 className="text-3xl leading-snug tracking-tight md:text-4xl">
            Bersama Ciptakan
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3} direction="up" duration={0.8}>
          <h2 className="text-2xl leading-normal tracking-tight md:text-3xl">
            Perubahan yang Berarti
            <span className="text-karsa-green">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.45} direction="up" duration={0.8}>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-gray-500 md:text-base">
            Sebuah komunitas anak muda yang fokus pada lingkungan, sosial,
            dan kolaborasi bersama.
          </p>
        </ScrollReveal>
      </div>

      {/* Tentang Karsa */}
      <div className="grid items-center gap-12 md:gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Images */}
        <ScrollReveal direction="left" duration={0.8} className="lg:col-span-5">
          <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
            <div className="w-[58%]">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/document-tentang-1.webp"
                  alt="Aktivitas lingkungan Karsa bersama komunitas"
                  fill
                  sizes="(min-width: 1024px) 30vw, 55vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-3 flex items-center gap-1.5">
                <Camera
                  size={14}
                  strokeWidth={1.8}
                  className="shrink-0 text-karsa-primary"
                />

                <p className="text-sm font-semibold text-karsa-black">
                  Kegiatan
                </p>
              </div>

              <p className="mt-0.5 pl-6 text-xs text-gray-400">
                Dokumentasi Karsa
              </p>
            </div>

            <div className="w-[42%] pt-8 sm:pt-12 lg:pt-14">
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/document-tentang-2.webp"
                  alt="Kegiatan bersama komunitas Karsa"
                  fill
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-3 flex items-center gap-1.5">
                <UsersRound
                  size={14}
                  strokeWidth={1.8}
                  className="shrink-0 text-karsa-primary"
                />

                <p className="text-sm font-semibold text-karsa-black">
                  Komunitas
                </p>
              </div>

              <p className="mt-0.5 pl-6 text-xs text-gray-400">
                Bergerak bersama
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="right" duration={0.8}>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-karsa-primary">
              Tentang Karsa
            </p>

            <p className="mt-4 max-w-xl text-lg font-semibold leading-snug tracking-tight text-karsa-black md:text-xl">
              Karsa hadir sebagai ruang bagi generasi muda untuk bergerak
              bersama dalam menjawab persoalan sosial dan lingkungan di
              sekitar kita.
            </p>

            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-gray-500 md:text-base">
              Karsa mengajak generasi muda untuk belajar, berkontribusi,
              berbagi, dan menciptakan perubahan melalui berbagai kegiatan
              sosial dan lingkungan.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Nilai Karsa */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        {values.map((item, index) => (
          <ScrollReveal
            key={item.number}
            direction="up"
            duration={0.7}
            delay={0.1 + index * 0.08}
            className="h-full"
          >
            <div
              className={`group flex h-full flex-col justify-between rounded-xl p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5 ${item.bg}`}
            >
              <span
                className={`text-3xl font-black tracking-tighter transition-colors duration-300 sm:text-4xl lg:text-5xl ${item.dark
                  ? "text-white"
                  : "text-black group-hover:text-karsa-primary"
                  }`}
              >
                {item.number}
              </span>

              <div className="mt-6 sm:mt-8">
                <h3
                  className={`text-base font-bold transition-colors duration-300 sm:text-lg ${item.dark
                    ? "text-white"
                    : "text-black group-hover:text-karsa-primary"
                    }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-1 text-xs leading-relaxed sm:text-sm ${item.dark ? "text-white/90" : "text-black/70"
                    }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

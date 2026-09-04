"use client"

import {
  Trees,
  HandHeart,
  UsersRound,
  Users,
  ArrowRight,
} from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function ProgramKarsa() {
  const programs = [
    {
      number: "01",
      title: "Aksi Lingkungan",
      label: "Lingkungan",
      icon: Trees,
      description:
        "Kegiatan untuk menjaga dan merawat lingkungan melalui aksi bersih lingkungan, penanaman pohon, edukasi sampah, serta menjaga ruang publik.",
    },
    {
      number: "02",
      title: "Aksi Sosial",
      label: "Sosial",
      icon: HandHeart,
      description:
        "Kegiatan sosial untuk berbagi, membantu, dan mendukung masyarakat sekitar melalui aksi yang memberikan manfaat secara langsung.",
    },
    {
      number: "03",
      title: "Gerakan Generasi Muda",
      label: "Generasi Muda",
      icon: UsersRound,
      description:
        "Ruang bagi generasi muda untuk belajar, menjadi relawan, berkontribusi, mengembangkan diri, dan terlibat dalam kegiatan sosial maupun lingkungan.",
    },
    {
      number: "04",
      title: "Kolaborasi Komunitas",
      label: "Komunitas",
      icon: Users,
      description:
        "Membangun kerja sama bersama komunitas, organisasi, dan kelompok masyarakat untuk menciptakan gerakan yang lebih luas dan berdampak berkelanjutan.",
    },
  ]

  return (
    <div className="space-y-14 md:space-y-16">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal direction="up" duration={0.8}>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Mengubah Kepedulian
          </h2>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Menjadi Aksi<span className="text-karsa-green">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.8} delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-gray-500 md:text-base">
            Program Karsa menjadi ruang untuk mengubah kepedulian terhadap
            lingkungan dan sesama menjadi langkah nyata yang memberikan manfaat.
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-5xl">
        <ScrollReveal direction="up" duration={0.8} delay={0.1}>
          <div className="border-t border-gray-200">
            {programs.map((program, index) => {
              const Icon = program.icon

              return (
                <ScrollReveal
                  key={program.number}
                  direction="up"
                  duration={0.7}
                  delay={0.1 + index * 0.08}
                >
                  <div className="group border-b border-gray-100">
                    <div className="grid grid-cols-[auto_1fr_auto] items-start gap-x-4 py-7 md:gap-x-8 md:py-10 lg:gap-x-10">
                      {/* NUMBER */}
                      <span className="w-8 pt-1 text-sm font-medium tabular-nums text-gray-300 transition-colors duration-300 group-hover:text-karsa-primary md:w-14 md:text-lg">
                        {program.number}
                      </span>

                      {/* ICON + CONTENT */}
                      <div className="flex min-w-0 items-start gap-3 md:gap-5">
                        <div className="mt-0.5 shrink-0 text-karsa-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                          <Icon size={20} strokeWidth={1.7} />
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <h3 className="text-lg font-semibold leading-snug tracking-tight text-karsa-black transition-colors duration-300 group-hover:text-karsa-primary md:text-[22px]">
                              {program.title}
                            </h3>

                            <span className="text-[11px] font-medium tracking-[0.18em] text-gray-400 uppercase">
                              {program.label}
                            </span>
                          </div>

                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-[15px]">
                            {program.description}
                          </p>
                        </div>
                      </div>

                      {/* ARROW */}
                      <div className="flex items-start justify-end pt-0.5 md:pt-1">
                        <ArrowRight
                          size={18}
                          strokeWidth={1.7}
                          className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-karsa-primary"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
          <ScrollReveal direction="up" duration={0.8} delay={0.2}>
            <div className="mt-8 flex justify-center">
              <a
                href="/program"
                className="group inline-flex items-center gap-3 rounded-full border border-karsa-primary px-5 py-2.5 text-sm font-medium text-karsa-primary transition-all duration-300 hover:bg-karsa-primary hover:text-white"
              >
                <span>Lihat Daftar Program</span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </div>
  )
}
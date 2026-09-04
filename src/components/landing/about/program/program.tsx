"use client"

import {
  Sprout,
  HandHeart,
  Lightbulb,
  Handshake,
  ArrowUpRight,
} from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function ProgramKarsa() {
  const programs = [
    {
      number: "01",
      title: "Aksi Lingkungan",
      icon: Sprout,
      color: "text-karsa-green",
      bg: "bg-karsa-green/10",
      hover: "group-hover:text-karsa-green",
      description:
        "Kegiatan untuk menjaga dan merawat lingkungan melalui aksi bersih lingkungan, penanaman pohon, edukasi sampah, serta menjaga ruang publik.",
    },
    {
      number: "02",
      title: "Aksi Sosial",
      icon: HandHeart,
      color: "text-karsa-yellow",
      bg: "bg-karsa-yellow/10",
      hover: "group-hover:text-karsa-yellow",
      description:
        "Kegiatan sosial untuk berbagi, membantu, dan mendukung masyarakat sekitar melalui aksi yang memberikan manfaat secara langsung.",
    },
    {
      number: "03",
      title: "Gerakan Generasi Muda",
      icon: Lightbulb,
      color: "text-karsa-blue",
      bg: "bg-karsa-blue/10",
      hover: "group-hover:text-karsa-blue",
      description:
        "Ruang bagi generasi muda untuk belajar, menjadi relawan, berkontribusi, mengembangkan diri, dan terlibat dalam kegiatan sosial maupun lingkungan.",
    },
    {
      number: "04",
      title: "Kolaborasi Komunitas",
      icon: Handshake,
      color: "text-karsa-purple",
      bg: "bg-karsa-purple/10",
      hover: "group-hover:text-karsa-purple",
      description:
        "Membangun kerja sama bersama komunitas, organisasi, dan kelompok masyarakat untuk menciptakan gerakan yang lebih luas dan berdampak berkelanjutan.",
    },
  ]

  return (
    <div className="space-y-12 sm:space-y-14 md:space-y-16">

      {/* HEADING */}
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal direction="up" duration={0.7}>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            Mengubah Kepedulian
          </h2>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            Menjadi Aksi
            <span className="text-karsa-purple">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          duration={0.7}
          delay={0.1}
        >
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-500 sm:mt-6 sm:text-[15px] md:text-base">
            Program Karsa menjadi ruang untuk mengubah kepedulian
            terhadap lingkungan dan sesama menjadi langkah nyata
            yang memberikan manfaat.
          </p>
        </ScrollReveal>
      </div>

      {/* PROGRAM GRID */}
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 border-t border-karsa-black/10 sm:grid-cols-2">

          {programs.map((program, index) => {
            const Icon = program.icon

            return (
              <ScrollReveal
                key={program.number}
                direction="up"
                duration={0.6}
                delay={0.05 + index * 0.05}
              >
                <div
                  className="
                    group
                    h-full
                    border-b border-karsa-black/10
                    sm:nth-[odd]:border-r
                  "
                >
                  <div
                    className="
                      flex h-full min-h-[280px]
                      flex-col justify-between
                      p-6
                      sm:p-7
                      md:min-h-[300px]
                      md:p-8
                    "
                  >

                    {/* TOP */}
                    <div>
                      <div className="flex items-start justify-between">

                        {/* NUMBER */}
                        <span
                          className="
                            text-4xl
                            font-semibold
                            tracking-[-0.07em]
                            text-gray-200
                            sm:text-5xl
                          "
                        >
                          {program.number}
                        </span>

                        {/* ICON */}
                        <div
                          className={`
                            flex h-9 w-9
                            items-center justify-center
                            rounded-lg
                            ${program.bg}
                            ${program.color}
                          `}
                        >
                          <Icon
                            size={18}
                            strokeWidth={1.7}
                          />
                        </div>
                      </div>

                      {/* TITLE */}
                      <h3
                        className={`
                          mt-10
                          max-w-sm
                          text-xl
                          font-semibold
                          leading-tight
                          tracking-tight
                          text-karsa-black
                          transition-colors duration-200
                          ${program.hover}
                          sm:text-2xl
                        `}
                      >
                        {program.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-3
                          max-w-md
                          text-sm
                          leading-relaxed
                          text-gray-500
                          sm:text-[15px]
                        "
                      >
                        {program.description}
                      </p>
                    </div>

                    {/* BOTTOM */}
                    <div className="mt-8 flex items-center justify-between">
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.6}
                        className={`
                          text-gray-300
                          transition-colors duration-200
                          ${program.hover}
                        `}
                      />

                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}

        </div>

        {/* CTA */}
        <ScrollReveal
          direction="up"
          duration={0.7}
          delay={0.15}
        >
          <div className="mt-8 flex justify-center">
            <a
              href="/program"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-karsa-black
              "
            >
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
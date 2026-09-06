"use client"

import { Binoculars, Route, ChevronDown } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { useState } from "react"

export default function Visimisi() {
  const [openMission, setOpenMission] = useState<number | null>(0)

  const missions = [
    {
      title: "Kegiatan sosial dan lingkungan",
      description:
        "Menginisiasi kegiatan yang memberikan manfaat bagi lingkungan dan masyarakat sekitar.",
    },
    {
      title: "Keterlibatan generasi muda",
      description:
        "Membuka ruang bagi generasi muda untuk terlibat dan mengambil peran dalam kegiatan positif.",
    },
    {
      title: "Kolaborasi bersama komunitas",
      description:
        "Bekerja sama dengan komunitas, organisasi, dan masyarakat untuk menciptakan gerakan yang lebih luas.",
    },
    {
      title: "Menumbuhkan kepedulian",
      description:
        "Mendorong kepedulian terhadap lingkungan dan sesama menjadi bagian dari kehidupan sehari-hari.",
    },
    {
      title: "Menciptakan dampak berkelanjutan",
      description:
        "Mengupayakan setiap kegiatan memberikan manfaat yang dapat terus berkembang dalam jangka panjang.",
    },
  ]
  return (
    <div className="space-y-12 sm:space-y-14 lg:space-y-16">

      {/* HEADING */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:items-end md:gap-16">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            <h2>Peduli untuk</h2>

            <h2>
              Bergerak dan Berdampak
              <span className="text-karsa-yellow">.</span>
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.15}>
          <p className="max-w-sm text-sm leading-relaxed text-gray-500">
            Karsa mengubah kepedulian menjadi aksi nyata bagi lingkungan dan masyarakat.
          </p>
        </ScrollReveal>
      </div>

      {/* VISI & MISI */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">

        {/* VISI */}
        <ScrollReveal direction="left" duration={0.8}>
          <div className="h-full rounded-xl bg-karsa-green p-6 sm:p-8 lg:p-10">

            {/* HEADER */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Binoculars
                size={17}
                strokeWidth={1.7}
                className="text-karsa-black sm:h-[18px] sm:w-[18px]"
              />

              <span className="text-lg font-medium text-karsa-black sm:text-xl">
                Visi
              </span>
            </div>

            {/* MAIN TEXT */}
            <div className="mt-6 sm:mt-8">
              <h3 className="max-w-xl text-xl font-semibold leading-snug tracking-tight text-karsa-black sm:text-2xl md:text-[27px]">
                Membangun generasi yang peduli dan aktif menciptakan
                perubahan positif bagi masyarakat.
              </h3>
            </div>

            {/* TUJUAN */}
            <div className="mt-8 border-t border-karsa-black/40 pt-5 sm:mt-10 sm:pt-6">
              <div className="mb-3 flex items-center gap-2.5 sm:gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-karsa-black" />

                <p className="text-sm font-medium text-karsa-black">
                  Tujuan
                </p>
              </div>

              <p className="max-w-lg text-sm leading-relaxed text-karsa-black/80 sm:text-[15px] md:text-base">
                Menciptakan ruang bagi generasi muda untuk belajar,
                berkontribusi, dan tumbuh bersama melalui kegiatan sosial
                dan lingkungan.
              </p>
            </div>

            {/* NILAI */}
            <div className="mt-7 border-t border-karsa-black/40 pt-5 sm:mt-8 sm:pt-6">
              <div className="mb-3 flex items-center gap-2.5 sm:gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-karsa-black" />

                <p className="text-sm font-medium text-karsa-black">
                  Nilai yang Dibawa
                </p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-karsa-black sm:gap-x-6">
                <span>Peduli</span>
                <span>Kolaborasi</span>
                <span>Aksi</span>
                <span>Dampak</span>
              </div>
            </div>

            {/* FOKUS */}
            <div className="mt-7 border-t border-karsa-black/40 pt-5 sm:mt-8 sm:pt-6">
              <div className="mb-3 flex items-center gap-2.5 sm:gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-karsa-black" />

                <p className="text-sm font-medium text-karsa-black">
                  Fokus Kami
                </p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-karsa-black sm:gap-x-6">
                <span>Lingkungan</span>
                <span>Sosial</span>
                <span>Generasi Muda</span>
                <span>Komunitas</span>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* MISI */}
        <ScrollReveal direction="right" duration={0.8}>
          <div className="h-full rounded-xl bg-karsa-black p-6 text-white sm:p-8 lg:p-10">

            {/* HEADER */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Route
                size={17}
                strokeWidth={1.7}
                className="text-white sm:h-[18px] sm:w-[18px]"
              />

              <span className="text-lg font-medium text-white sm:text-xl">
                Misi
              </span>
            </div>

            {/* MAIN TEXT */}
            <div className="mt-6 sm:mt-8">
              <h3 className="max-w-xl text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-[27px]">
                Mengubah kepedulian menjadi aksi nyata yang memberikan
                manfaat bagi lingkungan dan masyarakat sekitar.
              </h3>
            </div>

            {/* MISSIONS */}
            <div className="mt-8 border-t border-white/30 pt-5 sm:mt-10 sm:pt-6">
              <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />

                <p className="text-sm font-medium text-white">
                  Yang Kami Lakukan
                </p>
              </div>

              <div>
                {missions.map((item, index) => {
                  const isOpen = openMission === index

                  return (
                    <div
                      key={index}
                      className="border-b border-white/20"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMission(isOpen ? null : index)
                        }
                        className="flex w-full items-center gap-3 py-3.5 text-left sm:gap-4 sm:py-4"
                      >
                        {/* NUMBER */}
                        <span
                          className={`w-5 shrink-0 text-[11px] font-medium transition-colors duration-300 sm:text-xs ${isOpen
                            ? "text-white"
                            : "text-white/40"
                            }`}
                        >
                          0{index + 1}
                        </span>

                        {/* TITLE */}
                        <span
                          className={`flex-1 text-sm font-medium transition-colors duration-300 sm:text-[15px] ${isOpen
                            ? "text-white"
                            : "text-white/80"
                            }`}
                        >
                          {item.title}
                        </span>

                        {/* ICON */}
                        <ChevronDown
                          size={16}
                          strokeWidth={1.7}
                          className={`shrink-0 text-white/50 transition-transform duration-300 sm:h-[17px] sm:w-[17px] ${isOpen
                            ? "rotate-180 text-white"
                            : ""
                            }`}
                        />
                      </button>

                      {/* DESCRIPTION */}
                      <div
                        className={`grid transition-all duration-300 ${isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-4 pl-8 pr-4 text-xs leading-relaxed text-white/60 sm:pb-5 sm:pl-9 sm:pr-6 sm:text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
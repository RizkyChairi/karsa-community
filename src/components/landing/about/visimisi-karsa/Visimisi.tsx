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
    <div className="space-y-16">

      <div className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
        <ScrollReveal direction="up" duration={0.8}>
          <h2>Peduli untuk</h2>

          <h2>
            Bergerak dan Berdampak{" "}
            <span className="text-karsa-yellow">.</span>
          </h2>
        </ScrollReveal>
      </div>


      <div className="mx-auto grid max-w-5xl grid-cols-1 border-y border-gray-200 lg:grid-cols-2">
        <ScrollReveal direction="left" duration={0.8}>
          <div className="py-10 lg:border-r lg:border-gray-200 lg:pr-12">
            {/* HEADER */}
            <div className="flex items-center gap-3">
              <Binoculars
                size={18}
                strokeWidth={1.7}
                className="text-karsa-primary"
              />

              <span className="text-xl font-medium text-karsa-primary">
                Visi
              </span>
            </div>

            <div className="mt-8">
              <h3 className="max-w-xl text-2xl font-semibold leading-snug tracking-tight text-karsa-black md:text-[27px]">
                Membangun generasi yang peduli dan aktif menciptakan
                perubahan positif bagi masyarakat.
              </h3>
            </div>


            <div className="mt-10 border-t border-gray-100 pt-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-karsa-primary" />

                <p className="text-sm font-medium text-karsa-black">
                  Tujuan
                </p>
              </div>

              <p className="max-w-lg text-[15px] leading-relaxed text-gray-500 md:text-base">
                Menciptakan ruang bagi generasi muda untuk belajar,
                berkontribusi, dan tumbuh bersama melalui kegiatan sosial
                dan lingkungan.
              </p>
            </div>


            <div className="mt-8 border-t border-gray-100 pt-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-karsa-primary" />

                <p className="text-sm font-medium text-karsa-black">
                  Nilai yang Dibawa
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span>Peduli</span>
                <span>Kolaborasi</span>
                <span>Aksi</span>
                <span>Dampak</span>
              </div>
            </div>


            <div className="mt-8 border-t border-gray-100 pt-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-karsa-primary" />

                <p className="text-sm font-medium text-karsa-black">
                  Fokus Kami
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span>Lingkungan</span>
                <span>Sosial</span>
                <span>Generasi Muda</span>
                <span>Komunitas</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" duration={0.8}>
          <div className="py-10 lg:pl-12">
            {/* HEADER */}
            <div className="flex items-center gap-3">
              <Route
                size={18}
                strokeWidth={1.7}
                className="text-karsa-primary"
              />

              <span className="text-xl font-medium text-karsa-primary">
                Misi
              </span>
            </div>

            <div className="mt-8">
              <h3 className="max-w-xl text-2xl font-semibold leading-snug tracking-tight text-karsa-black md:text-[27px]">
                Mengubah kepedulian menjadi aksi nyata yang memberikan
                manfaat bagi lingkungan dan masyarakat sekitar.
              </h3>
            </div>

            <div className="mt-10 border-t border-gray-100 pt-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-karsa-primary" />

                <p className="text-sm font-medium text-karsa-black">
                  Yang Kami Lakukan
                </p>
              </div>

              <div>
                {missions.map((item, index) => {
                  const isOpen = openMission === index

                  return (
                    <div
                      key={index}
                      className="border-b border-gray-100"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMission(isOpen ? null : index)
                        }
                        className="flex w-full items-center gap-4 py-4 text-left"
                      >
                        <span
                          className={`w-5 shrink-0 text-xs font-medium transition-colors duration-300 ${isOpen
                            ? "text-karsa-primary"
                            : "text-gray-300"
                            }`}
                        >
                          0{index + 1}
                        </span>

                        <span
                          className={`flex-1 text-[15px] font-medium transition-colors duration-300 ${isOpen
                            ? "text-karsa-primary"
                            : "text-karsa-black"
                            }`}
                        >
                          {item.title}
                        </span>

                        <ChevronDown
                          size={17}
                          strokeWidth={1.7}
                          className={`shrink-0 text-gray-400 transition-transform duration-300 ${isOpen
                            ? "rotate-180 text-karsa-primary"
                            : ""
                            }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-5 pl-9 pr-6 text-sm leading-relaxed text-gray-400">
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
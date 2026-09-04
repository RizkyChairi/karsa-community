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


    </div>
  )
}
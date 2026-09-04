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
    </div>
  )
}
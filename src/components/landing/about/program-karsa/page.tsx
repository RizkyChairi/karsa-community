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

}
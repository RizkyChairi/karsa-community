import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { useState } from "react"
import {
  Leaf,
  Users,
  HandHeart,
  Sparkles,
  ChevronDown
} from "lucide-react"
import { div, span } from "framer-motion/client"

export default function AboutKarsa() {
  const [isOpen, setIsOpen] = useState(false)
  const textDecoration = [
    {
      text: "Peduli Lingkungan",
      icon: Leaf,
    },
    {
      text: "Bersama Komunitas",
      icon: Users,
    },
    {
      text: "Berbagi dan Membantu",
      icon: HandHeart,
    },
    {
      text: "Dampak Nyata",
      icon: Sparkles,
    },
  ]

  return (
    <section className="space-y-16">

      {/* HEADING */}
      <div className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
        <ScrollReveal direction="up" duration={0.8}>
          <h2>
            Bersama Ciptakan{" "}
            <span className="text-karsa-purple">.</span>
          </h2>

          <h2>
            Perubahan yang Berarti{" "}
            <span className="text-karsa-blue">.</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* TEXT DECORATION */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 py-2 text-center text-base font-medium md:grid-cols-4 md:gap-8">
        {textDecoration.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.text}
              className="
          flex items-center justify-center gap-2
          text-base font-medium
          text-gray-600
          transition-colors
          duration-300
          hover:text-karsa-black
        "
            >
              <Icon
                size={17}
                strokeWidth={1.7}
                className="text-[#025246]"
              />

              <span className="underline decoration-dotted decoration-[#999898] underline-offset-4">
                {item.text}
              </span>
            </div>
          )
        })}
      </div>

      {/* ABOUT CONTENT */}
      {/* ABOUT CONTENT */}
      <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center lg:gap-20">

        {/* LEFT - IMAGE */}
        <div className="flex w-full justify-center lg:w-auto lg:justify-start">
          <ScrollReveal direction="left" duration={0.8}>
            <Image
              src="/images/about/document-tentang.webp"
              alt="Karsa"
              width={500}
              height={500}
              className="h-auto w-60 object-contain md:w-56 lg:w-70"
            />
          </ScrollReveal>
          <ScrollReveal direction="left" duration={0.8}>
            <Image
              src="/images/about/document-tentang.webp"
              alt="Karsa"
              width={500}
              height={500}
              className="h-auto w-60 object-contain md:w-56 lg:w-70"
            />
          </ScrollReveal>
        </div>

        {/* RIGHT - TEXT */}
        <div className="w-full max-w-2xl space-y-6">

          {/* PARAGRAF UTAMA */}
          <ScrollReveal direction="right" duration={0.8}>
            <p className="text-lg leading-relaxed text-gray-600 md:text-[19px]">
              Di sekitar kita, masih banyak persoalan sosial dan lingkungan yang
              membutuhkan perhatian. Mulai dari lingkungan yang kurang terawat,
              permasalahan sampah, hingga masyarakat yang membutuhkan dukungan.
              Banyak generasi muda ingin berkontribusi, tetapi belum menemukan
              ruang untuk mulai bergerak. {!isOpen && (
                <span>Disinilah peran <span className="font-semibold text-karsa-black">Karsa.</span></span>
              )}
            </p>
          </ScrollReveal>

          {/* DROPDOWN CONTENT */}
          {isOpen && (
            <div className="space-y-6">

              <ScrollReveal direction="right" duration={0.8}>
                <p className="text-[17px] leading-relaxed text-gray-500 md:text-[18px]">
                  <strong className="font-semibold text-karsa-black">
                    Karsa
                  </strong>{" "}
                  hadir untuk mengubah kepedulian menjadi aksi nyata. Melalui
                  kegiatan seperti{" "}
                  <span className="font-medium text-[#025246]">
                    menanam pohon, membersihkan lingkungan, membantu masyarakat,
                    hingga berbagi ilmu
                  </span>
                  , kami mengajak generasi muda untuk bergerak dan memberikan
                  manfaat bagi sekitar.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" duration={0.9}>
                <p className="text-[17px] leading-relaxed text-gray-500 md:text-[18px]">
                  Bagi Karsa, perubahan dimulai dari langkah sederhana. Dengan
                  bergerak dan berkolaborasi bersama, setiap langkah dapat
                  menciptakan dampak yang berarti.
                </p>
              </ScrollReveal>

            </div>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="group inline-flex items-center gap-2 text-sm font-medium text-karsa-black"
          >
            <span className="underline underline-offset-4">
              {isOpen ? "Sembunyikan" : "Kenali Karsa lebih lanjut"}
            </span>

            <ChevronDown
              size={17}
              strokeWidth={1.8}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                }`}
            />
          </button>

        </div>
      </div>
    </section>
  )
}
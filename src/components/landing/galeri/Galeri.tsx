import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { galleries } from "@/constants/Galleries"

const visibleGalleries = galleries.slice(0, 4)

export default function GallerySection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16">
          <ScrollReveal direction="up" duration={0.8}>
            <div>
              <p className="mb-2 text-sm font-medium text-karsa-black/50">
                Galeri Karsa
              </p>

              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-karsa-black sm:text-3xl md:text-4xl">
                Cerita dari setiap
                <br />
                langkah yang kami jalani
                <span className="text-karsa-purple">.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            duration={0.8}
            delay={0.1}
          >
            <p className="max-w-md text-sm leading-7 text-karsa-black/60 sm:text-base">
              Dokumentasi perjalanan Karsa bersama komunitas,
              relawan, dan masyarakat dalam berbagai aksi nyata.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
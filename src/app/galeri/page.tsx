import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import ScrollReveal from "@/components/ui/ScrollReveal"
import { galleries } from "@/constants/Galleries"

export default function Galeri() {
  return (
    <main className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <ScrollReveal direction="up" duration={0.7}>
          <div className="mb-10 max-w-2xl sm:mb-12">

            <p className="mb-3 text-sm font-medium text-karsa-primary">
              Dokumentasi Karsa
            </p>

            <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight text-karsa-black sm:text-4xl md:text-5xl">
              Setiap aksi punya
              <br />
              cerita
              <span className="text-karsa-green">.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-karsa-black/55 sm:text-base">
              Kumpulan dokumentasi kegiatan Karsa bersama komunitas,
              relawan, dan masyarakat dalam berbagai aksi nyata.
            </p>

          </div>
        </ScrollReveal>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {galleries.map((gallery, index) => (
            <ScrollReveal
              key={gallery.id}
              direction="up"
              duration={0.6}
              delay={index * 0.04}
            >
              <Link
                href={`/galeri/${gallery.slug}`}
                className="group block"
              >
                <article>

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-karsa-primary/5">

                    <Image
                      src={gallery.image}
                      alt={gallery.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Category */}
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-karsa-black backdrop-blur-sm">
                        {gallery.category}
                      </span>
                    </div>

                  </div>

                  {/* Content */}
                  <div className="pt-4">

                    <div className="mb-2 flex items-center gap-2 text-xs text-karsa-black/45">
                      <span>{gallery.location}</span>
                      <span>•</span>
                      <span>{gallery.date}</span>
                    </div>

                    <div className="flex items-start justify-between gap-4">

                      <h2 className="text-base font-semibold leading-snug tracking-tight text-karsa-black sm:text-lg">
                        {gallery.title}
                      </h2>

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.7}
                        className="mt-0.5 shrink-0 text-karsa-black/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-karsa-primary"
                      />

                    </div>

                  </div>

                </article>
              </Link>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </main>
  )
}
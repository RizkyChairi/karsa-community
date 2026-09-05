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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleGalleries.map((gallery, index) => (
            <ScrollReveal
              key={gallery.id}
              direction="up"
              duration={0.7}
              delay={index * 0.08}
            >
              <Link
                href={`/galeri/${gallery.slug}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-2xl bg-neutral-100">

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={gallery.image}
                      alt={gallery.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-white/70">
                        <span>{gallery.category}</span>
                        <span>•</span>
                        <span>{gallery.location}</span>
                      </div>

                      <div className="flex items-end justify-between gap-4">
                        <h3 className="max-w-[85%] text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                          {gallery.title}
                        </h3>

                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.7}
                          className="shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>

                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal
          direction="up"
          duration={0.7}
          delay={0.15}
        >
          <div className="mt-8 flex justify-center">
            <Link
              href="/galeri"
              className="group flex items-center gap-2 text-sm font-medium text-karsa-black"
            >
              <span className="border-b border-karsa-black pb-1">
                Lihat semua galeri
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
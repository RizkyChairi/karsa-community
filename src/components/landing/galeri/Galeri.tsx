import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

const galleries = [
  {
    id: "aksi-bersih-depok",
    title: "Aksi Bersih Lingkungan",
    location: "Depok",
    date: "12 Januari 2026",
    image: "/images/gallery/depok.jpg",
  },
  {
    id: "penanaman-pohon-bogor",
    title: "Penanaman Pohon Bersama",
    location: "Bogor",
    date: "22 Februari 2026",
    image: "/images/gallery/bogor.jpg",
  },
  {
    id: "kolaborasi-komunitas",
    title: "Kolaborasi Bersama Komunitas",
    location: "Jakarta",
    date: "10 Maret 2026",
    image: "/images/gallery/jakarta.jpg",
  },
  {
    id: "gerakan-anak-muda",
    title: "Gerakan Generasi Muda",
    location: "Depok",
    date: "18 April 2026",
    image: "/images/gallery/generasi-muda.jpg",
  },
  {
    id: "menanam-bersama",
    title: "Menanam Bersama",
    location: "Bogor",
    date: "12 Mei 2026",
    image: "/images/gallery/menanam.jpg",
  },
  {
    id: "aksi-sosial",
    title: "Aksi Sosial Karsa",
    location: "Jakarta",
    date: "8 Juni 2026",
    image: "/images/gallery/sosial.jpg",
  },
  {
    id: "kelas-generasi-muda",
    title: "Kelas Generasi Muda",
    location: "Depok",
    date: "20 Juni 2026",
    image: "/images/gallery/kelas.jpg",
  },
  {
    id: "bersih-sungai",
    title: "Bersih Sungai",
    location: "Bogor",
    date: "5 Juli 2026",
    image: "/images/gallery/sungai.jpg",
  },
  {
    id: "komunitas-karsa",
    title: "Bersama Komunitas",
    location: "Jakarta",
    date: "18 Juli 2026",
    image: "/images/gallery/komunitas.jpg",
  },
  {
    id: "aksi-lingkungan",
    title: "Gerakan Peduli Lingkungan",
    location: "Depok",
    date: "2 Agustus 2026",
    image: "/images/gallery/lingkungan.jpg",
  },
]

export default function GallerySection() {
  // Landing page hanya menampilkan 4 galeri
  const visibleGalleries = galleries.slice(0, 4)

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <ScrollReveal direction="up">
            <div>
              <p className="mb-2 text-sm font-medium text-karsa-black/50">
                Galeri Karsa
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Cerita dari setiap
                <br />
                langkah yang kami jalani
                <span className="text-karsa-purple">.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <p className="max-w-md text-sm leading-7 text-karsa-black/60 sm:text-base">
              Dokumentasi kegiatan, kolaborasi, dan perjalanan Karsa
              dalam menciptakan aksi nyata bersama komunitas.
            </p>
          </ScrollReveal>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {visibleGalleries.map((gallery, index) => (
            <ScrollReveal
              key={gallery.id}
              direction="up"
              delay={index * 0.08}
            >
              <Link
                href={`/galeri/${gallery.id}`}
                className="group block"
              >
                <article className="relative overflow-hidden rounded-2xl bg-neutral-100">

                  <div className="relative aspect-[4/3]">

                    <Image
                      src={gallery.image}
                      alt={gallery.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                      <div className="mb-2 flex items-center gap-2 text-xs text-white/70">
                        <span>{gallery.location}</span>
                        <span>•</span>
                        <span>{gallery.date}</span>
                      </div>

                      <div className="flex items-end justify-between gap-4">
                        <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
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

        {/* Lihat Semua */}
        <ScrollReveal direction="up" delay={0.15}>
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
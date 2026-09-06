import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react"
import { activities } from "@/constants/Kegiatan"
import ScrollReavel from "@/components/ui/ScrollReveal"

const latestActivities = [...activities]
  .sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()

    return dateB - dateA
  })
  .slice(0, 3)

export default function LatestActivities() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="mb-3 inline-block text-sm font-semibold text-karsa-green">
              KEGIATAN KAMI
            </span>

            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-karsa-black sm:text-3xl md:text-4xl">
              Kegiatan terbaru
              <br />
              <span className="text-karsa-blue">
                dari Komunitas Karsa.
              </span>
            </h2>
          </div>

          <Link
            href="/kegiatan"
            className="hidden items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-medium transition hover:bg-black hover:text-white md:flex"
          >
            Lihat semua
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestActivities.map((activity, index) => (
            <ScrollReavel delay={index === 1 ? 1 : index * 0.2}>
              {/* Card */}
              <Link
                key={activity.id}
                href={`/kegiatan/${activity.slug}`}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={activity.coverImage}
                    alt={activity.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Category */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                      {activity.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4 text-xs text-black/50">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {activity.date}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold leading-tight transition group-hover:text-karsa-green">
                    {activity.title}
                  </h3>

                  <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-black/60">
                    {activity.shortDescription}
                  </p>

                  <div className="flex items-center justify-between border-t border-black/10 pt-4">
                    <div className="flex max-w-[80%] items-center gap-1.5 text-xs text-black/50">
                      <MapPin size={14} className="shrink-0" />
                      <span className="truncate">
                        {activity.location}
                      </span>
                    </div>

                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition group-hover:bg-karsa-green group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReavel>
          ))}
        </div>

        <div className="mt-8 flex md:hidden">
          <Link
            href="/kegiatan"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Lihat semua kegiatan
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}
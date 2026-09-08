
"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react"
import { useEffect, useState } from "react"

import ScrollReavel from "@/components/ui/ScrollReveal"

type Activity = {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  category: string
  location: string
  date: string
  time: string
  coverImage: string
  images: string[]
  participants: string
  organizer: string
  partners: string[]
  impact: string
  activities: string[]
  tags: string[]
  status: string
  featured: boolean
}

type KegiatanResponse = {
  success: boolean
  data: Activity[]
}

export default function LatestActivities() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/kegiatan"
        )

        if (!response.ok) {
          throw new Error("Gagal mengambil data kegiatan")
        }

        const result: KegiatanResponse = await response.json()

        setActivities(result.data)
      } catch (error) {
        console.error("Error fetch kegiatan:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [])

  const latestActivities = [...activities]
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()

      return dateB - dateA
    })
    .slice(0, 3)

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
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

        {/* LOADING */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white"
              >
                <div className="aspect-[4/3] animate-pulse bg-black/5" />

                <div className="space-y-4 p-6">
                  <div className="h-3 w-24 animate-pulse rounded bg-black/5" />
                  <div className="h-6 w-4/5 animate-pulse rounded bg-black/5" />
                  <div className="h-10 w-full animate-pulse rounded bg-black/5" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ACTIVITIES */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

              {latestActivities.map((activity, index) => (
                <div key={activity.id}>
                  <ScrollReavel
                    delay={index === 1 ? 1 : index * 0.2}
                  >
                    <Link
                      href={`/ kegiatan / ${activity.slug} `}
                      className="group block overflow-hidden rounded-3xl border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >

                      {/* IMAGE */}
                      <div className="relative aspect-[4/3] overflow-hidden">

                        <Image
                          src={activity.coverImage}
                          alt={activity.title}
                          fill
                          sizes="
                            (max-width: 768px) 100vw,
                            33vw
                          "
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />

                        {/* CATEGORY */}
                        <div className="absolute left-4 top-4">
                          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                            {activity.category}
                          </span>
                        </div>

                      </div>

                      {/* CONTENT */}
                      <div className="p-6">

                        {/* DATE */}
                        <div className="mb-4 flex items-center gap-4 text-xs text-black/50">
                          <div className="flex items-center gap-1.5">
                            <CalendarDays size={14} />
                            {activity.date}
                          </div>
                        </div>

                        {/* TITLE */}
                        <h3 className="mb-3 text-xl font-semibold leading-tight transition group-hover:text-karsa-green">
                          {activity.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-black/60">
                          {activity.shortDescription}
                        </p>

                        {/* FOOTER */}
                        <div className="flex items-center justify-between border-t border-black/10 pt-4">

                          <div className="flex max-w-[80%] items-center gap-1.5 text-xs text-black/50">
                            <MapPin
                              size={14}
                              className="shrink-0"
                            />

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
                </div>
              ))}

            </div>

            {/* EMPTY */}
            {latestActivities.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-sm text-black/50">
                  Belum ada kegiatan.
                </p>
              </div>
            )}
          </>
        )}

        {/* MOBILE BUTTON */}
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
    </div>
  )
}


"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  SlidersHorizontal,
} from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import ScrollReveal from "@/components/ui/ScrollReveal"
import type { Activity } from "@/types/activity"

const categories = [
  "Semua",
  "Lingkungan",
  "Sosial",
  "Edukasi",
  "Kemanusiaan",
  "Komunitas",
]

const colors = [
  "text-karsa-green",
  "text-karsa-black",
  "text-karsa-purple",
  "text-karsa-blue",
]

const monthMap: Record<string, number> = {
  Januari: 0,
  Februari: 1,
  Maret: 2,
  April: 3,
  Mei: 4,
  Juni: 5,
  Juli: 6,
  Agustus: 7,
  September: 8,
  Oktober: 9,
  November: 10,
  Desember: 11,
}

function parseActivityDate(date: string) {
  const [day, month, year] = date.split(" ")

  return new Date(
    Number(year),
    monthMap[month] ?? 0,
    Number(day)
  ).getTime()
}

export default function KegiatanPage() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const [category, setCategory] = useState("Semua")
  const [year, setYear] = useState("Semua")
  const [sort, setSort] = useState("Terbaru")

  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await fetch(
          "http://localhost:3001/api/kegiatan"
        )

        if (!response.ok) {
          throw new Error(
            `Gagal mengambil data kegiatan (${response.status})`
          )
        }

        const result = await response.json()

        if (!result.success || !Array.isArray(result.data)) {
          throw new Error("Format response API tidak valid")
        }

        setActivities(result.data)
      } catch (error) {
        console.error("Gagal mengambil kegiatan:", error)
        setActivities([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchActivities()
  }, [])

  const years = useMemo(() => {
    const activityYears = activities
      .map((activity) => activity.date.split(" ").pop())
      .filter((year): year is string => Boolean(year))

    return [
      "Semua",
      ...Array.from(new Set(activityYears)).sort(
        (a, b) => Number(b) - Number(a)
      ),
    ]
  }, [activities])

  const filteredActivities = useMemo(() => {
    return activities
      .filter((activity) => {
        const activityYear = activity.date.split(" ").pop()

        const cocokKategori =
          category === "Semua" ||
          activity.category === category

        const cocokTahun =
          year === "Semua" ||
          activityYear === year

        return cocokKategori && cocokTahun
      })
      .sort((a, b) => {
        const dateA = parseActivityDate(a.date)
        const dateB = parseActivityDate(b.date)

        return sort === "Terbaru"
          ? dateB - dateA
          : dateA - dateB
      })
  }, [activities, category, year, sort])

  const resetFilter = () => {
    setCategory("Semua")
    setYear("Semua")
    setSort("Terbaru")
  }

  return (
    <main className="min-h-screen bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <ScrollReveal direction="up" duration={0.7}>
          <header className="mb-12 sm:mb-16">
            <p className="mb-4 text-sm font-medium text-karsa-black/45">
              Kegiatan Karsa
            </p>

            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-karsa-black sm:text-5xl md:text-6xl">
                Bergerak bersama,
                <br />
                menciptakan dampak
                <span className="text-karsa-green">.</span>
              </h1>

              <p className="max-w-sm text-sm leading-7 text-karsa-black/45 sm:text-base">
                Kumpulan kegiatan dan aksi Karsa bersama masyarakat,
                komunitas, dan para relawan.
              </p>
            </div>
          </header>
        </ScrollReveal>

        {/* FILTER */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="mb-10 border-y border-karsa-black/10 py-5">

            {/* KATEGORI */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <p className="w-20 shrink-0 text-xs font-semibold uppercase text-karsa-black/30">
                Kategori
              </p>

              <div className="flex flex-wrap gap-1">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-lg px-3.5 py-2 text-sm transition ${category === item
                      ? "bg-karsa-black text-white"
                      : "text-karsa-black/40 hover:bg-karsa-black/5 hover:text-karsa-black"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="my-5 border-t border-karsa-black/5" />

            {/* TAHUN */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <p className="w-20 shrink-0 text-xs font-semibold uppercase text-karsa-black/30">
                Tahun
              </p>

              <div className="flex flex-wrap gap-1">
                {years.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setYear(item)}
                    className={`rounded-lg px-3.5 py-2 text-sm transition ${year === item
                      ? "bg-karsa-black text-white"
                      : "text-karsa-black/40 hover:bg-karsa-black/5 hover:text-karsa-black"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="my-5 border-t border-karsa-black/5" />

            {/* SORT */}
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-karsa-black/40">
                Menampilkan{" "}
                <span className="font-semibold text-karsa-black">
                  {filteredActivities.length}
                </span>{" "}
                kegiatan
              </p>

              <div className="flex items-center gap-2">
                <SlidersHorizontal
                  size={14}
                  className="text-karsa-black/30"
                />

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-karsa-black outline-none"
                >
                  <option value="Terbaru">Terbaru</option>
                  <option value="Terlama">Terlama</option>
                </select>

                {(category !== "Semua" ||
                  year !== "Semua" ||
                  sort !== "Terbaru") && (
                    <button
                      type="button"
                      onClick={resetFilter}
                      className="ml-3 text-xs text-karsa-black/40 hover:text-karsa-black"
                    >
                      Reset
                    </button>
                  )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* LOADING */}
        {isLoading && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="aspect-[4/3] rounded-2xl bg-karsa-black/5" />

                <div className="pt-5">
                  <div className="mb-3 flex justify-between">
                    <div className="h-3 w-20 rounded bg-karsa-black/5" />
                    <div className="h-3 w-24 rounded bg-karsa-black/5" />
                  </div>

                  <div className="h-6 w-3/4 rounded bg-karsa-black/5" />

                  <div className="mt-4 h-3 w-1/2 rounded bg-karsa-black/5" />

                  <div className="mt-3 h-10 w-full rounded bg-karsa-black/5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ACTIVITIES */}
        {!isLoading && filteredActivities.length > 0 && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filteredActivities.map((activity, index) => (
              <ScrollReveal
                key={activity.id}
                direction="up"
                duration={0.6}
                delay={index === 0 ? 0.5 : index * 0.04}
              >
                <Link
                  href={`/kegiatan/${activity.slug}`}
                  className="group block"
                >
                  <article>

                    {/* IMAGE */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-karsa-black/5">
                      <Image
                        src={activity.coverImage}
                        alt={activity.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="pt-5">

                      {/* CATEGORY + DATE */}
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2">
                          <span
                            className={`h-2 w-2 shrink-0 rounded-full bg-current ${colors[index % colors.length]
                              }`}
                          />

                          <span
                            className={`truncate text-[11px] font-semibold uppercase tracking-wider ${colors[index % colors.length]
                              }`}
                          >
                            {activity.category}
                          </span>
                        </div>

                        <span className="flex shrink-0 items-center gap-1.5 text-xs text-karsa-black/35">
                          <CalendarDays size={12} />
                          {activity.date}
                        </span>
                      </div>

                      {/* TITLE */}
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-lg font-semibold leading-snug tracking-tight text-karsa-black transition group-hover:text-karsa-green sm:text-xl">
                          {activity.title}
                          <span className="text-karsa-green">.</span>
                        </h2>

                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-karsa-black/10 text-karsa-black/35 transition group-hover:border-karsa-black group-hover:text-karsa-black">
                          <ArrowUpRight size={17} />
                        </div>
                      </div>

                      {/* LOCATION */}
                      <div className="mt-3 flex items-center gap-2 text-xs text-karsa-black/40">
                        <MapPin size={13} />

                        <span className="truncate">
                          {activity.location}
                        </span>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-karsa-black/45">
                        {activity.shortDescription}
                      </p>

                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* EMPTY */}
        {!isLoading && filteredActivities.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-karsa-black/40">
              Tidak ada kegiatan yang ditemukan.
            </p>

            <button
              type="button"
              onClick={resetFilter}
              className="mt-3 text-sm font-semibold text-karsa-black underline underline-offset-4"
            >
              Tampilkan semua
            </button>
          </div>
        )}

        {/* FOOTER SECTION */}
        <ScrollReveal direction="up" duration={0.7}>
          <section className="mt-20 border-t border-karsa-black/10 pt-8 sm:mt-24">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm font-semibold text-karsa-black">
                  Setiap kegiatan adalah bagian dari perjalanan Karsa.
                </p>

                <p className="mt-1 text-sm text-karsa-black/40">
                  Terus bergerak, terus memberi dampak.
                </p>
              </div>

              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-karsa-black hover:text-karsa-primary"
              >
                Kembali ke beranda

                <ArrowUpRight
                  size={17}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>
          </section>
        </ScrollReveal>

      </div>
    </main>
  )
}
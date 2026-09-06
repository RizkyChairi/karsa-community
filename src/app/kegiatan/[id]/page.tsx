import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  UserRound,
  Building2,
  Phone,
  CheckCircle2,
} from "lucide-react"

import { activities } from "@/constants/Kegiatan"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function KegiatanDetailPage({ params }: Props) {
  const { id } = await params

  const activity = activities.find((item) => item.slug === id)
  if (!activity) {
    return (
      <main className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-semibold text-karsa-black">
            Kegiatan tidak ditemukan
          </h1>

          <Link
            href="/kegiatan"
            className="mt-5 inline-flex items-center gap-2 text-sm text-karsa-black/50 transition hover:text-karsa-black"
          >
            <ArrowLeft size={16} />
            Kembali ke kegiatan
          </Link>
        </div>
      </main>
    )
  }

  const participantPercentage = Math.min(
    Math.round((activity.participants / activity.maxParticipants) * 100),
    100
  )

  return (
    <main className="min-h-screen bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <Link
          href="/kegiatan"
          className="group mb-14 inline-flex items-center gap-2 text-sm text-karsa-black/40 transition hover:text-karsa-black"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Kembali ke kegiatan
        </Link>


        <section>
          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="text-sm font-medium text-karsa-green">
                {activity.category}
              </span>

              <span className="h-1 w-1 rounded-full bg-karsa-black/20" />

              <span className="text-sm text-karsa-black/40">
                {activity.status}
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-karsa-black sm:text-5xl lg:text-7xl">
              {activity.title}
              <span className="text-karsa-green">.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-karsa-black/50 sm:text-lg">
              {activity.shortDescription}
            </p>
          </div>
        </section>

        <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-3xl bg-karsa-black/5">
          <Image
            src={activity.coverImage}
            alt={activity.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <section className="mt-16 grid gap-16 lg:grid-cols-[1fr_320px]">

          <div>

            {/* About */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-karsa-black/30">
                Tentang kegiatan
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-karsa-black/60 sm:text-lg sm:leading-9">
                {activity.description}
              </p>
            </div>

            <div className="mt-16 border-t border-karsa-black/10 pt-10">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-karsa-black/30">
                    Target peserta
                  </p>

                  <p className="mt-3 text-2xl font-semibold tracking-tight text-karsa-black">
                    {activity.participants}
                    <span className="text-karsa-black/20">
                      {" "}
                      / {activity.maxParticipants}
                    </span>
                  </p>
                </div>

                <p className="text-sm text-karsa-black/40">
                  {participantPercentage}%
                </p>
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-karsa-black/10">
                <div
                  className="h-full rounded-full bg-karsa-green"
                  style={{
                    width: `${participantPercentage}%`,
                  }}
                />
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-karsa-black/50">
                {activity.target}
              </p>
            </div>

            <div className="mt-14 border-t border-karsa-black/10 pt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-karsa-black/30">
                Dampak
              </p>

              <p className="mt-5 max-w-3xl text-2xl font-medium leading-9 tracking-tight text-karsa-black sm:text-3xl">
                {activity.impact}
              </p>
            </div>

            <div className="mt-12 flex gap-4 border-t border-karsa-black/10 pt-8">
              <CheckCircle2
                size={20}
                className="mt-1 shrink-0 text-karsa-green"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-karsa-black/30">
                  Pencapaian
                </p>

                <p className="mt-3 text-sm leading-7 text-karsa-black/60">
                  {activity.achievement}
                </p>
              </div>
            </div>

          </div>

          <aside className="lg:border-l lg:border-karsa-black/10 lg:pl-10">

            <div className="space-y-8">

              <div className="flex gap-4">
                <CalendarDays
                  size={18}
                  className="mt-0.5 shrink-0 text-karsa-black/30"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-karsa-black/30">
                    Tanggal
                  </p>

                  <p className="mt-2 text-sm font-medium text-karsa-black">
                    {activity.date}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3
                  size={18}
                  className="mt-0.5 shrink-0 text-karsa-black/30"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-karsa-black/30">
                    Waktu
                  </p>

                  <p className="mt-2 text-sm font-medium text-karsa-black">
                    {activity.time}
                  </p>

                  <p className="text-sm text-karsa-black/40">
                    sampai {activity.endTime}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-karsa-black/30"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-karsa-black/30">
                    Lokasi
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-karsa-black">
                    {activity.location}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-karsa-black/40">
                    {activity.address}
                  </p>
                </div>
              </div>

              {/* Participants */}
              <div className="flex gap-4">
                <Users
                  size={18}
                  className="mt-0.5 shrink-0 text-karsa-black/30"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-karsa-black/30">
                    Peserta
                  </p>

                  <p className="mt-2 text-sm font-medium text-karsa-black">
                    {activity.participants} peserta
                  </p>

                  <p className="mt-1 text-sm text-karsa-black/40">
                    Maksimal {activity.maxParticipants} peserta
                  </p>
                </div>
              </div>

            </div>

            <div className="my-10 border-t border-karsa-black/10" />

            <div className="space-y-7">

              <div>
                <div className="flex items-center gap-2">
                  <Building2
                    size={16}
                    className="text-karsa-black/30"
                  />

                  <p className="text-xs uppercase tracking-[0.15em] text-karsa-black/30">
                    Penyelenggara
                  </p>
                </div>

                <p className="mt-3 text-sm font-medium leading-6 text-karsa-black">
                  {activity.organizer}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-karsa-black/30">
                  Mitra
                </p>

                <p className="mt-3 text-sm leading-6 text-karsa-black/60">
                  {activity.partner}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <UserRound
                    size={16}
                    className="text-karsa-black/30"
                  />

                  <p className="text-xs uppercase tracking-[0.15em] text-karsa-black/30">
                    Koordinator
                  </p>
                </div>

                <p className="mt-3 text-sm font-medium text-karsa-black">
                  {activity.coordinator}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-karsa-black/40">
                  <Phone size={14} />
                  {activity.contact}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-karsa-black/30">
                  Relawan
                </p>

                <p className="mt-3 text-sm font-medium text-karsa-black">
                  {activity.volunteers} orang
                </p>
              </div>

            </div>

          </aside>
        </section>

        <section className="mt-20 border-t border-karsa-black/10 pt-12">
          <div className="grid gap-14 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-karsa-black/30">
                Fasilitas
              </p>

              <div className="mt-6 space-y-3">
                {activity.facilities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-karsa-black/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-karsa-green" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-karsa-black/30">
                Persyaratan
              </p>

              <div className="mt-6 space-y-3">
                {activity.requirements.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-sm text-karsa-black/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-karsa-black/30" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-2">
          {activity.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full border border-karsa-black/10 px-4 py-2 text-xs text-karsa-black/50"
            >
              #{tag}
            </span>
          ))}
        </div>



      </div>
    </main>
  )
}
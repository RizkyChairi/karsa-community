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


}
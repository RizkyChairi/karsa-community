import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react"
import { activities } from "@/constants/Kegiatan"

const latestActivities = [...activities]
  .sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()

    return dateB - dateA
  })
  .slice(0, 3)

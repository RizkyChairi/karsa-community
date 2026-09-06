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


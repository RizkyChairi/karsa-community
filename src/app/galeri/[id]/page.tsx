import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react"

import ScrollReveal from "@/components/ui/ScrollReveal"
import { galleries } from "@/constants/Galleries"

type PageProps = {
  params: Promise<{
    id: string
  }>
}

const accentColors = [
  {
    dot: "bg-karsa-green",
    text: "text-karsa-primary",
  },
  {
    dot: "bg-karsa-yellow",
    text: "text-karsa-black",
  },
  {
    dot: "bg-karsa-purple",
    text: "text-karsa-purple",
  },
  {
    dot: "bg-karsa-blue",
    text: "text-karsa-blue",
  },
]


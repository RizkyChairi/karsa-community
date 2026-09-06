"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  SlidersHorizontal,
} from "lucide-react"
import { useState } from "react"

import ScrollReveal from "@/components/ui/ScrollReveal"
import { activities } from "@/constants/Kegiatan"

const categories = [
  "Semua",
  "Lingkungan",
  "Sosial",
  "Edukasi",
  "Kemanusiaan",
  "Komunitas",
]

const years = [
  "Semua", ...Array.from(new Set(activities.map((activity) => activity.date.split(" ").pop()))).sort((a, b) => Number(b) - Number(a)),]

const colors = [
  "text-karsa-green",
  "text-karsa-black",
  "text-karsa-purple",
  "text-karsa-blue",
]

export default function KegiatanPage() {
  const [category, setCategory] = useState("Semua")
  const [year, setYear] = useState("Semua")
  const [sort, setSort] = useState("Terbaru")

  const resetFilter = () => {
    setCategory("Semua")
    setYear("Semua")
    setSort("Terbaru")
  }
}
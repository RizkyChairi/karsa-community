"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { useState } from "react"

import ScrollReveal from "@/components/ui/ScrollReveal"
import { galleries } from "@/constants/Galleries"

const accentColors = [
  {
    dot: "bg-karsa-green",
    text: "text-karsa-primary",
    border: "group-hover:border-karsa-green",
    arrow: "group-hover:bg-karsa-green",
  },
  {
    dot: "bg-karsa-yellow",
    text: "text-karsa-black",
    border: "group-hover:border-karsa-yellow",
    arrow: "group-hover:bg-karsa-yellow",
  },
  {
    dot: "bg-karsa-purple",
    text: "text-karsa-purple",
    border: "group-hover:border-karsa-purple",
    arrow: "group-hover:bg-karsa-purple",
  },
  {
    dot: "bg-karsa-blue",
    text: "text-karsa-blue",
    border: "group-hover:border-karsa-blue",
    arrow: "group-hover:bg-karsa-blue",
  },
]

const categories = [
  "Semua",
  "Lingkungan",
  "Sosial",
  "Komunitas",
  "Generasi Muda",
]


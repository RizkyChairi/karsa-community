"use client"

import { useCallback, useRef, useState, useEffect } from "react"

interface DropdownOption {
  href: string
  label: string
}

interface NavLink {
  href: string
  label: string
  hasDropdown?: boolean
  options?: DropdownOption[]
}

const navLinks: NavLink[] = [
  { href: "#beranda", label: "Beranda" },
  {
    href: "#tentang",
    label: "Tentang Kami",
    hasDropdown: true,
    options: [
      { href: "#tentang", label: "Tentang KompasDesa" },
      { href: "#visi-misi", label: "Visi & Misi" },
      { href: "#kegiatan", label: "Kegiatan Kami" },
      { href: "#dampak", label: "Dampak & Kontribusi" },
    ],
  },
  { href: "#galeri", label: "Galeri" },
  { href: "#hubungi", label: "Hubungi Kami" },
]

export function Navbar() {
  const [ActiveLink, setActiveLink] = useState("#beranda");

  // Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileJelajahiOpen, setIsMobileJelajahiOpen] = useState(false)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null);
}
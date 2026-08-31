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

  // usecallback = tidak render ulang
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])

  // mobile device
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  // detect scroll move
  useEffect(() => {
    let tick = false
    const handleScroll = () => {
      if (tick) return;
      tick = true

      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20)
        tick = false
      })
    }
  })


  const handleclickOutstideDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false)
    }
  }

  const handlekeydown = (event: KeyboardEvent) => {
    if (event.key == "Escape") {
      setIsDropdownOpen(false);
      setIsMenuOpen(false);
    }
  }



}
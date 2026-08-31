"use client"

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
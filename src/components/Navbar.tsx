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
    label: "Jelajahi",
    hasDropdown: true,
    options: [
      { href: "#tentang", label: "Mengenal KompasDesa" },
      { href: "#alurweb", label: "Bagaimana Kami Bekerja" },
      { href: "#komoditaslist", label: "Jelajah Komoditas" },
      { href: "#keamanan", label: "Mengapa KompasDesa" },
    ],
  },
  { href: "#layanan", label: "Layanan" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "/kompas-desa/contact", label: "Kontak" },
]
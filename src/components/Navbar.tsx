"use client"

import { useCallback, useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

interface DropdownOption {
  href: string
  label: string
}

interface NavLink {
  href: string
  label: string
  color: string
  hasDropdown?: boolean
  options?: DropdownOption[]
}

// Properti "color" yang acak dihapus agar warna lebih terpusat dan konsisten
const navLinks: NavLink[] = [
  { href: "#beranda", label: "Beranda", color: "#9bdb35" },
  {
    href: "#tentang",
    label: "Tentang Kami",
    color: "#5076ff",
    hasDropdown: true,
    options: [
      { href: "#tentang", label: "Tentang Karsa" },
      { href: "#visi-misi", label: "Visi & Misi" },
      { href: "#kegiatan", label: "Kegiatan Kami" },
      { href: "#dampak", label: "Dampak & Kontribusi" },
    ],
  },
  { href: "#galeri", label: "Galeri", color: "#b764ff" },
  { href: "#hubungi", label: "Hubungi Kami", color: "#ecab1d" },
]

export function Navbar() {
  const [activeLink, setActiveLink] = useState("#beranda")

  // Mobile state
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileJelajahiOpen, setIsMobileJelajahiOpen] = useState(false)

  // Desktop Dropdown & Scroll state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])

  // Lock scroll saat menu mobile terbuka
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

  // Scroll listener & event listener click outside / keydown
  useEffect(() => {
    let tick = false
    const handleScroll = () => {
      if (tick) return
      tick = true

      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20)
        tick = false
      })
    }

    const handleclickOutsideDropdown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    const handlekeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false)
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("mousedown", handleclickOutsideDropdown)
    document.addEventListener("keydown", handlekeydown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleclickOutsideDropdown)
      document.removeEventListener("keydown", handlekeydown)
    }
  }, [])

  // Intersection Observer untuk scrollspy
  useEffect(() => {
    const sectionIds = [
      "beranda",
      "tentang",
      "visi-misi",
      "kegiatan",
      "dampak",
      "galeri",
      "hubungi",
    ]

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`)
          }
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setIsDropdownOpen(false)
    if (isMenuOpen) toggleMenu()
  }

  const isJelajahiActive =
    activeLink === "#tentang" ||
    activeLink === "#visi-misi" ||
    activeLink === "#kegiatan" ||
    activeLink === "#dampak"

  // Side Line
  const sideLineBaseClasses = "relative pl-3 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-[5px] after:bg-[var(--line-color)] after:transition-all after:duration-300 after:rounded-full"
  return (
    <>
      <nav
        className={`
          fixed left-1/2 -translate-x-1/2 z-[999] 
          px-6 sm:px-8 flex items-center justify-between gap-6 rounded-[14px] 
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

          ${isScrolled
            ? "top-3 sm:top-4 w-[92%] sm:w-[88%] md:w-[85%] lg:w-[1112px] py-2.5 md:py-4 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] shadow-sm"
            : "top-6 w-[95%] md:w-[92%] lg:w-[1200px] py-4 bg-white "
          }
        `}
      >
        <div className="flex items-center gap-4 font-semibold text-xl lg:text-[23px] tracking-tight whitespace-nowrap text-gray-900">
          <Image src="/karsa-logo/logo-karsa.svg" alt="karsa_logo" width={30} height={30} className="mt-0.5" />
          <p>Karsa</p>
        </div>

        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[15px]">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    aria-haspopup="menu"
                    aria-expanded={isDropdownOpen}
                    style={{ "--line-color": link.color } as React.CSSProperties}
                    className={`flex items-center gap-1.5 ${sideLineBaseClasses} 
                      ${isJelajahiActive
                        ? "text-[#025246] font-semibold after:h-[75%]"
                        : "text-gray-600 font-medium hover:text-[#025246] after:h-0 hover:after:h-[60%]"
                      }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div
                      role="menu"
                      className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-200"
                    >
                      {link.options?.map((option) => (
                        <a
                          key={option.href}
                          href={option.href}
                          role="menuitem"
                          onClick={() => handleNavClick(option.href)}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors mx-2 rounded-xl ${activeLink === option.href
                            ? "bg-[#025246]/10 text-[#025246]"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#025246]"
                            }`}
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            const isExternalOrRoute = link.href.startsWith("/")

            return isExternalOrRoute ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                style={{ "--line-color": link.color } as React.CSSProperties}
                className={`${sideLineBaseClasses} ${activeLink === link.href
                  ? "text-[#025246] font-semibold after:h-[75%]"
                  : "text-gray-600 font-medium hover:text-[#025246] after:h-0 hover:after:h-[60%]"
                  }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{ "--line-color": link.color } as React.CSSProperties}
                className={`${sideLineBaseClasses} ${activeLink === link.href
                  ? "text-[#025246] font-semibold after:h-[75%]"
                  : "text-gray-600 font-medium hover:text-[#025246] after:h-0 hover:after:h-[60%]"
                  }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>

          <Link
            href="/daftar"
            className="hidden sm:inline-flex items-center justify-center
            px-5 py-2.5 rounded-xl
            bg-[#252525] text-white
            text-sm font-semibold whitespace-nowrap
            transition-all duration-300
            hover:bg-[#171818] hover:shadow-[#025246]/20
            active:scale-95"
          >
            Gabung Komunitas
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[990] md:hidden transition-opacity duration-300"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={`fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-xl z-[999] shadow-2xl 
        transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden overflow-y-auto flex flex-col justify-between 
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div>
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <span className="font-semibold text-lg text-gray-900">Menu</span>
            <button
              onClick={toggleMenu}
              className="bg-gray-50 p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors duration-300 text-gray-500"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col py-6 px-3 gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.href} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileJelajahiOpen((prev) => !prev)}
                      className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between ${isJelajahiActive
                        ? "text-[#025246] bg-[#025246]/10"
                        : "text-gray-600 hover:text-[#025246] hover:bg-gray-50"
                        }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${isMobileJelajahiOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isMobileJelajahiOpen && (
                      <div className="flex flex-col pl-4 py-2 gap-1">
                        {link.options?.map((option) => (
                          <a
                            key={option.href}
                            href={option.href}
                            onClick={() => handleNavClick(option.href)}
                            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeLink === option.href
                              ? "text-[#025246] bg-[#025246]/10"
                              : "text-gray-600 hover:text-[#025246] hover:bg-gray-50"
                              }`}
                          >
                            - {option.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              const isExternalOrRoute = link.href.startsWith("/")

              return isExternalOrRoute ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${activeLink === link.href
                    ? "text-[#025246] bg-[#025246]/10 translate-x-1"
                    : "text-gray-600 hover:text-[#025246] hover:bg-gray-50 hover:translate-x-1"
                    }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${activeLink === link.href
                    ? "text-[#025246] bg-[#025246]/10 translate-x-1"
                    : "text-gray-600 hover:text-[#025246] hover:bg-gray-50 hover:translate-x-1"
                    }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>

        {/* CTA Button Mobile */}
        <div className="p-6 border-t border-gray-100">
          <Link
            href="/daftar"
            onClick={toggleMenu}
            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#025246] text-white text-sm font-semibold whitespace-nowrap transition-all duration-300 active:scale-95 shadow-md hover:bg-[#024036]"
          >
            Gabung Komunitas
          </Link>
        </div>
      </div>
    </>
  )
}
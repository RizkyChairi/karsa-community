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

const navLinks: NavLink[] = [
  {
    href: "#beranda",
    label: "Beranda",
    color: "#9bdb35",
  },
  {
    href: "#tentang",
    label: "Tentang Kami",
    color: "#5076ff",
    hasDropdown: true,
    options: [
      { href: "#tentang", label: "Tentang Karsa" },
      { href: "#visimisi", label: "Visi & Misi" },
      { href: "#program", label: "Program" },
      { href: "#dampak", label: "Dampak & Kontribusi" },
    ],
  },
  {
    href: "#galeri",
    label: "Galeri",
    color: "#b764ff",
  },
  {
    href: "#kegiatan",
    label: "Kegiatan",
    color: "#ecab1d",
  },
]

export function Navbar() {
  const [activeLink, setActiveLink] = useState("#beranda")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  /* Lock scroll ketika mobile menu terbuka */
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

  /* Scroll + outside click */
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

    const handleClickOutsideDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false)
        setIsMenuOpen(false)
        setIsMobileDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("mousedown", handleClickOutsideDropdown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutsideDropdown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  /* Scrollspy */
  useEffect(() => {
    const sectionIds = [
      "beranda",
      "tentang",
      "visi-misi",
      "kegiatan",
      "dampak",
      "galeri",
      "hubungi",
      "program",
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

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setIsDropdownOpen(false)
    setIsMobileDropdownOpen(false)

    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const isTentangActive = [
    "#tentang",
    "#visi-misi",
    "#program",
    "#dampak",
  ].includes(activeLink)

  const sideLineBaseClasses =
    "relative pl-3 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-[5px] after:bg-[var(--line-color)] after:transition-all after:duration-300 after:rounded-full"

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-[1000] px-6 sm:px-8 flex items-center justify-between gap-6 rounded-[14px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
          ? "top-3 sm:top-4 w-[92%] sm:w-[88%] md:w-[85%] lg:w-[1112px] py-2.5 md:py-4 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          : "top-6 w-[95%] md:w-[92%] lg:w-[1200px] py-4 bg-white"
          }`}
      >

        <div className="flex items-center gap-4 font-semibold text-xl lg:text-[23px] tracking-tight whitespace-nowrap text-gray-900">
          <Image
            src="/karsa-logo/logo-karsa.svg"
            alt="karsa_logo"
            width={30}
            height={30}
            className="mt-0.5"
          />
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
                    className={`flex items-center gap-1.5 ${sideLineBaseClasses} ${isTentangActive
                      ? "text-[#025246] font-semibold after:h-[75%]"
                      : "text-gray-600 font-medium hover:text-[#025246] after:h-0 hover:after:h-[60%]"
                      }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                        }`}
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

        <div className="flex items-center gap-2 sm:gap-6">
          {/* mobile menu */}
          <button
            onClick={toggleMenu}
            aria-label={
              isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300 cursor-pointer"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>

          <Link
            href="/daftar"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#252525] text-white text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:bg-[#171818] active:scale-95"
          >
            Gabung Komunitas
          </Link>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[9998] md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* mobile drawer */}
      <aside
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={`fixed top-0 right-0 h-dvh w-[82%] max-w-[360px] bg-white z-[10000] shadow-2xl md:hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Image
              src="/karsa-logo/logo-karsa.svg"
              alt="Karsa"
              width={30}
              height={30}
            />
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              Karsa
            </span>
          </div>

          <button
            onClick={toggleMenu}
            aria-label="Tutup menu"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.href} className="w-full">
                    <button
                      onClick={() =>
                        setIsMobileDropdownOpen((prev) => !prev)
                      }
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 ${isTentangActive
                        ? "text-[#025246] bg-[#025246]/10"
                        : "text-gray-600 hover:text-[#025246] hover:bg-gray-50"
                        }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${isMobileDropdownOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-4 mt-1 mb-2 pl-3 border-l border-gray-200 flex flex-col gap-1">
                          {link.options?.map((option) => (
                            <a
                              key={option.href}
                              href={option.href}
                              onClick={() => handleNavClick(option.href)}
                              className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${activeLink === option.href
                                ? "text-[#025246] bg-[#025246]/10 font-semibold"
                                : "text-gray-500 hover:text-[#025246] hover:bg-gray-50"
                                }`}
                            >
                              {option.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              const isExternalOrRoute = link.href.startsWith("/")

              if (isExternalOrRoute) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 ${activeLink === link.href
                      ? "text-[#025246] bg-[#025246]/10"
                      : "text-gray-600 hover:text-[#025246] hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 ${activeLink === link.href
                    ? "text-[#025246] bg-[#025246]/10"
                    : "text-gray-600 hover:text-[#025246] hover:bg-gray-50"
                    }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 bg-white">
          <Link
            href="/daftar"
            onClick={toggleMenu}
            className="w-full inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-[#252525] text-white text-sm font-semibold transition-all duration-300 active:scale-[0.98] shadow-md"
          >
            Gabung Komunitas
          </Link>
        </div>
      </aside>
    </>
  )
}
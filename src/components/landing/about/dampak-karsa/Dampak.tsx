"use client"

import Image from "next/image"
import { ArrowDown, ArrowUpRight, MapPin, Users } from "lucide-react"
import { useState } from "react"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { contributions } from "@/constants/Dampak-contributtion"

export default function DampakKarsa() {
  const [showAll, setShowAll] = useState(false)

  const visibleContributions = showAll
    ? contributions
    : contributions.slice(0, 3)

  return (
    <div className="space-y-16 sm:space-y-20 md:space-y-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal direction="up" duration={0.7}>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-karsa-green">
                Dampak & Kontribusi
              </p>

              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-karsa-black sm:text-3xl md:text-4xl">
                Setiap langkah
                <br />
                meninggalkan jejak
                <span className="text-karsa-green">.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="max-w-sm text-sm leading-relaxed text-gray-500">
                Rekam jejak perjalanan Karsa melalui berbagai kegiatan,
                tempat, dan kolaborasi yang telah dilakukan bersama.
              </p>
            </div>

          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-5xl">
        <div>
          {visibleContributions.map((item, index) => (

            <ScrollReveal
              key={item.title}
              direction="up"
              duration={0.7}
              delay={index * 0.08}
            >

              <article className="grid gap-6 border-t border-karsa-black/10 py-10 sm:py-12 md:grid-cols-12 md:gap-8">

                {/* DATE */}
                <div className="md:col-span-2">

                  <p
                    className={`text-2xl font-semibold leading-none tracking-tight ${item.accent}`}
                  >
                    {item.year}
                  </p>

                  <p className="mt-1 text-xs font-medium text-gray-400">
                    {item.month}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
                    <MapPin size={13} strokeWidth={1.6} />
                    <span>{item.location}</span>
                  </div>

                  <p className="mt-1 text-[10px] text-gray-300">
                    {item.date}
                  </p>

                </div>


                {/* PHOTO */}
                <div className="md:col-span-5">

                  <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                  </div>

                </div>


                {/* CONTENT */}
                <div className="flex flex-col justify-between md:col-span-5">

                  <div>

                    <p
                      className={`mb-3 text-[10px] font-medium uppercase tracking-[0.18em] ${item.accent}`}
                    >
                      {item.category}
                    </p>

                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-karsa-black sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                      {item.description}
                    </p>


                    {/* META */}
                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">

                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-gray-400">
                          Peserta
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">

                          <Users
                            size={14}
                            strokeWidth={1.6}
                            className={item.accent}
                          />

                          <span className="text-sm font-medium text-karsa-black">
                            {item.participants}
                          </span>

                        </div>
                      </div>


                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-gray-400">
                          Kolaborator
                        </p>

                        <p className="mt-1 text-sm font-medium text-karsa-black">
                          {item.partner}
                        </p>
                      </div>

                    </div>

                  </div>


                  {/* IMPACT */}
                  <div
                    className={`mt-7 border-l-2 ${item.border} pl-3`}
                  >

                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-gray-400">
                      Kontribusi
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-gray-500">
                      {item.impact}
                    </p>

                  </div>

                </div>

              </article>

            </ScrollReveal>

          ))}
        </div>
        {contributions.length > 3 && (
          <div className="flex justify-center border-t border-karsa-black/10 pt-8">

            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="group flex cursor-pointer items-center gap-2 text-sm font-medium text-karsa-black"
            >

              <span className="border-b border-karsa-black pb-1">
                {showAll
                  ? "Tampilkan lebih sedikit"
                  : `Lihat ${contributions.length - 3} rekam jejak lainnya`}
              </span>

              <ArrowDown
                size={16}
                strokeWidth={1.7}
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
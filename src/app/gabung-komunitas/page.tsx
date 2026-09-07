"use client"

import { useState } from "react"
import { ArrowUpRight, Check, Loader2 } from "lucide-react"

export default function JoinForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsSubmitting(true)

    // TODO: Sambung API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-15">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          <div className="lg:sticky lg:top-24">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-karsa-yellow" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-karsa-black/60">
                Bergabung Bersama Kami
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-karsa-black md:text-6xl">
              Mari menjadi bagian dari{" "}
              <span className="relative inline-block">
                <span className="relative z-10">
                  aksi nyata.
                </span>

                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-karsa-yellow/70 md:h-4"
                />
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-karsa-black/50 md:text-base">
              Punya semangat untuk berkontribusi dan membuat
              perubahan bersama? Ceritakan sedikit tentang dirimu
              kepada kami.
            </p>

            {/* Small Info */}
            <div className="mt-12 border-t border-karsa-black/10 pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-karsa-black/40">
                Komunitas Karsa
              </p>

              <p className="mt-3 max-w-sm text-sm leading-6 text-karsa-black/55">
                Tempat bagi mereka yang ingin bergerak,
                berkolaborasi, dan menciptakan dampak positif
                bagi lingkungan sekitar.
              </p>
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}


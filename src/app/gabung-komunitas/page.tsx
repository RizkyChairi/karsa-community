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

          {/* RIGHT — FORM */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="
                rounded-[2rem]
                border border-karsa-black/10
                bg-white
                p-6
                shadow-[0_24px_80px_rgba(0,0,0,0.07)]
                md:p-9
              "
            >

              {/* Form Header */}
              <div className="mb-9">
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-karsa-black">
                      Formulir Pendaftaran
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-karsa-black/45">
                      Isi data berikut untuk menunjukkan ketertarikanmu
                      bergabung bersama kami.
                    </p>
                  </div>

                  <p className="shrink-0 text-xs text-karsa-black/40">
                    <span className="font-semibold text-karsa-yellow">*</span>{" "}
                    Wajib diisi
                  </p>

                </div>
              </div>

              {/* FORM FIELDS */}
              <div className="space-y-6">

                {/* Nama */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2.5 block text-sm font-medium text-karsa-black"
                  >
                    Nama Lengkap{" "}
                    <span className="text-karsa-yellow">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    required
                    className="
                      h-12 w-full rounded-xl
                      border border-karsa-black/10
                      bg-[#fafafa]
                      px-4
                      text-sm text-karsa-black
                      outline-none
                      placeholder:text-karsa-black/30
                      transition-all
                      focus:border-karsa-yellow
                      focus:bg-white
                      focus:ring-4
                      focus:ring-karsa-yellow/10
                    "
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid gap-6 md:grid-cols-2">

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-sm font-medium text-karsa-black"
                    >
                      Email{" "}
                      <span className="text-karsa-yellow">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nama@email.com"
                      required
                      className="
                        h-12 w-full rounded-xl
                        border border-karsa-black/10
                        bg-[#fafafa]
                        px-4
                        text-sm text-karsa-black
                        outline-none
                        placeholder:text-karsa-black/30
                        transition-all
                        focus:border-karsa-yellow
                        focus:bg-white
                        focus:ring-4
                        focus:ring-karsa-yellow/10
                      "
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2.5 block text-sm font-medium text-karsa-black"
                    >
                      Nomor HP{" "}
                      <span className="text-karsa-yellow">*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      required
                      className="
                        h-12 w-full rounded-xl
                        border border-karsa-black/10
                        bg-[#fafafa]
                        px-4
                        text-sm text-karsa-black
                        outline-none
                        placeholder:text-karsa-black/30
                        transition-all
                        focus:border-karsa-yellow
                        focus:bg-white
                        focus:ring-4
                        focus:ring-karsa-yellow/10
                      "
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-sm font-medium text-karsa-black"
                  >
                    Mengapa ingin bergabung?{" "}
                    <span className="text-karsa-yellow">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Ceritakan alasan atau hal yang ingin kamu lakukan bersama Komunitas Karsa..."
                    required
                    className="
                      w-full resize-none rounded-xl
                      border border-karsa-black/10
                      bg-[#fafafa]
                      px-4 py-3.5
                      text-sm leading-6 text-karsa-black
                      outline-none
                      placeholder:text-karsa-black/30
                      transition-all
                      focus:border-karsa-yellow
                      focus:bg-white
                      focus:ring-4
                      focus:ring-karsa-yellow/10
                    "
                  />
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-8 border-t border-karsa-black/10 pt-6">

                <p className="mb-5 text-xs leading-5 text-karsa-black/40">
                  Data yang kamu kirimkan digunakan untuk keperluan
                  komunikasi terkait Komunitas Karsa.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="
                    group
                    flex h-13 w-full items-center
                    justify-center gap-3
                    rounded-xl
                    bg-karsa-black
                    px-6
                    text-sm font-semibold
                    text-white
                    transition-all
                    hover:bg-karsa-yellow
                    hover:text-karsa-black
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {isSubmitting ? (
                    <>
                      Mengirim
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : isSuccess ? (
                    <>
                      Pendaftaran Terkirim
                      <Check className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Kirim Pendaftaran

                      <ArrowUpRight
                        className="
                          h-4 w-4
                          transition-transform
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </>
                  )}
                </button>

              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}


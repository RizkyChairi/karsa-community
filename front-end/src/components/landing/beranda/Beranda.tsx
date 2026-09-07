import { ArrowUpRight, Images, UsersRound } from "lucide-react"
import ScrollReavel from "@/components/ui/ScrollReveal"
import Counter from "@/components/ui/Counter";

export function Beranda() {
  const layoutcard = "py-3 px-4 rounded-xl";
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-5">
        {/* Heading */}

        <div className="heading-title flex flex-col items-center justify-center text-center font-semibold">
          <ScrollReavel delay={0.2} direction="up" duration={1}>
            <h1 className="text-3xl leading-snug tracking-tight md:text-4xl">
              Mengubah Kepedulian
            </h1>
          </ScrollReavel>
          <ScrollReavel delay={0.4} direction="up">
            <h1 className="text-2xl leading-normal tracking-tight md:text-3xl">
              Menjadi Aksi Nyata untuk Lingkungan
            </h1>
          </ScrollReavel>
        </div>

        {/* Button */}
        <ScrollReavel delay={0.4} direction="up">
          <div className="mt-3 flex justify-center gap-4 py-5">
            {/* Dokumentasi */}
            <button
              type="button"
              className="group flex cursor-pointer items-center gap-1.5 rounded-md bg-[#252525] px-3 py-1.5 text-sm font-medium text-[#fefeff] transition-all duration-300 hover:bg-[#333333] hover:gap-2"
            >
              <Images
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              <span>Dokumentasi</span>
            </button>
            {/* Lihat Komunitas */}
            <button
              type="button"
              className="group flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[#0867C9] transition-all duration-300 hover:gap-2 hover:text-[#0659ac]"
            >
              <span>Lihat Komunitas</span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </ScrollReavel>
        {/* Cards */}
        <div className="card-title px-4 py-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 font-bold sm:grid-cols-2 lg:grid-cols-5">

            {/* Card 1 — Anggota */}
            <ScrollReavel delay={0.4} direction="up">
              <div className="card-1">
                <div
                  className={`item-1 bg-[#9BDB35] text-black ${layoutcard} h-32 flex flex-col justify-center relative overflow-hidden`}
                >
                  <p className="text-sm font-bold uppercase tracking-wider opacity-70 mb-1">
                    Telah Berkolaborasi
                  </p>

                  <h2 className="text-5xl font-black tracking-tighter">
                    <Counter from={0} to={7} duration={3400} />
                  </h2>

                  <p className="text-xs font-medium opacity-80 mt-1">
                    Mitra & Partner
                  </p>
                </div>
              </div>
            </ScrollReavel>

            {/* Card 5 — Kegiatan */}
            <ScrollReavel delay={0.5} direction="down">
              <div className="card-5">
                <div className={`item-5 bg-black text-white ${layoutcard} h-48 relative overflow-hidden flex flex-col justify-center`}>
                  <p className="text-sm font-bold uppercase tracking-wider text-white/60 mb-2">
                    Kegiatan
                  </p>
                  <h2 className="text-6xl font-black tracking-tighter mb-2">
                    32
                  </h2>
                  <p className="text-sm font-medium text-white/70 leading-relaxed">
                    Berhasil dilaksanakan <br /> sepanjang periode aktif
                  </p>
                </div>
              </div>
            </ScrollReavel>

            {/* Card 3 — Program Kerja */}
            <ScrollReavel delay={0.6} direction="up">
              <div className="card-3">
                <div className={`item-3 bg-[#0867C9] text-white ${layoutcard} h-70 relative overflow-hidden`}>
                  {/* Teks mengalir natural dari atas */}
                  <div className="pt-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-white/70 mb-3">
                      Program Kerja
                    </p>
                    <h2 className="text-7xl font-black tracking-tighter mb-4">
                      <Counter from={0} to={6} duration={3000}></Counter>
                    </h2>
                    <p className="text-sm font-medium text-white/90 leading-relaxed pr-2">
                      Program kerja yang dirancang untuk mendorong kemajuan dan perkembangan organisasi.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReavel>

            {/* Card 4 — Pencapaian */}
            <ScrollReavel delay={0.7} direction="down">
              <div className="card-4">
                <div className={`item-4 bg-[#B764FF] text-white ${layoutcard} h-64 relative overflow-hidden`}>
                  <div className="pt-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-white/70 mb-3">
                      Pencapaian
                    </p>
                    <h2 className="text-7xl font-black tracking-tighter mb-4">
                      24
                    </h2>
                    <p className="text-sm font-medium text-white/90 leading-relaxed pr-2">
                      Prestasi membanggakan dan pencapaian yang berhasil diraih bersama seluruh tim sejauh ini.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReavel>

            {/* Card 2 — Statistik Mini */}
            <ScrollReavel delay={0.8} direction="up">
              <div className="card-2 flex flex-col gap-3">

                {/* Anggota Aktif */}
                <div className={`item-2 bg-black text-white ${layoutcard} h-28 flex flex-col justify-center`}>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                    Anggota Aktif
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-4xl font-black tracking-tight"><Counter from={30} to={97} duration={3000} suffix="+"></Counter></h3>
                    {/* Animasi titik hijau menyala */}
                    <UsersRound size={20} />
                  </div>
                </div>

                {/* Kegiatan Tahun Ini */}
                <div className={`item-2 bg-[#fdfdfd] border border-[#d6d5d5] ${layoutcard} h-20 flex items-center justify-between`}>
                  <p className="text-sm font-medium text-gray-500">
                    Kegiatan Tahun Ini
                  </p>
                  <span className="text-2xl font-black text-black">
                    4
                  </span>
                </div>

                {/* Tahun Berdiri */}
                <div className={`item-2 bg-[#fdfdfd] border border-[#d6d5d5] ${layoutcard} h-20 flex items-center justify-between`}>
                  <p className="text-sm font-medium text-gray-500">
                    Tahun Berdiri
                  </p>
                  <span className="text-xl font-bold">
                    2023
                  </span>
                </div>

              </div>
            </ScrollReavel>
          </div>
        </div>
      </div>
    </div >
  )
}
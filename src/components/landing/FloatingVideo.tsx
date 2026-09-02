"use client"

import { useState } from "react"
import { X, Play } from "lucide-react"

export default function FloatingVideo() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="group relative w-[248px] overflow-hidden rounded-2xl bg-zinc-950 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 hover:border-white/20">

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close video"
          className="
            absolute right-2 top-2 z-50
            flex h-7 w-7 items-center justify-center
            rounded-full bg-black/60 text-white/80
            opacity-0 backdrop-blur-md
            transition-all duration-200
            group-hover:opacity-100
            hover:bg-black/80 hover:text-white hover:scale-105
          "
        >
          <X size={14} />
        </button>

        {/* Thumbnail */}
        <button
          aria-label="Play video"
          className="
            relative block
            h-[140px] w-full
            overflow-hidden
            text-left
          "
        >
          <img
            src="https://img.youtube.com/vi/M_OauHnAFc8/maxresdefault.jpg"
            alt="Komunitas Kami"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
          />

          {/* Gradient */}
          <div className="
            absolute inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          " />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="
              relative flex h-11 w-11
              items-center justify-center
              rounded-full
              bg-white/15
              backdrop-blur-md
              border border-white/30
              text-white
              shadow-lg
              transition-all duration-300
              group-hover:scale-110
            ">
              <Play
                size={16}
                fill="white"
                className="ml-0.5"
              />
            </div>
          </div>

          {/* Bottom Info */}
          <div className="
            absolute
            bottom-3
            left-3
            right-3
            flex
            items-center
            justify-between
          ">
            <span className="
              text-xs
              font-medium
              text-white/90
              drop-shadow-md
              tracking-wide
            ">
              Komunitas Kami
            </span>

            <span className="
              text-[10px]
              font-medium
              text-white/40
            ">
              Present- Karsa
            </span>
          </div>
        </button>

      </div>
    </div>
  )
}
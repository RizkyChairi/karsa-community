"use client"

import { useId } from "react"

interface DotPatternProps {
  size?: number
  color?: string
  spacing?: number
  fade?: boolean
  className?: string
}

export default function DotPattern({
  size = 1.3,
  color = "#0867C9",
  spacing = 24,
  fade = true,
  className = "",
}: DotPatternProps) {
  const id = useId()

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        WebkitMaskImage: fade
          ? "linear-gradient(to bottom, transparent 0%, black 30%, black 80%, transparent 100%)"
          : undefined,
        maskImage: fade
          ? "linear-gradient(to bottom, transparent 0%, black 30%, black 80%, transparent 100%)"
          : undefined,
      }}
    >
      <svg
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={id}
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={spacing / 2}
              cy={spacing / 2}
              r={size}
              fill={color}
              opacity={0.2}
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={`url(#${id})`}
        />
      </svg>
    </div>
  )
}
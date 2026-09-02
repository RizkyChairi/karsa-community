"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function Counter({
  from = 0,
  to,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(from)
  const counterRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const element = counterRef.current

    if (!element) return

    let animationFrame: number
    let startTime: number | null = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const animate = (currentTime: number) => {
          if (startTime === null) {
            startTime = currentTime
          }

          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)

          const progressEase =
            1 - Math.pow(1 - progress, 4)

          const value =
            from + (to - from) * progressEase

          setCount(Math.floor(value))

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate)
          } else {
            setCount(to)
          }
        }

        animationFrame = requestAnimationFrame(animate)

        observer.unobserve(element)
      },
      {
        threshold: 0.3,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [from, to, duration])

  return (
    <span
      ref={counterRef}
      className={className}
    >
      {prefix}
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  )
}
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
  duration = 1500,
  suffix = "",
  prefix = "",
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(from)
  const counterRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const element = counterRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        let startTime: number | null = null

        const animate = (currentTime: number) => {
          if (!startTime) {
            startTime = currentTime
          }

          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          )

          const currentValue = Math.floor(
            from + (to - from) * progress
          )

          setCount(currentValue)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(to)
          }
        }

        requestAnimationFrame(animate)

        observer.unobserve(element)
      },
      {
        threshold: 0.3,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [from, to, duration])

  return (
    <span ref={counterRef} className={className}>
      {prefix}
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  )
}
"use client"

import { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

const morphTime = 1.5
const cooldownTime = 0.5
// The threshold filter turns any blur into the gooey morph, so a small radius
// looks identical to a large one. It is capped because blur cost grows with
// the radius squared, and because a 100px radius inflates the element's paint
// region enough to make it a spuriously large (and late) LCP candidate.
const maxBlur = 12
// The morph runs over 1.5s, so re-rasterising the SVG threshold filter 60
// times a second is wasted work. 30fps is indistinguishable here and halves
// the most expensive paint on the page.
const targetFps = 30

const useMorphingText = (texts: string[]) => {
  const textIndexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const timeRef = useRef(new Date())

  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current]
      if (!current1 || !current2) return

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, maxBlur)}px)`
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

      const invertedFraction = 1 - fraction
      current1.style.filter = `blur(${Math.min(
        8 / invertedFraction - 8,
        maxBlur
      )}px)`
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`

      current1.textContent = texts[textIndexRef.current % texts.length]
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length]
    },
    [texts]
  )

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current
    cooldownRef.current = 0

    let fraction = morphRef.current / morphTime

    if (fraction > 1) {
      cooldownRef.current = cooldownTime
      fraction = 1
    }

    setStyles(fraction)

    if (fraction === 1) {
      textIndexRef.current++
    }
  }, [setStyles])

  const doCooldown = useCallback(() => {
    morphRef.current = 0
    const [current1, current2] = [text1Ref.current, text2Ref.current]
    if (current1 && current2) {
      current2.style.filter = "none"
      current2.style.opacity = "100%"
      current1.style.filter = "none"
      current1.style.opacity = "0%"
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Honour reduced motion: leave the server-rendered first role in place.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let animationFrameId: number
    let isInView = false
    let lastFrame = 0
    const frameInterval = 1000 / targetFps

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting
      },
      { threshold: 0 }
    )
    observer.observe(container)

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate)

      // The blur filter is the most expensive paint on the page. Do not run
      // it while scrolled past the hero or while the tab is in the background.
      if (!isInView || document.hidden) {
        timeRef.current = new Date()
        return
      }
      if (now - lastFrame < frameInterval) return
      lastFrame = now

      const newTime = new Date()
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000
      timeRef.current = newTime

      cooldownRef.current -= dt

      if (cooldownRef.current <= 0) doMorph()
      else doCooldown()
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [doMorph, doCooldown])

  return { text1Ref, text2Ref, containerRef }
}

interface MorphingTextProps {
  className?: string
  texts: string[]
}

const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 250 -100"
        />
      </filter>
    </defs>
  </svg>
)

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
}) => {
  const { text1Ref, text2Ref, containerRef } = useMorphingText(texts)

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative mx-auto w-full max-w-3xl text-center filter-[url(#threshold)_blur(0.1px)]",
        className
      )}
    >
      {/* Both spans render their text server-side and text1 starts fully
          opaque and unblurred, so the largest contentful paint lands on real
          text immediately instead of waiting for the animation to settle. */}
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        style={{ opacity: "100%" }}
        ref={text1Ref}
      >
        {texts[0]}
      </span>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        style={{ opacity: "0%" }}
        ref={text2Ref}
      >
        {texts[1 % texts.length]}
      </span>
      <SvgFilters />
    </div>
  )
}

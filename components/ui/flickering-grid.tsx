"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  width?: number
  height?: number
  className?: string
  maxOpacity?: number
  /** Frames per second to redraw at. The flicker is random, so it reads the
   * same well below 60fps while costing a fraction of the main thread. */
  fps?: number
  /** Upper bound on devicePixelRatio. Phones report 3, which triples the
   * pixels this canvas has to fill for no visible gain on a background. */
  maxDpr?: number
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  width,
  height,
  className,
  maxOpacity = 0.3,
  fps = 20,
  maxDpr = 1.5,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInViewRef = useRef(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  const memoizedColor = useMemo(() => {
    const toRGB = (color: string) => {
      if (typeof window === "undefined") return "rgb(0, 0, 0)"
      const canvas = document.createElement("canvas")
      canvas.width = canvas.height = 1
      const ctx = canvas.getContext("2d")
      if (!ctx) return "rgb(255, 0, 0)"
      ctx.fillStyle = color
      ctx.fillRect(0, 0, 1, 1)
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data)
      return `rgb(${r}, ${g}, ${b})`
    }
    return toRGB(color)
  }, [color])

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      const cols = Math.floor(width / (squareSize + gridGap))
      const rows = Math.floor(height / (squareSize + gridGap))

      const squares = new Float32Array(cols * rows)
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity
      }

      return { cols, rows, squares, dpr }
    },
    [squareSize, gridGap, maxOpacity, maxDpr]
  )

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity
        }
      }
    },
    [flickerChance, maxOpacity]
  )

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height)
      // Set the paint colour once and vary only globalAlpha. Assigning a
      // number per square is far cheaper than building and re-parsing an
      // "rgba(...)" string for every cell on every frame.
      ctx.fillStyle = memoizedColor
      const step = (squareSize + gridGap) * dpr
      const size = squareSize * dpr

      for (let i = 0; i < cols; i++) {
        const x = i * step
        const colOffset = i * rows
        for (let j = 0; j < rows; j++) {
          const opacity = squares[colOffset + j]
          if (opacity <= 0.01) continue
          ctx.globalAlpha = opacity
          ctx.fillRect(x, j * step, size, size)
        }
      }
      ctx.globalAlpha = 1
    },
    [memoizedColor, squareSize, gridGap]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    let animationFrameId: number
    let gridParams: ReturnType<typeof setupCanvas>

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth
      const newHeight = height || container.clientHeight
      setCanvasSize({ width: newWidth, height: newHeight })
      gridParams = setupCanvas(canvas, newWidth, newHeight)
    }

    updateCanvasSize()

    const frameInterval = 1000 / fps
    let lastDraw = 0
    let lastTime = performance.now()

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate)

      // Skip entirely when scrolled away or the tab is backgrounded.
      if (!isInViewRef.current || document.hidden) {
        lastTime = time
        return
      }
      if (time - lastDraw < frameInterval) return

      const deltaTime = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time
      lastDraw = time

      updateSquares(gridParams.squares, deltaTime)
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr
      )
    }

    const drawOnce = () => {
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr
      )
    }

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
      if (reduceMotion) drawOnce()
    })
    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting
      },
      { threshold: 0 }
    )
    intersectionObserver.observe(canvas)

    if (reduceMotion) {
      // Render a single static frame and never schedule another.
      drawOnce()
    } else {
      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [setupCanvas, updateSquares, drawGrid, width, height, fps])

  return (
    <div
      ref={containerRef}
      className={cn(`h-full w-full ${className}`)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  )
}

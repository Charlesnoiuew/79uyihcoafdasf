import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: -200, y: -200 })
  const ring = useRef({ x: -200, y: -200 })
  const raf = useRef(null)
  const isHover = useRef(false)

  useEffect(() => {
    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onOver = e => {
      const el = e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]')
      if (el && !isHover.current) {
        isHover.current = true
        ringRef.current?.classList.add('cursor-ring--hover')
        dotRef.current?.classList.add('cursor-dot--hover')
      }
    }

    const onOut = e => {
      const el = e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]')
      if (el && isHover.current) {
        isHover.current = false
        ringRef.current?.classList.remove('cursor-ring--hover')
        dotRef.current?.classList.remove('cursor-dot--hover')
      }
    }

    const onLeave = () => {
      dotRef.current?.classList.add('cursor--out')
      ringRef.current?.classList.add('cursor--out')
    }

    const onEnter = () => {
      dotRef.current?.classList.remove('cursor--out')
      ringRef.current?.classList.remove('cursor--out')
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

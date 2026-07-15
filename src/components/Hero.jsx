import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className={`hero ${loaded ? 'hero--loaded' : ''}`}>

      <div className="hero__bg">
        <div className="hero__bg-line hero__bg-line--1" />
        <div className="hero__bg-line hero__bg-line--2" />
        <div className="hero__bg-line hero__bg-line--3" />
        <div className="hero__bg-glow" />
      </div>

      <div className="hero__layout">

        <div className="hero__body">
          <div className="hero__title-area">
            <div className="hero__serif-line">
              <span className="hero__serif-word">Dream</span>
              <span className="hero__serif-word hero__serif-word--em"> In</span>
            </div>
            <div className="hero__display-line">
              <span className="hero__display-word">COLOR</span>
            </div>
            <div className="hero__display-line hero__display-line--2">
              <span className="hero__display-word-sm">ENTERTAINMENT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

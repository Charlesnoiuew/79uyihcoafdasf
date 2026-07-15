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
            <div className="hero__main-line">
              <span className="hero__main-word">DREAM IN COLOR</span>
            </div>
            <div className="hero__sub-line">
              <span className="hero__sub-word">ENTERTAINMENT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

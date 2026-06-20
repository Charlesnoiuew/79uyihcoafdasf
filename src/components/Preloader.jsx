import { useEffect, useState } from 'react'
import './Preloader.css'

const LINES = ['DREAM', 'IN', 'COLOR']

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('enter') // enter → hold → exit → done

  useEffect(() => {
    // Lines reveal in: 0ms
    // Hold: 1600ms
    // Exit curtain: 500ms
    // Fire onComplete: 2200ms

    const t1 = setTimeout(() => setPhase('hold'), 100)
    const t2 = setTimeout(() => setPhase('exit'), 1800)
    const t3 = setTimeout(() => {
      setPhase('done')
      onComplete?.()
    }, 2400)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  if (phase === 'done') return null

  return (
    <div className={`pl pl--${phase}`} aria-hidden>
      <div className="pl__curtain" />

      <div className="pl__content">
        <div className="pl__lines">
          {LINES.map((word, i) => (
            <div key={word} className="pl__line-wrap">
              <span
                className="pl__line"
                style={{ transitionDelay: `${0.05 + i * 0.12}s` }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>

        <div className="pl__sub-wrap">
          <span className="pl__sub" style={{ transitionDelay: '0.42s' }}>
            Entertainment · Claudia Rezir
          </span>
        </div>

        <div className="pl__bar-wrap">
          <div className="pl__bar" />
        </div>
      </div>
    </div>
  )
}

import './Marquee.css'

export default function Marquee({ text, repeat = 8, speed = 40, invert = false }) {
  const items = Array.from({ length: repeat }, (_, i) => i)

  return (
    <div className={`marquee-band ${invert ? 'marquee-band--invert' : ''}`}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {items.map(i => (
          <span key={i} className="marquee-item">
            {text}
            <span className="marquee-sep">—</span>
          </span>
        ))}
      </div>
      <div className="marquee-track marquee-track--dupe" style={{ animationDuration: `${speed}s` }} aria-hidden>
        {items.map(i => (
          <span key={i} className="marquee-item">
            {text}
            <span className="marquee-sep">—</span>
          </span>
        ))}
      </div>
    </div>
  )
}

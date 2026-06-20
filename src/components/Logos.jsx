import './Logos.css'

const logos = [
  { name: 'Interscope Records', style: 'serif' },
  { name: 'Republic Records', style: 'display' },
  { name: 'Atlantic Records', style: 'serif' },
  { name: 'Quality Control', style: 'display' },
  { name: 'EMPIRE', style: 'display' },
  { name: 'Maybach Music Group', style: 'serif' },
  { name: 'Def Jam', style: 'display' },
  { name: 'Spotify', style: 'serif' },
  { name: 'Apple Music', style: 'serif' },
  { name: 'Tidal', style: 'display' },
  { name: 'Audiomack', style: 'display' },
  { name: 'Vevo', style: 'serif' },
  { name: 'Hot 97', style: 'display' },
  { name: 'Rolling Loud', style: 'display' },
  { name: 'Billboard', style: 'serif' },
  { name: 'BET', style: 'display' },
]

const doubled = [...logos, ...logos]

export default function Logos() {
  return (
    <div className="logos-strip">
      <div className="logos-strip__label">Worked With</div>
      <div className="logos-strip__track-wrap">
        <div className="logos-strip__track">
          {doubled.map((l, i) => (
            <span key={i} className={`logos-strip__item logos-strip__item--${l.style}`}>
              {l.name}
              <span className="logos-strip__dot" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

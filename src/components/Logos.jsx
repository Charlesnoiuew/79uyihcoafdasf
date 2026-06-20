import './Logos.css'

const logos = [
  { src: '/images/png-transparent-atlantic-records-hd-logo.png', alt: 'Atlantic Records' },
  { src: '/images/united-masters-review-930x562-1.webp', alt: 'United Masters' },
  { src: '/images/Dream-Chasers-Records-Logo.jpg', alt: 'Dream Chasers Records' },
]

export default function Logos() {
  return (
    <div className="logos-strip">
      <div className="logos-strip__label">Worked With</div>
      <div className="logos-strip__list">
        {logos.map(({ src, alt }) => (
          <div key={alt} className="logos-strip__item">
            <img src={src} alt={alt} className="logos-strip__img" />
          </div>
        ))}
      </div>
    </div>
  )
}

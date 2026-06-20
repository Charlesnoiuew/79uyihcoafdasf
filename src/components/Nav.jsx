import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Founder', href: '#founder' },
  { label: 'Connect', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#hero" className="nav__logo">
        <img src="/images/diclogo.png" alt="Dream In Color Entertainment" className="nav__logo-img" />
        <div className="nav__logo-text">
          <span className="nav__logo-main">DREAM IN COLOR</span>
          <span className="nav__logo-sub">ENTERTAINMENT</span>
        </div>
      </a>

      <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button className={`nav__burger ${open ? 'nav__burger--open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}

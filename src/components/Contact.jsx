import { useInView } from '../hooks'
import './Contact.css'

export default function Contact() {
  const [heroRef, heroInView] = useInView()

  return (
    <section id="contact" className="contact">

      {/* ── Hero panel ── */}
      <div className="contact__hero" ref={heroRef}>
        <div className="contact__hero-glow" />
        <div className="contact__hero-lines">
          <span /><span /><span />
        </div>
        <div className="container contact__hero-inner">
          <div className={`contact__hero-left animate-on-scroll from-left ${heroInView ? 'visible' : ''}`}>
            <span className="section-tag">Let's Work</span>
            <div className="contact__hero-title">
              <h2 className="contact__hero-heading">LET'S WORK</h2>
              <p className="contact__hero-serif"><em>together.</em></p>
            </div>
          </div>

          <div className={`contact__hero-right animate-on-scroll from-right ${heroInView ? 'visible' : ''}`} style={{ transitionDelay: '0.18s' }}>
            <p className="body-text" style={{ maxWidth: 420, marginBottom: 52 }}>
              Ready to elevate your career? Every partnership starts with a vibe check
              to make sure it's mutually beneficial. Reach out and let's connect.
            </p>

            <div className="contact__info-stack">
              <ContactInfo
                icon={<EnvelopeIcon />}
                label="Email"
                value="Vibes@DreamInColor.com"
                href="mailto:Vibes@DreamInColor.com"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            <div className="site-footer__brand">
              <span className="site-footer__logo">DREAM IN COLOR</span>
              <span className="site-footer__tagline">Dream In Color Entertainment</span>
            </div>
            <nav className="site-footer__nav">
              {['#about', '#services', '#case-studies', '#founder', '#contact'].map((href, i) => (
                <a key={href} href={href} className="site-footer__nav-link">
                  {['About', 'Services', 'Work', 'Founder', 'Contact'][i]}
                </a>
              ))}
            </nav>
          </div>
          <div className="site-footer__bottom">
            <span className="site-footer__copy">© Dream In Color Entertainment. All rights reserved.</span>
          </div>
        </div>
      </footer>

    </section>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  )
}

function ContactInfo({ icon, label, value, href }) {
  return (
    <div className="contact__info-item">
      <span className="contact__info-icon">{icon}</span>
      <div className="contact__info-text">
        <span className="contact__info-label">{label}</span>
        {href ? (
          <a href={href} className="contact__info-value contact__info-value--link">{value}</a>
        ) : (
          <span className="contact__info-value">{value}</span>
        )}
      </div>
    </div>
  )
}

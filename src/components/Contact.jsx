import { useState } from 'react'
import { useInView } from '../hooks'
import './Contact.css'

const types = ['Artist', 'Manager', 'Label', 'Brand', 'Other']

export default function Contact() {
  const [heroRef, heroInView] = useInView()
  const [formRef, formInView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

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
            <h2 className="contact__hero-heading">
              LET'S<br />WORK
            </h2>
            <p className="contact__hero-serif">
              <em>together.</em>
            </p>
          </div>

          <div className={`contact__hero-right animate-on-scroll from-right ${heroInView ? 'visible' : ''}`} style={{ transitionDelay: '0.18s' }}>
            <p className="body-text" style={{ maxWidth: 420, marginBottom: 52 }}>
              Ready to elevate your career? Every partnership starts with a vibe check
              to make sure it's mutually beneficial. Reach out and let's connect.
            </p>

            <div className="contact__info-stack">
              <ContactInfo icon="P" label="Phone" value="(347) 525-5451" href="tel:3475255451" />
              <ContactInfo icon="E" label="Email" value="claudia@dreamincolor.com" href="mailto:claudia@dreamincolor.com" />
            </div>
          </div>
        </div>

        <div className="contact__hero-scroll-hint">
          <span className="contact__scroll-line" />
          <span className="contact__scroll-label">Send a message</span>
        </div>
      </div>

      {/* ── Form panel ── */}
      <div className="contact__form-section" ref={formRef}>
        <div className="container">
          <div className={`contact__form-header animate-on-scroll ${formInView ? 'visible' : ''}`}>
            <h3 className="contact__form-title">Start the Conversation</h3>
            <span className="contact__form-tag">Response within 48 hrs</span>
          </div>

          {sent ? (
            <div className="contact__success">
              <div className="contact__success-ring">
                <span className="contact__success-check">✓</span>
              </div>
              <h3 className="contact__success-heading">Message Received.</h3>
              <p className="contact__success-sub">We'll be in touch to schedule the vibe check.</p>
            </div>
          ) : (
            <form
              className={`contact__form animate-on-scroll ${formInView ? 'visible' : ''}`}
              style={{ transitionDelay: '0.12s' }}
              onSubmit={handleSubmit}
            >
              <div className="contact__row">
                <Field
                  name="name" label="Your Name" type="text"
                  value={form.name} onChange={handleChange}
                  focused={focused} setFocused={setFocused}
                  required
                />
                <Field
                  name="email" label="Email Address" type="email"
                  value={form.email} onChange={handleChange}
                  focused={focused} setFocused={setFocused}
                  required
                />
              </div>

              <div className="contact__type-row">
                <span className="contact__type-label">I am a:</span>
                <div className="contact__type-btns">
                  {types.map(t => (
                    <button
                      key={t} type="button"
                      className={`contact__type-btn ${form.type === t ? 'contact__type-btn--active' : ''}`}
                      onClick={() => setForm(f => ({ ...f, type: t }))}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <Field
                name="message" label="Tell us about your goals" type="textarea"
                value={form.message} onChange={handleChange}
                focused={focused} setFocused={setFocused}
                required
              />

              <div className="contact__form-footer">
                <button type="submit" className="contact__submit">
                  <span>Send Message</span>
                  <span className="contact__submit-arrow">→</span>
                </button>
                <p className="contact__disclaimer">We respond to every message within 48 hours.</p>
              </div>
            </form>
          )}
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
            <span className="site-footer__credit">
              <em>Vision meets execution.</em>
              {' — '}Claudia Rezir
            </span>
          </div>
        </div>
      </footer>

    </section>
  )
}

function Field({ name, label, type, value, onChange, focused, setFocused, required }) {
  const isUp = focused === name || value
  return (
    <div className={`contact__field ${type === 'textarea' ? 'contact__field--full' : ''}`}>
      <label className={`contact__label ${isUp ? 'contact__label--up' : ''}`}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={name} value={value} onChange={onChange} rows={5}
          className="contact__input contact__textarea"
          onFocus={() => setFocused(name)} onBlur={() => setFocused(null)}
          required={required}
        />
      ) : (
        <input
          type={type} name={name} value={value} onChange={onChange}
          className="contact__input"
          onFocus={() => setFocused(name)} onBlur={() => setFocused(null)}
          required={required}
        />
      )}
    </div>
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

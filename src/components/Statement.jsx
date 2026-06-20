import { useInView } from '../hooks'
import './Statement.css'

export default function Statement() {
  const [ref, inView] = useInView()
  const v = inView ? 'visible' : ''

  return (
    <section className="statement" ref={ref}>
      <div className="statement__inner">

        <div className={`statement__top animate-on-scroll ${v}`}>
          <span className="statement__kicker">— Claudia Rezir, Founder</span>
        </div>

        <div className="statement__quote-wrap">
          <p className={`statement__q serif-xl animate-on-scroll ${v}`} style={{ transitionDelay: '0.14s' }}>
            "We don't just get the<br />job done—
          </p>
          <p className={`statement__q statement__q--display display-xl animate-on-scroll ${v}`} style={{ transitionDelay: '0.28s' }}>
            WE ELEVATE IT."
          </p>
        </div>

        <div className={`statement__bottom animate-on-scroll ${v}`} style={{ transitionDelay: '0.44s' }}>
          <span className="statement__co">Dream In Color Entertainment</span>
          <span className="statement__year">Dream In Color</span>
        </div>

      </div>
    </section>
  )
}

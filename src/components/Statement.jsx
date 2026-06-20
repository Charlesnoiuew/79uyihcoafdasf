import { useInView } from '../hooks'
import './Statement.css'

export default function Statement() {
  const [ref, inView] = useInView()
  const v = inView ? 'visible' : ''

  return (
    <section className="statement" ref={ref}>
      <div className="statement__inner">

        <div className="statement__quote-wrap">
          <p className={`statement__q serif-xl animate-on-scroll ${v}`} style={{ transitionDelay: '0.14s' }}>
            "We Don't Just Get The Job Done—
          </p>
          <p className={`statement__q statement__q--display display-xl animate-on-scroll ${v}`} style={{ transitionDelay: '0.28s' }}>
            WE ELEVATE IT."
          </p>
        </div>

        <div className={`statement__bottom animate-on-scroll ${v}`} style={{ transitionDelay: '0.44s' }}>
          <span className="statement__co">Dream In Color Entertainment</span>
          <span className="statement__kicker">— Claudia Rezir, Founder</span>
        </div>

      </div>
    </section>
  )
}

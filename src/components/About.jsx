import { useInView } from '../hooks'
import './About.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__inner" ref={ref}>

          <div className={`about__left animate-on-scroll from-left ${inView ? 'visible' : ''}`}>
            <span className="section-tag">Who We Are</span>

            <h2 className="about__heading display-xl">
              WHO WE ARE
            </h2>

            <p className="about__boutique">(A) Boutique Music Company</p>

            <p className="about__serif serif-lg" style={{ marginTop: 16 }}>
              <em>Built on instinct, strategy and culture.</em>
            </p>

            <div className="about__rule" style={{ marginTop: 36 }} />
            <p className="body-text" style={{ marginBottom: 28 }}>
              Versatile in capability, Dream In Color is an artist development company that bridges creative vision with strategic execution. We specialize in transforming raw ideas into fully formed campaigns spanning singles, albums, visuals, performances, and tours.
            </p>
            <p className="body-text" style={{ marginBottom: 28 }}>
              Our approach blends sharp business acumen with storytelling, drawing from the authentic interests and cultural touchpoints of artists to build campaigns that resonate.
            </p>
            <p className="body-text">
              From studio sessions to boardrooms—we don't just get the job done.{' '}
              <strong style={{ color: 'var(--white)', fontWeight: 700 }}>We elevate it.</strong>
            </p>

            <div className="about__pillars" style={{ marginTop: 48 }}>
              {['Music', 'Management', 'Marketing'].map((p, i) => (
                <div key={p} className={`about__pillar animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${0.52 + i * 0.1}s` }}>
                  <span className="about__pillar-n">{String(i + 1).padStart(2,'0')}</span>
                  <span className="about__pillar-name">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`about__right animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="about__phone-graphic">
              <img
                src="/images/image-removebg-preview_(7).png"
                alt="3M's - Music Management Marketing"
                className="about__phone-img"
              />
            </div>
          </div>

        </div>

        <div className={`about__quote-band animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.42s' }}>
          <p className="about__quote serif-xl">
            "Over 100k songs are released daily. It takes <em>vision and strategy</em> to cut through."
          </p>
        </div>

      </div>
    </section>
  )
}

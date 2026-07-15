import { useInView } from '../hooks'
import './Founder.css'

const credentials = [
  '10+ Years in Music Industry',
  'Marketing, A&R, Management & Streaming',
  'Cross-functional Industry Network',
  'RIAA-Certified Releases & #1 Singles',
]

export default function Founder() {
  const [ref, inView] = useInView()

  return (
    <section id="founder" className="section founder">
      <div className="container">
        <div className="founder__inner" ref={ref}>

          <div className={`founder__image-col animate-on-scroll from-left ${inView ? 'visible' : ''}`}>
            <div className="founder__img-wrap">
              <img
                src="/images/SnapInsta.to_620493279_18014617721815697_5075369778822415267_n.jpg"
                alt="Claudia Rezir"
                className="founder__img"
              />
              <div className="founder__img-frame" />
            </div>
            <div className="founder__img-caption">
              <span className="founder__img-name display-lg">Claudia Rezir</span>
              <span className="founder__img-role">Founder,</span>
              <span className="founder__img-role">Dream In Color</span>
              <span className="founder__img-role">Entertainment</span>
            </div>
          </div>

          <div className={`founder__content animate-on-scroll from-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <span className="section-tag">The Founder</span>
            <h2 className="founder__heading display-xl">MEET CLAUDIA</h2>
            <p className="founder__serif serif-lg"><em>A decade developing artists and their careers.</em></p>
            <div className="divider" />

            <p className="body-text" style={{ marginBottom: 24 }}>
              Claudia Rezir is a music business professional with over a decade of experience across marketing, management, A&R, and streaming. Passionate about music and the artist development process, she's dedicated her career to building artists' brands, shaping their sound, guiding their creative direction, and executing ideas from concept to completion.
            </p>
            <p className="body-text" style={{ marginBottom: 48 }}>
              Her experience across all sides of the industry has equipped her with an instinctive grasp of how music, business, and culture intersect—and the ability to move fluidly between them.
            </p>

            <div className="founder__creds">
              {credentials.map((c, i) => (
                <div key={i} className={`founder__cred animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${0.45 + i * 0.09}s` }}>
                  <span className="founder__cred-n">→</span>
                  <span className="founder__cred-text">{c}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

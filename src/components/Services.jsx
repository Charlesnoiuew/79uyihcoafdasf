import { useInView } from '../hooks'
import './Services.css'

const services = [
  { num: '01', title: 'Artist Development', aside: 'Career Architecture' },
  { num: '02', title: 'Marketing & Campaign Strategy', aside: 'Release Cycles' },
  { num: '03', title: 'A&R Direction', aside: 'Song Selection' },
  { num: '04', title: 'Streaming Strategy', aside: 'DSP Partnerships' },
  { num: '05', title: 'Tour Logistics', aside: 'End-to-End Execution' },
  { num: '06', title: 'Industry Relations', aside: 'Labels · Agents · Brands' },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="section services">
      <div className="container">

        <div className="services__header" ref={ref}>
          <div className={`animate-on-scroll from-left ${inView ? 'visible' : ''}`}>
            <span className="section-tag">What We Do</span>
            <h2 className="services__heading display-xl">
              WHAT WE DO
            </h2>
          </div>
          <div className={`services__header-right animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <p className="services__intro-serif serif-lg">
              Everything, <em>mostly.</em>
            </p>
            <p className="body-text services__deck" style={{ color: 'var(--gold)' }}>
              We operate across every function of the music industry—knowing when to lead with strategy and when to lean into instinct.
            </p>
          </div>
        </div>

        <div className="services__list">
          {services.map((s, i) => (
            <ServiceRow key={s.num} service={s} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ServiceRow({ service, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`svc-row animate-on-scroll ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <span className="svc-row__num">{service.num}</span>
      <h3 className="svc-row__title">{service.title}</h3>
      <span className="svc-row__aside">{service.aside}</span>
    </div>
  )
}

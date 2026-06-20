import { useInView } from '../hooks'
import './WhyUs.css'

const labelSide = [
  'A&R + A&R Admin', 'Marketing', 'Digital', 'Streaming',
  'Publicity', 'Creative', 'Radio', 'International',
  'Business Affairs', 'Finance',
]
const managerSide = [
  'Producer(s)', 'Engineer', 'Attorney', 'Publisher',
  'Tour Manager', 'Booking Agent', 'Accountant',
  'Business Manager', 'Brands', 'Creative',
]

const offerings = [
  { title: 'Music Creation and Delivery', desc: 'Studio to DSP, end-to-end' },
  { title: 'Strategic Career Mapping', desc: 'Long-term vision, short-term wins' },
  { title: 'Tour Logistics & Coordination', desc: 'Planning, routing, execution' },
  { title: 'Campaign Development', desc: 'Visuals, music, and messaging' },
  { title: 'Industry Relationship Management', desc: 'Labels, agents, brands, DSPs' },
  { title: 'Scale, Save Time, Increase Revenue', desc: 'Operational lift for growth' },
]

export default function WhyUs() {
  const [ref, inView] = useInView()

  return (
    <section id="why-us" className="section why-us">
      <div className="container">

        <div className="why-us__header" ref={ref}>
          <div className={`animate-on-scroll from-left ${inView ? 'visible' : ''}`}>
            <span className="section-tag">Why Artists Need Us</span>
            <h2 className="why-us__heading display-xl">
              WHY<br />ARTISTS<br />NEED US
            </h2>
          </div>
          <div className={`animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <p className="why-us__sub serif-lg">
              because <em>we get it.</em>
            </p>
            <p className="body-text" style={{ marginTop: 24, maxWidth: 440 }}>
              In a landscape where attention spans are short and the shelf life of content
              even shorter, we specialize in transforming an artist's story into a fully
              realized campaign—we build worlds and create experiences.
            </p>
          </div>
        </div>

        <div className="why-us__orbit">
          <div className={`why-us__side why-us__side--left animate-on-scroll from-left ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.22s' }}>
            <h4 className="why-us__side-title">Label Side</h4>
            <ul className="why-us__role-list">
              {labelSide.map(r => (
                <li key={r} className="why-us__role-item">
                  <span className="why-us__role-dot" />
                  <span className="why-us__role-text">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`why-us__core animate-on-scroll scale ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.35s' }}>
            <div className="why-us__venn-diagram">
              <div className="why-us__venn-l" />
              <div className="why-us__venn-r" />
              <div className="why-us__venn-inner">
                <span className="why-us__core-word">DIC</span>
                <span className="why-us__core-divider" />
                <span className="why-us__core-sub">at the center</span>
              </div>
            </div>
          </div>

          <div className={`why-us__side why-us__side--right animate-on-scroll from-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.22s' }}>
            <h4 className="why-us__side-title">Manager Side</h4>
            <ul className="why-us__role-list">
              {managerSide.map(r => (
                <li key={r} className="why-us__role-item">
                  <span className="why-us__role-dot" />
                  <span className="why-us__role-text">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`why-us__offerings animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="why-us__offerings-header">
            <h4 className="why-us__offerings-title">Services Include</h4>
          </div>
          <div className="why-us__offerings-grid">
            {offerings.map((o, i) => (
              <div key={i} className={`why-us__offering animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${0.48 + i * 0.08}s` }}>
                <span className="why-us__offering-n">{String(i + 1).padStart(2, '0')}</span>
                <div className="why-us__offering-body">
                  <span className="why-us__offering-title">{o.title}</span>
                  <span className="why-us__offering-desc">{o.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

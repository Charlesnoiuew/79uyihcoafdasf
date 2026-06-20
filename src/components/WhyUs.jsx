import { useInView } from '../hooks'
import './WhyUs.css'

const labelItems = [
  'A&R + A&R Admin',
  'Marketing',
  'Digital',
  'Streaming',
  'Publicity',
  'Creative',
  'Radio',
  'International',
  'Business Affairs',
  'Finance',
]

const managerItems = [
  'Producer(s)',
  'Engineer',
  'Attorney',
  'Publisher',
  'Tour Manager',
  'Booking Agent',
  'Accountant',
  'Business Manager',
  'Brands',
  'Creative (Photo, Video)',
  'Graphic Designer, Merch',
  'Social Media Manager',
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

        {/* ── Venn Diagram ── */}
        <div className={`why-us__venn animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.25s' }}>

          {/* SVG circles — purely decorative */}
          <svg className="why-us__venn-svg" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <circle cx="270" cy="210" r="200" stroke="white" strokeWidth="2" fill="transparent" />
            <circle cx="530" cy="210" r="200" stroke="white" strokeWidth="2" fill="transparent" />
          </svg>

          {/* Text layout over circles */}
          <div className="why-us__venn-body">

            {/* Left — Label */}
            <div className="why-us__venn-col why-us__venn-col--left">
              <h4 className="why-us__venn-title">Label</h4>
              <ul className="why-us__venn-list">
                {labelItems.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Center — Artist */}
            <div className="why-us__venn-col why-us__venn-col--center">
              <span className="why-us__venn-artist">ARTIST</span>
            </div>

            {/* Right — Manager */}
            <div className="why-us__venn-col why-us__venn-col--right">
              <h4 className="why-us__venn-title">Manager</h4>
              <ul className="why-us__venn-list">
                {managerItems.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

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

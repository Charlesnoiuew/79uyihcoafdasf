import { useInView, useCounter } from '../hooks'
import './Stats.css'

const stats = [
  { value: 500, suffix: 'M+', label: 'Streams Generated', desc: 'Across managed projects' },
  { value: 100, suffix: 'K+', label: 'Songs Released Daily', desc: 'The noise we cut through' },
  { value: 10, suffix: '+', label: 'Years Experience', desc: 'Across every music vertical' },
  { value: 2, suffix: '×', label: 'Platinum Records', desc: 'RIAA certified releases' },
]

function StatBlock({ stat, inView, delay }) {
  const count = useCounter(stat.value, inView, 2400)

  return (
    <div className="stat-block" style={{ '--stagger': `${delay}s` }}>
      <div className="stat-block__bar" />
      <div className="stat-block__num">
        <span className="stat-block__count">{count}</span>
        <span className="stat-block__suffix">{stat.suffix}</span>
      </div>
      <div className="stat-block__text">
        <span className="stat-block__label">{stat.label}</span>
        <span className="stat-block__desc">{stat.desc}</span>
      </div>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView()

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-section__inner">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`stats-section__col animate-on-scroll ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <StatBlock stat={s} inView={inView} delay={i * 0.12} />
          </div>
        ))}
      </div>
    </section>
  )
}

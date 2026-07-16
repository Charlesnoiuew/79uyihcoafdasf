import { useInView } from '../hooks'
import './Process.css'

const steps = [
  { num: '01', title: 'Introductions', desc: 'Initial call or meeting to discuss artist goals and confirm mutual fit.' },
  { num: '02', title: 'Proposal', desc: 'We submit a proposal outlining scope, strategy, and terms tailored to your situation.' },
  { num: '03', title: 'Redlines', desc: 'Artist reviews, provides feedback, submits redlines for negotiation.' },
  { num: '04', title: 'Agreement', desc: 'Finalize agreement with a confirmed start date and clear deliverables.' },
  { num: '05', title: 'Business Begins', desc: 'Vision meets execution. This is where the work starts.' },
]

export default function Process() {
  const [ref, inView] = useInView()

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="process__header" ref={ref}>
          <div className={`animate-on-scroll from-left ${inView ? 'visible' : ''}`}>
            <span className="section-tag">Next Steps</span>
            <h2 className="process__heading display-xl">
              NEXT STEPS
            </h2>
            <p className="process__serif">vibe check required</p>
          </div>
          <p className={`body-text animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s', maxWidth: 400 }}>
            To get started, we need to ensure this partnership is mutually beneficial. Here's how it works:
          </p>
        </div>
        <div className="process__steps">
          {steps.map((s, i) => <ProcessStep key={s.num} step={s} index={i} />)}
        </div>
        <div className="process__bottom">
          <a href="mailto:Vibes@DreamInColor.com" className="btn-primary">Start the Conversation</a>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`process-step animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="process-step__top">
        <div className="process-step__num">{step.num}</div>
      </div>
      <h3 className="process-step__title">{step.title}</h3>
      <p className="process-step__desc">{step.desc}</p>
      {index === 0 && (
        <svg className="process-step__icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="26" height="23" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="3" y1="12" x2="29" y2="12" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="10" y1="3" x2="10" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="22" y1="3" x2="22" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="8" y="16" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.5"/>
          <rect x="14" y="16" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.5"/>
          <rect x="20" y="16" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.5"/>
          <rect x="8" y="21" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.5"/>
          <rect x="14" y="21" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.5"/>
        </svg>
      )}
    </div>
  )
}

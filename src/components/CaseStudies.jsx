import { useState } from 'react'
import { useInView } from '../hooks'
import './CaseStudies.css'

const cases = [
  {
    name: 'Sleepy Hallow',
    role: 'Artist Management',
    stat: 'Spotify Radar AOTY',
    year: '2020–2022',
    image: '/images/image copy copy copy.png',
    logos: ['Interscope Records', 'Deadzone'],
    spotify: 'https://open.spotify.com/artist/6EPlBSH2RSiettczlz7ihV',
    instagram: 'https://www.instagram.com/_sleepyhallow_/',
    bullets: [
      'Led artist development and career strategy for Sleepy Hallow',
      'Primary liaison for all label departments, booking agents, DSPs, legal & finance',
      'Oversaw artists recording, marketing, and touring budgets',
      'Ensured fulfillment of all artists contractual obligations',
    ],
    highlights: ['Spotify Radar Artist of the Year', 'BET Hip Hop Awards Rap Cypher', 'Billboard Rookie of the Month', 'Branded Partnership & Content w/ Zig Zag', 'Rolling Loud Presents #StillSleepTour'],
  },
  {
    name: 'Sheff G',
    role: 'Artist Management',
    stat: '10M Video Views',
    year: '2019–2021',
    image: '/images/image copy copy copy copy copy.png',
    logos: ['EMPIRE'],
    spotify: 'https://open.spotify.com/artist/1tG7s7S4sq2eFFW0QZyLbm',
    instagram: 'https://www.instagram.com/sheff_g/',
    bullets: [
      "Shaped Sheff G's artistic and career trajectory through hands-on artist development and long-term strategy",
      'Acted as the central point of coordination between management and all label departments, DSPs, booking agents, legal, and finance teams',
      'Oversaw project budgets across recording and marketing to ensure alignment with creative goals and business priorities',
      'Collaborated closely with cross-functional teams to drive visibility, engagement, and commercial success across every release',
      'Managed the execution of all contractual obligations to ensure accuracy, timeliness, and full compliance',
    ],
    highlights: ['Run It Up MV — 10M Views', 'Vevo Ctrl Live Session: Eeny Meany Miny Moe', 'Vevo Ctrl Live Session: Lights On', 'Audiomack #UpNow Artist', '#FreeSheffG Tour Mascot'],
  },
  {
    name: 'City Girls',
    role: 'Music Group',
    stat: '2× RIAA Platinum',
    year: '2018–2020',
    image: '/images/image copy copy copy copy copy copy copy.png',
    logos: ['Quality Control', 'Republic Records'],
    imgFit: 'contain',
    imgBg: '#111',
    imgHeight: 280,
    spotify: 'https://open.spotify.com/artist/37hAfseJWi0G3Scife12Il',
    instagram: 'https://www.instagram.com/citygirls/',
    bullets: [
      'Served as the primary marketing lead executing strategy across three project cycles: "Period", "Girl Code", & "City On Lock"',
      'Led creative direction for City Girls\' first official artist website',
      'Created and conceptualized the original #AskJT content series',
      'Managed tour planning for the 2019 New Generation Tour',
      'Oversaw logistics for the duo\'s 2020 Billboard Magazine Cover',
    ],
    highlights: ['2× #1 Urban Radio Singles', '"Twerk" — RIAA Platinum', '"Act Up" — RIAA Platinum', 'Billboard Magazine Cover 2020', '2019 New Generation Tour'],
  },
  {
    name: 'Wale',
    role: 'Record Label',
    stat: 'Seinfeld Campaign',
    year: '2015–2016',
    image: '/images/6dce8b374a493bff0baeadc0810b8e7c.jpg',
    logos: ['Maybach Music', 'Atlantic Records'],
    spotify: 'https://open.spotify.com/artist/67nwj3Y5sZQLl72VNUHEYE',
    instagram: 'https://www.instagram.com/wale/',
    bullets: [
      'Executed full marketing strategy for "The Album About Nothing"',
      'Centered around a Seinfeld-themed campaign with three physical album covers',
      'Single artwork campaign for each track',
      'Produced album release event at Tom\'s (Seinfield) Diner',
      'Campaign pop-up events: Spotify x SXSW Live Sessions, Pop-Up at SOB\'s, Pop-Up for #WEDC',
    ],
    highlights: ['Spotify x SXSW Live Sessions', 'Pop-Up at SOB\'s', 'Pop-Up Event for #WEDC', 'Tom\'s Diner Album Release Event'],
  },
  {
    name: 'Meek Mill',
    role: 'Record Label',
    stat: '2 Album Cycles',
    year: '2015–2018',
    image: '/images/image copy copy copy copy copy copy copy copy copy copy copy copy.png',
    logos: ['Atlantic Records', 'Republic Records'],
    spotify: 'https://open.spotify.com/artist/20sxb77xiYeusSH8cVdatc',
    instagram: 'https://www.instagram.com/meekmill/',
    bullets: [
      'Full marketing strategy for (2) album cycles: "Wins & Losses" and "Dreams Worth More Than Money"',
      'Produced Bike Life Pop Up / Album Release Event',
      'Tidal x Pool Party Event · Gold Room Merch Pop Up Event',
      'Bike Life Mobile App · Hot 97 Summer Jam Festival Integration',
    ],
    highlights: ['Tidal x Pool Party Event', 'Gold Room Merch Pop Up', 'Bike Life Mobile App', 'Hot 97 Summer Jam Integration', 'Meekend Music Pt. 1 & 2'],
  },
  {
    name: 'G-Herbo',
    role: 'Record Label',
    stat: 'Republic Records',
    year: '2017–2018',
    image: '/images/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png',
    logos: ['Republic Records'],
    spotify: 'https://open.spotify.com/artist/1VrLYaVFEBnWnNFrRNLiAo',
    instagram: 'https://www.instagram.com/nolimitherbo/',
    bullets: [
      "Led full marketing strategy for G-Herbo's 'Survivor's Remorse' album cycle at Republic Records",
      'Served as primary label liaison bridging artist, management, and Republic Records departments',
      'Secured digital marketing placements and streaming editorial opportunities to amplify release',
      'Coordinated rollout timelines, single sequencing, and asset delivery across all label teams',
    ],
    highlights: ["'Survivor's Remorse' Campaign", 'Republic Records — Full Cycle Rollout', 'Digital Marketing Placements Secured', 'Label–Artist–Management Liaison'],
  },
]

export default function CaseStudies() {
  const [open, setOpen] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">

        <div className="cs__header" ref={ref}>
          <div className={`animate-on-scroll from-left ${inView ? 'visible' : ''}`}>
            <span className="section-tag">Case Studies</span>
            <h2 className="cs__heading display-xl">
              CASE STUDIES
            </h2>
            <p className="cs__sub serif-lg"><em>A decade of results.</em></p>
          </div>
          <div className={`cs__meta animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="cs__meta-stats">
              {[['50+', 'Projects'], ['10+', 'Years'], ['3', 'Disciplines']].map(([n, l]) => (
                <div key={l} className="cs__meta-stat">
                  <span className="cs__meta-n">{n}</span>
                  <span className="cs__meta-l">{l}</span>
                </div>
              ))}
            </div>
            <p className="body-text" style={{ marginTop: 28, maxWidth: 380 }}>
              Work spanning artist marketing, management, and streaming strategy across major label and independent contexts.
            </p>
          </div>
        </div>

        <div className="cs__logos-bar">
          <span className="cs__logos-label">Worked With</span>
          <div className="cs__logos-list">
            <span className="cs__logo">
              <img src="/images/png-transparent-atlantic-records-hd-logo.png" alt="Atlantic Records" className="cs__logo-img" />
            </span>
            <span className="cs__logo">
              <img src="/images/united-masters-review-930x562-1.webp" alt="United Masters" className="cs__logo-img cs__logo-img--dark-bg" />
            </span>
            <span className="cs__logo">
              <img src="/images/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png" alt="Partner Logo" className="cs__logo-img" />
            </span>
            <span className="cs__logo">
              <img src="/images/Alamo_Records.png" alt="Alamo Records" className="cs__logo-img" />
            </span>
          </div>
        </div>

        <div className="cs__list">
          {cases.map((c, i) => (
            <CaseRow
              key={c.name}
              c={c}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(o => o === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function CaseRow({ c, index, isOpen, onToggle }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`cs-row ${isOpen ? 'cs-row--open' : ''} animate-on-scroll ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <button className="cs-row__trigger" onClick={onToggle}>
        <span className="cs-row__idx">{String(index + 1).padStart(2, '0')}</span>

        <span className="cs-row__thumb-wrap">
          <img src={c.image} alt={c.name} className="cs-row__thumb" style={c.imgFit ? { objectFit: c.imgFit, background: c.imgBg } : undefined} />
        </span>

        <span className="cs-row__info">
          <span className="cs-row__name">{c.name}</span>
        </span>

        <span className="cs-row__stat">{c.stat}</span>
        <span className={`cs-row__toggle ${isOpen ? 'cs-row__toggle--open' : ''}`}>
          <span className="cs-row__toggle-bar" />
          <span className="cs-row__toggle-bar cs-row__toggle-bar--v" />
        </span>
      </button>

      <div className="cs-row__panel">
        <div className="cs-row__panel-inner">

          <div className="cs-row__img-col" style={c.imgBg ? { background: c.imgBg } : undefined}>
            <img src={c.image} alt={c.name} className="cs-row__img" style={c.imgFit ? { objectFit: c.imgFit, height: c.imgHeight ?? undefined } : undefined} />
            <div className="cs-row__img-overlay">
              {c.logos && c.logos.length > 0 && (
                <div className="cs-row__logos">
                  {c.logos.map(logo => (
                    <span key={logo} className="cs-row__logo-badge">{logo}</span>
                  ))}
                </div>
              )}
              <span className="cs-row__img-name">{c.name}</span>
              <div className="cs-row__links">
                {c.spotify && (
                  <a href={c.spotify} target="_blank" rel="noopener noreferrer" className="cs-row__link cs-row__link--spotify" aria-label="Spotify">
                    <SpotifyIcon />
                    <span>Spotify</span>
                  </a>
                )}
                {c.instagram && (
                  <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="cs-row__link cs-row__link--ig" aria-label="Instagram">
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="cs-row__details">
            <div className="cs-row__detail-block">
              <h4 className="cs-row__detail-title">Responsibilities</h4>
              <ul className="cs-row__detail-list">
                {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            <div className="cs-row__detail-block">
              <h4 className="cs-row__detail-title cs-row__detail-title--gold">Highlights</h4>
              <ul className="cs-row__detail-list cs-row__detail-list--gold">
                {c.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function SpotifyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

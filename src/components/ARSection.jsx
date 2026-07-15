import { useInView } from '../hooks'
import './ARSection.css'

const tracks = [
  { title: 'DIE YOUNG ft. 347 Aidan', artist: 'Sleepy Hallow', streams: '500M Streams', tag: 'A&R', youtube: 'https://youtu.be/SPlOfpaY_qc?si=WPKaRBkm_hMCVlFP' },
  { title: 'RUN IT UP ft. A-Boogie & Sleepy Hallow', artist: 'Sheff G', streams: '90M Streams', tag: 'A&R', youtube: 'https://youtu.be/Fsg1-8OpYKY?si=vyUew4LSXKaH3NBS' },
  { title: 'FOREVER ROADRUNNING & DA RICH KID MIXTAPES', artist: 'BMG Dmack', streams: null, tag: 'A&R', spotify: 'https://open.spotify.com/album/1FmSjoWTWHPawGHn7d2M24?si=9431f029b86242d6' },
  { title: 'USED TO ft. Stalley', artist: 'Life Dutchee', streams: null, tag: 'A&R', youtube: 'https://youtu.be/4ZaZgZ9D4hI?si=WG44j6w-IVuoTiiN' },
]

export default function ARSection() {
  const [ref, inView] = useInView()

  return (
    <section id="ar" className="section ar-section">
      <div className="container">
        <div className="ar__header" ref={ref}>
          <div className={`animate-on-scroll from-left ${inView ? 'visible' : ''}`}>
            <span className="section-tag">A&R Work</span>
            <div className="ar__heading-wrap">
              <h2 className="ar__heading">A&R'D</h2>
              <p className="ar__heading-script">by Claudia Rezir</p>
            </div>
          </div>
          <div className={`ar__header-text animate-on-scroll from-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <p className="body-text">
              Spearheaded A&R direction across multiple high-performing singles and projects, guiding song and production selection, creative development & collaboration strategy resulting in hundreds of millions of streams and RIAA-certified releases.
            </p>
          </div>
        </div>

        <div className="ar__tracks">
          {tracks.map((t, i) => (
            <TrackRow key={t.title} track={t} index={i} />
          ))}
        </div>


      </div>
    </section>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
    </svg>
  )
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}

function TrackRow({ track, index }) {
  const [ref, inView] = useInView()
  const link = track.youtube || track.spotify || null

  const inner = (
    <div className={`ar__track ${link ? 'ar__track--linked' : ''}`}>
      <span className="ar__track-num">0{index + 1}</span>
      <div className="ar__track-info">
        <span className="ar__track-title">{track.title}</span>
        <span className="ar__track-artist">{track.artist}</span>
      </div>
      <div className="ar__track-right">
        {track.streams && <span className="ar__track-streams">{track.streams}</span>}
        <span className="ar__track-tag">{track.tag}</span>
        {track.youtube && (
          <span className="ar__yt-icon">
            <YoutubeIcon />
          </span>
        )}
        {track.spotify && (
          <span className="ar__sp-icon">
            <SpotifyIcon />
          </span>
        )}
      </div>
    </div>
  )

  return (
    <div
      ref={ref}
      className={`ar__track-wrap animate-on-scroll ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="ar__track-link">
          {inner}
        </a>
      ) : inner}
    </div>
  )
}

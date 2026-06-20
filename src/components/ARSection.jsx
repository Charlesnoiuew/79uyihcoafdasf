import { useState } from 'react'
import { useInView } from '../hooks'
import './ARSection.css'

const tracks = [
  { title: 'DIE YOUNG ft. 347 Aidan', artist: 'Sleepy Hallow', streams: '500M Streams', tag: 'A&R', spotifyId: '6EbVuwU7EnKeF2hdpViXCH' },
  { title: 'RUN IT UP ft. A-Boogie & Sleepy Hallow', artist: 'Sheff G', streams: '90M Streams', tag: 'A&R', spotifyId: '3tr0NiL6ghHGmmgcyzVU5P' },
  { title: 'MURDA SHE WROTE', artist: 'Sleepy Hallow', streams: '5M Streams', tag: 'A&R', spotifyId: '3lLT1GM0h5bJXv0lToc4zw' },
  { title: 'FOREVER ROADRUNNING & DA RICH KID MIXTAPES', artist: 'BMG Dmack', streams: null, tag: 'A&R', spotifyId: null },
  { title: 'USED TO ft. Stalley', artist: 'Life Dutchee', streams: null, tag: 'A&R', spotifyId: null },
]

export default function ARSection() {
  const [ref, inView] = useInView()
  const [activeTrack, setActiveTrack] = useState(null)

  const handleToggle = (index) => {
    setActiveTrack(prev => prev === index ? null : index)
  }

  return (
    <section id="ar" className="section ar-section">
      <div className="container">
        <div className="ar__header" ref={ref}>
          <div className={`animate-on-scroll from-left ${inView ? 'visible' : ''}`}>
            <span className="section-tag">A&R Work</span>
            <h2 className="ar__heading">A&R'D</h2>
            <p className="ar__heading-script">by Claudia Rezir.</p>
          </div>
          <div className={`ar__header-text animate-on-scroll from-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <p className="body-text">
              Spearheaded A&R direction across multiple high-performing singles and projects, guiding song and production selection, creative development & collaboration strategy resulting in hundreds of millions of streams and RIAA-certified releases.
            </p>
          </div>
        </div>

        <div className="ar__tracks">
          {tracks.map((t, i) => (
            <TrackRow
              key={t.title}
              track={t}
              index={i}
              isActive={activeTrack === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        <div className={`ar__cta animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <div className="ar__cta-inner">
            <span className="ar__cta-label">Listen on</span>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ar__platform"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ar__platform"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208a5.485 5.485 0 00-.44 1.589c-.05.283-.06.57-.077.856-.005.094-.008.188-.01.282v11.27c.012.214.018.428.034.642.057.88.28 1.707.718 2.467.792 1.39 1.978 2.26 3.528 2.625.48.116.974.166 1.464.188.332.015.665.02.998.022H17.3c.332-.003.664-.007.997-.022.49-.022.984-.072 1.464-.188 1.55-.365 2.737-1.235 3.528-2.625.438-.76.661-1.587.718-2.467.017-.214.022-.428.034-.642V7.09c0-.094-.003-.188-.01-.282-.015-.28-.023-.559-.04-.84a3.56 3.56 0 00-.002-.044zm-3.73 11.16c0 1.1-.88 1.99-1.98 1.99H5.716c-1.1 0-1.98-.89-1.98-1.99V6.716c0-1.1.88-1.98 1.98-1.98h12.568c1.1 0 1.98.88 1.98 1.98v10.568z"/>
              </svg>
              Apple Music
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrackRow({ track, index, isActive, onToggle }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`ar__track-wrap animate-on-scroll ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`ar__track ${isActive ? 'ar__track--active' : ''}`}>
        <span className="ar__track-num">0{index + 1}</span>
        <div className="ar__track-info">
          <span className="ar__track-title">{track.title}</span>
          <span className="ar__track-artist">{track.artist}</span>
        </div>
        <div className="ar__track-right">
          {track.streams && <span className="ar__track-streams">{track.streams}</span>}
          <span className="ar__track-tag">{track.tag}</span>
          {track.spotifyId ? (
            <button
              className={`ar__play-btn ${isActive ? 'ar__play-btn--active' : ''}`}
              onClick={onToggle}
              aria-label={isActive ? 'Close player' : 'Play snippet'}
            >
              {isActive ? (
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M6 6h4v12H6zm8 0h4v12h-4z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          ) : (
            <span className="ar__play-btn ar__play-btn--disabled" aria-hidden>
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </span>
          )}
        </div>
      </div>

      {isActive && track.spotifyId && (
        <div className="ar__player">
          <a
            href={`https://open.spotify.com/track/${track.spotifyId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ar__spotify-link"
          >
            <svg className="ar__spotify-icon" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <div className="ar__spotify-text">
              <span className="ar__spotify-title">{track.title}</span>
              <span className="ar__spotify-sub">{track.artist} &mdash; Listen on Spotify</span>
            </div>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ flexShrink: 0, opacity: 0.5 }}>
              <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3zM5 5h6V3H3v18h18v-8h-2v6H5V5z"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}

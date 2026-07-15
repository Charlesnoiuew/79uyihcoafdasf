import { useInView } from '../hooks'
import './AdditionalWorks.css'

const albums = [
  {
    title: "Nuthin' 2 Prove",
    artist: 'Lil Yachty',
    image: '/images/albums/image.png',
  },
  {
    title: 'Lil Boat 3',
    artist: 'Lil Yachty',
    image: '/images/albums/files_5165199-2026-07-15T02-07-37-579Z-image.png',
  },
  {
    title: 'Tell Ya Story',
    artist: 'Layton Greene',
    image: '/images/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png',
  },
  {
    title: 'Anybody Wanna Buy a Heart?',
    artist: 'K.Michelle',
    image: '/images/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png',
  },
  {
    title: 'The Wolf of Grape Street',
    artist: '03 Greedo',
    image: '/images/the-wolf-of-grape-street.jpg',
  },
  {
    title: 'Blacc Hollywood',
    artist: 'Wiz Khalifa',
    image: '/images/blacchollywood.png',
  },
]

export default function AdditionalWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="additional-works" className="section additional-works-section">
      <div className="container">
        <div className="aw__header" ref={ref}>
          <div className={`animate-on-scroll from-left ${inView ? 'visible' : ''}`}>
            <span className="section-tag">Discography</span>
            <h2 className="aw__heading">Additional Works</h2>
          </div>
        </div>

        <div className="aw__grid">
          {albums.map((album, i) => (
            <AlbumCard key={album.title} album={album} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AlbumCard({ album, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`aw__card animate-on-scroll ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="aw__card-image">
        <img src={album.image} alt={`${album.title} by ${album.artist}`} />
      </div>
      <div className="aw__card-info">
        <span className="aw__card-title">{album.title}</span>
        <span className="aw__card-artist">{album.artist}</span>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import Seal from '../../components/seal/Seal.jsx'
import StampCard from '../../components/stampCard/StampCard.jsx'
import AdsCarousel from '../../components/carrusel/AdsCarousel.jsx'
import useReveal from '../../hooks/useReveal.js'
import logo from '../../assets/logo.jpg'
import promoNavidad from '../../assets/promo-navidad.png'
import promoEspecial from '../../assets/promo-especial.png'
import promoVideo from '../../assets/promo-video.mp4'
import './Home.css'

const SLIDES = [
  { id: 1, type: 'image', src: promoNavidad, alt: 'Anuncio de temporada YRELIS' },
  { id: 2, type: 'image', src: promoEspecial, alt: 'Café especial de la casa' },
  { id: 3, type: 'video', src: promoVideo, alt: 'Video promocional YRELIS CoffeeBar' },
]

const HIGHLIGHTS = [
  { title: 'Café peruano', text: 'Grano seleccionado y tostado con cuidado, taza a taza.' },
  { title: 'Barra completa', text: 'Cócteles clásicos y de autor, cervezas y happy hour todos los días.' },
  { title: 'Delivery en Gamarra', text: 'Pide por WhatsApp y te lo llevamos a tu punto de venta.' },
]

export default function Home() {
  const scopeRef = useReveal()

  return (
    <div className="page home" ref={scopeRef}>
      <section
        className="home-hero"
        style={{
          '--bg-image':
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')",
        }}
        aria-label="Portada YRELIS CoffeeBar"
      >
        <div className="home-hero__inner">
          <img
            src={logo}
            alt="Logo YRELIS CoffeeBar"
            className="home-hero__logo"
            loading="eager"
            width="96"
            height="96"
          />

          <span className="home-hero__eyebrow">
            <Seal size={16} /> Gamarra · La Victoria · Lima
          </span>

          <h1>Pasión por el café y por los momentos inolvidables</h1>

          <p>
            Café de especialidad, cocina casera y coctelería en un solo lugar. Ven a vivir la
            experiencia YRELIS.
          </p>

          <div className="home-hero__actions">
            <Link to="/menu" className="btn btn-primary">
              Ver el menú
            </Link>
            <Link to="/contacto" className="btn btn-ghost">
              Cómo llegar
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-welcome">
          <div className="home-welcome__text" data-reveal>
            <span className="section-head__eyebrow">
              <Seal size={14} /> Bienvenidos
            </span>

            <h2>
              Disfruta bebidas únicas, buen ambiente y sabores que despiertan tus sentidos
            </h2>

            <p>
              Cada visita a YRELIS es una pausa con propósito: aroma de café recién molido,
              conversación de sobremesa y una carta pensada para acompañar cualquier momento
              del día.
            </p>

            <StampCard />
          </div>

          <div className="home-welcome__carousel" data-reveal>
            <AdsCarousel slides={SLIDES} />
          </div>
        </div>
      </section>

      <section className="section section--tight home-highlights-wrap">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="section-head__eyebrow">Lo que encuentras aquí</span>
            <h2>Tres razones para quedarte un rato más</h2>
          </div>

          <div className="home-highlights">
            {HIGHLIGHTS.map((h) => (
              <article className="home-highlights__card card" key={h.title} data-reveal>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-cta">
        <div className="container home-cta__inner card" data-reveal>
          <div>
            <span className="section-head__eyebrow">Happy Hour</span>
            <h2>Cócteles clásicos desde S/ 30</h2>
            <p>Lunes a sábado, de 9:00 a. m. a 8:00 p. m.</p>
          </div>

          <Link to="/promociones" className="btn btn-herb">
            Ver promociones
          </Link>
        </div>
      </section>
    </div>
  )
}
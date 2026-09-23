import Seal from '../../components/seal/Seal.jsx'
import useReveal from '../../hooks/useReveal.js'
import './Promotions.css'

const HAPPY_HOUR = [
  {
    title: 'Lunes a Jueves',
    price: 'S/ 30',
    schedule: '9:00 a. m. – 8:00 p. m.',
    detail: 'Incluye 2 cervezas artesanales o 1 cóctel especial + snack de la casa.',
  },
  {
    title: 'Viernes y Sábado',
    price: 'S/ 55',
    schedule: '9:00 a. m. – 8:00 p. m.',
    detail: 'Incluye 2 cócteles premium o 3 cervezas + tabla de picar.',
  },
]

export default function Promotions() {
  const scopeRef = useReveal()

  return (
    <div className="page promo-page" ref={scopeRef}>
      <section
        className="page-hero"
        style={{
          '--bg-image':
            "url('https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=1600&q=80')",
        }}
        aria-label="Happy Hour YRELIS"
      >
        <span className="page-hero__eyebrow">
          <Seal size={16} /> Todos los días
        </span>
        <h1>Happy Hour YRELIS</h1>
        <p>
          Momentos especiales con promociones en bebidas y cócteles, de lunes a sábado.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="promo-grid">
            {HAPPY_HOUR.map((h) => (
              <article className="promo-card" key={h.title} data-reveal>
                <span className="promo-card__bar" aria-hidden="true" />
                <h3>{h.title}</h3>
                <div className="promo-card__price">{h.price}</div>
                <p className="promo-card__schedule">{h.schedule}</p>
                <p className="promo-card__detail">{h.detail}</p>
              </article>
            ))}
          </div>

          <div className="promo-note card" data-reveal>
            <Seal size={30} />
            <p>
              Las promociones de Happy Hour aplican para consumo en el local. Válido de lunes
              a sábado, no acumulable con otras promociones.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
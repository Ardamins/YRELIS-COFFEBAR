import Seal from '../../components/seal/Seal.jsx'
import useReveal from '../../hooks/useReveal.js'
import './About.css'

const SERVICIOS = [
  {
    title: 'Café de especialidad',
    text: 'Café peruano seleccionado, tostado artesanalmente para el mejor sabor y aroma.',
  },
  {
    title: 'Bebidas refrescantes',
    text: 'Jugos naturales recién preparados, smoothies y bebidas frías para todos los gustos.',
  },
  {
    title: 'Gastronomía variada',
    text: 'Hamburguesas, snacks, postres y platos especiales con ingredientes frescos.',
  },
  {
    title: 'Bar y coctelería',
    text: 'Cervezas, tragos clásicos y cócteles especiales en un ambiente único.',
  },
  {
    title: 'Delivery express',
    text: 'Servicio de delivery rápido y confiable en toda el área de Gamarra y alrededores.',
  },
  {
    title: 'Ambiente musical',
    text: 'Música seleccionada que crea el ambiente perfecto para tu estadía.',
  },
]

const VALORES = [
  {
    title: 'Pasión',
    text: 'Amamos lo que hacemos y ponemos el corazón en cada taza que servimos.',
  },
  {
    title: 'Calidad',
    text: 'Seleccionamos los mejores ingredientes para garantizar la excelencia.',
  },
  {
    title: 'Comunidad',
    text: 'Creemos en crear espacios donde las personas se sientan como en familia.',
  },
  {
    title: 'Sostenibilidad',
    text: 'Nos preocupamos por el medio ambiente y apoyamos a productores locales.',
  },
]

export default function About() {
  const scopeRef = useReveal()

  return (
    <div className="page about-page" ref={scopeRef}>
      <section
        className="page-hero"
        style={{
          '--bg-image':
            "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80')",
        }}
        aria-label="Sobre YRELIS CoffeeBar"
      >
        <span className="page-hero__eyebrow">
          <Seal size={16} /> Nuestra historia
        </span>
        <h1>Sobre nosotros</h1>
        <p>Conoce la historia, los valores y los servicios detrás de YRELIS CoffeeBar.</p>
      </section>

      <section className="section">
        <div className="container about-story">
          <div className="card about-story__card" data-reveal>
            <h2>Nuestra historia</h2>
            <p>
              En <strong>Yreli&apos;s CoffeeBar</strong> creemos que el mejor momento del día
              comienza con una buena taza de café. Somos más que una cafetería: somos un
              espacio lleno de energía, sabor y buena vibra.
            </p>
            <p>
              Todo lo que hacemos está inspirado en brindar una experiencia inolvidable a cada
              cliente. Nos esforzamos por crear un ambiente donde te sientas como en casa,
              acompañado de música, aromas y sabores que te enamoren.
            </p>
            <p>
              Desde nuestro inicio nos hemos dedicado a seleccionar los mejores granos de café
              peruano, combinándolos con ingredientes frescos y de calidad para ofrecerte una
              experiencia gastronómica única.
            </p>
            <p>Gracias por ser parte de la familia YRELIS. ¡Te esperamos!</p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="section-head__eyebrow">
              <Seal size={14} /> Lo que ofrecemos
            </span>
            <h2>Nuestros servicios</h2>
          </div>

          <div className="about-grid">
            {SERVICIOS.map((s) => (
              <div className="about-item" key={s.title} data-reveal>
                <span className="about-item__icon" aria-hidden="true" />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight about-values-wrap">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="section-head__eyebrow">Lo que nos define</span>
            <h2>Nuestros valores</h2>
          </div>

          <div className="about-values">
            {VALORES.map((v) => (
              <div className="about-values__card card" key={v.title} data-reveal>
                <span className="about-values__icon" aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
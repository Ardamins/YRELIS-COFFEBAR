import { useState } from 'react'
import Seal from '../components/Seal.jsx'
import useReveal from '../hooks/useReveal.js'
import './Contact.css'

const INFO = [
  { icon: '📍', title: 'Dirección', body: 'Pasaje Gamarra N.° 149, La Victoria — Lima' },
  { icon: '📘', title: 'Facebook', body: 'YrelisCoffeeBar', href: 'https://www.facebook.com/yreliscoffeebar' },
  { icon: '🎵', title: 'TikTok', body: '@yreliscoffeebar', href: 'https://www.tiktok.com/@yreliscoffeebar' },
  { icon: '💬', title: 'WhatsApp', body: '+51 938 168 561', href: 'https://wa.me/51938168561' },
  { icon: '🚚', title: 'Delivery', body: 'En todo Gamarra. Escríbenos por WhatsApp para enviarte tu pedido.' },
  { icon: '🕒', title: 'Horario de atención', body: 'Lunes a sábado: 9:00 a. m. – 8:00 p. m.' },
]

export default function Contact() {
  const scopeRef = useReveal()
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div className="page contact-page" ref={scopeRef}>
      <section
        className="page-hero"
        style={{ '--bg-image': "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <span className="page-hero__eyebrow"><Seal size={16} /> Escríbenos</span>
        <h1>Contáctanos</h1>
        <p>Estamos aquí para atenderte y hacer de tu experiencia algo inolvidable.</p>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="card contact-info" data-reveal>
            <h2>Información de contacto</h2>
            <ul>
              {INFO.map((item) => (
                <li key={item.title} className="contact-info__item">
                  <span className="contact-info__icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">{item.body}</a>
                    ) : (
                      <p>{item.body}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card contact-form" data-reveal>
            <h2>Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre completo</label>
              <input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email">Correo electrónico</label>
              <input id="email" type="email" placeholder="tu@email.com" required />

              <label htmlFor="telefono">Teléfono (opcional)</label>
              <input id="telefono" type="tel" placeholder="+51 9XX XXX XXX" />

              <label htmlFor="asunto">Asunto</label>
              <input id="asunto" type="text" placeholder="Motivo de tu mensaje" required />

              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" placeholder="Escribe tu mensaje aquí…" required />

              <button type="submit" className="btn btn-primary contact-form__submit">
                Enviar mensaje
              </button>

              {sent && (
                <p className="contact-form__confirm" role="status">
                  ¡Gracias{name ? `, ${name}` : ''}! Tu mensaje fue enviado, te contactaremos pronto.
                </p>
              )}
            </form>
          </div>

          <div className="card contact-map" data-reveal>
            <h2>Nuestra ubicación</h2>
            <div className="contact-map__frame">
              <iframe
                title="Ubicación YRELIS CoffeeBar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.345282840091!2d-77.01824932477617!3d-12.056252942536968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c87120ff3cd7%3A0x7d2f3b1b7c9d1b1a!2sPasaje%20Gamarra%20149%2C%20La%20Victoria%2015001!5e0!3m2!1ses-419!2spe!4v1690834567890!5m2!1ses-419!2spe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

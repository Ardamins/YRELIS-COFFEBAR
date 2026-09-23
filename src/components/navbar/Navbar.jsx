import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menú' },
  { to: '/promociones', label: 'Promociones' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Cierra el drawer al cambiar de ruta
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Detecta scroll para cambiar fondo del navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Cierra el drawer con la tecla Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__bar">
          <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Logo YRELIS CoffeeBar"
              className="navbar__logo"
              width="42"
              height="42"
            />
            <span className="navbar__brand-text">
              <strong>YRELIS</strong>
              <em>CoffeeBar</em>
            </span>
          </NavLink>

          <nav
            className="navbar__links--desktop"
            aria-label="Navegación principal"
          >
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'is-active' : ''}`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className={`navbar__toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`navbar__overlay ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer lateral */}
      <aside
        id="mobile-drawer"
        className={`navbar__drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        aria-label="Navegación móvil"
      >
        <span className="navbar__drawer-title">Navegación</span>

        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'is-active' : ''}`
            }
            end={link.to === '/'}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </aside>
    </>
  )
}
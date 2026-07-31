import Seal from './Seal.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Seal size={30} />
          <span>YRELIS CoffeeBar</span>
        </div>
        <p className="footer__addr">Pasaje Gamarra N.° 149, La Victoria — Lima, Perú</p>
        <p className="footer__copy">© {new Date().getFullYear()} Coffee Bar YRELIS. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

import './Seal.css'

/**
 * Sello circular inspirado en la tarjeta de sellos de cliente frecuente.
 * Se usa como firma visual repetida: nav, separadores, tarjetas y hero.
 *
 * @param {number}  size      Tamaño en px (ancho = alto).
 * @param {boolean} filled    Si es true, agrega el relleno ámbar interior.
 * @param {string}  label     Texto opcional en el centro del sello.
 * @param {string}  className Clases adicionales.
 */
export default function Seal({
  size = 46,
  filled = false,
  label,
  className = '',
}) {
  return (
    <span
      className={`seal ${filled ? 'seal--filled' : ''} ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label ? `Sello ${label}` : undefined}
    >
      <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="3 4"
        />
        <circle
          cx="24"
          cy="24"
          r="15.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      {label && <span className="seal__label">{label}</span>}
    </span>
  )
}
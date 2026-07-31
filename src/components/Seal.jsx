import './Seal.css'

/**
 * Sello circular inspirado en la tarjeta de sellos de cliente frecuente.
 * Se usa como firma visual repetida: nav, separadores, tarjetas y hero.
 */
export default function Seal({ size = 46, filled = false, label, className = '' }) {
  return (
    <span
      className={`seal ${filled ? 'seal--filled' : ''} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden={label ? undefined : true}
    >
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 4" />
        <circle cx="24" cy="24" r="15.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      {label && <span className="seal__label">{label}</span>}
    </span>
  )
}

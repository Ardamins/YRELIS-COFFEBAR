import Seal from './Seal.jsx'
import './StampCard.css'

const TOTAL = 7
const FILLED = 3

export default function StampCard() {
  return (
    <div className="stamp-card card" data-reveal>
      <div className="stamp-card__head">
        <Seal size={34} />
        <div>
          <h3>Tarjeta cliente frecuente</h3>
          <p>Consume café 7 días y te regalamos uno.</p>
        </div>
      </div>

      <div className="stamp-card__grid">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div key={i} className={`stamp-card__stamp ${i < FILLED ? 'is-filled' : ''}`}>
            {i < FILLED ? '✓' : i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

import { useRef, useState } from 'react'
import './AdsCarousel.css'

export default function AdsCarousel({ slides }) {
  const [index, setIndex] = useState(0)
  const videoRefs = useRef([])

  const pauseAllVideos = () => {
    videoRefs.current.forEach((v) => v && v.pause())
  }

  const go = (next) => {
    pauseAllVideos()
    setIndex((current) => (next + slides.length) % slides.length)
  }

  return (
    <div className="ads-carousel">
      <div className="ads-carousel__viewport">
        <div
          className="ads-carousel__track"
          style={{ transform: `translateY(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="ads-carousel__slide" key={slide.id}>
              {slide.type === 'video' ? (
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={slide.src}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img src={slide.src} alt={slide.alt} />
              )}
            </div>
          ))}
        </div>

        <div className="ads-carousel__controls">
          <button type="button" onClick={() => go(index - 1)} aria-label="Anuncio anterior">
            ↑
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Siguiente anuncio">
            ↓
          </button>
        </div>

        <div className="ads-carousel__dots">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              className={`ads-carousel__dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Ir al anuncio ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
      <p className="ads-carousel__caption">Novedades &amp; promos</p>
    </div>
  )
}

import { useMemo, useState } from 'react'
import Seal from '../../components/seal/Seal.jsx'
import useReveal from '../../hooks/useReveal.js'
import menu from '../../data/menu.js'
import './Menu.css'

const money = (n) => `S/ ${n.toFixed(2)}`

export default function Menu() {
  const [active, setActive] = useState('todos')
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const scopeRef = useReveal([active, query])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return menu
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          const matchesQuery = q
            ? item.name.toLowerCase().includes(q) ||
              item.desc.toLowerCase().includes(q)
            : true
          return matchesQuery
        }),
      }))
      .filter((category) => {
        if (!category.items.length) return false
        if (q) return true
        return active === 'todos' || active === category.id
      })
  }, [active, query])

  const handleRefresh = () => {
    if (loading) return

    setLoading(true)

    setTimeout(() => {
      setActive('todos')
      setQuery('')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setLoading(false)
    }, 600)
  }

  return (
    <div className="page menu-page" ref={scopeRef}>
      <section
        className="page-hero"
        style={{
          '--bg-image':
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80')",
        }}
        aria-label="Menú YRELIS CoffeeBar"
      >
        <span className="page-hero__eyebrow">
          <Seal size={16} /> Nuestro menú
        </span>
        <h1>Todo lo que tenemos para ti</h1>
        <p>Café, cocina, jugos y coctelería — explora por categoría o busca tu antojo.</p>
      </section>

      <section className="section menu-controls-section">
        <div className="container">
          <div className="menu-controls">
            <div className="menu-search">
              <input
                type="search"
                placeholder="Buscar en el menú… ej. pisco, latte, lomo saltado"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Buscar producto"
              />
            </div>

            {!query && (
              <div className="menu-toolbar">
                <div className="menu-select">
                  <select
                    id="menu-category"
                    value={active}
                    onChange={(e) => setActive(e.target.value)}
                    aria-label="Seleccionar categoría"
                  >
                    <option value="todos">Seleccionar categoría</option>
                    {menu.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                  <span className="menu-select__arrow" aria-hidden="true" />
                </div>

                <button
                  type="button"
                  className={`menu-refresh ${loading ? 'is-loading' : ''}`}
                  onClick={handleRefresh}
                  aria-label="Actualizar menú"
                  disabled={loading}
                >
                  <span className="menu-refresh__icon" aria-hidden="true" />
                  Actualizar
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          {filtered.length === 0 && (
            <p className="menu-empty">
              No encontramos productos para “{query}”. Prueba con otra palabra.
            </p>
          )}

          <div className="menu-categories">
            {filtered.map((category) => (
              <article className="menu-category card" key={category.id} data-reveal>
                <header className="menu-category__head">
                  <span
                    className="menu-category__icon"
                    aria-hidden="true"
                    data-icon={category.id}
                  />
                  <h2>{category.title}</h2>
                </header>

                <ul className="menu-category__list">
                  {category.items.map((item, i) => (
                    <li key={`${category.id}-${i}`} className="menu-item">
                      <div className="menu-item__text">
                        <span className="menu-item__name">{item.name}</span>
                        <span className="menu-item__desc">{item.desc}</span>
                      </div>
                      <span className="menu-item__price">{money(item.price)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
import { useEffect, useRef } from 'react'

/**
 * Adds the "is-visible" class to every [data-reveal] element inside the
 * returned ref once it scrolls into view. Lightweight replacement for a
 * scroll-animation library, respects prefers-reduced-motion via CSS.
 */
export default function useReveal(deps = []) {
  const scopeRef = useRef(null)

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const targets = scope.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scopeRef
}

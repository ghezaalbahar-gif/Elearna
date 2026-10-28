import { useEffect } from 'react'

export default function useReveal(dependency) {
  useEffect(() => {
    // Two reveal conventions: Home/About use [data-reveal] with .is-revealed,
    // the integrated page sections use .reveal with .reveal-shown.
    const elements = Array.from(
      document.querySelectorAll('[data-reveal], .reveal:not(.reveal-shown)'),
    )
    if (!elements.length) return undefined

    const reveal = (element) => {
      element.classList.add(element.classList.contains('reveal') ? 'reveal-shown' : 'is-revealed')
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach(reveal)
      return undefined
    }

    document.documentElement.classList.add('reveal-ready')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [dependency])
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollReset() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Anchor link — scroll to the target element with sticky-header offset
      const tryScroll = (attempts = 0) => {
        const el = document.querySelector(hash)
        if (el) {
          // Read actual header height dynamically so it works on any screen size
          const header = document.querySelector('header')
          const offset = header ? header.offsetHeight + 16 : 96
          const top = el.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        } else if (attempts < 5) {
          // Element may not be in DOM yet (lazy / animated) — retry a few times
          setTimeout(() => tryScroll(attempts + 1), 100)
        }
      }
      tryScroll()
    } else {
      // Page navigation — always go to top
      // requestAnimationFrame ensures the new page has rendered before scrolling
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }
  }, [pathname, hash])

  return null
}

import { useEffect, useRef, useState } from 'react'
import useScrollSpy from '../../hooks/useScrollSpy'
import { scrollToHash } from '../../hooks/useSmoothScroll'

const NAV_ITEMS = [
  { hash: '#hero', id: 'hero', label: 'Home', icon: 'fas fa-home' },
  { hash: '#about', id: 'about', label: 'About', icon: 'fas fa-user' },
  { hash: '#resume', id: 'resume', label: 'Resume', icon: 'fas fa-file' },
  { hash: '#portfolio', id: 'portfolio', label: 'Portfolio', icon: 'fas fa-images' },
  { hash: '#contact', id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
]

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const navRef = useRef(null)
  const toggleRef = useRef(null)
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id))

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !toggleRef.current?.contains(e.target) &&
        !navRef.current?.contains(e.target) &&
        isNavOpen
      ) {
        setIsNavOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isNavOpen])

  const handleNavClick = (e, hash) => {
    e.preventDefault()
    setIsNavOpen(false)
    scrollToHash(hash)
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="mobile-nav-toggle d-xl-none"
        onClick={() => setIsNavOpen((open) => !open)}
      >
        <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button>

      <header
        id="header"
        className="d-flex flex-column justify-content-center"
        style={{ left: isNavOpen ? '0' : undefined }}
      >
        <nav id="navbar" className="navbar nav-menu" ref={navRef}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.hash}
                  className={`nav-link scrollto${activeId === item.id ? ' active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.hash)}
                >
                  <i className={`${item.icon} fa-beat`}></i> <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

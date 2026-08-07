import { useEffect, useRef, useState } from 'react'
import useScrollSpy from '../../hooks/useScrollSpy'
import { scrollToHash } from '../../hooks/useSmoothScroll'

const NAV_ITEMS = [
  { hash: '#hero', id: 'hero', label: 'Home', icon: 'fas fa-house' },
  { hash: '#about', id: 'about', label: 'About', icon: 'fas fa-user' },
  { hash: '#resume', id: 'resume', label: 'Resume', icon: 'fas fa-file-lines' },
  { hash: '#credentials', id: 'credentials', label: 'Credentials', icon: 'fas fa-award' },
  { hash: '#portfolio', id: 'portfolio', label: 'Portfolio', icon: 'fas fa-diagram-project' },
  { hash: '#contact', id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
]

const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const panelRef = useRef(null)
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id))

  const close = () => setIsOpen(false)

  const goTo = (hash) => {
    close()
    scrollToHash(hash)
  }

  useEffect(() => {
    if (isOpen) {
      setSelected(Math.max(0, NAV_ITEMS.findIndex((item) => item.id === activeId)))
    }
  }, [isOpen, activeId])

  useEffect(() => {
    const handleKeydown = (e) => {
      const isShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'
      if (isShortcut) {
        e.preventDefault()
        setIsOpen((open) => !open)
        return
      }
      if (!isOpen) return

      if (e.key === 'Escape') {
        close()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelected((i) => (i + 1) % NAV_ITEMS.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelected((i) => (i - 1 + NAV_ITEMS.length) % NAV_ITEMS.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        goTo(NAV_ITEMS[selected].hash)
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [isOpen, selected])

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e) => {
      if (!panelRef.current?.contains(e.target)) close()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        className="nav-trigger mono"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="nav-trigger-dot"></span>
        go to
        <kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd>
      </button>

      <div className={`nav-overlay${isOpen ? ' open' : ''}`} role="presentation">
        <div className="nav-palette" ref={panelRef} role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="nav-palette-input mono">
            <span className="nav-palette-prompt">$</span> goto
            <span className="nav-palette-cursor"></span>
          </div>
          <ul className="nav-palette-list">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.id}>
                <a
                  href={item.hash}
                  className={`nav-palette-row mono${index === selected ? ' sel' : ''}${activeId === item.id ? ' current' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    goTo(item.hash)
                  }}
                  onMouseEnter={() => setSelected(index)}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                  {activeId === item.id && <span className="nav-palette-current">here</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

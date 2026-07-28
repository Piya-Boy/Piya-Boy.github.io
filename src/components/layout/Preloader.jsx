import { useEffect, useRef, useState } from 'react'

const BOOT_LINES = [
  'VITE v6.4.3  ready in 187 ms',
  '',
  '➜  Local:   http://localhost:5173/',
  '➜  Network: use --host to expose',
  '➜  press h + enter to show help',
]

const LINE_INTERVAL = 900
const MIN_VISIBLE_TOTAL = 5000

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const [lineCount, setLineCount] = useState(0)
  const mountedAtRef = useRef(Date.now())
  const pageLoadedRef = useRef(false)

  useEffect(() => {
    const timers = BOOT_LINES.map((_, i) =>
      setTimeout(() => setLineCount((c) => Math.max(c, i + 1)), i * LINE_INTERVAL),
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    const markLoaded = () => {
      pageLoadedRef.current = true
    }
    if (document.readyState === 'complete') {
      markLoaded()
    } else {
      window.addEventListener('load', markLoaded)
    }
    return () => window.removeEventListener('load', markLoaded)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - mountedAtRef.current
      const logDone = lineCount >= BOOT_LINES.length
      if (!pageLoadedRef.current || !logDone || elapsed < MIN_VISIBLE_TOTAL) return

      clearInterval(interval)
      setFading(true)
      setTimeout(() => setVisible(false), 300)
    }, 100)
    return () => clearInterval(interval)
  }, [lineCount])

  if (!visible) return null

  return (
    <div id="preloader" className={fading ? 'fading' : ''}>
      <div className="preloader-term">
        {BOOT_LINES.slice(0, lineCount).map((line, i) => (
          <div className="preloader-line mono" key={i}>
            {line || ' '}
          </div>
        ))}
        {lineCount >= BOOT_LINES.length && (
          <div className="preloader-line mono">
            <span className="preloader-cursor"></span>
          </div>
        )}
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'

const TYPED_COMMAND = 'npm run dev'
const TYPE_SPEED = 70

const LOG_LINES = [
  { text: 'VITE v6.4.3  ready in 187 ms', accent: true },
  { text: '➜  Local:   https://piya-boy.github.io/' },
  { text: '➜  Network: use --host to expose' },
]

const LINE_INTERVAL = 700
const POST_TYPE_PAUSE = 400
const MIN_VISIBLE_TOTAL = 5000

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const [typedChars, setTypedChars] = useState(0)
  const [lineCount, setLineCount] = useState(0)
  const mountedAtRef = useRef(Date.now())
  const pageLoadedRef = useRef(false)

  const commandDone = typedChars >= TYPED_COMMAND.length

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (commandDone) return
    const timer = setTimeout(() => setTypedChars((c) => c + 1), TYPE_SPEED)
    return () => clearTimeout(timer)
  }, [typedChars, commandDone])

  useEffect(() => {
    if (!commandDone) return
    const timers = LOG_LINES.map((_, i) =>
      setTimeout(() => setLineCount((c) => Math.max(c, i + 1)), POST_TYPE_PAUSE + i * LINE_INTERVAL),
    )
    return () => timers.forEach(clearTimeout)
  }, [commandDone])

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
      const logDone = lineCount >= LOG_LINES.length
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
        <div className="preloader-line mono typed">
          $ {TYPED_COMMAND.slice(0, typedChars)}
          {!commandDone || lineCount === 0 ? <span className="preloader-cursor"></span> : null}
        </div>

        {LOG_LINES.slice(0, lineCount).map((line, i) => {
          const isLast = i === lineCount - 1
          return (
            <div className={`preloader-line mono${line.accent ? ' accent' : ''}`} key={i}>
              {line.text}
              {isLast && <span className="preloader-cursor"></span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

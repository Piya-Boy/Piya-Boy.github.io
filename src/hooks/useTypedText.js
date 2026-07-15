import { useEffect, useState } from 'react'

const TYPE_SPEED = 100
const BACK_SPEED = 50
const BACK_DELAY = 2000

export default function useTypedText(strings) {
  const [text, setText] = useState('')

  useEffect(() => {
    let stringIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId

    const tick = () => {
      const current = strings[stringIndex]

      if (!isDeleting) {
        charIndex++
        setText(current.slice(0, charIndex))
        if (charIndex === current.length) {
          isDeleting = true
          timeoutId = setTimeout(tick, BACK_DELAY)
          return
        }
        timeoutId = setTimeout(tick, TYPE_SPEED)
      } else {
        charIndex--
        setText(current.slice(0, charIndex))
        if (charIndex === 0) {
          isDeleting = false
          stringIndex = (stringIndex + 1) % strings.length
        }
        timeoutId = setTimeout(tick, BACK_SPEED)
      }
    }

    timeoutId = setTimeout(tick, TYPE_SPEED)
    return () => clearTimeout(timeoutId)
  }, [strings])

  return text
}

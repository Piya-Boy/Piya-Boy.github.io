import { useEffect, useState } from 'react'

export default function useBackToTop() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const toggle = () => setIsActive(window.scrollY > 100)
    toggle()
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return isActive
}

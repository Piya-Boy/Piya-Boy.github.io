import { useEffect, useState } from 'react'

export default function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 200
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        const top = section.offsetTop
        const bottom = top + section.offsetHeight
        if (position >= top && position <= bottom) {
          setActiveId(id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('load', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', handleScroll)
    }
  }, [sectionIds])

  return activeId
}

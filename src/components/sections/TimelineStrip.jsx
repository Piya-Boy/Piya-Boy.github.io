import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const DRAG_THRESHOLD = 6
const CARD_WIDTH = 220
const CARD_GAP = 14
const VIEWPORT_MARGIN = 16

function CardBody({ item }) {
  return (
    <>
      <div className="strip-card-date mono">{item.date}</div>
      <div className="strip-card-title">
        <i className={item.icon}></i> {item.title}
      </div>
      <div className="strip-card-sub mono">{item.subtitle}</div>
      <div className="strip-card-loc">
        <i className="fas fa-map-marker-alt"></i> {item.location}
      </div>
      <ul>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </>
  )
}

export default function TimelineStrip({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [cardPos, setCardPos] = useState(null)
  const scrollRef = useRef(null)
  const dotRefs = useRef([])
  const cardRef = useRef(null)
  const dragState = useRef(null)

  const positionCard = useCallback((index, isUp) => {
    const dot = dotRefs.current[index]
    if (!dot) return
    const rect = dot.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    let left = centerX - CARD_WIDTH / 2
    left = Math.max(CARD_GAP, Math.min(left, window.innerWidth - CARD_WIDTH - CARD_GAP))

    setCardPos({
      left,
      top: isUp ? undefined : rect.bottom + 22,
      bottom: isUp ? window.innerHeight - rect.top + 22 : undefined,
    })
  }, [])

  useEffect(() => {
    if (activeIndex === null || window.innerWidth <= 768) {
      setCardPos(null)
      return
    }
    const isUp = activeIndex % 2 === 0
    positionCard(activeIndex, isUp)

    const handleReflow = () => positionCard(activeIndex, isUp)
    window.addEventListener('scroll', handleReflow, true)
    window.addEventListener('resize', handleReflow)
    return () => {
      window.removeEventListener('scroll', handleReflow, true)
      window.removeEventListener('resize', handleReflow)
    }
  }, [activeIndex, positionCard])

  // clamp against actual rendered card height once it's in the DOM
  const clampedFor = useRef(null)

  useLayoutEffect(() => {
    if (activeIndex === null) {
      clampedFor.current = null
      return
    }
    if (!cardRef.current || !cardPos || clampedFor.current === activeIndex) return

    const cardRect = cardRef.current.getBoundingClientRect()
    clampedFor.current = activeIndex

    if (cardRect.top < VIEWPORT_MARGIN) {
      const overflow = VIEWPORT_MARGIN - cardRect.top
      setCardPos((pos) => (pos ? { ...pos, bottom: pos.bottom !== undefined ? pos.bottom - overflow : pos.bottom } : pos))
    } else if (cardRect.bottom > window.innerHeight - VIEWPORT_MARGIN) {
      const overflow = cardRect.bottom - (window.innerHeight - VIEWPORT_MARGIN)
      setCardPos((pos) => (pos ? { ...pos, top: pos.top !== undefined ? pos.top - overflow : pos.top } : pos))
    }
  }, [activeIndex, cardPos])

  const handlePointerDown = (e) => {
    dragState.current = {
      startX: e.clientX,
      scrollLeft: scrollRef.current.scrollLeft,
      dragged: false,
    }
  }

  const handlePointerMove = (e) => {
    if (!dragState.current) return
    const delta = e.clientX - dragState.current.startX
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      dragState.current.dragged = true
      scrollRef.current.classList.add('dragging')
      setActiveIndex(null)
    }
    if (dragState.current.dragged) {
      scrollRef.current.scrollLeft = dragState.current.scrollLeft - delta
    }
  }

  const handlePointerUp = () => {
    scrollRef.current?.classList.remove('dragging')
    dragState.current = null
  }

  const isMobileLayout = () => window.innerWidth <= 768

  const handlePointClick = (index) => {
    if (dragState.current?.dragged) return
    if (!isMobileLayout()) return
    setActiveIndex((i) => (i === index ? null : index))
  }

  const handlePointEnter = (index, isUp) => {
    if (isMobileLayout()) return
    setActiveIndex(index)
    positionCard(index, isUp)
  }

  const handlePointLeave = (index) => {
    if (isMobileLayout()) return
    setActiveIndex((i) => (i === index ? null : i))
  }

  const activeItem = activeIndex !== null ? items[activeIndex] : null

  return (
    <div className="strip-wrap">
      <div
        className="strip-scroll"
        ref={scrollRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div className="strip">
          <div className="strip-line"></div>
          {items.map((item, index) => {
            const isUp = index % 2 === 0
            return (
              <div
                key={item.title}
                className={`strip-point${isUp ? ' up' : ''}${activeIndex === index ? ' active' : ''}`}
                onClick={() => handlePointClick(index)}
                onMouseEnter={() => handlePointEnter(index, isUp)}
                onMouseLeave={() => handlePointLeave(index)}
              >
                <div className="strip-stub"></div>
                <div className="strip-dot" ref={(el) => (dotRefs.current[index] = el)}></div>
                <div className="strip-year mono">{item.date.split(' — ')[0]}</div>

                <div className="strip-peek">
                  <div className="strip-peek-text">
                    <div className="strip-peek-title">{item.title}</div>
                    <div className="strip-peek-type mono">
                      {item.type === 'education' ? 'EDU' : item.subtitle === 'Intern' ? 'INTERN' : 'WORK'}
                    </div>
                  </div>
                </div>

                <div className="strip-card strip-card-mobile">
                  <CardBody item={item} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <p className="strip-hint mono">← ลากเพื่อเลื่อน · hover / tap จุดเพื่อดูรายละเอียด →</p>

      {activeItem && cardPos &&
        createPortal(
          <div
            ref={cardRef}
            className="strip-card-portal"
            style={{ left: cardPos.left, top: cardPos.top, bottom: cardPos.bottom, width: CARD_WIDTH }}
            onMouseEnter={() => setActiveIndex(activeIndex)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CardBody item={activeItem} />
          </div>,
          document.body,
        )}
    </div>
  )
}

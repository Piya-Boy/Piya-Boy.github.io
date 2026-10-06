import { useEffect, useRef, useState } from 'react'
import { PROJECTS } from './projectsData'

const SHAPE_WEIGHTS = [
  ['sm', 5],
  ['md', 2],
  ['tall', 2],
  ['lg', 1],
]

// deterministic pseudo-random hash so the layout is stable across renders
// but doesn't read as an obvious repeating cycle
function hashSeed(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0
  }
  return h
}

function pickShape(seed, prevShape) {
  const totalWeight = SHAPE_WEIGHTS.reduce((sum, [, w]) => sum + w, 0)
  const roll = seed % totalWeight
  let acc = 0
  for (const [shape, weight] of SHAPE_WEIGHTS) {
    acc += weight
    if (roll < acc) {
      // avoid two big shapes back-to-back — it reads as repetition
      if ((shape === 'lg' || shape === 'tall') && shape === prevShape) {
        return 'sm'
      }
      return shape
    }
  }
  return 'sm'
}

function getBentoShapes(projects) {
  const shapes = []
  let prevShape = null
  for (const p of projects) {
    const shape = pickShape(hashSeed(p.id), prevShape)
    shapes.push(shape)
    prevShape = shape
  }
  return shapes
}

function TagList({ tags, max }) {
  const shown = max ? tags.slice(0, max) : tags
  const hidden = max ? tags.length - max : 0
  return (
    <>
      {shown.map((t) => (
        <span className="tech-tag" key={t}>{t}</span>
      ))}
      {hidden > 0 && <span className="tech-tag more">+{hidden}</span>}
    </>
  )
}

const PAGE_SIZE = 10

export default function Projects() {
  const [activeId, setActiveId] = useState(null)
  const [page, setPage] = useState(0)
  const bodyRef = useRef(null)
  const pageCount = Math.ceil(PROJECTS.length / PAGE_SIZE)
  const pageProjects = PROJECTS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
  const bentoShapes = pageProjects.length === 1 ? ['lg'] : getBentoShapes(pageProjects)
  const active = PROJECTS.find((p) => p.id === activeId) || null

  const goToPage = (n) => setPage(Math.max(0, Math.min(pageCount - 1, n)))

  useEffect(() => {
    if (!activeId) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveId(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [activeId])

  useEffect(() => {
    if (!activeId || !bodyRef.current) return
    bodyRef.current.querySelectorAll('.m-reveal').forEach((el) => {
      el.style.animation = 'none'
      el.getBoundingClientRect()
      el.style.animation = ''
    })
  }, [activeId])

  return (
    <section id="projects" className="projects section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Selected Work</p>
        </div>

        <div className="projects-grid">
          {bentoShapes.map((size, i) => {
            const p = pageProjects[i]
            return (
            <div
              className={`project-card ${size}`}
              key={p.id}
              onClick={() => setActiveId(p.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveId(p.id)
              }}
            >
              <div className="project-card-glyph">
                <img src={`/img/projects/${p.cover}`} alt="" loading="lazy" />
              </div>
              <div className="project-card-content">
                <h3>{p.title}</h3>
                <p className="desc">{p.short}</p>
                <div className="project-card-tags">
                  <TagList tags={p.tags} max={size === 'lg' ? 5 : 3} />
                </div>
              </div>
            </div>
            )
          })}
        </div>

        {pageCount > 1 && (
          <div className="proj-pager mono">
            <button
              type="button"
              className="proj-pager-arrow"
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
              aria-label="Previous page"
            >
              &#8249;
            </button>
            <span className="proj-pager-num">
              <span className="cur">{String(page + 1).padStart(2, '0')}</span>
              <span className="slash">/</span>
              {String(pageCount).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="proj-pager-arrow"
              onClick={() => goToPage(page + 1)}
              disabled={page === pageCount - 1}
              aria-label="Next page"
            >
              &#8250;
            </button>
          </div>
        )}
      </div>

      {active && (
        <div className="proj-modal-overlay open" role="dialog" aria-modal="true" aria-label={active.title}>
          <div className="proj-modal-scrim" onClick={() => setActiveId(null)} />
          <div className="proj-modal-case">
            <div className="proj-modal-titlebar mono">
              <span className="proj-modal-dot r"></span>
              <span className="proj-modal-dot y"></span>
              <span className="proj-modal-dot g"></span>
              <span className="proj-modal-path">
                ~/projects/{active.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              </span>
              <button className="proj-modal-close mono" onClick={() => setActiveId(null)}>
                CLOSE [ESC]
              </button>
            </div>
            <div className="proj-modal-body" ref={bodyRef}>
              <div className="proj-modal-line m-reveal mono" style={{ '--rd': '0ms' }}>
                <span className="proj-modal-prompt">$</span> open ./cover.img
              </div>
              <div className="proj-modal-cover m-reveal" style={{ '--rd': '90ms' }}>
                <img src={`/img/projects/${active.cover}`} alt="" />
              </div>
              <h2 className="m-reveal" style={{ '--rd': '180ms' }}>{active.title}</h2>
              <div className="proj-modal-meta m-reveal" style={{ '--rd': '230ms' }}>
                {active.role} · {active.timeline} · {active.status}
              </div>
              <p className="proj-modal-lead m-reveal" style={{ '--rd': '280ms' }}>{active.lead}</p>

              <div className="proj-modal-section m-reveal" style={{ '--rd': '340ms' }}>
                <h3 className="mono">// what it does</h3>
                <ul>
                  {active.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="proj-modal-section m-reveal" style={{ '--rd': '420ms' }}>
                <h3 className="mono">// tech stack</h3>
                <div className="proj-modal-tags">
                  <TagList tags={active.tags} />
                </div>
              </div>

              <div className="proj-modal-section m-reveal" style={{ marginBottom: 0, '--rd': '500ms' }}>
                <div className="proj-modal-line mono">
                  <span className="proj-modal-prompt">$</span> cat ./links.txt
                  <span className="proj-modal-cursor"></span>
                </div>
                <div className="proj-modal-links">
                  {active.links.map((l) =>
                    l.href ? (
                      <a
                        className={`proj-modal-link mono${l.primary ? ' primary' : ''}`}
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <span className={`proj-modal-link mono${l.primary ? ' primary' : ''}`} key={l.label}>
                        {l.label}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

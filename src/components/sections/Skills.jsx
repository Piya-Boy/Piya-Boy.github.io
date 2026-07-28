import { useEffect, useMemo, useState } from 'react'
import AOS from 'aos'
import skillsData from '../../assets/data/skills_data.json'

const FILTERS = ['all', 'frontend', 'backend', 'others']

function iconMarkup(skill) {
  if (skill.icon === 'img') {
    const slug = skill.name.toLowerCase().replace(/\s+/g, '-')
    return <img src={`/img/icons/${slug}.png`} alt={skill.name} className="skill-icon" />
  }
  return <i className={`${skill.icon} fa-2x`}></i>
}

export default function Skills() {
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    AOS.refresh()
  }, [filter])

  const allSkills = useMemo(
    () => [
      ...skillsData.frontend.map((skill) => ({ ...skill, category: 'frontend' })),
      ...skillsData.backend.map((skill) => ({ ...skill, category: 'backend' })),
      ...skillsData.others.map((skill) => ({ ...skill, category: 'others' })),
    ],
    [],
  )

  const counts = useMemo(() => {
    const c = { all: allSkills.length, frontend: 0, backend: 0, others: 0 }
    allSkills.forEach((s) => { c[s.category] += 1 })
    return c
  }, [allSkills])

  const filteredSkills = filter === 'all' ? allSkills : allSkills.filter((s) => s.category === filter)

  const handleFilterClick = (value) => {
    setFilter(value)
  }

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p>My skills include the following:</p>
        </div>

        <div className="terminal-window">
          <div className="terminal-titlebar">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
            <span className="terminal-titlebar-name mono">piya@dossier:~/skills</span>
          </div>

          <div className="terminal-body">
            <div className="terminal-line mono">
              <span className="terminal-prompt">$</span> scan --stack
              <span className="terminal-cursor"></span>
            </div>

            <div className="terminal-line terminal-meta mono">
              <span className="terminal-ok">✓</span> {String(counts.all).padStart(2, '0')} tools indexed across {FILTERS.length - 1} categories
            </div>

            <div className="skill-filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`filter-btn${filter === f ? ' active' : ''}`}
                  data-filter={f}
                  onClick={() => handleFilterClick(f)}
                >
                  --{f}
                  <span className="filter-count mono">{String(counts[f]).padStart(2, '0')}</span>
                </button>
              ))}
            </div>

            <div className="skill-matrix" id="skills-grid">
              {filteredSkills.map((skill, index) => (
                <div
                  className="skill-cell"
                  data-category={skill.category}
                  key={`${skill.category}-${skill.name}`}
                  style={{ '--cell-delay': `${(index % 12) * 25}ms` }}
                >
                  <span className="skill-index mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="skill-cell-icon">{iconMarkup(skill)}</span>
                  <span className="skill-cell-name">{skill.name}</span>
                  <span className="skill-cell-tag mono">{skill.category}</span>
                </div>
              ))}
            </div>

            <div className="terminal-line mono terminal-tail">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

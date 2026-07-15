import { useEffect, useMemo, useState } from 'react'
import AOS from 'aos'
import skillsData from '../../assets/data/skills_data.json'

const INITIAL_ITEMS = 12
const ITEMS_PER_PAGE = 6
const FILTERS = ['all', 'frontend', 'backend', 'others']

function iconMarkup(skill) {
  if (skill.icon === 'img') {
    const slug = skill.name.toLowerCase().replace(/\s+/g, '-')
    return <img src={`/img/icons/${slug}.png`} alt={skill.name} className="skill-icon" />
  }
  return <i className={`${skill.icon} fa-2x mb-2`}></i>
}

export default function Skills() {
  const [filter, setFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS)

  useEffect(() => {
    AOS.refresh()
  }, [filter, visibleCount])

  const allSkills = useMemo(
    () => [
      ...skillsData.frontend.map((skill) => ({ ...skill, category: 'frontend' })),
      ...skillsData.backend.map((skill) => ({ ...skill, category: 'backend' })),
      ...skillsData.others.map((skill) => ({ ...skill, category: 'others' })),
    ],
    [],
  )

  const filteredSkills = filter === 'all' ? allSkills : allSkills.filter((s) => s.category === filter)
  const visibleSkills = filteredSkills.slice(0, visibleCount)
  const hasMore = filteredSkills.length > visibleCount

  const handleFilterClick = (value) => {
    setFilter(value)
    setVisibleCount(INITIAL_ITEMS)
  }

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p>My skills include the following:</p>
        </div>

        <div className="row skills-content">
          <div id="skills-container">
            <div className="text-center mb-4">
              <div className="skill-filters d-flex flex-wrap justify-content-center">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    className={`filter-btn mt-2${filter === f ? ' active' : ''}`}
                    data-filter={f}
                    onClick={() => handleFilterClick(f)}
                  >
                    {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="row g-4" id="skills-grid">
              {visibleSkills.map((skill) => (
                <div className="col-md-2 col-sm-4 col-6 skill-item" data-category={skill.category} key={`${skill.category}-${skill.name}`}>
                  <div className="skill-box">
                    {iconMarkup(skill)}
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="text-center mt-4">
                <button
                  className="filter-btn"
                  id="show-more-btn"
                  onClick={() => setVisibleCount((count) => count + ITEMS_PER_PAGE)}
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

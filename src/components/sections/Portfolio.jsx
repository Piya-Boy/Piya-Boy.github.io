import { useEffect, useState } from 'react'
import GLightbox from 'glightbox'
import AOS from 'aos'
import { PORTFOLIO_ITEMS } from './portfolioData'

const FILTERS = [
  { value: '*', label: 'All' },
  { value: 'gallery', label: 'Gallery' },
  { value: 'activities', label: 'Activities' },
  { value: 'certificate', label: 'Certificate' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*')

  useEffect(() => {
    const lightbox = GLightbox({ selector: '.portfolio-lightbox' })
    AOS.refresh()
    return () => lightbox.destroy()
  }, [activeFilter])

  const visibleItems =
    activeFilter === '*'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check My Portfolio</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              {FILTERS.map((f) => (
                <li
                  key={f.value}
                  data-filter={f.value}
                  className={activeFilter === f.value ? 'filter-active' : ''}
                  onClick={() => setActiveFilter(f.value)}
                >
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {visibleItems.map((item, index) => (
            <div className={`portfolio-item filter-${item.category}`} key={`${item.img}-${index}`}>
              <div className="portfolio-wrap">
                <img src={`/img/portfolio/${item.img}`} className="img-fluid" alt="" loading="lazy" />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <div className="portfolio-links">
                    <a
                      href={`/img/portfolio/${item.img}`}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title={item.title}
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

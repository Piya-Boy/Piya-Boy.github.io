import useTypedText from '../../hooks/useTypedText'
import { scrollToHash } from '../../hooks/useSmoothScroll'

const TYPED_STRINGS = [
  'Full Stack Developer',
  'Cybersecurity',
  'Mobile Developer',
  'Database Specialist',
]

export default function Hero() {
  const typedText = useTypedText(TYPED_STRINGS)

  const handleScrollClick = (e, hash) => {
    e.preventDefault()
    scrollToHash(hash)
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient"></div>
      </div>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div className="hero-content">
              <div className="hero-greeting">
                <span className="greeting-text">Hello, I'm</span>
              </div>

              <h1 className="hero-title">
                <span className="name-highlight">Piya Miang-Lae</span>
              </h1>

              <div className="hero-subtitle">
                <span className="typed-text">I'm a </span>
                <span className="typed">{typedText}</span>
              </div>

              <p className="hero-description">
                Passionate about creating innovative solutions and securing digital environments.
                With expertise in full-stack development and cybersecurity, I bring ideas to life
                while ensuring they're protected and scalable.
              </p>

              <div className="hero-buttons">
                <a href="#portfolio" className="btn btn-primary hero-btn" onClick={(e) => handleScrollClick(e, '#portfolio')}>
                  <i className="fas fa-rocket"></i>
                  <span>View My Work</span>
                </a>
                <a href="#contact" className="btn btn-outline-primary hero-btn" onClick={(e) => handleScrollClick(e, '#contact')}>
                  <i className="fas fa-envelope"></i>
                  <span>Get In Touch</span>
                </a>
              </div>

              <div className="hero-cta-section">
                <div className="cta-content">
                  <h3>Ready to work together?</h3>
                  <p>Let's create something amazing and secure</p>
                  <div className="cta-buttons">
                    <a href="#contact" className="cta-btn primary" onClick={(e) => handleScrollClick(e, '#contact')}>
                      <i className="fas fa-paper-plane"></i>
                      <span>Start Project</span>
                    </a>
                    <a href="/Piya Miang-Lae Resume.pdf" className="cta-btn secondary" download>
                      <i className="fas fa-download"></i>
                      <span>Download CV</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img src="/img/profile-img.jpg" alt="Piya Miang-Lae" className="hero-image" />
                <div className="hero-image-overlay">
                  <div className="floating-elements">
                    <div className="floating-icon icon-1">
                      <i className="fas fa-code"></i>
                    </div>
                    <div className="floating-icon icon-2">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="floating-icon icon-3">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="floating-icon icon-4">
                      <i className="fas fa-database"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-social" data-aos="fade-up" data-aos-delay="300">
          <div className="social-links">
            <a href="https://www.facebook.com/piya.boyman" target="_blank" rel="noreferrer" className="social-link facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/mr_piya_miang_lae/" target="_blank" rel="noreferrer" className="social-link instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/Piya-Boy/Piya-Boy" target="_blank" rel="noreferrer" className="social-link github">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/piya-miang-lae-6167392a5/" target="_blank" rel="noreferrer" className="social-link linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

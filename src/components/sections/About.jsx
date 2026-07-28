const BIRTH_YEAR = 2000

export default function About() {
  const age = new Date().getFullYear() - BIRTH_YEAR

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Passionate Full Stack Developer & Cybersecurity Expert</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <span className="scan-corner corner-tl"></span>
                <span className="scan-corner corner-tr"></span>
                <span className="scan-corner corner-bl"></span>
                <span className="scan-corner corner-br"></span>
                <img src="/img/profile-img.jpg" className="profile-image" alt="Piya Miang-Lae" />
                <div className="scan-tag mono">IMG_01.JPG</div>
              </div>
              <div className="profile-badges">
                <div className="badge-item" data-aos="zoom-in" data-aos-delay="200">
                  <div className="badge-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span className="badge-text">Cybersecurity</span>
                </div>

                <div className="badge-item" data-aos="zoom-in" data-aos-delay="300">
                  <div className="badge-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <span className="badge-text">Full Stack</span>
                </div>

                <div className="badge-item" data-aos="zoom-in" data-aos-delay="400">
                  <div className="badge-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <span className="badge-text">Mobile Dev</span>
                </div>

                <div className="badge-item" data-aos="zoom-in" data-aos-delay="500">
                  <div className="badge-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <span className="badge-text">Database</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <div className="about-content">
              <div className="intro-section">
                <h3 className="intro-title">
                  <span className="highlight">Full Stack Developer</span> &
                  <span className="highlight"> Cybersecurity Consultant</span>
                </h3>
                <p className="intro-description">
                  Hi! I'm <strong>Piya Miang-Lae</strong>, a passionate full-stack developer with specialized expertise in both backend and frontend development. I'm currently working as a Cybersecurity Consultant and a Programmer, bringing innovative solutions to various projects and helping organizations strengthen their digital security.
                </p>
              </div>

              <div className="skills-preview">
                <h4>Core Expertise</h4>
                <div className="skill-tags">
                  <span className="skill-tag backend">PHP & CodeIgniter</span>
                  <span className="skill-tag frontend">JavaScript & React</span>
                  <span className="skill-tag fullstack">Next.js & Tailwind</span>
                  <span className="skill-tag database">MySQL & MongoDB</span>
                  <span className="skill-tag security">Cybersecurity</span>
                  <span className="skill-tag mobile">Flutter & Dart</span>
                  <span className="skill-tag frontend">Node.js & Express</span>
                </div>
              </div>

              <div className="info-cards">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="info-card" data-aos="zoom-in" data-aos-delay="300">
                      <div className="info-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="info-content">
                        <h5>Personal Info</h5>
                        <ul>
                          <li><i className="fas fa-birthday-cake"></i> <strong>Age:</strong> {age} years old</li>
                          <li><i className="fas fa-calendar"></i> <strong>Birthday:</strong> 23 October 2000</li>
                          <li><i className="fas fa-map-marker-alt"></i> <strong>Location:</strong> Chiang Rai, Thailand</li>
                          <li><i className="fas fa-wheelchair"></i> <strong>Note:</strong> Movement disabilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-2">
                    <div className="info-card" data-aos="zoom-in" data-aos-delay="400">
                      <div className="info-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info-content">
                        <h5>Contact Info</h5>
                        <ul>
                          <li><i className="fas fa-phone"></i> <strong>Phone:</strong> +66 63 171 3123</li>
                          <li><i className="fas fa-envelope"></i> <strong>Email:</strong> piyamianglae.b@gmail.com</li>
                          <li><i className="fab fa-github"></i> <strong>GitHub:</strong> Piya-Boy</li>
                          <li><i className="fas fa-briefcase"></i> <strong>Freelance:</strong> Available</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-section" data-aos="fade-up" data-aos-delay="500">
                <div className="cta-buttons">
                  <a href="#contact" className="btn btn-primary cta-btn">
                    <i className="fas fa-paper-plane"></i>
                    Get In Touch
                  </a>
                  <a href="/Piya Miang-Lae Resume.pdf" className="btn btn-outline-primary cta-btn" download>
                    <i className="fas fa-download"></i>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

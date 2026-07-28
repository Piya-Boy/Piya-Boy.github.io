const SOCIALS = [
  { name: 'Facebook', handle: 'piya.boyman', href: 'https://www.facebook.com/piya.boyman', icon: 'fab fa-facebook-f', className: 'facebook' },
  { name: 'Instagram', handle: 'mr_piya_miang_lae', href: 'https://www.instagram.com/mr_piya_miang_lae/', icon: 'fab fa-instagram', className: 'instagram' },
  { name: 'GitHub', handle: 'Piya-Boy', href: 'https://github.com/Piya-Boy/Piya-Boy', icon: 'fab fa-github', className: 'github' },
  { name: 'LinkedIn', handle: 'Piya Miang-Lae', href: 'https://www.linkedin.com/in/piya-miang-lae-6167392a5/', icon: 'fab fa-linkedin-in', className: 'linkedin' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let's work together to bring your ideas to life</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="contact-info">
              <div className="contact-card" data-aos="fade-right" data-aos-delay="100">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>280/7 Sridonmul, Chiang Saen District<br />Chiang Rai Province, Thailand</p>
                </div>
              </div>

              <div className="contact-card" data-aos="fade-right" data-aos-delay="200">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p><a href="mailto:piyamianglae.b@gmail.com">piyamianglae.b@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-card" data-aos="fade-right" data-aos-delay="300">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p><a href="tel:+66631713123">+66 63 171 3123</a></p>
                </div>
              </div>

              <div className="social-contact" data-aos="fade-right" data-aos-delay="400">
                <div className="social-header">
                  <div className="social-icon">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <h4>Let's Connect</h4>
                  <p>Follow me for updates and collaborations</p>
                </div>
                <div className="social-links-contact">
                  {SOCIALS.map((s) => (
                    <a href={s.href} target="_blank" rel="noreferrer" className={`social-link ${s.className}`} key={s.name}>
                      <div className="social-icon-wrapper">
                        <i className={s.icon}></i>
                      </div>
                      <div className="social-info">
                        <span className="social-name">{s.name}</span>
                        <span className="social-handle">{s.handle}</span>
                      </div>
                      <div className="social-arrow">
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="contact-form-wrapper" data-aos="fade-left" data-aos-delay="200">
              <div className="form-header">
                <h3>Send Me a Message</h3>
                <p>I'm always interested in new opportunities and exciting projects</p>
              </div>

              <form action="https://api.web3forms.com/submit" method="POST" role="form" className="contact-form">
                <input type="hidden" name="access_key" value="1c4c7783-5067-48a4-9234-a6b037e2a66c" />

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" name="name" className="form-control" id="name" placeholder="Enter your full name" required />
                      <div className="form-icon">
                        <i className="fas fa-user"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" required />
                      <div className="form-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="What's this about?" required />
                  <div className="form-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" id="message" rows="6" placeholder="Tell me about your project or idea..." required></textarea>
                  <div className="form-icon">
                    <i className="fas fa-comment"></i>
                  </div>
                </div>

                <div className="form-status">
                  <div className="loading">
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Sending your message...</span>
                  </div>
                  <div className="error-message">
                    <i className="fas fa-exclamation-triangle"></i>
                    <span>Sorry, there was an error sending your message. Please try again.</span>
                  </div>
                  <div className="sent-message">
                    <i className="fas fa-check-circle"></i>
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                </div>

                <div className="form-submit">
                  <button type="submit" className="submit-btn">
                    <span className="btn-text">Send Message</span>
                    <span className="btn-icon">
                      <i className="fas fa-paper-plane"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

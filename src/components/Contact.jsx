import '../styles/sections.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="glass-card contact-card">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:Harsh.141615@gmail.com">Harsh.141615@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="glass-card contact-card">
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+918076692244">+91 8076692244</a>
                </div>
              </div>
            </div>
            <div className="glass-card contact-card">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">Location</p>
                  <p>Faridabad, Haryana, India</p>
                </div>
              </div>
            </div>
            <div className="glass-card contact-card">
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <a href="https://linkedin.com/in/harsh-sharma-qwer8303" target="_blank" rel="noopener noreferrer">
                    harsh-sharma-qwer8303
                  </a>
                </div>
              </div>
            </div>
            <div className="glass-card contact-card">
              <div className="contact-item">
                <span className="contact-icon">🐙</span>
                <div>
                  <p className="contact-label">GitHub</p>
                  <a href="https://github.com/harshsharma2004" target="_blank" rel="noopener noreferrer">
                    harshsharma2004
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

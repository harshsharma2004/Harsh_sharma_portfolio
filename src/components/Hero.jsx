import '../styles/hero.css'

const profilePlaceholder = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230099ff%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2300e5ff%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20rx%3D%22200%22%20ry%3D%22200%22%20fill%3D%22url(%23g)%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2255%25%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2292%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%3EHS%3C/text%3E%3C/svg%3E'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleImageError = (event) => {
    event.currentTarget.onerror = null
    event.currentTarget.src = profilePlaceholder
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="gradient-blob blob-4"></div>
        <div className="gradient-blob blob-5"></div>
      </div>
      <div className="hero-visual">
        <img
          className="hero-avatar"
          src={import.meta.env.BASE_URL + 'profile.png'}
          alt="Harsh Sharma"
          onError={handleImageError}
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Harsh Sharma</h1>
        <p className="hero-subtitle">Azure Security Engineer & Cloud Architect</p>
        <p className="hero-description">Securing cloud infrastructure • Building Zero Trust architectures • Threat Detection & Response</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}

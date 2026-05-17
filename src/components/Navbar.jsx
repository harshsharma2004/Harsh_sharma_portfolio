import { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    setScrolled(window.pageYOffset > 10)
  }

  window.addEventListener('scroll', handleScroll)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">HS</div>
        <ul className="nav-menu">
          <li><a href="#hero" className="nav-link" onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a href="#experience" className="nav-link" onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

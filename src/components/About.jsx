import '../styles/sections.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="glass-card about-card">
            <div className="card-icon">🛡️</div>
            <h3>Security First</h3>
            <p>Microsoft Certified Azure Security Engineer with hands-on experience in enterprise cloud security, SOC operations, and Zero Trust architecture implementation.</p>
          </div>
          <div className="glass-card about-card">
            <div className="card-icon">🚀</div>
            <h3>Builder Mindset</h3>
            <p>Full-stack developer with expertise in Next.js, React, TypeScript, and Python. Architecting secure cloud environments and building scalable applications.</p>
          </div>
          <div className="glass-card about-card">
            <div className="card-icon">🔍</div>
            <h3>Threat Detection</h3>
            <p>SOC expertise in alert triage, incident response, network forensics, and SIEM operations. Skilled in threat hunting and vulnerability assessment.</p>
          </div>
        </div>
        <div className="about-text">
          <p>I'm a final-year B.Tech CS student from Manav Rachna University with a passion for cloud security and infrastructure. Currently working as an IT Intern at Plasser India, where I manage enterprise infrastructure and architect secure Azure environments. With certifications in AZ-500, CCSK v5, and SC-900, I combine theoretical knowledge with practical experience in defending complex cloud architectures.</p>
        </div>
      </div>
    </section>
  )
}

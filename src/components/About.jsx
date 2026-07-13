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
            <p>Microsoft Certified Cybersecurity Architect Expert with hands-on experience in enterprise cloud defense, architecture design, and hybrid IT infrastructure.</p>
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
          <p>Microsoft Certified Cybersecurity Architect Expert and recent B.Tech Computer Science graduate with hands-on experience bridging enterprise cloud defense, architecture design, and hybrid IT infrastructure. Holding active SC-100, AZ-500, CCSK v5, AZ-900, and SC-900 certifications. Possesses a unique builder-defender mindset with a deep understanding of enterprise attack surfaces, derived from actively architecting secure cloud environments and engineering custom hardware defense systems.</p>
        </div>
      </div>
    </section>
  )
}

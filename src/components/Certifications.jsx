import '../styles/sections.css'

export default function Certifications() {
  const certifications = [
    {
      icon: '🧠',
      title: 'Microsoft Certified: Cybersecurity Architect Expert',
      subtitle: 'SC-100',
      issuer: 'Microsoft • 2026'
    },
    {
      icon: '🔷',
      title: 'Microsoft Certified: Azure Security Engineer Associate',
      subtitle: 'AZ-500',
      issuer: 'Microsoft • 2026'
    },
    {
      icon: '☁️',
      title: 'Certificate of Cloud Security Knowledge',
      subtitle: 'CCSK v5',
      issuer: 'Cloud Security Alliance • 2026'
    },
    {
      icon: '🔐',
      title: 'Security, Compliance & Identity Fundamentals',
      subtitle: 'SC-900',
      issuer: 'Microsoft • 2026'
    },
    {
      icon: '⚙️',
      title: 'Microsoft Certified: Azure Fundamentals',
      subtitle: 'AZ-900',
      issuer: 'Microsoft • 2026'
    },
    {
      icon: '🛡️',
      title: 'Google Cybersecurity Professional Certificate',
      subtitle: 'Coursera',
      issuer: 'Coursera • 2024'
    },
    {
      icon: '🖧',
      title: 'Ethical Hacker',
      subtitle: 'Cisco Networking Academy',
      issuer: 'Cisco • 2024'
    }
  ]

  const awards = [
    {
      icon: '🛡️',
      name: 'The Vigilant Sentinel',
      desc: 'Hack The Box • 2025',
      details: 'Validated practical SOC proficiency by completing the rigorous SOC Analyst path, demonstrating hands-on skills in threat hunting, incident response, and SIEM alert triage.'
    },
    {
      icon: '🐍',
      name: '"A Grade" Python Web Dev',
      desc: 'Infosys Foundation • 2025',
      details: 'Earned an A grade in the Infosys Foundation Python Web Developer program, strengthening backend architecture and Python scripting skills.'
    },
    {
      icon: '⚡',
      name: 'Outstanding Project Award',
      desc: 'MRU Tech Showcase • 2024',
      details: 'Awarded for maximizing renewable energy efficiency by engineering an autonomous dual-axis solar tracker with real-time IoT telemetry.'
    },
    {
      icon: '♻️',
      name: 'Letter of Appreciation: SDG Green Computing Initiative',
      desc: 'Manav Rachna University • 2023',
      details: 'Championed green computing and SDG initiatives by constructing a mixed-media e-waste mural to advocate for a circular economy and climate action.'
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="section-container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-card cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.subtitle}</p>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
          ))}
        </div>
        <div className="awards-section">
          <h3 className="awards-title">Awards & Honors</h3>
          <div className="awards-list">
            {awards.map((award, idx) => (
              <div key={idx} className="award-item glass-award-card">
                <span className="award-icon">{award.icon}</span>
                <div className="award-content">
                  <p className="award-name">{award.name}</p>
                  <p className="award-desc">{award.desc}</p>
                  <p className="award-details">{award.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

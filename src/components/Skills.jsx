import '../styles/sections.css'

export default function Skills() {
  const skillsData = [
    {
      category: 'Cloud & Security',
      skills: ['Azure Security', 'Microsoft Sentinel', 'Entra ID', 'Microsoft Defender', 'Zero Trust (MCRA)', 'Azure Policy', 'PIM', 'RBAC']
    },
    {
      category: 'Threat Operations & GRC',
      skills: ['Incident Response', 'Alert Triage', 'Network Forensics', 'NIST CSF', 'ISO 27001', 'IDS/IPS', 'Vulnerability Scanning']
    },
    {
      category: 'Infrastructure & Admin',
      skills: ['Windows Server 2022', 'Active Directory', 'Hyper-V', 'Linux/Ubuntu', 'PowerShell', 'DNS/DHCP']
    },
    {
      category: 'Development & Hardware',
      skills: ['Python', 'TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Arduino', 'ESP32', 'Git']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

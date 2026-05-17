import '../styles/sections.css'

export default function Experience() {
  const experiences = [
    {
      title: 'Information Technology Intern',
      company: 'Plasser India Pvt. Ltd.',
      date: 'January 2026 - Present',
      location: 'Faridabad',
      achievements: [
        'Managed enterprise IT infrastructure and advanced cloud security operations, maintaining 99.9% system availability',
        'Architected a secure Azure cloud environment with Windows Server 2022 and Hyper-V virtualization',
        'Automated threat detection and incident response workflows utilizing Microsoft Sentinel and Azure Logic Apps',
        'Implemented Zero Trust architecture with RBAC, PIM, and network micro-segmentation',
        'Facilitated external IT General Controls (ITGC) asset verification audits in collaboration with KPMG'
      ]
    },
    {
      title: 'Cybersecurity Intern (SOC)',
      company: 'Nullclass',
      date: 'June 2025 - July 2025',
      location: 'Remote',
      achievements: [
        'Executed SOC Tier 1/2 operations with rapid incident response and alert triage in ELK Stack SIEM',
        'Engineered and deployed custom SIEM detection rules for ransomware, credential stuffing, and DNS tunneling',
        'Conducted comprehensive Red/Blue/Purple team analyses and network forensics investigations'
      ]
    },
    {
      title: 'Project Intern',
      company: 'CodSoft',
      date: 'June 2024 - July 2024',
      location: 'Remote',
      achievements: [
        'Delivered full-stack web development projects utilizing Python, SQL, and modern frontend technologies'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="glass-card experience-card">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="company-badge">{exp.company}</span>
                </div>
                <p className="experience-date">{exp.date} • {exp.location}</p>
                <ul className="experience-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

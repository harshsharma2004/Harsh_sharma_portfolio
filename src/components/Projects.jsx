import '../styles/sections.css'

export default function Projects() {
  const projects = [
    {
      badge: 'Full Stack',
      title: 'IKRR.CO.IN - Live Event Management Platform',
      date: 'December 2025 - February 2026',
      description: 'Production-ready event management platform built with Next.js 16, React 19, PostgreSQL, and Prisma ORM. Implemented secure role-based access control via NextAuth.js with Google OAuth, and automated transactional email workflows.',
      tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth.js'],
      link: 'https://ikrr.co.in',
      award: false
    },
    {
      badge: 'Hardware Security',
      title: 'NRFBOX - Portable RF Security Toolkit',
      date: 'October 2025 - November 2025',
      description: 'Portable multi-band RF analyzer and jammer for physical-layer security testing. Integrated ESP32 microcontroller with three NRF24L01+ transceivers for simultaneous multi-channel packet analysis and offensive security testing modes.',
      tech: ['ESP32', 'NRF24L01+', 'Firmware', 'RF Security', 'IoT'],
      link: null,
      award: true,
      awardText: '🏆 Presented at CREOVATE 2K25 Project Expo'
    },
    {
      badge: 'IoT',
      title: 'Dual-Axis Solar Tracker & IoT Monitoring',
      date: 'March 2024 - April 2024',
      description: 'Autonomous solar harvesting system combining Arduino-based embedded controls with real-time ESP32 IoT telemetry. Optimized energy efficiency through dynamic, sensor-driven panel orientation.',
      tech: ['Arduino', 'ESP32', 'IoT', 'Embedded C'],
      link: null,
      award: true,
      awardText: '🏆 Outstanding Project Award - MRU Tech Showcase'
    }
    ,
    {
      badge: 'Flask',
      title: 'Employee Management System',
      date: 'Personal Project',
      description: 'A clean, user-friendly web application built with Flask to manage employee records. Supports full CRUD operations, responsive Bootstrap 5 UI, and SQLite storage.',
      tech: ['Flask', 'Python', 'SQLite', 'Bootstrap 5', 'Jinja2'],
      link: 'https://github.com/harshsharma2004/Employee_Management_System',
      award: false
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card project-card">
              <div className="project-badge">{project.badge}</div>
              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              {project.award && <p className="project-award">{project.awardText}</p>}
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Visit →</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

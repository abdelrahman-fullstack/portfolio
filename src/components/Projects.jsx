import React from 'react';

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "SkillSwap Platform",
      description: "An online web platform for exchanging skills and expertise among users for free without financial transactions. Features user matching based on requested and offered skills, a chat system, notifications, and reviews to build a collaborative community.",
      tech: ["React.js", "Laravel", "MySQL", "REST API", "WebSockets"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description: "An e-commerce application allowing users to browse products, manage their shopping cart, and place orders, along with an admin dashboard to manage products and operations.",
      tech: ["Laravel", "MySQL", "PHP", "Bootstrap"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 3,
      title: "Event Registration System",
      description: "An event management and registration system supporting user authentication, event creation, browsing, registration, and cancellation, with capacity checks, duplicate prevention, and route protection.",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 4,
      title: "Restaurant Management System",
      description: "A system for managing restaurant operations including orders, tables, reservations, menus, and inventory, featuring REST APIs for processing operations, checking table availability, and updating inventory.",
      tech: ["Express.js", "Node.js", "Database", "REST API"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 5,
      title: "Job Portal Application",
      description: "A job platform connecting job seekers with companies, enabling job postings, searching, filtering, and applying, complete with dashboards for managing jobs, applications, and users.",
      tech: ["PHP", "Laravel", "MySQL", "REST API"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 6,
      title: "Student Management System",
      description: "A student data management system enabling users to add, update, delete, and view student records, organizing data for smooth administrative operations through a clear interface.",
      tech: ["CRUD", "REST API", "Database", "Web Development"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 7,
      title: "Expense Tracker",
      description: "A finance application helping users record financial transactions, organize them, and track spending, with dashboards and reports to illustrate spending patterns.",
      tech: ["JavaScript", "React.js", "API", "Database"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 8,
      title: "Grove Market",
      description: "An e-commerce frontend store project showcasing products in an organized and attractive layout, focusing on an intuitive and responsive user experience across various screen sizes.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 9,
      title: "Bean & Bite Landing Page",
      description: "A landing page for a food and beverage project featuring a modern design that highlights brand identity and presents content engagingly with a focus on usability and responsiveness.",
      tech: ["React.js", "CSS", "JavaScript", "Responsive Design"],
      link: "https://github.com/abdelrahman-fullstack"
    }
  ];

  return (
    <section id="projects" style={{ padding: '80px 0', borderTop: '1px solid #1f2937' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>Featured Projects</h2>
        <p style={{ color: '#9ca3af', marginTop: '10px' }}>Some of the applications I have built</p>
      </div>

      <div className="projects-grid">
        {myProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 style={{ color: '#38bdf8', fontSize: '1.4rem', marginBottom: '15px', textTransform: 'uppercase' }}>
              {project.title}
            </h3>

            <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.7' }}>
              {project.description}
            </p>

            <div style={{ marginBottom: '25px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#818cf8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}
            >
              GitHub ←
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
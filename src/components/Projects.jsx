import React from 'react';

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "SkillSwap Platform",
      description: "منصة ويب تعاونية تهدف لربط المستخدمين الراغبين في تبادل المهارات والخبرات. قمت ببناء واجهات تفاعلية مرنة، وتطوير الـ RESTful APIs للربط مع قاعدة البيانات، مع دعم نظام حماية وتوثيق الصلاحيات بـ JWT.",
      tech: ["React.js", "Laravel", "MySQL", "REST API", "JWT"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description: "منصة تجارة إلكترونية متكاملة تحتوي على عرض المنتجات، إدارة عربة التسوق، معالجة الطلبات، بالإضافة إلى لوحة تحكم كاملة للمشرفين (Admin Dashboard) مبنية بالاعتماد على نظام MVC.",
      tech: ["Laravel", "MySQL", "PHP", "Bootstrap"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 3,
      title: "To-Do List Application",
      description: "تطبيق متقدم لإدارة المهام يدعم العمليات الأساسية (CRUD) بشكل فوري، ويتميز بتصميم متوافق تماماً مع الهواتف الذكية والأجهزة المختلفة لضمان أفضل تجربة مستخدم.",
      tech: ["React.js", "Laravel", "REST API", "Responsive UI"],
      link: "https://github.com/abdelrahman-fullstack"
    }
  ];

  return (
    <section id="projects" style={{ padding: '80px 0', borderTop: '1px solid #1f2937' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>المشاريع الحالية</h2>
        <p style={{ color: '#9ca3af', marginTop: '10px' }}>أبرز التطبيقات التي قمت بتطويرها بالكامل</p>
      </div>

      <div className="projects-grid">
        {myProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 style={{ color: '#38bdf8', fontSize: '1.4rem', marginBottom: '15px', textTransform: 'uppercase' }}>{project.title}</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.7' }}>{project.description}</p>
            
            <div style={{ marginBottom: '25px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>
             GitHub ←
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
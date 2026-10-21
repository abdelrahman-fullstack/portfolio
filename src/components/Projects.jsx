import React from 'react';

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "SkillSwap Platform",
      description: "منصة ويب لتبادل المهارات والخبرات بين المستخدمين مجانًا دون معاملات مالية. تشمل مطابقة المستخدمين حسب المهارات المطلوبة والمعروضة، ونظام محادثات وإشعارات وتقييمات لبناء مجتمع تعاوني.",
      tech: ["React.js", "Laravel", "MySQL", "REST API", "WebSockets"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description: "تطبيق تجارة إلكترونية يتيح استعراض المنتجات وإدارة عربة التسوق والطلبات، مع إمكانية إدارة المنتجات والعمليات من خلال لوحة تحكم للمشرفين.",
      tech: ["Laravel", "MySQL", "PHP", "Bootstrap"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 3,
      title: "Event Registration System",
      description: "نظام لإدارة الفعاليات والتسجيل فيها، يدعم إنشاء الحسابات وتسجيل الدخول، وإنشاء الفعاليات وعرضها والتسجيل بها وإلغاء التسجيل، مع التحقق من سعة الفعالية ومنع التسجيل المكرر وحماية المسارات.",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 4,
      title: "Restaurant Management System",
      description: "نظام لإدارة عمليات المطاعم يشمل تنظيم الطلبات والطاولات والحجوزات وقائمة الطعام والمخزون، مع واجهات API لتنفيذ العمليات والتحقق من توافر الطاولات وتحديث المخزون.",
      tech: ["Express.js", "Node.js", "Database", "REST API"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 5,
      title: "Job Portal Application",
      description: "منصة توظيف تربط الباحثين عن عمل بأصحاب الشركات، وتتيح نشر الوظائف والبحث عنها وتصفيتها والتقديم عليها، مع لوحات تحكم لإدارة الوظائف والطلبات والمستخدمين.",
      tech: ["PHP", "Laravel", "MySQL", "REST API"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 6,
      title: "Student Management System",
      description: "نظام لإدارة بيانات الطلاب يتيح إضافة السجلات وتعديلها وحذفها وعرضها، مع تنظيم البيانات وتسهيل عمليات إدارتها من خلال واجهة استخدام واضحة.",
      tech: ["CRUD", "REST API", "Database", "Web Development"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 7,
      title: "Expense Tracker",
      description: "تطبيق لإدارة المصروفات يساعد المستخدمين على تسجيل معاملاتهم المالية وتنظيمها ومتابعة الإنفاق، مع إمكانية تطوير لوحة معلومات وتقارير لتوضيح أنماط المصروفات.",
      tech: ["JavaScript", "React.js", "API", "Database"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 8,
      title: "Grove Market",
      description: "مشروع واجهة متجر إلكتروني لعرض المنتجات بطريقة منظمة وجذابة، مع التركيز على تصميم تجربة مستخدم سهلة ومتجاوبة مع مختلف أحجام الشاشات.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      link: "https://github.com/abdelrahman-fullstack"
    },
    {
      id: 9,
      title: "Bean & Bite Landing Page",
      description: "صفحة هبوط لمشروع في مجال الطعام والمشروبات، بتصميم عصري يبرز هوية العلامة التجارية ويعرض المحتوى بطريقة جذابة مع مراعاة سهولة الاستخدام والتوافق مع الشاشات المختلفة.",
      tech: ["React.js", "CSS", "JavaScript", "Responsive Design"],
      link: "https://github.com/abdelrahman-fullstack"
    }
  ];

  return (
    <section id="projects" style={{ padding: '80px 0', borderTop: '1px solid #1f2937' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>المشاريع الحالية</h2>
        <p style={{ color: '#9ca3af', marginTop: '10px' }}>أبرز التطبيقات التي قمت بتطويرها</p>
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

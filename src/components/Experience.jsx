import React from 'react';

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      organization: "Instant Software Solutions",
      location: "Cairo, Egypt",
      period: "February 2025 (1 Month)",
      tech: "React.js • Laravel",
      highlights: [
        "Applied Full Stack skills in a professional environment working on real-world web development tasks.",
        "Collaborated with a development team to build and maintain web application features using React.js and Laravel.",
        "Gained hands-on experience with agile workflows, code reviews, and production-level development practices."
      ]
    },
    {
      role: "Full Stack Development Course",
      organization: "Instant Software Solutions",
      location: "Cairo, Egypt",
      period: "2025",
      tech: "React.js • Laravel • Full Stack Web Development",
      highlights: [
        "Completed comprehensive training in full stack web development concepts.",
        "Mastered building dynamic interfaces using React.js and scalable backend systems with Laravel."
      ]
    },
    {
      role: "Full Stack Development Scholarship",
      organization: "National Telecommunications Institute (NTI)",
      location: "Cairo, Egypt",
      period: "March - May 2026",
      tech: "React.js • Laravel",
      highlights: [
        "Selected for a competitive government-sponsored scholarship covering advanced Full Stack Development.",
        "Completed intensive training in React.js, Laravel, and modern web development best practices.",
        "Delivered project-based assignments simulating real-world development scenarios."
      ]
    },
    {
      role: "Bachelor of Science in Computer Science",
      organization: "Arab Open University",
      location: "Qalyubia, Egypt",
      period: "Expected 2026",
      tech: "Computer Science Major",
      highlights: [
        "Completed coursework in Data Structures, Algorithms, Database Systems, Software Engineering, and Web Development."
      ]
    }
  ];

  return (
    <section id="experience" style={{ padding: '80px 20px', borderTop: '1px solid #1f2937' }}>
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>Experience & Education</h2>
          <p style={{ color: '#9ca3af', marginTop: '10px' }}>My professional internship, practical courses, and academic background</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="project-card" style={{ textAlign: 'left', padding: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                <div>
                  <h3 style={{ color: '#38bdf8', fontSize: '1.35rem', fontWeight: 'bold' }}>{exp.role}</h3>
                  <h4 style={{ color: '#e2e8f0', fontSize: '1rem', marginTop: '4px', fontWeight: '500' }}>
                    {exp.organization} <span style={{ color: '#6b7280' }}>• {exp.location}</span>
                  </h4>
                </div>
                <span style={{ color: '#818cf8', fontSize: '0.85rem', fontWeight: '600', background: '#1e1b4b', padding: '6px 14px', borderRadius: '20px', border: '1px solid #3730a3' }}>
                  {exp.period}
                </span>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: '500', background: '#064e3b', padding: '3px 10px', borderRadius: '6px' }}>
                  {exp.tech}
                </span>
              </div>

              <ul style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.7', paddingLeft: '20px', margin: 0 }}>
                {exp.highlights.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
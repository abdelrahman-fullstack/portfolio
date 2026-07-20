import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      skills: ["PHP", "Laravel", "Node.js", "Express.js"]
    },
    {
      title: "Database Management",
      skills: ["MySQL"]
    },
    {
      title: "Tools & Environment",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" style={{ padding: '80px 20px', background: '#090d16', borderTop: '1px solid #1f2937' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>Technical Skills</h2>
          <p style={{ color: '#9ca3af', marginTop: '10px' }}>Technologies and modern tools I use to build scalable web applications</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px' }}>
          {skillCategories.map((cat, index) => (
            <div key={index} style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ color: '#38bdf8', fontSize: '1.2rem', marginBottom: '20px', fontWeight: '600' }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="tech-badge" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
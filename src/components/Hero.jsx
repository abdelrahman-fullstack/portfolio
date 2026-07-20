import React from 'react';
// استيراد أيقونات LinkedIn و GitHub و Gmail من مكتبة react-icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Hero() {
  return (
    <section className="gradient-bg" style={{ padding: '80px 20px', textAlign: 'right' }}>
      <div style={{ 
        maxWidth: '1100px', 
        margin: '0 auto', 
        display: 'flex', 
        flexWrap: 'wrap-reverse', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: '40px'
      }}>
        
       
        <div style={{ flex: '1 1 500px', padding: '0 10px' }}>
          <p style={{ color: '#38bdf8', fontWeight: '600', marginBottom: '10px', tracking: 'wide' }}>
            Hi there, I am
          </p>
          <h1 className="main-title" style={{ fontSize: '3.5rem', marginBottom: '5px', textAlign: 'right', direction: 'ltr', display: 'block' }}>
            Abdelrahman Mohamed Salah
          </h1>
          <h2 style={{ fontSize: '1.8rem', color: '#818cf8', marginBottom: '20px', fontWeight: '600' }}>
            Full Stack Developer
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#9ca3af', marginBottom: '35px', lineHeight: '1.8' }}>
            I'm a Junior Full Stack Developer passionate about building modern, responsive, and scalable web applications using React, Laravel, and MySQL. I enjoy turning ideas into real-world products, writing clean and maintainable code, and continuously learning new technologies to improve my skills.
            <span style={{ color: '#22d3ee' }}>React.js</span> and engineering secure, scalable RESTful APIs using <span style={{ color: '#f87171' }}>Laravel</span> and <span style={{ color: '#4ade80' }}>Node.js</span>.
          </p>

         
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', justifyContent: 'flex-start', paddingRight: '5px' }}>
           
            <a href="https://www.linkedin.com/in/abdelrahman-mohamed-a7b7aa251" target="_blank" rel="noreferrer" style={{ color: '#9ca3af', fontSize: '1.7rem', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = '#0077b5'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
              <FaLinkedin />
            </a>
            
            <a href="https://github.com/abdelrahman-fullstack" target="_blank" rel="noreferrer" style={{ color: '#9ca3af', fontSize: '1.7rem', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffffff'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
              <FaGithub />
            </a>

        
            <a href="mailto:abdelrahmanelsalakany5@gmail.com" style={{ color: '#9ca3af', fontSize: '1.7rem', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = '#ea4335'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
              <SiGmail />
            </a>
          </div>
        

            <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#projects" className="btn-primary">
                    View My Work
                </a>
            
                <a 
                    href="/Abdelrahman_Mohamed_Salah_CV.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary" 
                    style={{ 
                    background: '#1f2937', 
                    boxShadow: 'none', 
                    border: '1px solid #374151',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                    }}
                >
                    View CV 📄
                </a>
            </div>
        </div>

     
        <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #38bdf8',
            boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)',
            background: '#111827',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src="/my-avatar.png" 
              alt="Abdelrahman Mohamed Salah" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://png.pngtree.com/png-clipart/20240705/original/pngtree-web-programmer-avatar-png-image_15495270.png';
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
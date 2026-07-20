import React from 'react';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '20px 40px', 
      background: '#090d16', 
      color: '#fff',
      borderBottom: '1px solid #1f2937',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ fontWeight: '800', fontSize: '1.4rem', tracking: 'wide' }}>
        <a href="#" style={{ color: '#38bdf8', textDecoration: 'none' }}>Abdelrahman.</a>
      </div>
      
      <div style={{ display: 'flex', gap: '25px', fontSize: '0.95rem', fontWeight: '500' }}>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }}>Home</a>
        <a href="#skills" style={{ color: '#9ca3af', textDecoration: 'none' }}>Skills</a>
        <a href="#experience" style={{ color: '#9ca3af', textDecoration: 'none' }}>Experience</a>
        <a href="#projects" style={{ color: '#9ca3af', textDecoration: 'none' }}>Projects</a>
        <a href="#contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
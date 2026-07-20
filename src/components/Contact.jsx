import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // إظهار رسالة شكر وتأكيد عند الإرسال
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" style={{ padding: '80px 20px', background: '#090d16', borderTop: '1px solid #1f2937' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* العنوان والوصف */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>Get In Touch</h2>
          <p style={{ color: '#9ca3af', marginTop: '10px' }}>
            Have a project in mind or looking for a dedicated Full Stack Developer? Let's connect!
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>
          
          {/* الجزء الأيسر: معلومات التواصل المباشرة */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#38bdf8', fontWeight: '600' }}>Contact Information</h3>
            <p style={{ color: '#9ca3af', lineHeight: '1.7' }}>
              I'm open to freelance opportunities, full-time remote positions, and local software engineering roles. Feel free to reach out directly via email or phone!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
              
              {/* الإيميل */}
              <a href="mailto:abdelrahmanelsalakany5@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#e2e8f0', textDecoration: 'none' }}>
                <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '12px', borderRadius: '10px', color: '#38bdf8' }}>
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af' }}>Email</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>abdelrahmanelsalakany5@gmail.com</span>
                </div>
              </a>

              {/* الهاتف */}
              <a href="tel:+201096470728" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#e2e8f0', textDecoration: 'none' }}>
                <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '12px', borderRadius: '10px', color: '#34d399' }}>
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af' }}>Phone / WhatsApp</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>+20 109 647 0728</span>
                </div>
              </a>

              {/* الموقع */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#e2e8f0' }}>
                <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '12px', borderRadius: '10px', color: '#f87171' }}>
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af' }}>Location</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>Qalyubia, Egypt</span>
                </div>
              </div>

            </div>

            {/* روابط الشبكات الاجتماعية */}
            <div style={{ marginTop: '15px' }}>
              <span style={{ display: 'block', fontSize: '0.9rem', color: '#9ca3af', marginBottom: '12px' }}>Connect with me:</span>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="https://linkedin.com/in/abdelrahman-mohamed-a7b7aa251" target="_blank" rel="noreferrer" 
                   style={{ background: '#111827', border: '1px solid #1f2937', padding: '10px 18px', borderRadius: '8px', color: '#38bdf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/abdelrahman-fullstack" target="_blank" rel="noreferrer" 
                   style={{ background: '#111827', border: '1px solid #1f2937', padding: '10px 18px', borderRadius: '8px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

          </div>

          {/* الجزء الأيمن: نموذج المراسلة Form */}
          <div style={{ flex: '1 1 450px', background: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <h3 style={{ color: '#34d399', fontSize: '1.5rem', marginBottom: '10px' }}>Message Sent Successfully! 🎉</h3>
                <p style={{ color: '#9ca3af' }}>Thank you for reaching out, Abdelrahman will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '8px' }}>Your Name</label>
                  <input type="text" required placeholder="John Doe" 
                         style={{ width: '100%', padding: '12px 16px', background: '#090d16', border: '1px solid #374151', borderRadius: '8px', color: '#fff', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '8px' }}>Your Email</label>
                  <input type="email" required placeholder="john@example.com" 
                         style={{ width: '100%', padding: '12px 16px', background: '#090d16', border: '1px solid #374151', borderRadius: '8px', color: '#fff', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '8px' }}>Message</label>
                  <textarea required rows="4" placeholder="Hello Abdelrahman, I would like to discuss a project..." 
                            style={{ width: '100%', padding: '12px 16px', background: '#090d16', border: '1px solid #374151', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ border: 'none', cursor: 'pointer', width: '100%', marginTop: '10px' }}>
                  Send Message 🚀
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
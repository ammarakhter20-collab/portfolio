'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message Sent! 🚀');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message. Try again.');
      }
    } catch (err) {
      setStatus('Something went wrong.');
    }
  };
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setStatus(`${label} copied!`);
    setTimeout(() => setStatus(null), 2000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.info} glass-card`}>
            <h2 className="text-gradient">Get In Touch</h2>
            <p className={styles.description}>
              Have a project in mind or just want to say hi? 
              Drop a message and I'll get back to you as soon as possible.
            </p>
            <div className={styles.details}>
              <div 
                className={`${styles.detailItem} glass-card`} 
                onClick={() => handleCopy('ammarakhter2005@gmail.com', 'Email')}
              >
                <span>Email:</span>
                <p>ammarakhter2005@gmail.com</p>
              </div>
              <div 
                className={`${styles.detailItem} glass-card`} 
                onClick={() => handleCopy('03147479417', 'Phone')}
              >
                <span>Phone:</span>
                <p>03147479417</p>
              </div>
            </div>
          </div>
          
          <form className={`${styles.form} glass-card`} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea 
                rows={5} 
                required 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
            {status && <p className={styles.status}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

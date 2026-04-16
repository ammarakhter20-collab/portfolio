import Navbar from '@/components/Navigation/Navbar';
import Hero from '@/components/Sections/Hero';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      
      <section id="about" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-gradient">About Me</h2>
          <p style={{ color: 'var(--text-dim)', marginTop: '2rem', maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.8' }}>
            I am a full-stack developer with a passion for building cohesive digital experiences. 
            My work focuses on the intersection of modern frontend frameworks and robust backend logic. 
            I believe in writing clean, modular code that scales.
          </p>
        </div>
      </section>

      <Skills />
      
      <Projects />

      <Contact />
      
      <footer style={{ padding: '50px 0', borderTop: '1px solid var(--card-border)', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} M Ammar Akhter. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

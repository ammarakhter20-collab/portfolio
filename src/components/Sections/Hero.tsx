import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={`${styles.badge} animate-in`}>Available for Work</div>
          <h1 className={`${styles.title} animate-in`}>
            M AMMAR <br />
            <span className="text-gradient">AKHTER.</span>
          </h1>
          <p className={`${styles.subtitle} animate-in`}>
            Building high-performance, logic-driven web applications 
            with precision and modern aesthetics.
          </p>
          
          <div className={`${styles.actions} animate-in`}>
            {/* Main Creative CTA */}
            <div className={styles.cvWrapper}>
              <a href="/cv.pdf" className={styles.cvBtn}>
                <span className={styles.btnText}>Download Resume</span>
                <span className={styles.pulse}></span>
              </a>
            </div>
            <a href="#projects" className={styles.secondaryBtn}>
              View Projects
            </a>
          </div>
        </div>
        
        <div className={styles.blob}></div>
      </div>
    </section>
  );
};

export default Hero;

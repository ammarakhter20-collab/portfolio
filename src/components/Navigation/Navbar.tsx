import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <span className="text-gradient">AMMAR.</span>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={styles.navAction}>
          <a href="#contact" className={styles.hireBtn}>Let's Build</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

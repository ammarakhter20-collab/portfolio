import React from 'react';
import styles from './Skills.module.css';

const skills = [
  { category: 'Frontend', tech: ['React', 'Next.js', 'TypeScript', 'CSS Modules', 'GSAP'] },
  { category: 'Backend', tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'API Design'] },
  { category: 'Tools', tech: ['Git', 'Docker', 'Vercel', 'Postman', 'VS Code'] }
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className="container">
        <h2 className={`${styles.title} text-gradient`}>Expertise</h2>
        <div className={styles.grid}>
          {skills.map((skill, idx) => (
            <div key={idx} className={`${styles.card} glass-card`}>
              <h3 className={styles.category}>{skill.category}</h3>
              <div className={styles.techList}>
                {skill.tech.map((item, tIdx) => (
                  <span key={tIdx} className={styles.techItem}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

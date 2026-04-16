import React from 'react';
import styles from './Projects.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  gallery: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, gallery }) => {
  const screenCount = gallery.length;
  return (
    <div className={`${styles.card} glass-card`}>
      {/* 1. Theme-Sync Mesh Backdrop */}
      <div className={styles.meshBackdrop} />

      {/* 2. Cyber Monitor Frame */}
      <div className={styles.monitorFrame}>
        <img src={image} alt={title} className={styles.projectImage} />
        <div className={styles.frameBadge}>
          {screenCount} {screenCount === 1 ? 'Screen' : 'Screens'}
        </div>
      </div>

      {/* 3. Frost-Glass Content Panel */}
      <div className={styles.glassContent}>
        <div className={styles.header}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <div className={styles.tagList}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.projectTag}>{tag}</span>
            ))}
          </div>
        </div>

        <p className={styles.projectDescription}>{description}</p>

        {/* Action Footer */}
        <div className={styles.projectAction}>
          <div className={styles.actionInfo}>
            <span className={styles.viewProject}>View Project</span>
            <span className={styles.viewCount}>{screenCount} {screenCount === 1 ? 'Screen' : 'Screens'} Available</span>
          </div>
          <button className={styles.projectArrow} aria-label="View Project Details">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

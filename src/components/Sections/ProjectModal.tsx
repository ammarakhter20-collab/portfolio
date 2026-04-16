import React, { useState } from 'react';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    fullDetails: string;
    image: string;
    gallery: string[];
    tags: string[];
    liveUrl: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(project.image);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} glass-card`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close Modal">
          &times;
        </button>

        <div className={styles.layout}>
          <div className={styles.gallery}>
            <div className={styles.mainImageWrapper}>
              <img 
                key={activeImage} // Force re-animation on change
                src={activeImage} 
                alt={project.title} 
                className={styles.mainImage} 
              />
            </div>
            <div className={styles.thumbnails}>
              {project.gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.thumbnail} ${activeImage === img ? styles.activeThumbnail : ''}`}
                  onMouseEnter={() => setActiveImage(img)}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`Screen ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className={styles.info}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.tags}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>{tag}</span>
              ))}
            </div>
            
            <div className={styles.scrollArea}>
              <h4 className={styles.subheading}>Project Overview</h4>
              <p className={styles.details}>{project.fullDetails}</p>
              
              <h4 className={styles.subheading}>Key Features</h4>
              <ul className={styles.features}>
                <li>MERN Stack Architecture</li>
                <li>Real-time Resource Allocation</li>
                <li>Automated Report Generation</li>
                <li>Interactive Coordinator Dashboards</li>
              </ul>
            </div>

            <div className={styles.actions}>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.liveBtn}
              >
                Access Live Project
                <span className={styles.pulse}></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

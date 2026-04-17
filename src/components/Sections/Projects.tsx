"use client";

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import styles from './Projects.module.css';

const projectsData = [
  {
    title: "CUST FYP MANAGEMENT SYSTEM",
    description: "A comprehensive portal for managing Final Year Projects at Capital University of Science & Technology. Features exam creation, automated report generation, and resource allocation.",
    fullDetails: "The CUST FYP Management System was designed to digitize the manual coordination of thousands of students. It implements a multi-role architecture (Coordinator, Supervisor, Student, Juror). Key features include a robust automated report generator for project outcomes and a specialized Juror portal for internal/external project evaluations. The system relies heavily on a high-performance MERN architecture to handle real-time file submissions and heavy concurrent traffic during project submission weeks.",
    image: "/projects/cust-fms.png",
    gallery: [
      "/projects/cust-fms.png",
      "/projects/fyp-dashboard.png",
      "/projects/fyp-submissions.png",
      "/projects/fyp-reports.png"
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "Full Stack"],
    liveUrl: "#" // Will update later as per user's info
  },
  {
    title: "NEED FOR SPEED UNBOUND CLONE",
    description: "A premium, high-performance web experience featuring a custom 'Broken Glass' aesthetic, neon shaders, and real-time game news integration.",
    fullDetails: "This advanced clone replicates the high-octane energy of Need for Speed Unbound while pushing visual boundaries. It features a custom-built HUD, interactive glass panels with sophisticated backdrop filters, and a seamless background video system (integrated as a primary UI feature). The architecture leverages Next.js 16 and React 19 for industry-leading performance, supported by a robust Django API for secure content management.",
    image: "/projects/nfs-main.png",
    gallery: [
      "/projects/nfs-main.png",
      "/projects/nfs-1.png",
      "/projects/nfs-2.png"
    ],
    tags: ["Next.js 16", "React 19", "Django", "DRF", "CSS Modules", "TypeScript"],
    liveUrl: "https://need-for-speed-web.vercel.app/"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const openModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Lock scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Unlock scroll
  };

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className={`${styles.sectionTitle} text-gradient`}>MY WORK</h2>
        <div className={styles.grid}>
          {projectsData.map((project, idx) => (
            <div key={idx} onClick={() => openModal(project)}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                gallery={project.gallery}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default Projects;

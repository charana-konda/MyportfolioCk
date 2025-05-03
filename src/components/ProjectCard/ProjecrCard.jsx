import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, gitLink, websiteLink, techStack, image }) => {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={`${title} preview`} />
        </div>
      )}

      <h2>{title}</h2>
      <p>{description}</p>

      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-item">{tech}</span>
        ))}
      </div>

      <div className="project-links">
        {gitLink && <a href={gitLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {websiteLink && <a href={websiteLink} target="_blank" rel="noopener noreferrer">Live Site</a>}
      </div>
    </div>
  );
};

export default ProjectCard;

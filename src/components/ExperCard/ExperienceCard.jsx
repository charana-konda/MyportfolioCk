import React from 'react';
import './Experience.css';
import { FaCalendarAlt } from 'react-icons/fa';

const ExperienceCard = ({ role, company, duration, description, tech, image }) => {
  return (
    <div className="exp-card">
      {image && (
        <div className="exp-image-wrapper">
          <img src={image} alt={`${company} logo`} className="exp-image" />
        </div>
      )}
      <div className="exp-header">
        <h3 className="exp-role">{role}</h3>
        <h4 className="exp-company">@ {company}</h4>
      </div>
      <div className="exp-duration">
        <FaCalendarAlt className="icon" />
        <span>{duration}</span>
      </div>
      <p className="exp-description">{description}</p>
      <p className="exp-tech"><strong>Tech:</strong> {tech}</p>
    </div>
  );
};

export default ExperienceCard;

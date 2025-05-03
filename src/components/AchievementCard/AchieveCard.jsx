
import React from 'react';
import '../AchievementCard/Achievement.css'; // Adjust the path as necessary

const AchievementCard = ({ image, title, description }) => {
  return (
    <div className="achievement-card">
      <img src={image} alt={title} className="achievement-image" />
      <div className="achievement-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;

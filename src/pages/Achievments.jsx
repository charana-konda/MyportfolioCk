import React from 'react';
import AchievementCard from '../components/AchievementCard/AchieveCard';

const Achievements = () => {
  const achievements = [
    
    {
      image: '/assets/Epam.jpg', // Replace with actual image URL
      title: 'EPAM Women India Scholar',
      description: 'Awarded the EPAM India Women Scholarship for outstanding potential and contribution to the tech community.'
    },
    {
      image: '/assets/FFE.jpg', // Replace with actual image URL
      title: 'Foundation for Excellence Scholar & Mentee',
      description: 'Chosen as a scholar and mentee under the Foundation for Excellence (FFE) program for academic merit .'
    },
    {
        image: '/assets/AFE.jpg', // Replace with actual image URL
        title: 'Amazon Future Engineer Scholar',
        description: 'Selected as an Amazon Future Engineer Scholar for academic excellence and interest in technology.'
      }
  ];

  return (
    <section className="achievements-section" id="achievements" style={{ paddingTop: '100px' }}>
      <h2 className="achievements-title" style={{ textAlign: 'center' }}>🏆 Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <AchievementCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;

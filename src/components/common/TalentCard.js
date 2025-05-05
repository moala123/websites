import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function TalentCard({ talent }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`talent-card ${isDarkMode ? 'dark' : ''}`}>
      <div className="talent-image">
        <img src={talent.image} alt={talent.title} />
      </div>
      <div className="talent-content">
        <h3>{talent.title}</h3>
        <p className="category">{talent.category}</p>
        <p className="description">{talent.description}</p>
        <div className="skills">
          {talent.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
        <div className="social-links">
          {Object.entries(talent.social).map(([platform, link]) => (
            <a key={platform} href={link} target="_blank" rel="noopener noreferrer">
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TalentCard;
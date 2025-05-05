import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Profile() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`profile-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-image">
            <img src="/images/profile.png" alt="Moala Ibrahim" />
          </div>
          <div className="profile-info">
            <h1>Moala Ibrahim</h1>
            <p className="career">Front End Developer</p>
            <p className="talent-category">Football Player</p>
          </div>
        </div>
        <div className="profile-content">
          <section className="about-section">
            <h2>About Me</h2>
            <p>Front End Developer with a passion for football. Combining technical expertise with athletic abilities.</p>
          </section>
          <section className="talents-section">
            <h2>My Talents</h2>
            <div className="talent-list">
              <div className="talent-item">
                <h3>Football</h3>
                <p>Professional football player with strong technical skills</p>
              </div>
              <div className="talent-item">
                <h3>Web Development</h3>
                <p>Creating responsive and modern web applications</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profile;
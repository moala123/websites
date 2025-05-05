import React from 'react';
import TalentCard from '../components/common/TalentCard';
import { talents } from '../data/sampleTalents';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Showcase Your Talent to the World</h1>
        <p>Join our community of talented individuals and share your passion</p>
      </section>
      <section className="featured-talents">
        <h2>Featured Talents</h2>
        <div className="talent-grid">
          {talents && talents.map(talent => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
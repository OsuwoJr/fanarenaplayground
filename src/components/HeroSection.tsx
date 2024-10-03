import React from 'react';
import '../index.css';
import Button from '../components/Button'; // Ensure this path is correct

type HeroSectionProps = {
  onGetStartedClick: () => void; // Correctly typed
};

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStartedClick }) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(/hero.png)`, // Use the URL path to the image in the public directory
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-content">
        <h1>Welcome To FanArena!</h1>
        <p>Join the ultimate sports metaverse where fans play, win, and collect NFTs. Engage with your favorite sports like never before!</p>
        <Button text="Play Now!" onClick={onGetStartedClick} />
      </div>
    </section>
  );
};

export default HeroSection;

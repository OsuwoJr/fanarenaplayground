import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';
import '../index.css';

const LandingPage: React.FC = () => {
  
  const loginRef = useRef<HTMLDivElement>(null);


  const handleGetStartedClick = () => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
     
      <HeroSection onGetStartedClick={handleGetStartedClick} />
      
    
      <DashboardPage />

      <div ref={loginRef}>
        <LoginPage />
      </div>
    </div>
  );
};

export default LandingPage;

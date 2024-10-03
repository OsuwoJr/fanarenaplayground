import React from 'react';
import GridSection from '../components/GridSection';
import '../index.css';

const DashboardPage: React.FC = () => {
  const gridItems = [
    {
      title: 'Virtual Stadiums',
      description: 'Own, customize, and manage your virtual stadiums as NFTs. Lease them or host events to monetize your assets.',
      imageUrl: '/stadium.jpeg', 
      link: '/virtual-stadiums' 
    },
    {
      title: 'Team Management',
      description: 'Create and manage your sports teams. Trade NFTs, improve team performance, and compete in various leagues.',
      imageUrl: '/team2.jpeg',
      link: '/team-management' 
    },
    {
      title: 'Gamified Sports Events',
      description: 'Participate in virtual leagues and tournaments. Compete, spectate, and influence outcomes with real-world data integration.',
      imageUrl: '/gamified.jpeg',
      link: '/gamified-events' 
    },
    {
      title: 'In-Game Economy',
      description: 'Engage in a tokenized economy. Earn, spend, and trade tokens to upgrade stadiums, acquire exclusive NFTs, and access premium events.',
      imageUrl: '/economy1.jpeg',
      link: '/Economy' 
    },
    {
      title: 'Social & Fan Interaction',
      description: 'Build fan clubs, trade NFT memorabilia, and engage in metaverse activities like virtual meet-and-greets and tailgate parties.',
      imageUrl: '/duo2.jpeg',
      link: '/fan-interaction' 
    },
    {
      title: 'Cross-Sport & Multi-League Support',
      description: 'Support multiple sports and integrate e-sports leagues. Collaborate and compete in hybrid events for a unified experience.',
      imageUrl: '/cross2.jpeg',
      link: '/cross-sport' 
    },
    {
      title: 'Create New Event',
      description: 'Organize and manage your own fantasy sports events with ease.',
      imageUrl: '/event1.jpeg',
      link: '/gamified-events' 
    },
    {
      title: 'My NFT Collection',
      description: 'View and manage your exclusive FanArena NFTs, including stadiums, teams, and player cards.',
      imageUrl: '/player3.jpeg',
      link: '/' 
    },
  ];

  return (
    <div className="container">
      <h1>FanArena Zones!</h1>

      <GridSection items={gridItems} />

      
    </div>
  );
};

export default DashboardPage;

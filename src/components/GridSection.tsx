// src/components/GridSection.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

interface GridItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string; // Add the link property
}

interface GridSectionProps {
  items: GridItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ items }) => {
  return (
    <section className="grid-section">
      <div className="grid-container">
        {items.map((item, index) => (
          <Link to={item.link} key={index} className="grid-item-link"> {/* Wrap in Link */}
            <div className="grid-item">
              <img src={item.imageUrl} alt={item.title} className="grid-image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GridSection;

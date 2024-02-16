// SkyScraperRight.tsx

import React, { useEffect, useState } from 'react';
import '../../../styles/banner/SkyScraperRight.scss'; // Import the SkyscraperComponent.scss file

const imagePlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';

interface SkyscraperProps {
  marginTop?: string;
}

const SkyScraperRight: React.FC<SkyscraperProps> = ({ marginTop = '30px' }) => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const stopDistanceFromBottom = 100; // Adjust this value as needed
      const distanceFromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);

      setIsFixed(distanceFromBottom > stopDistanceFromBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`skyscraper-right${isFixed ? ' fixed' : ''}`} style={{ marginTop }}>
      <div className="skyscraper-content">
        <h3>Featured Product</h3>
        <img src={imagePlaceholder} alt="Featured Product" />
        <p>Discover our top-rated product with amazing features.</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default SkyScraperRight;

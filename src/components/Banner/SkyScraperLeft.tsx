// SkyScraperLeft.tsx
import React, { useEffect, useState } from 'react';
import '../../../styles/banner/SkyScraperLeft.scss';

const imagePlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';

interface SkyscraperProps {
  marginTop?: string;
}

const SkyScraperLeft: React.FC<SkyscraperProps> = ({ marginTop = '30px' }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const scrollThreshold = documentHeight - windowHeight - 100; // Adjust this value as needed

      setIsHidden(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`skyscraper${isHidden ? ' hidden' : ''}`} style={{ marginTop }}>
      <div className="skyscraper-content">
        <h3>Featured Product</h3>
        <img src={imagePlaceholder} alt="Featured Product" />
        <p>Discover our top-rated product with amazing features.</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default SkyScraperLeft;

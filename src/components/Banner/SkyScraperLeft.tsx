// SkyscraperComponent.tsx

import React from 'react';
import '../../../styles/banner/SkyScraperLeft.scss'; // Import the SkyscraperComponent.scss file
const imagePlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';


interface SkyscraperProps {
  marginTop?: string;
}

const SkyScraperLeft: React.FC<SkyscraperProps> = ({ marginTop = '30px' }) => {
  return (
    <div className="skyscraper" style={{ marginTop }}>
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

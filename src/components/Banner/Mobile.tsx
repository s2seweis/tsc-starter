// MobileBannerComponent.tsx

import React from 'react';
import '../../../styles/banner/mobile.scss'; // Import the MobileBannerComponent.scss file

interface MobileBannerProps {}

const Mobile: React.FC<MobileBannerProps> = () => {
  return (
    <div className="banner mobile-banner">
      <div className="mobile-banner-content">
        <h2>Flash Sale!</h2>
        <p>Get exclusive deals on your favorite items. Limited time only!</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Mobile;

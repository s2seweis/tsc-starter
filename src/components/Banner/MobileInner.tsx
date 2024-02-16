// MobileBannerComponent.tsx

import React from 'react';
import '../../../styles/banner/MobileInner.scss'; // Import the MobileBannerComponent.scss file

interface MobileBannerProps {}

const MobileInner: React.FC<MobileBannerProps> = () => {
  return (
    <div className="banner mobile-banner-inner">
      <div className="mobile-banner-content">
        <h2>Flash Sale!</h2>
        <p>Get exclusive deals on your favorite items. </p>
        {/* <button>Shop Now</button> */}
      </div>
    </div>
  );
};

export default MobileInner;

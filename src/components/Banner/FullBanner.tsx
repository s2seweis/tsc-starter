import React from 'react';
import '../../../styles/banner/full.scss';

interface BannerProps {
  backgroundColor?: string;
  textColor?: string;
}

const FullBanner: React.FC<BannerProps> = () => {
  return (
    <div className="banner full-banner">
      <div className="full-banner-content">
        <h2>Exclusive Sale!</h2>
        <p>Don't miss our limited-time offer. Shop now and enjoy big savings on your favorite items.</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default FullBanner;

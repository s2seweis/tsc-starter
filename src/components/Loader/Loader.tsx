// components/Loader.tsx
import React from 'react';
import './Loader.scss'; // Import SCSS module directly

const Loader: React.FC = () => {
  return (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
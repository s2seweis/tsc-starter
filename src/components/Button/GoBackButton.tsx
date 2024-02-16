// GoBackButtonComponent.tsx

import React from 'react';
import Link from 'next/link'; // Import Link from 'next/link'
import '../../../styles/components/GoBackButton.scss'; // Import the GoBackButtonComponent.module.scss file

interface GoBackButtonProps {}

const GoBackButton: React.FC<GoBackButtonProps> = () => {
  return (
    <div className="goBackButton">
      <Link href="/">
        <span>Go Back</span>
      </Link>
    </div>
  );
};

export default GoBackButton;

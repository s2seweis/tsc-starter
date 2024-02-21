// pages/404.tsx

import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div style={{width:"70%", margin:"auto" }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for might not exist or has been moved.</p>
      <Link href="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFound;

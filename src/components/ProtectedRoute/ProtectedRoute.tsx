// components/ProtectedRoute.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProtectedRoute: React.FC = ({ children }) => {
  const router = useRouter();
  
  useEffect(() => {
    const isAuthenticated = "admin";
    
    if (isAuthenticated) {
      // Redirect to login page if not authenticated
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;

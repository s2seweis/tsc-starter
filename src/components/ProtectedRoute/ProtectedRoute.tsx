import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode; // Add children property
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAuthenticated }) => {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Render children only if authenticated
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;

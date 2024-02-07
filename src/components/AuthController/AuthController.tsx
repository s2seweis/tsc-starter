// components/AuthController.tsx
import React from 'react';
import { useAuth } from '../../../context/AuthContext';

const AuthController: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();
  console.log("line:1", isAuthenticated);
  
  const handleToggleAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login();
    }
  };

  return (
    <div>
      <p>Authentication status: {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
      <button onClick={handleToggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default AuthController;

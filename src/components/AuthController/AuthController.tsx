// components/AuthController.tsx
import React from 'react';
import { useAuth } from '../../../context/AuthContext';

const AuthController: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();
  
  const handleToggleAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login();
    }
  };

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      {/* <p>Authentication status: {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p> */}
      <button style={{padding:"5px", marginLeft:"0px"}} onClick={handleToggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default AuthController;

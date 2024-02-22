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
    <div style={{display:"flex", justifyContent:"center"}}>
      {/* <p>Authentication status: {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p> */}
      <button style={{padding:"5px", marginLeft:"0px", fontSize:"larger", borderRadius:"50%", height:"70px", width:"70px", filter:"drop-shadow(2px 2px 1px black)"}} onClick={handleToggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default AuthController;

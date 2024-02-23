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
      <div style={{padding:"10px", marginLeft:"0px", fontSize:"larger", background:"aliceblue", borderRadius:"10px"}} onClick={handleToggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </div>
    </div>
  );
};

export default AuthController;

// pages/dashboard.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute';
import GoBackButton from '../src/components/Button/GoBackButton';
// import styles from '../styles/pages/dashboard.module.scss';

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth();
  console.log("line:11", isAuthenticated);


  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <div className='dash'>

        <GoBackButton/>

        <h1 style={{textAlign:"center"}}>Dashboard</h1>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;

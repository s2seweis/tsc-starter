// pages/dashboard.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute';
import Link from 'next/link'; // Import Link from next/link
import styles from '../styles/dashboard.module.scss';

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth();
  console.log("line:11", isAuthenticated);


  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <div>
        <div className={styles.goBackButton}>
          <Link href="/">
            <span>Go Back</span>
          </Link>
        </div>
        <h1 style={{textAlign:"center"}}>Dashboard</h1>
        {/* Dashboard content */}
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;

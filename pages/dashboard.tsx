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
        <h1>Dashboard</h1>
        {/* Dashboard content */}
        <div className={styles.goBackButton}>
          <Link href="/">
            <span>Go back to Home</span>
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;

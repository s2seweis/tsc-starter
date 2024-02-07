// pages/dashboard.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute';

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <div>
        <h1>Dashboard</h1>
        {/* Dashboard content */}
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;

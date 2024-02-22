import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import Layout from '../src/components/Layout/Layout';
import Loader from '../src/components/Loader/Loader'; // Import the Loader component

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a delay of 2 seconds
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <AuthProvider>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </AuthProvider>
  );
};

export default MyApp;

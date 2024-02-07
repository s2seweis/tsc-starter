// pages/_app.tsx
import React from 'react';
import { AuthProvider } from '../context/AuthContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;

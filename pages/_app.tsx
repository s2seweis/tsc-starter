// pages/_app.tsx
import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import Layout from '../src/components/Layout/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
};

export default MyApp;

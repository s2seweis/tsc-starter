import React from 'react';
import { AppProps } from 'next/app'; // Import AppProps from next/app
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

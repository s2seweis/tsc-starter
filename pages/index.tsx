import React from 'react';
import styles from '../styles/pages/index.module.scss';
import AuthController from '../src/components/AuthController/AuthController';
import FullBanner from '../src/components/Banner/FullBanner';
import Seo from '../src/components/Seo/Seo';

interface LandingPageProps {
  // Add any additional props for your landing page
}

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
}

const LandingPage: React.FC<LandingPageProps> = () => {
  const seoProps: SEOProps = {
    title: "Your Landing Page Title1",
    description: "Description of your landing page for SEO",
    ogImage: "URL to your Open Graph image (optional)",
  };

  return (
    <>
      <Seo {...seoProps} />
      <div className={styles.container}>
        <section style={{display:"flex", justifyContent:"center"}}>
        <FullBanner />
        </section>
        <section style={{ marginTop: "" }} className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 style={{ textAlign: "center" }}>Welcome to Your Next.js App</h1>
            <p style={{ textAlign: "center" }}>Build fast, modern web applications with Next.js</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;

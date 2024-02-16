import React from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
import styles from '../styles/pages/index.module.scss';
import AuthController from '../src/components/AuthController/AuthController';
import FullBanner from '../src/components/Banner/FullBanner';


const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <FullBanner/>
      <section style={{marginTop:"50px"}} className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 style={{textAlign:"center"}}>Welcome to Your Next.js App</h1>
          <p style={{textAlign:"center"}}>Build fast, modern web applications with Next.js</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

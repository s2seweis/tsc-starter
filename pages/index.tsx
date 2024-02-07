import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.scss';
import AuthController from '../src/components/AuthController/AuthController';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <AuthController/>
      <Head>
        <title>Next.js Landing Page</title>
        <meta name="description" content="Your Next.js landing page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav>
          <div className={styles.logo}>Logo</div>
          <ul className={styles.navLinks}>
            <li><Link href="/"><span>Home</span></Link></li>
            <li><Link href="/posts"><span>Posts</span></Link></li>
            <li><Link href="/contact"><span>Contact</span></Link></li>
            <li><Link href="/dashboard"><span>Dashboard</span></Link></li>
          </ul>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Your Next.js App</h1>
          <p>Build fast, modern web applications with Next.js</p>
          <Link href="/get-started">
            <button className={styles.button}>Get Started</button>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default LandingPage;

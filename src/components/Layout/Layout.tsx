// Layout.tsx
import React, { ReactNode, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { SidebarProvider } from '../../../context/SidebarContext';
import styles from '../../../styles/main.module.scss';
import Loader from '../../components/Loader/Loader'; // Import the Loader component
import FullBanner from '../Banner/FullBanner';
import SkyScraperLeft from '../Banner/SkyScraperLeft';
import SkyScraperRight from '../Banner/SkyScraperRight';
import Mobile from '../Banner/Mobile';

const imagePlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with your actual data fetching logic)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SidebarProvider>
      <Navbar />
      <Sidebar />

      {/* Render Loader while loading */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Different Banner Types */}
          <SkyScraperLeft />
          <SkyScraperRight />

          <div className="banner medium-rectangle">
            {/* Medium Rectangle Content */}
          </div>

          <div className="banner leaderboard">
            {/* Leaderboard Content */}
          </div>

          <main className={styles.content} style={{ minHeight: "100vh" }}>
            {children}
          </main>

          <Mobile />

          <Footer />
        </>
      )}
    </SidebarProvider>
  );
};

export default Layout;

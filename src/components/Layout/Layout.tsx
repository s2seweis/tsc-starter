// Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { SidebarProvider } from '../../../context/SidebarContext'; // Import SidebarProvider
import styles from '../../../styles/main.module.scss';
// ### - Banner
import FullBanner from '../Banner/FullBanner';
import SkyScraperLeft from '../Banner/SkyScraperLeft';
import SkyScraperRight from '../Banner/SkyScraperRight';
import Mobile from '../Banner/Mobile';

// ###

const imagePlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider> {/* Wrap your components with SidebarProvider */}
      <Navbar />
      <Sidebar />

      {/* Different Banner Types */}
      {/* <FullBanner/> */}

      <SkyScraperLeft/>
      <SkyScraperRight/>

      <div className="banner medium-rectangle">
        {/* Medium Rectangle Content */}
      </div>

      <div className="banner leaderboard">
        {/* Leaderboard Content */}
      </div>

      <main className={styles.content} style={{ minHeight: "100vh" }}>
        {children} {/* Main Content */}
      </main>

      <Mobile/>

      <Footer />

    </SidebarProvider>
  );
};

export default Layout;

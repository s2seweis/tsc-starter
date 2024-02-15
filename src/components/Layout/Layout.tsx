// Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { SidebarProvider } from '../../../context/SidebarContext'; // Import SidebarProvider
import styles from '../../../styles/main.module.scss';
import '../../../styles/banner/skyscraperStyles.scss';
import '../../../styles/banner/mobile.scss';

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
      <div className="banner mobile-banner">
        <div className="mobile-banner-content">
          <h2>Flash Sale!</h2>
          <p>Get exclusive deals on your favorite items. Limited time only!</p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="banner full-banner">
        <div className="full-banner-content" style={{ textAlign: "center", background: "#3498db", color: "#fff", padding: "20px", borderRadius: "8px" }}>
          <h2>Exclusive Sale!</h2>
          <p>Don't miss our limited-time offer. Shop now and enjoy big savings on your favorite items.</p>
          <button style={{ backgroundColor: "#fff", color: "#3498db", padding: "10px 20px", fontSize: "16px", borderRadius: "5px", cursor: "pointer" }}>Shop Now</button>
        </div>
      </div>

      <div className="skyscraper" style={{ marginTop: "30px" }}>
        <div className="skyscraper-content">
          <h3>Featured Product</h3>
          <img src={imagePlaceholder} alt="Featured Product" />
          <p>Discover our top-rated product with amazing features.</p>
          <button>Learn More</button>
        </div>
      </div>

      <div className="banner medium-rectangle">
        {/* Medium Rectangle Content */}
      </div>

      <div className="banner leaderboard">
        {/* Leaderboard Content */}
      </div>
      <main className={styles.content} style={{ minHeight: "100vh" }}>

        {children} {/* Main Content */}
      </main>
      <Footer />
    </SidebarProvider>
  );
};

export default Layout;

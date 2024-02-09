// Sidebar.tsx
/* eslint-disable */

import React from 'react';
import { FaBars } from 'react-icons/fa';
import styles from '../../../styles/sidebar.module.scss';
import { useSidebarContext } from '../../../context/SidebarContext'; // Import useSidebarContext hook
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext(); // Use useSidebarContext hook to access context values

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      {/* Sidebar content */}
      <div className={styles.sidebarToggle}
        onClick={toggleSidebar}
      >
        <FaBars />
      </div>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
        <div className={styles.logo}>
            <img style={{width:"80px"}} src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Deutsche_Angestellten-Akademie_Logo.svg" alt="Logo" />
          </div>
          <div className={styles.navLinksStyle}><Link style={{textDecoration:"none"}} href="/" ><span className={styles.navLink}>Home</span></Link></div>
          <div className={styles.navLinksStyle}><Link style={{textDecoration:"none"}} href="/posts"><span className={styles.navLink}>Posts</span></Link></div>
          <div className={styles.navLinksStyle}><Link style={{textDecoration:"none"}} href="/contact"><span className={styles.navLink}>Contact</span></Link></div>
          <div className={styles.navLinksStyle}><Link style={{textDecoration:"none"}} href="/dashboard"><span className={styles.navLink}>Dashboard</span></Link></div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

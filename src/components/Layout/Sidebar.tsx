// Sidebar.tsx
import React from 'react';
import { FaBars } from 'react-icons/fa';
import styles from '../../../styles/sidebar.module.scss';
import { useSidebarContext } from '../../../context/SidebarContext'; // Import useSidebarContext hook

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
        <ul className={styles.navList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

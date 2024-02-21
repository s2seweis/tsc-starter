// components/layout/sidebar.tsx

import React, { useState, useEffect } from 'react';
import { FaRegWindowClose, FaAngleDown, FaAngleRight } from 'react-icons/fa';
import styles from '../../../styles/layout/sidebar.module.scss';
import { useSidebarContext } from '../../../context/SidebarContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve the active menu from local storage
    const storedActiveMenu = localStorage.getItem('activeMenu');
    
    // Set the active menu based on local storage or the current route
    setActiveMenu(storedActiveMenu || getActiveMenu(router.pathname));
  }, [router.pathname]);

  const handleMenuClick = (menu: string) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));

    // Store the active menu in local storage
    localStorage.setItem('activeMenu', menu);
  };

  const isSubMenuActive = (menu: string) => activeMenu === menu;

  const isLinkActive = (href: string) => router.asPath === href;

  const getActiveMenu = (path: string) => {
    const routeToMenuMap = {
      '/': 'home',
      '/contact': 'home',
      '/calender': 'home',
      '/posts': 'posts',
      '/dashboard': 'dashboard',
      '/404': 'dashboard',
      '/login': 'login',
    };

    return routeToMenuMap[path] || null;
  };

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.sidebarToggle} onClick={toggleSidebar}>
        <FaRegWindowClose />
      </div>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <div className={styles.logo}>
            <img style={{ width: "80px" }} src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Deutsche_Angestellten-Akademie_Logo.svg" alt="Logo" />
          </div>
          <div className={styles.navLinksStyle}>
            <span className={`${styles.navLink} ${isSubMenuActive('home') || isLinkActive('/') ? styles.active : ''}`} onClick={() => handleMenuClick('home')}>
              Home {isSubMenuActive('home') ? <FaAngleDown /> : <FaAngleRight />}
            </span>
            {isSubMenuActive('home') && (
              <div style={{ display: "grid" }} className={styles.submenu}>
                <Link href="/">
                  <span className={styles.submenuLink}>Home</span>
                </Link>
                <Link href="/contact">
                  <span className={styles.submenuLink}>Contact</span>
                </Link>
                <Link href="/calender">
                  <span className={styles.submenuLink}>Calender</span>
                </Link>
              </div>
            )}
          </div>
          <div className={styles.navLinksStyle}>
            <span className={`${styles.navLink} ${isSubMenuActive('posts') || isLinkActive('/posts') ? styles.active : ''}`} onClick={() => handleMenuClick('posts')}>
              Posts {isSubMenuActive('posts') ? <FaAngleDown /> : <FaAngleRight />}
            </span>
            {isSubMenuActive('posts') && (
              <div style={{ display: "grid" }} className={styles.submenu}>
                <Link href="/posts">
                  <span className={styles.submenuLink}>Posts</span>
                </Link>
              </div>
            )}
          </div>
          <div className={styles.navLinksStyle}>
            <span className={`${styles.navLink} ${isSubMenuActive('dashboard') || isLinkActive('/dashboard') ? styles.active : ''}`} onClick={() => handleMenuClick('dashboard')}>
              Dashboard {isSubMenuActive('dashboard') ? <FaAngleDown /> : <FaAngleRight />}
            </span>
            {isSubMenuActive('dashboard') && (
              <div style={{ display: "grid" }} className={styles.submenu}>
                <Link href="/dashboard">
                  <span className={styles.submenuLink}>Dashboard</span>
                </Link>
                <Link href="/404">
                  <span className={styles.submenuLink}>404</span>
                </Link>
              </div>
            )}
          </div>
          <div style={{ marginTop: "100px" }} className='login-container'>
            <Link href="/login">
              <span style={{ marginTop: "100px" }} className={`${styles.submenuLink} ${isLinkActive('/login') ? styles.active : ''}`}>Login</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

// components/layout/sidebar.tsx

import React, { useState, useEffect } from 'react';
import { FaRegWindowClose, FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { useSidebarContext } from '../../../context/SidebarContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedActiveMenu = localStorage.getItem('activeMenu');
    const storedActiveSubMenu = localStorage.getItem('activeSubMenu');

    setActiveMenu(storedActiveMenu || getActiveMenu(router.pathname));
    setActiveSubMenu(storedActiveSubMenu || null);
  }, [router.pathname]);

  const handleMenuClick = (menu: string) => {
    setActiveSubMenu((prevSubMenu) => (prevSubMenu === menu ? null : menu));
    localStorage.setItem('activeSubMenu', menu);

    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    localStorage.setItem('activeMenu', menu);
  };

  const isSubMenuActive = (menu: string) => activeSubMenu === menu;
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

  const sidebarStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: isSidebarOpen ? 0 : '-200px',
    height: '100%',
    backgroundColor: '#333',
    transition: 'left 0.3s ease-in-out',
    zIndex: 500,
    border: '0.5px solid lightgray',
  };

  const navStyle: React.CSSProperties = {
    marginTop: '120px',
    background: 'white',
    height: '69.4%',
  };

  const navLinksStyle: React.CSSProperties = {
    padding: '20px',
    textAlign: 'center',
    marginTop: '70px',
    fontSize: '1.3rem',
    display:"grid"
  };

  const activeStyle: React.CSSProperties = {
    color: '#ff5733',
    fontWeight: 'bold',
  };

  return (
    <div style={Object.assign({}, sidebarStyle, isSidebarOpen && { left: 0 })}>
      <div style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '24px', color: '#fff', zIndex: 100, padding: '5px', alignItems: 'center', display: 'flex', fontSize: 'xx-large' }} onClick={toggleSidebar}>
        <FaRegWindowClose />
      </div>
      <nav style={navStyle}>
        <div style={navLinksStyle}>
          <span style={Object.assign({}, { cursor: 'pointer' }, isSubMenuActive('home') || isLinkActive('/') ? activeStyle : {})} onClick={() => handleMenuClick('home')}>
            Home {isSubMenuActive('home') ? <FaAngleDown /> : <FaAngleRight />}
          </span>
          {isSubMenuActive('home') && (
            <div style={{ display: 'grid' }}>
              <Link href="/">
                <span style={Object.assign({}, { cursor: 'pointer' }, isSubMenuActive('/') ? activeStyle : {})}>Home</span>
              </Link>
              <Link href="/contact">
                <span style={Object.assign({}, { cursor: 'pointer' }, isSubMenuActive('/contact') ? activeStyle : {})}>Contact</span>
              </Link>
              <Link href="/calender">
                <span style={Object.assign({}, { cursor: 'pointer' }, isSubMenuActive('/calender') ? activeStyle : {})}>Calender</span>
              </Link>
            </div>
          )}
          <span style={Object.assign({}, { cursor: 'pointer' }, isSubMenuActive('posts') || isLinkActive('/posts') ? activeStyle : {})} onClick={() => handleMenuClick('posts')}>
            Posts {isSubMenuActive('posts') ? <FaAngleDown /> : <FaAngleRight />}
          </span>
          {isSubMenuActive('posts') && (
            <div style={{ display: 'grid' }}>
              <Link href="/posts">
                <span style={Object.assign({}, { cursor: 'pointer' }, isSubMenuActive('/posts') ? activeStyle : {})}>Posts</span>
              </Link>
            </div>
          )}
          <span style={Object.assign({}, { cursor: 'pointer' }, isSubMenuActive('dashboard') || isLinkActive('/dashboard') ? activeStyle : {})} onClick={() => handleMenuClick('dashboard')}>
            Dashboard {isSubMenuActive('dashboard') ? <FaAngleDown /> : <FaAngleRight />}
          </span>
          {isSubMenuActive('dashboard') && (
            <div style={{ display: 'grid' }}>
              <Link href="/dashboard">
                <span style={Object.assign({}, { cursor: 'pointer' }, isSubMenuActive('/dashboard') ? activeStyle : {})}>Dashboard</span>
              </Link>
              <Link href="/404">
                <span style={Object.assign({}, { cursor: 'pointer' }, isSubMenuActive('/404') ? activeStyle : {})}>404</span>
              </Link>
            </div>
          )}
          <div style={{ marginTop: '100px' }} className="login-container">
            <Link href="/login">
              <span style={Object.assign({}, { marginTop: '100px', cursor: 'pointer' }, isLinkActive('/login') ? activeStyle : {})}>Login</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

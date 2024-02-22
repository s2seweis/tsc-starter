import React, { useState, useEffect, useRef } from 'react';
import { FaRegWindowClose, FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { useSidebarContext } from '../../../context/SidebarContext';
import Link from 'next/link';
import '../../../styles/layout/sidebar.scss'; // Import your SCSS file
import { menuItems } from './menuItems'; // Import the updated menuItems
import AuthController from '../AuthController/AuthController';

const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  console.log("line:100", toggleSidebar);
  console.log("line:101", isSidebarOpen);
  
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const storedActiveMenu = localStorage.getItem('activeMenu');
    const storedActiveSubMenu = localStorage.getItem('activeSubMenu');

    if (isSidebarOpen) {
      // Only update state if the sidebar is open
      setActiveMenu(storedActiveMenu || getActiveMenu(window.location.pathname));
      setActiveSubMenu(storedActiveSubMenu || null);
    }
  }, [isSidebarOpen]);

  const handleMenuClick = (menu: string) => {
    setActiveSubMenu((prevSubMenu) => (prevSubMenu === menu ? null : menu));
    localStorage.setItem('activeSubMenu', menu);

    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    localStorage.setItem('activeMenu', menu);
  };

  const isSubMenuActive = (menu: string) => activeSubMenu === menu;

  const isLinkActive = (href: string) => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === href;
    }
    return false;
  };

  const getActiveMenu = (path: string) => {
    return path === '/' ? 'Home' : menuItems.find(item => item.path === path)?.title || null;
  };

  const renderSubMenu = (submenus: { title: string, path: string }[]) => (
    <div className="submenu">
      {submenus.map((submenu) => (
        <Link key={submenu.path} href={submenu.path}>
          <span className={`submenuLink ${isLinkActive(submenu.path) ? 'active' : ''}`}>
            {submenu.title}
          </span>
        </Link>
      ))}
    </div>
  );

  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (overlayRef.current && event.target === overlayRef.current) {
      toggleSidebar();
    }
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="overlay" ref={overlayRef} onClick={handleOverlayClick}></div>
      <div className="sidebarToggle" onClick={toggleSidebar}>
        <FaRegWindowClose />
      </div>
      <nav className="nav">
        <div className='logo' style={{display:"flex", justifyContent:"center"}}>
          <img style={{ width: "80px", marginTop:"20px" }} src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Deutsche_Angestellten-Akademie_Logo.svg" alt="Logo" />
        </div>
        <div className="navLinks">
          {menuItems.map((menuItem) => (
            <span
              key={menuItem.path || menuItem.title}
              className={`navLink ${isSubMenuActive(menuItem.title) ? 'active' : ''}`}
              onClick={() => handleMenuClick(menuItem.title)}
            >
              {menuItem.title} {menuItem.submenus && isSubMenuActive(menuItem.title) ? <FaAngleDown /> : <FaAngleRight />}
              {menuItem.submenus && isSubMenuActive(menuItem.title) && renderSubMenu(menuItem.submenus)}
            </span>
          ))}
        </div>
        <div className='controllerContainer' style={{marginTop:"0px"}}>
          <AuthController/>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

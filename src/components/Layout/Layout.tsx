// Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { SidebarProvider } from '../../../context/SidebarContext'; // Import SidebarProvider
import styles from '../../../styles/main.module.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <SidebarProvider> {/* Wrap your components with SidebarProvider */}
      <Navbar />
      <Sidebar />
      <main className={styles.content} style={{minHeight:"100vh"}}>{children}</main>
      <Footer/>
    </SidebarProvider>
  );
};

export default Layout;

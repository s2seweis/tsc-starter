// Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { SidebarProvider } from '../../../context/SidebarContext'; // Import SidebarProvider
import styles from '../../../styles/main.module.scss'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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

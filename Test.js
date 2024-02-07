// Navbar.tsx
import React from 'react';
import { FaBars } from 'react-icons/fa';
import styles from '../../../styles/navbar.module.scss';
import { useSidebarContext } from '../../../context/SidebarContext'; // Import useSidebarContext hook

const options = ['Option 1', 'Option 2', 'Option 3'];

const Navbar: React.FC = () => {
    const { toggleSidebar } = useSidebarContext(); // Use useSidebarContext hook to access context values

    return (
        <nav style={{ display: "flex" }} className={styles.navbar}>
            <div className={styles.navList}>
                <div className={styles.navItem}>
                    <button className={styles.sidebarToggle} onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                </div>
                {/* Other navbar items */}
            </div>
            <div className={styles.navItem}>
                <a href="/" className={styles.navLink}>Home</a>
            </div>
            <div className={styles.navItem}>
                <a href="/posts" className={styles.navLink}>Posts</a>
            </div>
            <div className={styles.navItem}>
                <a href="/contact" className={styles.navLink}>Contact</a>
            </div>
            <div className={styles.navItem}>
                <a href="/dashboard" className={styles.navLink}>Dashboard</a>
            </div>
            <div className={styles.navItem}>
                <a href="/login" className={styles.navLink}>Login</a>
            </div>
        </nav>
    );
};

export default Navbar;

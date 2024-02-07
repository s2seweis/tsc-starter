import React from 'react';
import { FaBars } from 'react-icons/fa';
import Select from 'react-select'; // Import Select from react-select
import styles from '../../../styles/navbar.module.scss';
import { useSidebarContext } from '../../../context/SidebarContext'; // Import useSidebarContext hook

const options = [
  { value: 'home', label: 'Home' },
  { value: 'posts', label: 'Posts' },
  { value: 'contact', label: 'Contact' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'login', label: 'Login' },
];

const Navbar: React.FC = () => {
  const { toggleSidebar } = useSidebarContext(); // Use useSidebarContext hook to access context values

  const handleOptionChange = (selectedOption) => {
    window.location.href = `/${selectedOption.value}`;
  };

  return (
    <nav style={{ display: "flex" }} className={styles.navbar}>
      <div className={styles.navList}>
        <div className={styles.navItem}>
          <button className={styles.sidebarToggle} onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </div>

      <div className={styles.menu1}>
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
      </div>
      <Select
        className={styles.select} // Apply CSS class for styling
        options={options} // Pass options array
        defaultValue={options[0]} // Set default value
        onChange={handleOptionChange} // Redirect to selected option value
      />
    </nav>
  );
};

export default Navbar;

/* eslint-disable */

import React from 'react';
import { FaBars } from 'react-icons/fa';
import Select, { ActionMeta, SingleValue } from 'react-select'; // Import Select from react-select
import styles from '../../../styles/navbar.module.scss';
import { useSidebarContext } from '../../../context/SidebarContext'; // Import useSidebarContext hook
import Link from 'next/link';
import AuthController from '../AuthController/AuthController';
import { useRouter } from 'next/router'; // Import useRouter from next/router

// Define interface for option object
interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: '', label: 'Home' },
  { value: 'posts', label: 'Posts' },
  { value: 'contact', label: 'Contact' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'login', label: 'Login' },
  { value: 'calender', label: 'Calender' },
];

const Navbar: React.FC = () => {
  const { toggleSidebar } = useSidebarContext(); // Use useSidebarContext hook to access context values
  const router = useRouter(); // Initialize the router

  const handleOptionChange = (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
    if (newValue && 'value' in newValue) {
      // Use Link from next/link instead of window.location.href
      // This will navigate to the selected option value
      router.push(`/${newValue.value}`);
    }
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

      <header className={styles.menu1}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img style={{ width: "80px" }} src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Deutsche_Angestellten-Akademie_Logo.svg" alt="Logo" />
          </div>
          <div className={styles.navLinks}>
            {options.map(option => (
              <div key={option.value}>
                <Link href={`/${option.value}`}>
                  <span className={styles.navLink}>{option.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </header>

      <div className='loginButton' style={{marginLeft:"10%"}}>
        <AuthController />
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

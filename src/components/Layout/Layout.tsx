// src/Layout.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import DropdownButton from './Dropdown/Dropdown';
import BurgerMenu from './BurgerMenu/BurgerMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const handleOptionSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
    // You can perform additional actions based on the selected option
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="burger-icon" onClick={toggleMenu}>
        ☰
      </button>
      <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} onSelect={handleOptionSelect} />
      <div className="logo">
        <Link to="/">
          <img style={{ height: "50px" }} src="https://cdn.worldvectorlogo.com/logos/webdev-1.svg" alt="React Blog Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <DropdownButton onSelect={handleOptionSelect} />
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 React Blog. All rights reserved.</p>
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

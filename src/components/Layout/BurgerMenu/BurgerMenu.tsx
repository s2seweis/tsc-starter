// BurgerMenu.tsx
import React, { useState } from 'react';
import './BurgerMenu.css';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  onSelect: (selectedOption: string) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggleMenu, onSelect }) => {

  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <button className="burger-icon" onClick={toggleMenu}>
        ☰
      </button>
      <div className="menu-content">
        {/* Add your menu items or components here */}
        <p>Menu Item 1</p>
        <p>Menu Item 2</p>
        <p>Menu Item 3</p>
      </div>
    </div>
  );
};

export default BurgerMenu;

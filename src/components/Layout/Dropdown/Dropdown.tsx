// DropdownButton.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { options } from './links'; // Fixed the typo here
import './DropDown.css'; // Import the CSS file for styling

interface DropdownButtonProps {
  onSelect: (selectedOption: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Menu'}
      </button>
      <div className="dropdown-options">
        {options.map((option) => (
          <Link key={option} to={`/${option.toLowerCase()}`} onClick={() => handleOptionClick(option)}>
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownButton;

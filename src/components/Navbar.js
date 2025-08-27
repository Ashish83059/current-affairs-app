import React from 'react';
import './Navbar.css';

const categories = [
  { key: 'top', label: '📰 सामान्य' },
  { key: 'sports', label: '⚽ खेल' },
  { key: 'business', label: '💼 व्यापार' },
  { key: 'science', label: '🔬 विज्ञान' },
  { key: 'technology', label: '💻 प्रौद्योगिकी' },
  { key: 'health', label: '📖 स्वास्थ्य' },
  { key: 'entertainment', label: '📺 मनोरंजन' },
];

const Navbar = ({ selectedCategory, onSelectCategory, darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">📰 <strong>Current Affairs App</strong></div>
      <div className="navbar-center">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => onSelectCategory(category.key)}
            className={`nav-button ${selectedCategory === category.key ? 'active' : ''}`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="navbar-right">
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

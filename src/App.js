import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('top');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <NewsComponent selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;

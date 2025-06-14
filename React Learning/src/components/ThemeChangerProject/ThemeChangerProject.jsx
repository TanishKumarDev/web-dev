import React from 'react';
import './ThemeChangerProject.css';

const ThemeChangerProject = () => {
  const [isDark, setIsDark] = React.useState(true);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={`theme-container ${isDark ? 'dark' : 'light'}`}>
      <div className='content'>
        <h2>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      </div>
    </div>
  );
};

export default ThemeChangerProject;

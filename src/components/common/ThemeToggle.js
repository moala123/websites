import React from 'react';

function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {document.documentElement.getAttribute('data-theme') === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ThemeSwitch = () => {
  const [themeState, setThemeState] = useState(false);
  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'light') return  document.body.classList.add('light');
  })
  return (
    <div className="theme-switch">
      <Button onClick={handleChange}>{themeState ? 'Light' : 'Dark'}</Button>
      
    </div>
  )
}

export default ThemeSwitch;
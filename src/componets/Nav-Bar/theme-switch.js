import React, { useState, useEffect } from "react";

function ThemeSwitch(props){
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

  return(
  <div className="theme-switch" onClick={handleChange}>
    <img
      src={themeState ? "./images/icons/lightmode_sun_nightmode.png" : "./images/icons/nightmode_moon_daymode.png"}
      width="45px"
      margin="5px"
      className="d-inline-block align-top"
      alt="Light mode, Dark mode theme switch"
    />
  </div>
  )
}

export default ThemeSwitch;


  

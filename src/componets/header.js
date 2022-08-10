import React from 'react';
import '../scss/header.scss';

export default function Header(props) {

  return(
    <header>
      <div className="header">
        <h1>Ravenmoore Valley </h1>
        <img src="./images/Logo/RavenmoreValley_Logo.png" alt="Logo"/>
      </div>
    </header>
  )
}
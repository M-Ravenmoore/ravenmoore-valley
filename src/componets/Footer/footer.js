import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faDiscord, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';

import "./footer.css"



export default function Footer() {
  
  return(
    <footer className="footer">
      <section id="left-links">
        <ul>
          <li>Contact</li>
          <li href="#about">About Us</li>
          <li>Legal Stuff</li>
        </ul>
      </section>
      <section id="icons" >
        <FontAwesomeIcon icon={faFacebook} size="2x"/>
        <FontAwesomeIcon icon={faInstagram} size="2x"/>
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        <FontAwesomeIcon icon={faDiscord} size="2x"/>
      </section>
      <section id="right-links">
        <ul>
          <li>Join the Community</li>
          <li>FAQ</li>
        </ul>
      </section>
    </footer>
  )
}
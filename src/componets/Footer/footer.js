import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faDiscord, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';

import "./footer.scss"



export default function Footer() {
  
  return(
    <footer className="footer">
      <section id="left-links">
        <ul>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="about">About Us</Link></li>
          <li>Legal Stuff</li>
        </ul>
      </section>
      <section id="icons" >
        <div className="icon">
         <a href="https://www.facebook.com/RavenmooreValley"> <FontAwesomeIcon icon={faFacebook} size="2x"/></a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/dusklorne/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
        </div>
        <div className="icon">
          <a href="https://discord.gg/awec8dnm67"><FontAwesomeIcon icon={faDiscord} size="2x"/></a>
        </div>
      </section>
      <section id="right-links">
        <ul>
          <li><Link to="creator">Market Application</Link></li>
          <li><Link to="faq">FAQ</Link></li>
        </ul>
      </section>
    </footer>
  )
}
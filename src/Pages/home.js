import React from 'react';
import { Button } from 'react-bootstrap';
import HomeSlides from './home-slideshow';

function Home(props){

  return(
    <div id="appHome" className="Home">

      <section className="content-A" id="first-row">
        <h2> Welcome to Ravenmoore Valley</h2>
        <p>  Here at Ravenmoore Valley, we bring together artists, crafters, and makers with creative and unique skills. to bring some amazing content and community activity's together. We are a diverse community of friends, family and commonly aligned individuals, that strive to bring the best of humanity forward while relying on the past to bring us together.</p>
      </section>

      <section className="slideshow" id='slides'>
        <HomeSlides/>
      </section>

      <section className="content-A" id="second-row">
      <h2>Explore The Valley!</h2>
        <p> Come along and explore ravenmoore valley get to know its people, take a looka a the wares, learn something new perhaps. its all below just a click away.</p>
      </section>

      <div className="panels" id="panelContainer">
        <section className="infoPanel-A" id="about">
          <img 
            className="panelImg"
            src="./images/Logo/SearedScaleLogo.png"
            alt="seared_scale_logo"
          />
          <h4>Sit by the fire</h4>
          <p>Come sit by the fire and hear all about Ravenmoore Valley and how it came to be.</p>
          <Button href='#about' variant='dark'>About us</Button>
        </section>

        <section className="infoPanel-A" id="Feather">
          <img 
            className="panelImg"
            src="./images/Logo/flameingFeather_lg.png"
            alt="Flaming Feather apothics"
          />
          <h4>News</h4>
          <p>Hark and listen to the coming events and goings on of Ravenmoore valley. click below for the latest updates!</p>
          <Button href='#news' variant='dark'>News</Button>
        </section>

        <section className="infoPanel-A" id="artisans">
          <img 
            className="panelImg"
            src="./images/Logo/RavenmoreValley_Logo.png"
            alt="Artisans"
          />
          <h4>Ravenmoore Valley Artisans</h4>
          <p>Or Take a Tempting peak at the fine creators of Ravenmoore Valley</p>
          <Button href='#artists' variant='dark'>Artisans directory</Button>
        </section>
      </div>
    </div>  )
};

export default Home;
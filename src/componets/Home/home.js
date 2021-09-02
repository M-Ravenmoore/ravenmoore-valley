import React from 'react';
import { Button } from 'react-bootstrap';
import HomeSlides from './slideshow';

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
      <h2>The Ravenmoore Family</h2>
        <p> The Cornerstone of the Ravenmoore Community is The Ravenmoore Clan, Muninn and Huginn Ravenmoore. They are the driving forces behind all you see here, as such they have their own 'workshops' so to say. In Muninn's Workshop you will find his current projects listed with regular updates. while in Huginn's Menagerie you will find the wonderful array of her creations. Also you can check out our Featured Makes in our Artisans directory. </p>
      </section>

      <div className="panels" id="panelContainer">
        <section className="infoPanel-A" id="Workshop">
          <img 
            className="panelImg"
            src="./images/Workshop/Weld spark.JPG"
            alt="Workshop"
          />
          <h4>Muninns Workshop</h4>
          <p>Custom Crafts and Wonderous Creations are imagined in Muninn's Workshop Come see!</p>
          <Button href='#artists' variant='dark'>Artisans directory</Button>
        </section>
        <section className="infoPanel-A" id="Menagerie">
          <img 
            className="panelImg"
            src="./images/"
            alt="Menagerie"
          />
          <h4>Huginns Menagerie</h4>
          <p> Come wander in wonder through Huginn's Menagerie of yarn Critter creations</p>
          <Button href='#artists' variant='dark'>Artisans directory</Button>
        </section>
        <section className="infoPanel-A" id="artisans">
          <img 
            className="panelImg"
            src="./images/"
            alt="Artisans"
          />
          <h4>Ravenmoore Community Artisans</h4>
          <p>Or Take a Tempting peak at the other fine creators of Ravenmoore Valley</p>
          <Button href='#artists' variant='dark'>Artisans directory</Button>
        </section>
      </div>
    </div>  )
};

export default Home;
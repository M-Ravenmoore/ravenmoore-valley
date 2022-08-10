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
      <h2>The Ravenmoore Family</h2>
        <p> The Cornerstone of Ravenmoore Valley is The founder, Matt or Dusk Ravenmoore. He along side Dawn have created the unique space here where many artists can share thier wares with the world. As such each Artisan of Ravenmoore valley has their own Shop within the valley where youll find their fine creations. Head on over to the Artisans Directory to browse by artist. </p>
      </section>

      <div className="panels" id="panelContainer">
        <section className="infoPanel-A" id="Scale">
          <img 
            className="panelImg"
            src="./images/Logo/SearedScaleLogo.png"
            alt="seared_scale_logo"
          />
          <h4>The Seared Scale</h4>
          <p>Custom Crafts and Wonderous Creations are imagined in Dusks Lair Come see!</p>
          <Button href='#artists' variant='dark'>Artisans directory</Button>
        </section>

        <section className="infoPanel-A" id="Feather">
          <img 
            className="panelImg"
            src="./images/Logo/flameingFeather_lg.png"
            alt="Flaming Feather apothics"
          />
          <h4>Flaming Feather Apothics</h4>
          <p> Herbs and and natrual remidies for common ailments and strifes</p>
          <Button href='#artists' variant='dark'>Artisans directory</Button>
        </section>

        <section className="infoPanel-A" id="artisans">
          <img 
            className="panelImg"
            src="./images/Logo/RavenmoreValley_Logo.png"
            alt="Artisans"
          />
          <h4>Ravenmoore Valley Consigning Artists</h4>
          <p>Or Take a Tempting peak at the other fine creators of Ravenmoore Valley</p>
          <Button href='#artists' variant='dark'>Artisans directory</Button>
        </section>
      </div>
    </div>  )
};

export default Home;
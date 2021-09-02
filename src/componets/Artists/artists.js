import React from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Artists(props){

  return(
    <div id="artisans" className="Artisans">
      <article className="content-A">
        <h2>Ravenmoore Valley Artisan Directory</h2>
        <p> These are the people who build make and create the works for sale at The Ravenmoore Valley Marketplace. Look for Commission ME buttons to send a message about custom works</p>
      </article>

      <section class="artist-cards">
        <Card class='artist-card'>
        <Card.Img className='Headshot'  src="./images/Headshots/matt-headshot.png" alt="Headshot" />
          <Card.Body>
          <Card.Title>Muninn Ravenmoore</Card.Title>
          <Card.Subtitle>Various Mediums / Design</Card.Subtitle>
          <Card.Text> Specializing in metal work, Muninn offers commisonable services that include: Metal craft, Wood Craft, Leather Craft, Resin, Finishing work and more...</Card.Text>
          </Card.Body>
          <div className="cardBtn">
            <Button href="#" variant="dark">Portfolio</Button>
            <Button href="#" variant="dark">Commission ME</Button>
          </div>
          
          </Card>

        <Card class='artist-card'>
        <Card.Img className='Headshot' variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
          <Card.Title>Huginn Ravenmoore</Card.Title>
          <Card.Subtitle>Yarn Artist</Card.Subtitle>
          <Card.Text> From small to large Huginn make all kinds of kritters and creations from yarns... you can commision her currently for Dragons, and other specialty Yarn creations. </Card.Text>
          </Card.Body>
          <div className="cardBtn">            
            <Button href="#" variant= "dark">Portfolio</Button>
            <Button href="#" variant= "dark">Commission ME</Button>
          </div>
          </Card>

      </section>
      </div>  
  )
}

export default Artists;





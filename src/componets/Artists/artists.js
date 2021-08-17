import React from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Artists(props){

  return(
    <div id="artisans" className="Artisans">
      <article>
        <h2>Ravenmoore Valley Artisan Directory</h2>
        <p> These are the people who build make and create the works for sale at The Ravenmoore Valley Marketplace. Look for Commission ME buttons to send a message about custom works</p>
      </article>

      <section class="artist-cards">
        <Card class='artist-card' style={{width:'360px'}}>
        <Card.Img variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
          <Card.Title>Muninn Ravenmoore</Card.Title>
          <Card.Subtitle>Various Mediums / Design</Card.Subtitle>
          <Card.Text> Description of services and crafts.</Card.Text>
          </Card.Body>
          <Button variant= "dark">Portfolio</Button>
          <Button variant= "dark">Commission ME</Button>
          
          </Card>

        <Card class='artist-card' style={{width:'360px'}}>
        <Card.Img variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
          <Card.Title>Huginn Ravenmoore</Card.Title>
          <Card.Subtitle>Yarn Artist</Card.Subtitle>
          <Card.Text> About The Craft </Card.Text>
          </Card.Body>
          <Button variant= "dark">Portfolio</Button>
          <Button variant= "dark">Commission ME</Button>
          </Card>

      </section>
      </div>  
  )
}

export default Artists;





import React from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Artists(props){

  return(
    <div id="artisans" className="Directory">
      <article className="content-A">
        <h2>Ravenmoore Valley Artisan Directory</h2>
        <p> These are the people who build make and create the works for sale at The Ravenmoore Valley Marketplace. Look for Commission ME buttons to send a message about custom works</p>
      </article>

      <section className="artist-cards">
        {/* Next goal will be to pull this from a DB of users all Creator Tier accounts should populate */}
        <Card className='artisans'>
          <Card.Img className='Headshot'  src="./images/Headshots/matt-headshot.png" alt="Headshot" />
          <Card.Body>
            <Card.Title>Muninn Ravenmoore</Card.Title>
            <Card.Subtitle>Various Mediums / Design</Card.Subtitle>
            <Card.Text> Specializing in metal work, Muninn offers commisonable services that include: Metal craft, Wood Craft, Leather Craft, Resin, Finishing work and more...</Card.Text>
          </Card.Body>
          <div className="cardBtn">
            <Button variant="dark" href='#searedscale' >The Seared Scale</Button>
            {/* this should lead to an contact form pre addressed to artists email */}
            <Button href="#" variant="dark">Commission Me</Button>
          </div>
        </Card>

        <Card className='artisans'>
          <Card.Img className='Headshot' src="./images/Headshots/Dawn-Headshot.jpg" alt="Dawn-Headshot" />
          <Card.Body>
            <Card.Title>Dawn Gallows</Card.Title>
            <Card.Subtitle>Yarn Artist</Card.Subtitle>
            <Card.Text> Dawns bio here </Card.Text>
          </Card.Body>
          <div className="cardBtn"> 
            <Button href='#flameingfeather' variant= "dark">Flameing Feather</Button>
            <Button href="#" variant= "dark">Commission Me</Button>
          </div>
        </Card>

        <Card className='artisans'>
          <Card.Img className='Headshot' src="./images/Headshots/Trog-Headshot.jpg" alt="Dawn-Headshot" />
          <Card.Body>
            <Card.Title>Trog</Card.Title>
            <Card.Subtitle>ChainMaile and Stitching</Card.Subtitle>
            <Card.Text> Trogs bio here </Card.Text>
          </Card.Body>
          <div className="cardBtn">
            <Button href="#" variant= "dark">Commission Me</Button>
          </div>
        </Card>
      </section>
      </div>  
  )
}

export default Artists;





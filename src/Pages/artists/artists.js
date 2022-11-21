import React from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Artists(props){

  return(
    <div id="artisans" className="Directory">
      <article className="content-A">
        <h2>Ravenmoore Valley Artisan Directory</h2>
        <p> These are the people who build make and create the works for sale at The Ravenmoore Valley Marketplace. Feel free to check out our charts of skills and projects and feel free to reach out with any questions.</p>
      </article>
{/* This should get populated by DB asap!! */}
      <section className="artist-cards">

        <Card className='artisans'>
          <Card.Img className='Headshot'  src="./images/Headshots/matt-headshot.png" alt="Dusk-Headshot" />
          <Card.Body>
            <Card.Title>Muninn Ravenmoore</Card.Title>
            <Card.Subtitle>Various Mediums / Design</Card.Subtitle>
            <Card.Text> Specializing in metal work, Muninn offers commisonable services that include: Metal craft, Wood Craft, Leather Craft, Resin, Finishing work and more...</Card.Text>
          </Card.Body>
          <div className="cardBtn">
            <Button variant="dark" href='#artistDetails' >Details</Button>
          </div>
        </Card>

        <Card className='artisans'>
          <Card.Img className='Headshot' src="./images/Headshots/Dawn-Headshot.jpg" alt="Dawn-Headshot" />
          <Card.Body>
            <Card.Title>Dawn Gallows</Card.Title>
            <Card.Subtitle>Herbalist/Jewler</Card.Subtitle>
            <Card.Text> Dawns bio here </Card.Text>
          </Card.Body>
          <div className="cardBtn"> 
            <Button variant="dark" href='#artistDetails' >Details</Button>
          </div>
        </Card>

        <Card className='artisans'>
          <Card.Img className='Headshot' src="./images/Headshots/Trog-Headshot.jpg" alt="Trog-Headshot" />
          <Card.Body>
            <Card.Title>Trog</Card.Title>
            <Card.Subtitle>ChainMaile and Stitching</Card.Subtitle>
            <Card.Text> Trogs bio here </Card.Text>
          </Card.Body>
          <div className="cardBtn">
            <Button variant="dark" href='#artistDetails' >Details</Button>
          </div>
        </Card>

      </section>
      </div>  
  )
}

export default Artists;





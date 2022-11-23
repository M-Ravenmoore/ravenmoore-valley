import React from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function ArtistDetails(props){

  return(
    <div id="artistDetails" className="artistDetails">

{/* This should get populated by DB asap!! */}
      <section className="artist-cards">
        <Card className='artisans'>
          {/* replace src and alt with src="./images/Headshots/(id="artistName") */}
          <Card.Img className='Headshot'  src="./images/Headshots/" alt="Headshot" />
          <Card.Body>
            <Card.Title id="artistName">Artist Name</Card.Title>
            <Card.Subtitle id="artistCraft">Title/Craft</Card.Subtitle>
            <Card.Text id="artistBio"> Bio.</Card.Text>
            <Card.Text id="artistSkills">Skills list </Card.Text>
            {/* comes in as skills array */}
          </Card.Body>
          <div className="cardBtn">
            {/* fill href and button name with id="artistStore" */}
            <Button variant="dark" href='#/shops-main' >Valley Shop</Button>
            {/* fill href with id="artistWebsite" */}
            <Button variant="dark" href='' >Portfolio</Button>
          </div>
        </Card>
      </section>
      </div>  
  )
}

export default ArtistDetails;





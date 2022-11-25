import React from 'react';
import { useSelector } from 'react-redux';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function ArtistDetailsPage({ match}){
  console.log('lookat me')

  const {artistId} = match.params;
  
  const artist = useSelector((state) =>
  state.artists.find((artist) => artist.artistId === artistId)
  );
  console.log("looking for data",artist)
  
  if (!artist) {
    return (
      <section>
        <h2>Artist Not Found!</h2>
        <p>You have gone looking for an artist that nolonger works within the Valley. Go back to our directory and try again!</p>
      </section>
    );
  }

  return (
  <div id="artistDetails" className="artistDetails">
    <section className="artist-cards">
      <Card className='artisans'>
        <Card.Img className='Headshot'  src={artist.artistHeadshot} alt={artist.artistName} />
        <Card.Body>
          <Card.Title id="artistName">{artist.artistName}</Card.Title>
          <Card.Subtitle id="artistCraft">{artist.artistCraft}</Card.Subtitle>
          <Card.Text id="artistIntro">{artist.artistIntro}</Card.Text>
          <Card.Text id="artistBio">{artist.artistBio}</Card.Text>
          <Card.Text id="artistSkills">Skills list </Card.Text>
          {/* comes in as skills array */}
        </Card.Body>
        <div className="cardBtn">
          {/* fill href and button name with id="artistStore" */}
          <Button variant="dark" href='#/shops' >Valley Shop</Button>
          {/* fill href with id="artistWebsite" */}
          <Button variant="dark" href={artist.artistWebsite} >Portfolio</Button>
        </div>
      </Card>    
    </section>
  </div>
  )
}

export default ArtistDetailsPage;
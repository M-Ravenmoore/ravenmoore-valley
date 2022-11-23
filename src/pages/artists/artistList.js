import React from "react";
import { useSelector } from "react-redux";

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const ArtistList = () => {
  const artists = useSelector((state) => state.artists);
  console.log(artists)

  const renderArtists = artists.map((artist) =>(
    <Card className='artisans'>
      <div key= {artist.id} className="artist">
        <Card.Img className='Headshot'  src={artist.artistHeadshot} alt={artist.artistName} />
        <Card.Body>
          <Card.Title id="artistName">{artist.artistName}</Card.Title>
          <Card.Subtitle id="artistCraft">{artist.artistCraft}</Card.Subtitle>
          <Card.Text id="artistIntro">{artist.artistIntro}</Card.Text>
        </Card.Body>
        <div className="cardBtn">
        <Button variant="dark" href='#/artistDetails' >Details</Button>
        </div>
      </div>
      </Card>
    
  ));

  return (
    <section className="artist-cards">
      {renderArtists}
    </section>
  )
}
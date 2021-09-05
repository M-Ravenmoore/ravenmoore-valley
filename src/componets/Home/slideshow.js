import React from 'react';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


function HomeSlides() {

  return (
    <Carousel>
    <Carousel.Item>
      <img
      // extra life banner
        className="d-block w-100"
        src="./images/HomeSlides/discordbanner.jpg"
        alt="Discord"
      />
      <Carousel.Caption>
        <h3>Join The Discord!</h3>
        <p>Ravenmoore Valley has a discord to chat and hangout on! get the latest updates and news.</p>
        <Button href='https://discord.gg/awec8dnm67' >Discord</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      // extra life banner
        className="d-block w-100"
        src="./images/HomeSlides/Extra Life Impact Facts.JPG"
        alt="Extra Life"
      />

      <Carousel.Caption>
        <h3>Upcomming Ravenmoore community Events</h3>
        <p>Ravenmoore Halloween EXTRA LIFE Strem DAY! 10-31</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/HomeSlides/rose banner.jpg"
        alt="Roses"
      />

      <Carousel.Caption>
        <h3>Roses Available NOW!</h3>
        <p>Hot out of the workshop there are fresh roses avaiable on our store check it out!</p>
        <Button href="#Roses">Order</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default HomeSlides;
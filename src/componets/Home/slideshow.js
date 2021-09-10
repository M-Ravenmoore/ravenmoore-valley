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
        <div className="cap-box">
          <h6>Chat with us on Discord</h6>
          <Button href='https://discord.gg/awec8dnm67' >Discord</Button>
        </div>
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
      <div className="cap-box">
        <h6>Upcomming Events</h6>
        <p>Halloween EXTRA-LIFE DAY!</p>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/HomeSlides/rose banner.jpg"
        alt="Roses"
      />

      <Carousel.Caption>
      <div className="cap-box">
        <h6>Fresh Roses Available</h6>
        <Button href="#Roses">Order Now!</Button>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default HomeSlides;
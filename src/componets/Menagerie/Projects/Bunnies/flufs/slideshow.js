import React from 'react'
import { Carousel } from 'react-bootstrap';


function FlufSlides() {

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="c-block w-75"
          src="./images/Menagerie/Bunnies/Fluf Buns/Sizes.jpg"
          alt="Size comparison left:small right:large"
        />
        <Carousel.Caption>
          <h3>Multi-Sized</h3>
          <p>The Huginn Flufs come in 2 awesome sizes Medium squish and small Squish</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="./images/Menagerie/Bunnies/Fluf Buns/sm-fluf-qtr-.jpg"
          alt="quarter viwe of the small fluf bunnie"
        />

        <Carousel.Caption>
          <h3>Soon in More colors Too</h3>
          <p>Ariving soon in 5 colors check our etsy to order.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default FlufSlides;
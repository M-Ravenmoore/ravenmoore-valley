import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function DragonSlides() {

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="c-block w-75"
          src="./images/Menagerie/Dragons/Mal-dragon.jpg"
          alt="malificent themed dragon"
        />
        <Carousel.Caption>
          <h3>Custom Made</h3>
          <p>Hand Crafted and tailored to your wants</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="./images/Menagerie/Dragons/rain-dragon.jpg"
          alt="Rainbow paterned dragon"
        />

        <Carousel.Caption>
          <h3>Each is Named And Unique</h3>
          <p>All of the Master game units are plug into tv and GO. (ROMS NOT INCLUDED)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="./images/Menagerie/Dragons/Hakz-dragon.jpg"
          alt="Three"
        />

        <Carousel.Caption>
          <h3>Made withcare</h3>
          <p>
            The Most amazing stuffed gift for children and adults alike
          </p>
          {/* link to etsy when built. */}
          <Button href='#'>Order Soon</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DragonSlides;
import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function ArcadeSlides() {

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="c-block w-75"
          src="./images/Workshop/Arcade/Prototypeing/wireing-up.jpg"
          alt="Wires"
        />
        <Carousel.Caption>
          <h3>Rustic Meets Retro</h3>
          <p>Hand Crafted Wood Pannel Arcade units and Extra player units</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="./images/Workshop/Arcade/Prototypeing/first-test.jpg"
          alt="Two"
        />

        <Carousel.Caption>
          <h3>Plug in And Play</h3>
          <p>All of the Master game units are plug into tv and GO. (ROMS NOT INCLUDED)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="./images/Workshop/Arcade/V2 mockup/Stain-time.jpg"
          alt="Three"
        />

        <Carousel.Caption>
          <h3>Customizable</h3>
          <p>
            These are an upand coming project that will make its way here soon. keep an eye out for more info here.
          </p>
          {/* link to etsy when built. */}
          <Button href='#'>Order Soon</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ArcadeSlides;
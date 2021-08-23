import React from 'react'
import { Carousel } from 'react-bootstrap';


function RoseSlides() {

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="c-block w-75"
          src="./images/Workshop/Roses/blue-rose.JPG"
          alt="Blue"
        />
        <Carousel.Caption>
          <h3>Hand Made</h3>
          <p>Ravenmoore Forever roses are made by hand.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="./images/Workshop/Roses/red-Rose.JPG"
          alt="Red"
        />

        <Carousel.Caption>
          <h3>100% recycled Materials</h3>
          <p>all made from Recycled steel from Fileing cabnets bound for the dump.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="./images/Workshop/Roses/yellow-red-rose.JPG"
          alt="two Tone"
        />

        <Carousel.Caption>
          <h3>Occational Limmited Runs</h3>
          <p>
            From time to time look for Special colors or paterns!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default RoseSlides;
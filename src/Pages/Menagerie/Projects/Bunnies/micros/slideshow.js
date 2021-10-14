import React from 'react'
import { Carousel } from 'react-bootstrap';


function MicroSlides() {

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="c-block w-75"
          src="./images/Menagerie/Bunnies/Mini-buns/Mini-bun-front.jpg"
          alt="Tiny micro bunny in rainbow"
        />
        <Carousel.Caption>
          <h3>Pocket sized</h3>
          <p>Measuring in at 3.5 inches tall these bunnies make perfect stress balls or travel companions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="./images/Menagerie/Bunnies/Mini-buns/mini-bun-side.jpg"
          alt="Side view of rainbow tiny bunny"
        />

        <Carousel.Caption>
          <h3>Comming soon To ETSY</h3>
          <p>We will be doing a 6 color roulets item of these bunnies... 6 colors and you could get any!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MicroSlides;
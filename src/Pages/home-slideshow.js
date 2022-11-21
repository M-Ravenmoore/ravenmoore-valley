import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';


function HomeSlides() {

  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/HomeSlides/discordbanner.jpg"
        alt="Discord"
      />
      <Carousel.Caption>
        <Link to="https://discord.gg/awec8dnm67"><h6>Chat with us on Discord</h6></Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/HomeSlides/booth.jpg"
        alt="Booth Photo"
      />
      <Carousel.Caption>
        <h6>Officaly At Markets NOW!!</h6>
      </Carousel.Caption>
    </Carousel.Item>
    {/* <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/HomeSlides/rose banner.jpg"
        alt="Roses"
      />
      <Carousel.Caption>
        <Link to='#store'><h6>Awesome crafts avialiable in our Store!</h6></Link>
      </Carousel.Caption>
    </Carousel.Item> */}
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/HomeSlides/tinctures.jpg"
        alt="Tinctures"
      />
      <Carousel.Caption>
        <Link to='news'><h6>Tinctures are comming soon 3weeks away! click here for more!</h6></Link>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default HomeSlides;
import React from 'react';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function Home(props){

  return(
    <div id="appHome" className="Home">

      
      <section id="first-row">
        <h2> Welcome to the Ravenmoore Valley Community</h2>
        <p> Here at Ravenmoore Valley, we bring together artists, crafters, and makers with creative and unique skills. to bring some amazing content and community activitys together. We are a diverse community of friends, family and commonaly alligned individules, that strive to bring the best of humanity forward while relying on the past to bring us together.</p>
      </section>

      <section id='slides'>
        {/*  */}
        <Carousel>
          <Carousel.Item>
            <article className="d-block w-100" id='discord'>
              <h3>Join The Discord!</h3>
              <p>Ravenmoore Valley has a discord to chat and hangout on! get the latest updates and news.</p>
              <Button href='https://discord.gg/awec8dnm67' variant='dark'>Discord</Button>
            </article>
            {/* <Carousel.Caption>
              <h3>Join The Discord!</h3>
              <p>Ravenmoore Valley has a discord to chat and hangout on! get the latest updates and news.</p>
              <Button href='https://discord.gg/awec8dnm67' variant='dark'>Discord</Button>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
            // extra life banner
              className="d-block w-100"
              src="./images/Extra Life Impact Facts.JPG"
              alt="Extra Life"
            />

            <Carousel.Caption>
              <h3>Upcomming Ravenmoore community Events</h3>
              <p>Extra Life Game Day! 7-28 7-29</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/Workshop/Roses/red-Rose.JPG"
              alt="Roses"
            />

            <Carousel.Caption>
              <h3>Roses comming soon</h3>
              <p>Muninn will be starting to produce and sell roses soon click the button to find out more</p>
              <Button href="#Roses">Order</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section id="second-row">
      <h2>The Ravenmoore Family</h2>
        <p> The Cornerstone of the Ravenmoore Community is The Ravenmoore Clan, Muninn and Huginn Ravenmoore. They are the driving forces behind all you see here, as such they have their own 'workshops' so to say. In Muninn's Workshop you will find his current projects listed with regular updates. while in Huginn's Menagerie you will find the wonderfull array of her creations. </p>
        <Button href='#workshop' variant='dark'>Muninn's Workshop</Button>
        <Button href='#menagerie' variant='dark'>Huginn's Menagerie</Button>
      </section>


      <section id="fourth-row">
        <h2>Ravenmoore Community Artisans</h2>
        <p> Many of our community members are creators,crafter,makers ect and as such we have created a Ravenmoore Artisans directory with bios and links... Click below to take a look</p>
        <Button href='#artists' variant='dark'>Artisans directory</Button>
      </section>
    </div>  )
};

export default Home;
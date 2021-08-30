import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import "./about.scss"

function About(props){

  return(
    <div id="appAbout" className="About">
      <article className="content-A">
        <h2>About The Ravenmoore Community</h2>
        <p> Ravenmoore Valley, is the community built by Muninn (Matt) and Huginn (Rebecca) Ravenmoore and their close friends. It is slowly growing, and we hope it continues. We are Artists creators, designers, builders and more. This community is about creating and thriveing together as a group.  As you browse our community site you will find we do many things and involve our comunity in most of it.  From renactment events, to local and streamed bonfires, charity events / drives, Twitch streaming, creating, community gardening, even a store to sell our creations to our lovely community members. </p>
      </article>

        <h3>The Community Leaders and Rolls</h3>
      <section class="about-cards">
      
        <Card >
          <Card.Img src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
            <Card.Title>Mastermind</Card.Title>
            <Card.Subtitle>Muninn (Matt) Ravenmoore</Card.Subtitle>
            <Card.Text> Meet Muninn Ravenmoore. He is The head of the Ravenmoore Family and The visonary, and driving force behind The Ravenmoore Valley Community. Muninn is primarily a metal artist and but he dabbles is many others, a true "jack of all trades master of few" kind of guy.  He  regularly 'collects' artists and crafters that have talent but no ability to make a booth or shop into The Ravenmoore Valley Market.</Card.Text>
          </Card.Body>
          <div className="cardBtn">
          <Button variant="dark" href='#workshop' >Workshop</Button>
          </div>
        </Card>

        <Card >
          <Card.Img variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
            <Card.Title>Marketing PR and Social Media</Card.Title>
            <Card.Subtitle>Huginn (Rebecca) Ravenmoore</Card.Subtitle>
            <Card.Text> Meet Huginn Ravenmoore, wife to Muninn, and often the public face of Ravenmoore Valley. Her crafts include Crocheting, sewing, papercraft and more. </Card.Text>
          </Card.Body>
          <div className="cardBtn">
           <Button href='#menagerie' variant= "dark">Menagerie</Button>
          </div>
        </Card>

        <Card >
          <Card.Img variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
            <Card.Title>The Ravenmoore Artisans</Card.Title>
            <Card.Subtitle>The Artists, Crafters, ect</Card.Subtitle>
            <Card.Text> These are the people that have asked for space in our Ravenmoore Valley Market. The Creators, Makers, Tinkers, and more. Usualy small little know artists that need a place to seell their wears. you can find out more by clicking below</Card.Text>
          </Card.Body>
          <div className="cardBtn">
            <Button href="#" variant="dark">How to Join The Community</Button>
            <Button href='#Artists' variant="dark">Artists</Button>
          </div>
        </Card>
      </section>
      </div>  
  )
}

export default About;





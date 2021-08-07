import React from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function About(props){

  return(
    <div id="appAbout" className="About">
      <article>
        <h2>Ravenmoore Valley Family</h2>
        <p> These are the people who are are behind Ravenmoore Valley and the marketplace.</p>
      </article>
      <section class="about-cards">
        <Card style={{width: '360px'}}>
          <Card.Img variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
            <Card.Title>Muninn (Matt) Ravenmoore</Card.Title>
            <Card.Text>About The MasterMind</Card.Text>
          </Card.Body>
          <Button variant= "dark">Portfolio</Button>
        </Card>
        <Card style={{width:'360px'}}>
        <Card.Img variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
          <Card.Title>Mastermind</Card.Title>
          <Card.Subtitle>Muninn (Matt) Ravenmoore</Card.Subtitle>
          <Card.Text> Meet Muninn Ravenmoore. He is The head of the Ravenmoore Family and The visonary, and driving force behind The Ravenmoore Valley Community. Muninn is primarily a metal artist and but he dabbles is many others, a true "jack of all trades master of few" kind of guy.  He  regularly 'collects' artists and crafters that have talent but no ability to make a booth or shop into The Ravenmoore Valley Market.</Card.Text>
          </Card.Body>
          <Button variant= "dark">Portfolio</Button>
          </Card>

        <Card style={{width:'360px'}}>
        <Card.Img variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
          <Card.Title>Marketing PR and Social Media</Card.Title>
          <Card.Subtitle>Huginn (Rebecca) Ravenmoore</Card.Subtitle>
          <Card.Text> Meet Huginn Ravenmoore, wife to Muninn, and often the public face of Ravenmoore Valley. Her crafts include Crocheting, sewing, papercraft and more. </Card.Text>
          </Card.Body>
          <Button variant= "dark">Portfolio</Button>
          </Card>

        <Card style={{width: '360px'}}>
        <Card.Img variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
          <Card.Title>Banners, Chain, and More</Card.Title>
          <Card.Subtitle> Jo Hill</Card.Subtitle>
          <Card.Text> Meet Jo, our resident 'old Fart' as he puts it. He builds beautiful hand-embroidered and sewn tapestries and banners. Alongside this, he is also the finest maile and Ring Master in the Ravenmoore Valley community. </Card.Text>
          </Card.Body>
          <Button variant= "dark">Portfolio</Button>
        </Card>
      </section>
      </div>  
  )
}

export default About;





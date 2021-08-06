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

        <Card style={{width: '360px'}}>
          <Card.Img variant="left" src="../../public/images/thing.jpg" alt="Headshot" />
          <Card.Body>
            <Card.Title>Huginn (Rebecca) Ravenmoore</Card.Title>
            <Card.Text>About Social enginer and Media Relations</Card.Text>
          </Card.Body>
          <Button variant= "dark">Portfolio</Button>
        </Card>
      </section>
      </div>  
  )
}

export default About;





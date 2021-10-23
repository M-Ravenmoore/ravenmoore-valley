import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function HuginnProjects (props){

  return(
    <div id='Projects'>
      <h2>Projects</h2>
      <section className="project-cards">
        <Card  className="projects">
          <Card.Img src="./images/Menagerie/Bunnies/Fluf Buns/Sizes.jpg" />
          <Card.Body>
            <Card.Title>Bunnies</Card.Title>
            <Card.Text>
             All of the Bunnies Flufs and Micros and all of the Bunnies. Hand made with love and devotion by the wonderfull Huginn Ravenmoore.
            </Card.Text>
          </Card.Body>
          <Button href="#menagerie/bunnies">Bunnies</Button>
        </Card>
        <Card className="projects">
          <Card.Img src="./images/Menagerie/Dragons/dragon-banner.jpg" />
          <Card.Body>
            <Card.Title>Dragons</Card.Title>
            <Card.Text>
              RAWR! There are Dragons in this page be warned. Cute flufy lovable dragons. Created on Commision and customizable with in reasone click below to learn more.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </div>

  )
}

export default HuginnProjects;
import React from 'react';
import { Button } from 'react-bootstrap';
import { CardColumns,Card } from 'react-bootstrap';

function Projects (props){

  return(
    <div id='Projects'>
      <h2>Projects</h2>
        <Card  className="projects">
          <Card.Img src="./images/Workshop/Roses/pre-paint-rose.jpg" />
          <Card.Body>
            <Card.Title>Hand Made Metal Roses</Card.Title>
            <Card.Text>
              These are hand made steel roses from 100% recycled materials. Sprayed with color and sealed agains wear. they make wonderfull gifts to someone you care about!
            </Card.Text>
          </Card.Body>
          <Button href="#workshop/roses">Roses</Button>
        </Card>
        <Card className="projects">
          <Card.Img variant="top" src="./images/Workshop/Arcade/" />
          <Card.Body>
            <Card.Title>Wood Pannel Arcade</Card.Title>
            <Card.Text>
              These handmade wood boxes are Fully functional Emulators that are plug and play. also available in contorller only for add on players.
            </Card.Text>
          </Card.Body>
          <Button href="#workshop/arcade">Arcade</Button>
        </Card>
    </div>

  )
}

export default Projects;
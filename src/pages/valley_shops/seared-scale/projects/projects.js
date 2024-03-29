import React from 'react';
import { Card } from 'react-bootstrap';

function Projects (props){

  return(
    <div id='Projects'>
      <h2>Projects</h2>
      <section className="project-cards">
        <Card  className="projects">
          <Card.Img src="./images/Seared_Scale/Roses/Main/batch-red-std.jpg" />
          <Card.Body>
            <Card.Title>Hand Made Metal Roses</Card.Title>
            <Card.Text>
              These are hand made steel roses from 100% recycled materials. Sprayed with color and sealed agains wear. they make wonderfull gifts to someone you care about!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="projects">
          <Card.Img src="./images/Seared_Scale/Arcade/Prototypeing/first-box.jpg" />
          <Card.Body>
            <Card.Title>Wood Pannel Arcade</Card.Title>
            <Card.Text>
              These handmade wood boxes are Fully functional Emulators that are plug and play. also available in contorller only for add on players.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </div>

  )
}

export default Projects;
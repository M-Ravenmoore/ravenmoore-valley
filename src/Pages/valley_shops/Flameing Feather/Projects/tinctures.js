import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Tinctures (props){

  return(
    <div id='Projects'>
      <h2>Current Tinctures</h2>
      <section className="project-cards">
        <Card  className="projects">
          <Card.Img src="./images" />
          <Card.Body>
            <Card.Title>Muscle Tention</Card.Title>
            <Card.Text>
              What it does and what is in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="projects">
          <Card.Img src="./images" />
          <Card.Body>
            <Card.Title>Stress tincture</Card.Title>
            <Card.Text>
              What it does and what is in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card  className="projects">
          <Card.Img src="./images" />
          <Card.Body>
            <Card.Title>Stomach troubles</Card.Title>
            <Card.Text>
              What it does and what is in it.
            </Card.Text>
          </Card.Body>
        </Card>
        
        </section>
    </div>

  )
}

export default Tinctures;
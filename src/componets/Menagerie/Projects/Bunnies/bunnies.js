import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Bunnies (props){

  return(
    <div id='Projects'>
      <h2>Projects</h2>
        <Card  className="projects">
          <Card.Img src="./images/" />
          <Card.Body>
            <Card.Title>Flufs</Card.Title>
            <Card.Text>
              Big soft comphy fluf bunnies come in 2 sizes and several colors/paterns.
            </Card.Text>
          </Card.Body>
          <Button href="#menagerie/bunnies/flufs">Fluf Buns</Button>
        </Card>
        <Card className="projects">
          <Card.Img variant="top" src="./images" />
          <Card.Body>
            <Card.Title>Micro Buns</Card.Title>
            <Card.Text>
              only about 3in tall thes are beanbag buns in rainbow colors
            </Card.Text>
          </Card.Body>
          <Button href="#menagerie/bunnies/micros">Micro Buns</Button>
        </Card>
    </div>

  )
}

export default Bunnies;
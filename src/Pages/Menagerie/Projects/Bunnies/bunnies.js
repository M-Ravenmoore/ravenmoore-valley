import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Bunnies (props){

  return(
    <div id='Projects'>
      <h2>Projects</h2>
      <section className="project-cards">
        <Card  className="projects">
          <Card.Img src="./images/Menagerie/Bunnies/Fluf Buns/md-fluf-front.jpg" />
          <Card.Body>
            <Card.Title>Flufs</Card.Title>
            <Card.Text>
              Big soft comphy fluf bunnies come in 2 sizes and several colors/paterns.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="projects">
          <Card.Img src="./images/Menagerie/Bunnies/Mini-buns/Mini-bun-front.jpg" />
          <Card.Body>
            <Card.Title>Micro Buns</Card.Title>
            <Card.Text>
              only about 3in tall thes are beanbag buns in rainbow colors
            </Card.Text>
          </Card.Body>
          
        </Card>
        </section>
    </div>

  )
}

export default Bunnies;
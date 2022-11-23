import React from 'react';
import { Card } from 'react-bootstrap';

function Oils (props){

  return(
    <div id='Products'>
      <h2>Current oils</h2>
      <section className="product-cards">
        <Card  className="products">
          <Card.Img src="./images" />
          <Card.Body>
            <Card.Title>Face oil</Card.Title>
            <Card.Text>
              What it does and what is in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="products">
          <Card.Img src="./images" />
          <Card.Body>
            <Card.Title>Stress oil</Card.Title>
            <Card.Text>
              What it does and what is in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card  className="products">
          <Card.Img src="./images" />
          <Card.Body>
            <Card.Title>anti itch oil</Card.Title>
            <Card.Text>
              What it does and what is in it.
            </Card.Text>
          </Card.Body>
        </Card>
        
        </section>
    </div>

  )
}

export default Oils;
import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function FfProducts (props){

  return(
    <div id='Products'>
      <h2>Product Lines</h2>

      {/* these cards shoud be generated from db and a template
     */}
      <section className="product-cards">
        <Card  className="products">
          <Card.Img src="./images/" />
          <Card.Body>
            <Card.Title>Oils</Card.Title>
            <Card.Text>
             Face oils and aroma theropy rollers to soothe your ails.
            </Card.Text>
          </Card.Body>
          <Button href="#flameingfeather/oils">Current Oils</Button>
        </Card>
        <Card className="products">
          <Card.Img src="./images" />
          <Card.Body>
            <Card.Title>Tinctures</Card.Title>
            <Card.Text>
              Just a few drops and youll be right as rain! our tinctures are hand crafted from localy sourced fresh ingredients.
            </Card.Text>
          </Card.Body>
            <Button href="#flameingfeather/tinctures">Current Tinctures</Button>
        </Card>
      </section>
    </div>

  )
}

export default FfProducts;
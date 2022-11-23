import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function ShopsMain (props){

  return(
    <div id='shops'>
      <h2>Ravenmoore Valley Shops</h2>
      <section className="shop-cards">
        <Card  >
          <Card.Img src="./images/" />
          <Card.Body>
            <Card.Title>Flameing Feather</Card.Title>
            <Card.Text>
             The Flameing Feather is the valleys Appothicary and remidies source. The best of herbal tinctures and oils for all kinds of ailments.
            </Card.Text>
          </Card.Body>
          <Button href="#flameingfeather">Enter Shop</Button>
        </Card>

        <Card >
          <Card.Img src="./images" />
          <Card.Body>
            <Card.Title>The Seared Scale</Card.Title>
            <Card.Text>
             If you dream it we can make it, here at the seared scale. We work with metal and machines to create props and more.
            </Card.Text>
          </Card.Body>
            <Button href="#searedscale">Enter Shop</Button>
        
        </Card>
      </section>
    </div>

  )
}

export default ShopsMain;
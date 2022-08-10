import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';



function About(props){

  return(
    <div id="appAbout" className="About">
      <article className="content-A">
        <h2>About The Ravenmoore Community</h2>
        <p> Ravenmoore Valley, is more than just a store or a few artists it is a community, Driven by its founder Dusk (Matt) Ravenmoore, but shaped and added to but everyone involved from the artists the to our amazing clients that come to us asking to make their dreams and wishes come true, to viwers that watch from afar via Insta and Twitch alike.</p>
        <p>Our Goal is to bring to gether small crafters and creators that art too small to make market on their own and give them a startig place to sell thier wares... Given they fit our Renasuance motive and a few other guidelines.... </p>
      </article>

        <h3>The Community Leaders and Rolls</h3>
      <section className="founder-cards">
      
        <Card className="founders">
          <Card.Img className='Headshot' src="./images/Headshots/matt-headshot.png" alt="Dusk Ravenmoore Headshot" />
          <Card.Body>
            <Card.Title>Founder</Card.Title>
            <Card.Subtitle>Dusk (Matt) Ravenmoore</Card.Subtitle>
            <Card.Text> Meet Dusk Ravenmoore. He is The head of House Ravenmoore. The visonary, and driving force behind Ravenmoore Valley and its Community. Dusk is primarily a metal artist and can work with most anything else excepting glass.  He  regularly 'collects' artists and crafters that have talent but no ability to make a booth or shop into The Ravenmoore Valley Market. His shop withing ravenmoore valley is The seared scale click below to wander in</Card.Text>
          </Card.Body>
          <div className="cardBtn">
          <Button href="https://ravenmoore-profile.netlify.app" variant="dark">Portfolio</Button>
          
          </div>
        </Card>

        <Card className="founders">
          <Card.Img className='Headshot' src="./images/Headshots/Dawn-Headshot.jpg" alt="Dawn-Headshot" />
          <Card.Body>
            <Card.Title>Co-Owner</Card.Title>
            <Card.Subtitle>Dawn Gallows</Card.Subtitle>
            <Card.Text> Dawn will be writing her own bio here shortly folks just you wait her botainicals do wonderous things! </Card.Text>
          </Card.Body>
          <div className="cardBtn">
          <Button variant="dark">Portfolio</Button>
          </div>
        </Card>
      </section>
    </div>  
  )
}

export default About;





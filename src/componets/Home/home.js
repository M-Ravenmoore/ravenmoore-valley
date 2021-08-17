import React from 'react';
import { Button } from 'react-bootstrap';

function Home(props){

  return(
    <div id="appHome" className="Home">
      <section id="first-row">
        <h2> Welcome to the Ravenmoore Valley Community</h2>
        <p> Here at Ravenmoore Valley, we bring together artists, crafters, and makers with creative and unique skills. to bring some amazing content and community activitys together. We are a diverse community of friends, family and commonaly alligned individules, that strive to bring the best of humanity forward while relying on the past to bring us together.</p>
      </section>

      <section id="second-row">
      <h2>The Ravenmoore Family</h2>
        <p> The Cornerstone of the Ravenmoore Community is The Ravenmoore Clan, Muninn and Huginn Ravenmoore. They are the driving forces behind all you see here, as such they have their own 'workshops' so to say. In Muninn's Workshop you will find his current projects listed with regular updates. while in Huginn's Menagerie you will find the wonderfull array of her creations. </p>
        <Button href='#workshop' variant='dark'>Muninn's Workshop</Button>
        <Button href='#menagerie' variant='dark'>Huginn's Menagerie</Button>
      </section>

      <section id="third-row">
        {/* want an img here either as background or in the row */}
        <h2>Ravenmoore Community events</h2>
        <p>Soon to come event cards from the callender will display below this</p>
        {/* cards with next 2 events. these will be the same on the news page events Section  might want a community callender for both to referance! havent decided */}
      </section>

      <section id="fourth-row">
        <h2>Ravenmoore Community Artisans</h2>
        <p> Many of our community members are creators,crafter,makers ect and as such we have created a Ravenmoore Artisans directory with bios and links... Click below to take a look</p>
        <Button href='#artists' variant='dark'>Artisans directory</Button>
      </section>
    </div>  )
};

export default Home;
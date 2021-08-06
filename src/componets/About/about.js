import React from 'react';

function About(props){

  return(
    <div id="appAbout" className="About">
      <article>
        <h2>Ravenmoore Valley Family</h2>
        <p> These are the people who are are behind Ravenmoore Valley and the marketplace.</p>
      </article>
      <section class="about-cards">
        <div class="creator">
          <h3 class="title">Mastermind</h3>
          <h3 class="name">Muninn (Matt) Ravenmoore</h3>
          <p class="bio">The visonary behind ravenmoore valley and Head of Clan Ravenmoore</p>
        </div>
        <div class="creator">
          <h3 class="title">Marketing PR and Social Media</h3>
          <h3 class="name">Huginn (Rebecca) Ravenmoore</h3>
          <p class="bio"> Huginn handles alot of the being on the Social medias and such (FILLER TEXT FILLER)</p>
        </div>
      </section>
    </div>
  )
}

export default About;





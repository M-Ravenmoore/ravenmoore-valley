import React from 'react';



function About(props){

  return(
    <div id="appAbout" className="About">
      <div id="aboutSectionOne" className='aboutTop'>
      <article className="content-A">
        <h2>About The Ravenmoore Community</h2>
          <p> Ravenmoore Valley, is more than just a store or a few artists it is a community, Driven by its founder Dusk (Matt) Ravenmoore, but shaped and added to but everyone involved from the artists the to our amazing clients that come to us asking to make their dreams and wishes come true, to viwers that watch from afar via Insta and Twitch alike.</p>

          <p>Our Goal is to bring to gether small crafters and creators that art too small to make market on their own and give them a startig place to sell thier wares... Given they fit our Renasuance motive and a few other guidelines.... </p>
      </article>
      <div id='imgContainer' className='infoPanel-A'>
        <img 
            className="aboutImg"
            src="./images/"
            alt=""
          />
          </div>
      </div>

      <div id="aboutSectionTwo" className='aboutMid'>
        <div id='imgContainer' className='infoPanel-A'>
        <img 
            className="aboutImg"
            src="./images/"
            alt=""
          />
          </div>
      <article className="content-A">
         
          <h2>Our Story</h2>
          <p> The Dream of Ravenmoore Valley was started neigh on 8 years ago, when Dusk realized he had many crafters but none of them sold things becasue it was too much to have a shop of booth. Enter in his inovation. Bringing together small crafters with a large range of skills. Unfortunatly disaster stuck 5 years ago when Dusk was taken down by an injury. But it didnt die... over covid and a lot of Physical theropy Dusk and Ravenmoore Valley have build themselves back up and are now out starting to bring custom creating to fairs around the PNW</p>

      </article>
     
      </div>
      <div id="aboutSectionThree" className='aboutEnd'>
        <div id='imgContainer' className='infoPanel-A'>
        <img 
            className="aboutImg"
            src="./images/"
            alt=""
          />
          </div>
      <article className="content-A">
         
          <h2>The Future Of Ravenmoore Valley</h2>
          <p> We are ever growing and changeing, we have recently aquired a few new tools and spaces that we hope to get up and running soon. along with our new Loft clean shop for printing and painting. The forge is almost ready to tour and the truck is being dimentioned to become a dragon! So many cool and adventerous things coming!!</p>
          {/* add button to news when it is up and running! */}

      </article>
     
      </div>

    </div>  
  )
}

export default About;





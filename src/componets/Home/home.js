import React from 'react';

function Home(props){

  return(
    <div id="appHome" className="Home">
      <section id="first-row">
        <h2> Welcome to the Ravenmoore Valley Marketplace</h2>

        <p> Here at Ravenmoore Valley Marketplace, we bring together artists, crafters, and makers with creative and unique skills.</p>
      </section>

      <section id="second-row">
        {/* want an img here either as background or in the row */}
        <h2>Custom Works</h2>

        <p> Many of our artisans are available for Commission and other custom works. See the Ravenmoore Commission gallery or our Commissioners list for more details.</p>
      </section>

      <section id="third-row">
        <h2>The Goods</h2>
{/* add link to Store here */}
        <p> Soon we will have our own store, one day when we grow up, but for now you can click below and checkout our current third party store for the Ravenmoore Clan. </p>
      </section>
    </div>  )
};

export default Home;
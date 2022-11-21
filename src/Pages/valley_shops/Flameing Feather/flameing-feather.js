import React from 'react'

import DawnsProjects from './Projects/dawns-projects';

function FlameingFeather (props){

  return(
<div id='flameingFeather'>
 <section id='intro' className="content-A">
        <h2>Flameing Feather Apothics</h2>
        
        <p>Dawn gallows co-owner of ravenmoorevalley works with plants and minerals to create wonderfull remidies for all of your commmon and some uncomon ailments. you will find our current catilogue by clicking below.</p>
      </section>
      <section id='Projects-Dawn'>
       <DawnsProjects />

      </section>
</div>
  )
}

export default FlameingFeather;
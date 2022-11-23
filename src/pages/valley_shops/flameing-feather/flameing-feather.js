import React from 'react'

import FfProducts from './products/ff-products';

function FlameingFeather (props){

  return(
<div id='flameingFeather'>
 <section id='intro' className="content-A">
        <h2>Flameing Feather Apothics</h2>
        
        <p>Dawn gallows co-owner of ravenmoorevalley works with plants and minerals to create wonderfull remidies for all of your commmon and some uncomon ailments. you will find our current catilogue by clicking below.</p>
      </section>
      <section id='Products-Flameingfeather'>
       <FfProducts />

      </section>
</div>
  )
}

export default FlameingFeather;
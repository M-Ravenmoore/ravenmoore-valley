import React from 'react'
import MicroSlides from './slideshow'

function MicroBun (props){

  return(
    <div id='Micros' className="Micro-Buns">
      <h2>Micro Bunnies</h2>
      <MicroSlides />
      <article className="content-A" >
        <h3>Micro Bunnies</h3>
        <p>These are TINY BUNNIES that every one will love this holliday season comes in a random color and are all hand made
          
          The Making,

          The product.
        </p>

      </article>
    </div>

  )
}

export default MicroBun;
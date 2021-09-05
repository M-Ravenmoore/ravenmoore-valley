import React from 'react'
import FlufSlides from './slideshow'

function FlufBun (props){

  return(
    <div id='Fluf-bun' className="Fluf-Bunnie">
      <h2>Fluf Buns</h2>
      <FlufSlides />
      <article className="content-A" >
        <h3>Fluf Buns</h3>
        <p>We Call these the Fluf Buns they come in 2 sizes currently and a range of colors more details to come Soon

          The Making,

          The product.
        </p>

      </article>
    </div>

  )
}

export default FlufBun;
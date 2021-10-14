import React from 'react'
import { Button } from 'react-bootstrap'

function Store (props){

  return(
    <div id='store'>
    <h2>Store</h2>

    The Ravenmoore Valley Store front is currently Hoasted by ETSY Click below to Shop
    <Button href="https://www.etsy.com/shop/RavenmooreValleyShop?ref=l2-about-shopname">Etsy Store</Button>
    </div>
  )
}

export default Store;
import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Artists from '../pages/artists/artists';
import News from '../pages/news/news';
import SearedScale from '../pages/valley_shops/seared-scale/seared-scale';
import FlameingFeather from '../pages/valley_shops/flameing-feather/flameing-feather';
import Oils from '../pages/valley_shops/flameing-feather/products/oils';
import Tinctures from '../pages/valley_shops/flameing-feather/products/tinctures';

import Disclaimer from '../pages/disclaimer';
import ShopsMain from '../pages/valley_shops/shops-main';

import ArtistDetailsPage from '../pages/artists/artist_details';

import ExternalApi from './auth/external-api-temp';

 function Main() {
  
  return(
    <div id="main" className="main">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/about" component={About} />

        <Route exact path="/artists" component={Artists} />
        <Route exact path="/artists/:artistId" component={ArtistDetailsPage} />

        <Route exact path="/news" component={News} />

        <Route exact path="/shops" component={ShopsMain} />

        <Route exact path="/searedscale" component={SearedScale} />
        {/* <Route exact path="/searedscale/:productName" component={} /> */}


        <Route exact path="/flameingfeather" component={FlameingFeather} />
        {/* <Route exact path="/flameingfeather/:productName" component={} /> */}

        <Route exact path="/flameingfeather/oils" component={Oils} />
        <Route exact path="/flameingfeather/tinctures" component={Tinctures} />

        <Route exact path="/legal" component={Disclaimer} />


        <Route exact path="/API" component={ExternalApi} />

      </Switch>
    </div>
  );
}

export default Main;
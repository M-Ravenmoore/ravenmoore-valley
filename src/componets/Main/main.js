import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../Home/home';
import About from '../About/about';
import Artists from '../Artists/artists';
import News from '../News/news';
import Store from '../Store/store-temp';
import Workshop from  '../Workshop/workshop';
import Menagerie from '../Menagerie/menagerie';

import Roses from '../Workshop/Projects/Roses/roses';
import Arcade from '../Workshop/Projects/Arcade/arcade';


 function Main() {
  
  return(
    <div id="main" className="main">
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/about">
         <About />
       </Route>
       <Route exact path="/artists">
         <Artists />
       </Route>
       <Route exact path="/menagerie">
         <Menagerie />
       </Route>
       <Route exact path="/workshop">
         <Workshop />
       </Route>
       <Route exact path="/store">
         <Store />
       </Route>
       <Route exact path="/news">
         <News />
       </Route>
       <Route exact path="/news">
         <News />
       </Route>
       <Route exact path="/workshop/roses">
        <Roses />
       </Route>
       <Route exact path="/workshop/arcade">
        <Arcade />
       </Route>
     </Switch>
    </div>
  );
}

export default Main;
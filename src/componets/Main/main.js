import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../Pages/Home/home';
import About from '../Pages/About/about';
import Artists from '../Pages/Artists/artists';
import News from '../Pages/News/news';
import Store from '../Pages/Store/store-temp';


import Workshop from  '../Pages/Workshop/workshop';
import Menagerie from '../Pages/Menagerie/menagerie';

import Bunnies from '../Pages/Menagerie/Projects/Bunnies/bunnies';
import FlufBun from '../Pages/Menagerie/Projects/Bunnies/flufs/flufs';
import MicroBun from '../Pages/Menagerie/Projects/Bunnies/micros/micros';
import Dragons from '../Pages/Menagerie/Projects/Dragons/dragons';
import Roses from '../Pages/Workshop/Projects/Roses/roses';
import Arcade from '../Pages/Workshop/Projects/Arcade/arcade';


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

       
       <Route exact path="/menagerie/bunnies">
        <Bunnies />
       </Route>
       <Route exact path="/menagerie/bunnies/flufs">
        <FlufBun />
       </Route>
       <Route exact path="/menagerie/bunnies/micros">
        <MicroBun />
       </Route>


       <Route exact path="/menagerie/dragons">
        <Dragons />
       </Route>
     </Switch>
    </div>
  );
}

export default Main;
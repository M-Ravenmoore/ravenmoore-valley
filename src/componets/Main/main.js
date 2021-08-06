import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from '../Home/home'
import About from '../About/about'

 function Main() {
  
  return(
    <div id="main" className="Main">
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/about">
         <About />
       </Route>
     </Switch>
    </div>
  );
}

export default Main;
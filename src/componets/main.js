import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Artists from './Pages/artists';
import News from './Pages/news';
import Store from './Pages/store-temp';
import Profile from './Auth/profile'


 function Main() {
  
  return(
    <div id="main" className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/news" component={News} />
        <Route exact path="/store" component={Store} />
        <Route exact paht="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default Main;
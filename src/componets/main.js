import React from 'react';
import {Route,Switch} from 'react-router-dom';
import ProtectedRoute from './Auth/protected-route';

import Home from '../Pages/home';
import About from '../Pages/about';
import Artists from '../Pages/artists';
import News from '../Pages/news';
import Store from '../Pages/store-temp';
import Profile from './Auth/profile';
import ExternalApi from './Auth/external-api-temp';

import AdminPannel from '../Pages/admin/adminPannel';
import newsForm from '../Pages/admin/newsForm';

 function Main() {
  
  return(
    <div id="main" className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/news" component={News} />
        <Route exact path="/store" component={Store} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/newspost" component={newsForm} />
        <Route exact path="/API" component={ExternalApi} />
        <Route exact path="/admin" component={AdminPannel} />

      </Switch>
    </div>
  );
}

export default Main;
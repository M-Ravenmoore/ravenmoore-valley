import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProveiderWithHistory from './componets/Auth/auth0-provider-with-history';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import store from './redux-store/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./scss/custom.scss"

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
      <Auth0ProveiderWithHistory>
        <App />
      </Auth0ProveiderWithHistory>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

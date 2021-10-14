import React from 'react';
import { HashRouter} from 'react-router-dom';
import Header from './componets/header';
import Main from './componets/main'
import NavBar from './componets/nav'
import Footer from './componets/footer';
import './reset.css';
import './scss/theme.scss';
import './scss/app.scss';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Main />
        <Footer />
      </div> 
    </HashRouter>
    
  );
}

export default App;

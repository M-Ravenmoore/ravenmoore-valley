import React from 'react';
import { HashRouter} from 'react-router-dom';
import Header from './componets/Header/header';
import Main from './componets/Main/main'
import NavBar from './componets/Nav-Bar/nav'
import Footer from './componets/Footer/footer';
import './reset.css';
import './Global-Styles/app.css'
import './Global-Styles/dark.css';
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

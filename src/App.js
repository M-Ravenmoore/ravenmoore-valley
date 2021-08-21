import React from 'react';
import { HashRouter} from 'react-router-dom';
import Header from './componets/Header/header';
import Main from './componets/Main/main'
import NavBar from './componets/Nav-Bar/nav'
import Footer from './componets/Footer/footer';
import './reset.css';
<<<<<<< HEAD
import './Styles/app-dark.css';
=======
import './App.css';
>>>>>>> 80b93afa81526076d90a5eab0f087b2142cb8c3f

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

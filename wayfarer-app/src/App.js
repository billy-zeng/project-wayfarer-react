import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// Components
import Routes from './config/routes';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Nav />
          <Routes />
          <Footer />
      </div>
    );
  };
};

export default App;

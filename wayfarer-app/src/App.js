import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import Nav from './components/Nav/Nav';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <Nav /> */}
          <Routes />
        </header>
      </div>
    );
  };
};

export default withRouter(App);

import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import Nav from './components/Nav/Nav';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <>
      <Nav />
      <main className="container danger">

      </main>
      </>
    );
  };
};

export default App;

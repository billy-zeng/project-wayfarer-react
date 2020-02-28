import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  render(){
    return (
      <h1>Login</h1>
    )
  }
}

export default withRouter(Login);

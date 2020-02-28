import React from 'react';
import axios from 'axios';
import './Auth.css';

class Signup extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''
  };

  render(){
    return (
      <h1>Signup</h1>
    )
  }
}

export default Signup;

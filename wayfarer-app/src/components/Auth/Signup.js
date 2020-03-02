import React from 'react';
// import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Auth.css';

class Signup extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render(){
    return(
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-4 offset-md-4'>
            <h4 className='mb-3'>Signup</h4>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='text'
                  id='name'
                  name='name'
                  value={this.state.name}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Email</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='email'
                  id='email'
                  name='email'
                  value={this.state.email}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Password</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='password'
                  id='password'
                  name='password'
                  value={this.state.password}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password2'>Confirm Password</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='password'
                  id='password2'
                  name='password2'
                  value={this.state.password2}
                />
              </div>
              <button className='btn btn-primary float-right' type='submit'>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;

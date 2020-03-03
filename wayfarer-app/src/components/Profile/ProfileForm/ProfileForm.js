import React from 'react';
import axios from 'axios';
import './ProfileForm.css';
import { withRouter } from 'react-router-dom';

class ProfileForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    city: '',
    state: ''
  };

  componentDidMount() {
    const userId = localStorage.getItem('uId');
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {withCredentials: true})
      .then(res => {
        this.setState({
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          username: res.data.data.username,
          email: res.data.data.email,
          city: res.data.data.city,
          state: res.data.data.state,
        });
      })
      .catch(err => console.log(err.response))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/profile/edit`, this.state, {withCredentials: true})
      .then(res => {
        console.log(res);
        this.props.history.push('/profile');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className='container mt-4 mb-3'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <h4 className='mb-3'>Edit Profile</h4>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={this.state.firstName}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={this.state.lastName}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='text'
                  id='username'
                  name='username'
                  value={this.state.username}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
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
                <label htmlFor='city'>City</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='text'
                  id='city'
                  name='city'
                  value={this.state.city}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='state'>State</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='text'
                  id='state'
                  name='state'
                  value={this.state.state}
                />
              </div>
              <div className='button-wrapper'>
                <button className='btn btn-primary' type='submit'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileForm);

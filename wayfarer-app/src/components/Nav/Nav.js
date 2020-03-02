import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Components
import Modal from 'react-bootstrap/Modal';
import Signup from '../Auth/Signup';
import Login from '../Auth/Login';

// Styles
import './Nav.css';

class Nav extends React.Component {
  state = {
    show: false,
    showSignup: false,
    showLogin: false
  };

  handleOpenSignup = () => {
    this.setState({
      show: true,
      showSignup: true
    })
  };

  handleOpenLogin = () => {
    this.setState({
      show: true,
      showLogin: true
    })
  };

  handleClose = () => {
    this.setState({
      show: false,
      showSignup: false,
      showLogin: false
    })
  };

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <h1 className="mr-1 ml-1 mt-1"><i className="fas fa-map-signs text-dark"></i></h1>
          <Link className="navbar-brand" href="#" to="/"><h1 id="page-title">Wayfarer</h1></Link>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            {!this.props.currentUser ? (
              <>
                <li className="nav-item nav-link" onClick={this.handleOpenSignup}>Sign Up</li>
                <li className="nav-item nav-link" onClick={this.handleOpenLogin}>Log In</li>
              </>
              ) : (
              <>
              <li className="nav-item">
                <Link className="nav-link" href="#" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to="/logout">Log Out</Link>
              </li>
              </>
            )}
          </ul>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            {this.state.showSignup ? <Signup /> : <Login />}
          </Modal.Body>
        </Modal>
      </nav>
    );
  };
};

export default Nav;

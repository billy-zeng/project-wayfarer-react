import React from 'react';
// import { NavLink, Link } from 'react-router-dom';


const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <h5 className="mr-1 ml-1 mt-1"><i class="fas fa-map-signs"></i></h5>
        <a className="navbar-brand" href="#">Wayfarer</a>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Log In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
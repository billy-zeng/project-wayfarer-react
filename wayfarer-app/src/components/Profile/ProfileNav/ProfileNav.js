import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileNav.css';

const ProfileNav = props => {
  return (
    <div id="profile-nav" className="col-sm-3 d-flex flex-column align-items-center justify-content-start">
      <Link to='/profile'>
        <a id="overviewBtn" className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-user"></i>Overview</a>
      </Link>
      <Link to="/profile/myposts">
        <a className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-comment-alt"></i>Posts</a>
      </Link>
      <Link to='/profile/edit'>  
        <a className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="far fa-edit"></i>Update Info</a>
      </Link>
      <a className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-camera"></i>Update Picture</a>
      <a className="btn btn-dark text-light d-flex flex-row justify-content-start align-items-center"><i class="fas fa-key"></i>Change Password</a>
    </div>
  )
}

export default ProfileNav;

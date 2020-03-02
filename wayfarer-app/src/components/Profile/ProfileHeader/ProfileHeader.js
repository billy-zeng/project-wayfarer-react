import React from 'react';

// Components
import Container from 'react-bootstrap/Container';

// Styles
import './ProfileHeader.css';

const ProfileHeader = props => {
  return(
    <Container id="profile-header" className="d-flex flex-row align-items-center justify-content-center mt-5">
      <div id="profile-img-wrapper" className="d-flex col-sm-3 flex-row align-items-center justify-content-center">
        <img id="profile-picture" src="https://images.unsplash.com/photo-1518550835331-b89cdfee2443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="profile-pic"/>
      </div>
      <div id="profile-overview" className="col-sm-9 d-flex flex-column align-items-start justify-content-center text-light bg-dark pl-5">
        <h1>Sarah Kerrigan</h1>
        <small>Joined 01/01/2020</small>
      </div>
    </Container>
  );
};

export default ProfileHeader;
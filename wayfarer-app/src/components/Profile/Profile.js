import React from 'react';

import ProfileHeader from './ProfileHeader/ProfileHeader';
import Routes from './routes'

import './Profile.css'

const Profile = props => {
  return (
      <div id="profile-wrapper" className="d-flex flex-column align-items-center justify-content-center">
        <ProfileHeader />
        <Routes profile={props.profile} />
      </div>
  );
};

export default Profile;

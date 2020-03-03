import React from 'react';

import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileMain from './ProfileMain/ProfileMain';

import './Profile.css'

const Profile = props => {
  return (
      <div id="profile-wrapper" className="d-flex flex-column align-items-center justify-content-center">
        <ProfileHeader profile={props.profile} />
        <ProfileMain profile={props.profile} />
      </div>
  );
};

export default Profile;

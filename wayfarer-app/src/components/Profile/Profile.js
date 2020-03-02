import React from 'react';

import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileMain from './ProfileMain/ProfileMain';

import './Profile.css'

class Profile extends React.Component {
  state = {
    name: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    username: "",
    createdAt: Date,
  }
  
  render() {
    return (
      <div id="profile-wrapper" className="d-flex flex-column align-items-center justify-content-center">
        <ProfileHeader />
        <ProfileMain />
      </div>
  );
  };
};

export default Profile;
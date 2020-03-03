import React from 'react';
import Profile from '../../components/Profile/Profile';
import axios from 'axios';

class ProfileContainer extends React.Component {
  state = {
    profile: {}
  };

  componentDidMount() {
    const userId = localStorage.getItem('uId');
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {withCredentials: true})
      .then(res => {
        this.setState({
          profile: res.data.data
        });
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return <Profile profile={this.state.profile} />;
  }
}

export default ProfileContainer;

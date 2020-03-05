import React from 'react';
import Profile from '../../components/Profile/Profile';
import axios from 'axios';

class ProfileContainer extends React.Component {
  state = {
    profile: {},
    userPosts: []
  };

  updateUser = user => {
    this.setState({ profile: user });
  }

  getUserPosts = () => {
    const userId = localStorage.getItem('uId');
    axios
    .get(`${process.env.REACT_APP_API_URL}/posts?authorId=${userId}`)
    .then(res => {
      console.log(res.data.data)
      this.setState({
        userPosts: res.data.data.reverse()
      });
    })
    .catch(err => console.log(err.response))
  }

  componentDidMount() {
    const userId = localStorage.getItem('uId');
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {withCredentials: true})
      .then(res => {
        this.setState({
          profile: res.data.data
        });
        this.getUserPosts();
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return <Profile profile={this.state.profile} updateUser={this.updateUser} posts={this.state.userPosts} updateUserPosts={this.getUserPosts} />;
  }
}

export default ProfileContainer;

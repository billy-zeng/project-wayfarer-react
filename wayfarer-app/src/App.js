import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// Components
import Routes from './config/routes';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('uId')
  };

  setCurrentUser = userId => {
    this.setState({ currentUser: userId })
    localStorage.setItem('uId', userId);
  };

  logout = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {withCredentials: true})
      .then(res => {
        console.log(res)
        localStorage.removeItem('uId');
        this.setState({ currentUser: null });
        this.props.history.push('/');
      })
      .catch(err => console.log(err.response));
  };

  render(){
    return (
      <div className="App">
          <Nav currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout} />
          <Routes currentUser={this.state.currentUser} />
          <Footer />
      </div>
    );
  };
};

export default withRouter(App);

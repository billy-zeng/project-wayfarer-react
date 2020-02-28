import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Signup from '../components/Auth/Signup';
import Login from '../components/Auth/Login';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/signup' component={Signup} />
      <Route
        path='/login'
        // render={() => (
        //   <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        // )}
        component={Login}
      />
      <Route path='/profile' component={ProfileContainer} />
    </Switch>
  )
}

export default Routes;

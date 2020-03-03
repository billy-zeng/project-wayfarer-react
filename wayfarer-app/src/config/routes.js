import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import ProfileForm from '../components/Profile/ProfileForm/ProfileForm';
import PostDetail from '../components/PostDetail/PostDetail';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={ProfileContainer} />
      <Route exact path='/profile/edit' component={ProfileForm} />
      <Route exact path='/post/detail' component={PostDetail} />
    </Switch>
  )
}

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import PostDetail from '../components/PostDetail/PostDetail';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={ProfileContainer} />
      <Route path='/post/detail' component={PostDetail} />
    </Switch>
  )
}

export default Routes;

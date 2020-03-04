import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import PostDetail from '../components/PostDetail/PostDetail';
import CitiesContainer from '../containers/CitiesContainer/CitiesContainer';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={ProfileContainer} />
      <Route exact path='/post/detail' component={PostDetail} />
      <Route exact path='/cities' component={CitiesContainer} />
    </Switch>
  )
}

export default Routes;

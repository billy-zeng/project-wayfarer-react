import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import PostDetail from '../components/PostDetail/PostDetail';
import CitiesContainer from '../containers/CitiesContainer/CitiesContainer';

const Routes = props => {
  console.log(props)
  return (
    <Switch>
      <Route exact path='/' component={props.currentUser 
        ? CitiesContainer
        : Home} 
      />
      <Route path='/profile' component={ProfileContainer} />
      <Route path='/post/:postId' component={PostDetail} />
    </Switch>
  )
}

export default Routes;

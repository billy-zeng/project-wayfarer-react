import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import PostDetail from '../components/PostDetail/PostDetail';
import CitiesContainer from '../containers/CitiesContainer/CitiesContainer';
// import PostForm from '../components/PostForm/PostForm';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={props.currentUser 
        ? CitiesContainer
        : Home} 
      />
      <Route path='/profile' component={ProfileContainer} />
      <Route exact path='/post/detail' component={PostDetail} />
      {/* refactor into add post modal */}
      {/* <Route exact path='/postnew' component={PostForm} /> */}
    </Switch>
  )
}

export default Routes;

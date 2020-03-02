import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import ProfileForm from '../components/Profile/ProfileForm/ProfileForm';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={ProfileContainer} />
      <Route exact path='/profile/edit' component={ProfileForm} />
      {/* <Route
        exact path='/profile/edit'
        render={() => (
          <ProfileForm currentUser={props.currentUser}/>
        )}
      /> */}
    </Switch>
  )
}

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfileMain from './ProfileMain/ProfileMain';
import ProfileForm from './ProfileForm/ProfileForm';

const Routes = props => {
  return (
    <Switch>
      
      <Route  path='/profile/edit' component={ProfileForm} />
      <Route  path='/profile' component={ProfileMain} />
      {/* <Route exact path='/profile/myposts' component={} /> */}
      {/* <Route exact path='/profile/mycomments' component={} /> */}
    </Switch>
  )
}

export default Routes;

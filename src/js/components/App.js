import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import SignIn from './auth/signin';
import SignUp from './auth/signup';
import Home from './home/home';

export default class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    );
  }
}

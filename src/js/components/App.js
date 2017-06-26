import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Dashboard from './dashboard/Dashboard'
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import SignOut from './auth/SignOut';
import Home from './home/Home';
import RequireAuth from './auth/require_auth';
import Navbar from './navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signout" component={SignOut} />
          <Route path="/dashboard" component={RequireAuth(Dashboard)} />
        </Switch>
      </div>
    );
  }
}

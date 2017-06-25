import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Dashboard from './dashboard/dashboard'
import SignIn from './auth/signin';
import SignUp from './auth/signup';
import Home from './home/home';
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
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

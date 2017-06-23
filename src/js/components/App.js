import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Contact from './contact.js';
import Header from './header';
import Main from './main.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/sign-in" component={Signin} />
        </Switch>
      </div>
    );
  }
}

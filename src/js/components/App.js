import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Contact from './Contact.js';
import Main from './Main.js';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SigninForm from './SigninForm';

export default class SignIn extends Component {
  handleSigninForm(values) {
    console.log(values, 'top level');
  }

  render() {
    return (
      <div>
        <h1>Sign in</h1>
          <SigninForm onSubmit={this.handleSigninForm} />
        <Link to="/">Back Home</Link>
      </div>
    );
  }
}

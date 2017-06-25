import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SigninForm from './SigninForm';

export default class SignIn extends Component {
  submit(values) {

    actions.signinUser(values);
  }

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <SigninForm />
        <Link to="/">Back Home</Link>
      </div>
    );
  }
}

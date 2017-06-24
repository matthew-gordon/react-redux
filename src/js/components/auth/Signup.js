import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignupForm from './SignupForm';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <SignupForm />
        <Link to="/">Back Home</Link>
      </div>
    );
  }
}

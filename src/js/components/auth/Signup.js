import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignupForm from './SignupForm';

export default class SignUp extends Component {
  handleSignupForm(values) {
    console.log(values, 'top level');
  }

  render() {
    return (
      <div>
        <h1>Sign up</h1>
          <SignupForm onSubmit={this.handleSignupForm}/>
        <Link to="/">Back Home</Link>
      </div>
    );
  }
}

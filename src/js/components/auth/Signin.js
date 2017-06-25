import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SigninForm from './SigninForm';

export default class SignIn extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Sign in</h1>
        <SigninForm onSubmit={this.submit} />
        <Link to="/">Back Home</Link>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SigninForm extends Component {
  render() {
    return (
      <form onSubmit={ this.props.handleSubmit }>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

SigninForm = reduxForm({
  form: 'signin'
})(SigninForm)

export default SigninForm;

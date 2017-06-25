import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignupForm extends Component {
  render() {
    return (
      <form onSubmit={ this.props.handleSubmit }>
        <fieldset className="form-group">
        <div>
          <label htmlFor="firstName">Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            className="form-control"/>
        </div>
        </fieldset>
        <fieldset className="form-group">
          <div>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              component="input"
              type="text"
              className="form-control"/>
          </div>
        </fieldset>
        <fieldset className="form-group">
          <div>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              className="form-control"/>
          </div>
        </fieldset>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm)

export default SignupForm;

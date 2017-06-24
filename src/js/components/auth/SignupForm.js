import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignupForm extends Component {
  handleSubmitForm(values) {

    console.log(values);
  }

  render() {
    return (
      <form onSubmit={ this.props.handleSubmit(this.handleSubmitForm) }>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
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

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm)

export default SignupForm;

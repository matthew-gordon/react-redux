import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

import { connect } from 'react-redux';

class SigninForm extends Component {

  submit(values) {
    this.props.signinUser(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
    <form onSubmit={handleSubmit(this.submit.bind(this))}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password"/>
      </div>
      <button action="submit">Submit</button>
    </form>
    );
  }
}

SigninForm = reduxForm({
  form: 'signin'
})(SigninForm)

export default connect(null, actions)(SigninForm);

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <fieldset className="form-group">
    <label htmlFor={input.name}>{label}</label>
    <input className="form-control" {...input} type={type}/>
    { touched && error && <span className="text-danger">{error}</span> }
  </fieldset>
);

export class SignUpForm extends Component {

  submit(values) {
    this.props.signupUser(values, () => {
      this.props.history.push('/dashboard');
    });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Field
          name="username"
          component={renderField}
          type="text"
          label="Username"/>
        <Field
          name="password"
          component={renderField}
          type="password"
          label="Password"/>
        <Field
          name="password_confirmation"
          component={renderField}
          type="password"
          label="Password Confirmation"/>
          {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  let errors = {}

  if (!values.username) {
    errors.username = 'Please enter a usernme';
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = 'Please enter your password confirmation'
  }

  if (values.password !== values.password_confirmation) {
    errors.password = 'Password and password confirmation don\'t match!'
  }

  return errors
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

SignUpForm = reduxForm({
  form: 'signup',
  validate
})(SignUpForm)

import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps, actions)(SignUpForm));

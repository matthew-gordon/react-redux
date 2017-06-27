import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class SignInForm extends Component {

  submit(values) {
    this.props.signinUser(values, () => {
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
        <fieldset className="form-group">
          <div>
            <label htmlFor="username">Username</label>
            <Field
              name="username"
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
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

SignInForm = reduxForm({
  form: 'signin'
})(SignInForm)

import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps, actions)(SignInForm));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUsersRoute();
  }

  getUserInfo() {
    console.log(localStorage.token);
  }

  render() {
    console.log(this.props);
    return (
      <h1>{this.props.message}</h1>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Dashboard);

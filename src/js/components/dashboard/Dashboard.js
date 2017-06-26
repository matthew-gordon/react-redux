import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'


class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  renderUser() {
    if (this.props.user && this.props.user.username) {
      return (
        <div className="container">
          <h1>hello {this.props.user.username}</h1>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h3>Loading...</h3>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderUser()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps, actions)(Dashboard);

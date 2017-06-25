import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends  Component {

  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav pull-right">
          <li className="nav-item"><Link to="/signup">Sign up</Link></li>
          <li className="nav-item"><Link to="/signin">Sign in</Link></li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticcated: state.auth.authenticated
  }
}

export default connect()(Navbar);

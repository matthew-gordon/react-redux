import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Navbar extends  Component {
  renderLinks() {
    if(this.props.authenticated) {
      // show links to sign out or goto dashboard
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ]
    } else {
      //show links to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin">Sign in</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup">Sign up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">Glass-house</Link>
        <ul className="nav navbar-nav pull-right">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Navbar);

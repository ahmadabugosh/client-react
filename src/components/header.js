//class based component

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link to="/volunteer" className="nav-link">
            Volunteer
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/my-impact" className="nav-link">
            My Impact
          </Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link to="/signout" className="nav-link">
            Sign Out
          </Link>
        </li>
      ];
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">
            Sign in
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">
          {' '}<img src="https://s3.amazonaws.com/i7san-test/i7san+logo.jpg" width="65" height="65" /><p align="center" id="logo-text">i7san</p>{' '}
        </Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);

// export plain unconnected component for testing
export { Header };

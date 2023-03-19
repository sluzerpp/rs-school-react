import { withRouter, WithRouterProps } from '../HOC/withRouter';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component<WithRouterProps> {
  render() {
    const { location } = this.props;
    return (
      <nav className="nav">
        <div className="nav__path">{location.pathname}</div>
        <Link to={'/'} className="nav__link">
          Main
        </Link>
        <Link to={'/about'} className="nav__link">
          About
        </Link>
      </nav>
    );
  }
}

export const NavigationWithRouter = withRouter(Navigation);

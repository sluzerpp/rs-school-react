import './Navigation.css';
import { withRouter, WithRouterProps } from '../../HOC/withRouter';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function getLinkClass({ isActive }: { isActive: boolean }) {
  const def = 'nav__link ';
  if (isActive) {
    return def + 'active';
  }
  return def;
}

class Navigation extends Component<WithRouterProps> {
  static paths = [
    { path: '/', name: 'Main' },
    { path: '/about', name: 'About' },
  ];

  render() {
    const { location } = this.props;
    return (
      <nav className="nav">
        <div className="container">
          <div className="nav__inner">
            <div className="nav__path">
              {Navigation.paths.find((path) => path.path === location.pathname)
                ? location.pathname
                : '/404'}
            </div>
            <div className="nav__links">
              {Navigation.paths.map((path) => (
                <NavLink key={path.path} to={path.path} className={getLinkClass}>
                  {path.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export const NavigationWithRouter = withRouter(Navigation);

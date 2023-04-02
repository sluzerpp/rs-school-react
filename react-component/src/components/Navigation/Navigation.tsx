import './Navigation.css';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const paths = [
  { path: '/', name: 'Main' },
  { path: '/about', name: 'About' },
  { path: '/forms', name: 'Forms' },
];

function getLinkClass({ isActive }: { isActive: boolean }) {
  const def = 'nav__link ';
  if (isActive) {
    return def + 'active';
  }
  return def;
}

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <h1 className="nav__path">
            {paths.find((path) => path.path === location.pathname) ? location.pathname : '/404'}
          </h1>
          <div className="nav__links">
            {paths.map((path) => (
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

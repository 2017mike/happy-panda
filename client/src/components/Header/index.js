import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="hero-head">
      <div className="navbar">
        <h1 className="navbar-item" style={{ fontSize: '2rem' }}>
          Happy Panda
        </h1>
        <div className="navbar-item navbar-end is-white">
          {Auth.loggedIn() ? (
            <>
              <button className="button navbar-item navbar-end is-white">
                Notes
              </button>
              <button className="button navbar-item navbar-end is-white" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="navbar-item navbar-end is-light is-mobile" to="/login">
                Login
              </Link>
              <Link className="navbar-item navbar-end is-light" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

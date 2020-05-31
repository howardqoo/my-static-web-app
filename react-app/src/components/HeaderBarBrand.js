import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBarBrand = () => (
  <div className="navbar-brand">
    <a
      className="navbar-item"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab js-logo fa-react fa-2x" aria-hidden="true" />
    </a>
    <NavLink to="/" className="navbar-item nav-home">
      <span className="brand-first">MY</span>
      <span className="brand-second">SHOPPING</span>
      <span className="brand-third">LIST</span>
    </NavLink>
    <span className="navbar-item nav-home"><a href="/.auth/login/github">Login-Github</a></span>
    <span className="navbar-item nav-home"><a href="/.auth/login/facebook">Login-Facebook</a></span>
    <span className="navbar-item nav-home"><a href="/.auth/logout">Log out</a></span>

  </div>
);

export default HeaderBarBrand;

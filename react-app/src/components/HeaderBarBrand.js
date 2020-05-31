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
    <NavLink to="/.auth/login/github" className="navbar-item nav-home">
      <span className="brand-first">Login-Github</span>
    </NavLink>
    <NavLink to="/.auth/login/facebook" className="navbar-item nav-home">
      <span className="brand-first">Login-Facebook</span>
    </NavLink>
    <NavLink to="/.auth/logout" className="navbar-item nav-home">
      <span className="brand-first">Log out</span>
      
    </NavLink>
  </div>
);

export default HeaderBarBrand;

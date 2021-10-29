import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Bhavesh</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item py-3 px-5">
              <NavLink className="nav_link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item py-3 px-5">
              <NavLink className="nav_link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item py-3 px-5">
              <NavLink className="nav_link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item py-3 px-5">
              <NavLink className="nav_link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;

import React from "react";
import "./NavLinks.scss";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

type Props = {};

const NavLinks = (props: Props) => {
  return (
    <header className="nav-links" id="nav-link">
      <Link to="/">
        <img src={logo} className="logo_nextin" alt="Logo" />
      </Link>
      <ul>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Store
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Help
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="cursor"></div>
    </header>
  );
};

export default NavLinks;

import React from "react";
import "./Navbar.scss";
import NavLinks from "../common/NavLinks";
import NavTools from "../common/NavTools";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar-wrapper">
      <NavLinks />
      <NavTools />
    </div>
  );
};

export default Navbar;

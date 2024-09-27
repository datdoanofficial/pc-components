import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import NavLinks from "../common/NavLinks";
import NavTools from "../common/NavTools";

type Props = {};

const Navbar = (props: Props) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className="navbar-wrapper"
      style={{
        backgroundColor: isHomePage ? "transparent" : "rgba(0, 0, 0, 0.8)",
        backdropFilter: isHomePage ? "blur(0px)" : "blur(30px)",
      }}
    >
      <NavLinks />
      <NavTools />
    </div>
  );
};

export default Navbar;

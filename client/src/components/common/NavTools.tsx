import React from "react";
import "./NavTools.scss";
import { Link } from "react-router-dom";

type Props = {};

const NavTools = (props: Props) => {
  return (
    <div className="tool-bar">
      <span className="carbon--search icon"></span>
      <span className="solar--bag-4-outline icon"></span>
      <Link to="/login" className="sign-in-btn btn-ripple">
        sign in
      </Link>
    </div>
  );
};

export default NavTools;

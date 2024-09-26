import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import logo from "../../assets/images/logo.png";
import tagname from "../../assets/images/datdoan.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="header-wrapper">
        <Link to="/">
          <img src={logo} className="logo_nextin" alt="Logo" />
        </Link>
        <div className="author">
          <span>Design and Development</span>
          <img src={tagname} alt="" className="tagname" />
        </div>
      </div>
      {/* main content */}
      <div className="main-content">
        <div className="infor">
          <ul>
            <li>
              <a href="mailto:datdoanofficial@gmail.com">
                datdoanofficial@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:(+84)916709786">(+84) 916 709 786</a>
            </li>
            <li>
              <p>Ho Chi Minh City - Viet Nam</p>
            </li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <div className="copy-right">
              &copy; Next In | All rights reserved
            </div>
          </ul>
        </div>
      </div>
      {/* send mail */}
      <div className="send-mail">
        <div className="title">Be the first to know</div>
        <p>
          Get special offers, exclusive product news, and event info straight to
          your inbox.
        </p>
        <div className="mail-form">
          <input type="text" placeholder="Enter your email" />
          <button>
            <span className="ph--arrow-right-bold icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

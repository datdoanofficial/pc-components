import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import "./Footer.scss";

import logo from "../../assets/images/logo.png";
import tagname from "../../assets/images/datdoan.png";

type Props = {};

const Footer = (props: Props) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const headerFooterRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current && headerFooterRef.current) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const footerOffsetTop = footerRef.current.offsetTop;

        // Calculate the height based on the scroll position
        if (scrollPosition + windowHeight >= footerOffsetTop) {
          const maxScroll = footerOffsetTop - windowHeight;
          const scrollRatio = Math.min(
            (scrollPosition + windowHeight - footerOffsetTop) / maxScroll,
            1
          );

          // Adjust height calculation based on the current page
          let height;
          if (location.pathname === "/store") {
            height = 800 * scrollRatio;
          } else if (location.pathname === "/news") {
            height = 370 * scrollRatio;
          } else if (location.pathname === "/help") {
            height = 700 * scrollRatio;
          } else if (location.pathname === "/contact") {
            height = 310 * scrollRatio;
          } else if (location.pathname === "/product-details") {
            height = 750 * scrollRatio;
          } else {
            height = 300 * scrollRatio; // Default height for other pages
          }

          headerFooterRef.current.style.height = `${height}px`;
        } else {
          headerFooterRef.current.style.height = `0px`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <div className="footer" ref={footerRef}>
      <div
        className="header-footer"
        ref={headerFooterRef}
        style={{
          transition: "height 0.1s ease",
        }}
      ></div>
      <div className="footer-contain">
        {/* header wrapper */}
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
            Get special offers, exclusive product news, and event info straight
            to your inbox.
          </p>
          <div className="mail-form">
            <input type="text" placeholder="Enter your email" />
            <button>
              <span className="ph--arrow-right-bold icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

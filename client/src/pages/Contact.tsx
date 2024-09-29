import React, { useEffect, useRef } from "react";
import "../styles/pages/Contact.scss";
import MouseMoveHandler from "../components/common/MouseMoveHandler";
import VanillaTilt from "../styles/common/tilt";
import mapImg from "../assets/images/contact-page/map.png";

type Props = {};

const Contact = (props: Props) => {
  const tiltElementsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    tiltElementsRef.current = document.querySelectorAll("[data-tilt]");
    VanillaTilt.init(Array.from(tiltElementsRef.current!));
  });

  return (
    <div className="contact-page">
      <MouseMoveHandler />
      <div className="title">Get In Touch</div>
      <div className="main-content">
        {/* main-thumbnail */}
        <div
          className="main-thumbnail"
          data-tilt
          data-tilt-glare
          data-tilt-speed="100"
          data-tilt-max="1"
          data-tilt-max-glare="0.6"
        ></div>
        {/* content */}
        <div className="content">
          {/* address */}
          <a
            href="https://www.google.com/maps/place/Flags+of+ASEAN+Nations/10.7721534,106.7055294,18z/data=!4m6!3m5!1s0x31752f43e5fe043f:0x3bfe49efa7dcf98!8m2!3d10.7713821!4d106.7065387!16s%2Fg%2F11f40t03jq?entry=ttu"
            className="address"
            target="_blank"
            rel="noopener noreferrer"
          >
            01 Unknown, District 10
            <br />
            Ho Chi Minh City, Viet Nam
          </a>
          {/* email */}
          <div className="email">
            I'd love to hear from you
            <br /> Drop me a line —{" "}
            <a href="mailto:datdoanofficial@gmail.com">
              datdoanofficial@gmail.com
            </a>
          </div>
          {/* phone call */}
          <div className="phone-call">
            Or give me a call
            <br />
            <a href="tel:(+84)916709786">(+84) 916 709 786</a>
          </div>
        </div>
      </div>
      {/* information */}
      <div className="information">
        <div className="in4-wrapper">
          <div className="line"></div>
          {/* in4 */}
          <div className="in4">
            <div className="subtitle">
              <p>Company Name:</p>
              <p>Reg Nr:</p>
              <p>VAT Nr:</p>
              <p>IBAN Nr:</p>
            </div>
            <div className="content">
              <p>Next In</p>
              <p>19888668 (DEMO)</p>
              <p>EE108687329 (DEMO)</p>
              <p>EE27220022108668 (DEMO)</p>
            </div>
          </div>
        </div>
        {/* social links */}
        <div className="social-links">
          <div className="line"></div>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">LinkedIn</a>
        </div>
      </div>
      <div className="map">
        <img src={mapImg} alt="" className="map-img" />
        <p>
          Find us at{" "}
          <a
            href="https://www.google.com/maps/place/Flags+of+ASEAN+Nations/10.7721534,106.7055294,18z/data=!4m6!3m5!1s0x31752f43e5fe043f:0x3bfe49efa7dcf98!8m2!3d10.7713821!4d106.7065387!16s%2Fg%2F11f40t03jq?entry=ttu"
            className="address"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Map
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

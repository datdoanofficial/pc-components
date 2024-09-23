import React from "react";
import "../styles/pages/Home.scss";

import itemPCAIO from "../assets/images/landing-page/pc-aio.png";
import itemLaptop from "../assets/images/landing-page/laptop.png";
import itemKeyboard from "../assets/images/landing-page/keyboard.png";
import itemPS from "../assets/images/landing-page/ps.png";
import itemChair from "../assets/images/landing-page/chair.png";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="landing-page">
      <div className="main-content">
        <div className="title">Desktop Computers</div>
        <p>
          Buying a desktop computer has never been easier at Next In. From
          gaming, all-in-ones or workstations and servers, we have a large
          selection of desktops that will be right for you.
        </p>
        <div className="shopnow-btn">Shop Now</div>
      </div>
      <div className="animation-items">
        <div className="big-circle"></div>
        <div className="animate-wrapper">
          <div className="circle-contain">
            <div className="circle-bg"></div>
            <div className="circle-line">
              <div className="mini-circle-1"></div>
              <div className="mini-circle-2"></div>
              <button className="playbtn">
                <span className="basil--play-solid icon"></span>
              </button>
            </div>
            <img src={itemPCAIO} className="item-img" alt="PC AIO" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

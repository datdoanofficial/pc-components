import React, { useEffect, useState, useRef } from "react";
import "../styles/pages/Home.scss";

import itemPC from "../assets/images/landing-page/pc-aio.png";
import itemLaptop from "../assets/images/landing-page/laptop.png";
import itemKeyboard from "../assets/images/landing-page/keyboard.png";
import itemPS from "../assets/images/landing-page/ps.png";
import itemChair from "../assets/images/landing-page/chair.png";

type Props = {};

const Home = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first number as active
  const [animationDirection, setAnimationDirection] = useState("up"); // Track animation direction
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
      setAnimationDirection("up");
    }, 5000); // Change active number every 5 seconds
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const numbers = [4, 5, 1, 2, 3];
  const sortedNumbers = [
    ...numbers.slice(activeIndex),
    ...numbers.slice(0, activeIndex),
  ];

  const handleLeftClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
    setAnimationDirection("down");
    startInterval(); // Reset the interval
  };

  const handleRightClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    setAnimationDirection("up");
    startInterval(); // Reset the interval
  };

  return (
    <div className="landing-page">
      {/* main content */}
      <div className="main-content">
        <div className="title">Desktop Computers</div>
        <p>
          Buying a desktop computer has never been easier at Next In. From
          gaming, all-in-ones or workstations and servers, we have a large
          selection of desktops that will be right for you.
        </p>
        <div className="shopnow-btn">Shop Now</div>
      </div>
      {/* animation items */}
      <div className="animation-items">
        <div className="big-circle"></div>
        <div className="animate-wrapper">
          {/* circle */}
          <div className="circle-contain">
            <div className="circle-bg"></div>
            <div className="circle-line">
              <div className="mini-circle-1"></div>
              <div className="mini-circle-2"></div>
              <button className="playbtn">
                <span className="basil--play-solid icon"></span>
              </button>
            </div>
            <img src={itemPC} className="item-img" alt="PC AIO" />
          </div>
        </div>
        {/* number sliding */}
        <div className={`number-sliding ${animationDirection}`}>
          {sortedNumbers.map((number, index) => (
            <div
              key={number}
              className={`number ${index === 2 ? "active" : ""}`}
            >
              <p>{`0${number}`}</p>
            </div>
          ))}
        </div>
        {/* navigate */}
        <div className="navigate-btn">
          <div className="left-arrow" onClick={handleLeftClick}>
            <span className="tabler--chevron-left icon"></span>
          </div>
          <div className="right-arrow" onClick={handleRightClick}>
            <span className="tabler--chevron-right icon"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState, useRef } from "react";
import "../styles/pages/Home.scss";

import itemPC from "../assets/images/landing-page/pc-aio.png";
import itemLaptop from "../assets/images/landing-page/laptop.png";
import itemKeyboard from "../assets/images/landing-page/keyboard.png";
import itemPS from "../assets/images/landing-page/ps.png";
import itemChair from "../assets/images/landing-page/chair.png";

type Props = {};

const Home = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(3); // Start with the first number as active
  const [animationDirection, setAnimationDirection] = useState("up"); // Track animation direction
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [imageKey, setImageKey] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const [desKey, setDesKey] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [itemPC, itemLaptop, itemKeyboard, itemPS, itemChair];
  const currentImage = images[(activeIndex + 2) % 5]; // Adjust index to match the active number

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
      setAnimationDirection("up");
      setIsFirstLoad(false);
      setImageKey((prevKey) => prevKey + 1);
      setTextKey((prevKey) => prevKey + 1);
      setDesKey((prevKey) => prevKey + 1);
    }, 10000); // Change active number every 5 seconds
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const numbers = [1, 2, 3, 4, 5];
  const sortedNumbers = [
    ...numbers.slice(activeIndex),
    ...numbers.slice(0, activeIndex),
  ];

  const handleLeftClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
    setAnimationDirection("down");
    setIsFirstLoad(false);
    setImageKey((prevKey) => prevKey + 1);
    setTextKey((prevKey) => prevKey + 1);
    setDesKey((prevKey) => prevKey + 1);
    startInterval(); // Reset the interval
  };

  const handleRightClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    setAnimationDirection("up");
    setIsFirstLoad(false);
    setImageKey((prevKey) => prevKey + 1);
    setTextKey((prevKey) => prevKey + 1);
    setDesKey((prevKey) => prevKey + 1);
    startInterval(); // Reset the interval
  };

  const getContent = () => {
    switch (activeIndex) {
      case 0:
        return {
          title: "Computer Pheripherals",
          description:
            "Think of computer peripherals as anything that connects to your computer system to add functionality for work or entertainment. Most computer peripherals are available at Next In.",
        };
      case 1:
        return {
          title: "Playstation",
          character: "&",
          title1: "XBOX Consoles",
          description:
            "Gaming has revolutionized the way people relax. No matter your age or where you are from, all you need is a console, and you can play entertaining video games in a matter of seconds. ",
        };
      case 2:
        return {
          title: "Ergonomic",
          character: "&",
          title1: "Gaming Chairs",
          description:
            "You can choose the best computer chairs offer features that enhance comfort and ergonomics while working at a computer for long hours  and every user can sit comfortably at work.",
        };
      case 3:
        return {
          title: "Desktop Computers",
          description:
            "Buying a desktop computer has never been easier at Next In. From gaming, all-in-ones or workstations and servers, we have a large selection of desktops that will be right for you.",
        };
      case 4:
        return {
          title: "Laptops",
          character: "&",
          title1: "Notebooks",
          description:
            "You will discover a wide assortment of laptops at impressive offers. Next In will help you find the best laptop for you with our selection of laptop computers for work & play.",
        };
      default:
        return {
          title: "Desktop Computers",
          character: "",
          title1: "",
          description:
            "Buying a desktop computer has never been easier at Next In. From gaming, all-in-ones or workstations and servers, we have a large selection of desktops that will be right for you.",
        };
    }
  };

  const { title, character, title1, description } = getContent();

  return (
    <div className="landing-page">
      {/* main content */}
      <div className="main-content">
        <div
          key={textKey} // Use key to reset animation
          className={`heading ${
            !isFirstLoad &&
            (animationDirection === "up"
              ? "headingBottomToTop"
              : "headingTopToBottom")
          }`}
        >
          <span className="title">{title}</span>{" "}
          <span className="character">{character}</span>
          <br />
          <span className="title1">{title1}</span>
          <div className="description">{description}</div>
        </div>
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
            <img
              key={imageKey} // Use key to reset animation
              src={currentImage}
              className={`item-img ${
                isFirstLoad
                  ? "imgFly"
                  : animationDirection === "up"
                  ? "imgBottomToTop"
                  : "imgTopToBottom"
              }`}
              alt="Current Item"
            />
          </div>
        </div>
        {/* number sliding */}
        <div
          className={`number-sliding ${isFirstLoad ? "" : animationDirection}`}
        >
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

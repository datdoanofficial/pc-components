import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MouseMoveHandler from "../components/common/MouseMoveHandler";
import VanillaTilt from "../styles/common/tilt";
import "../styles/pages/News.scss";

type Props = {};

const News = (props: Props) => {
  const tiltElementsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    tiltElementsRef.current = document.querySelectorAll("[data-tilt]");
    VanillaTilt.init(Array.from(tiltElementsRef.current!));
  });

  return (
    <div className="news-body">
      <MouseMoveHandler />
      <h1>News</h1>
      {/* hot topic */}
      <div className="hot-topic">
        <div className="line"></div>
        {/* topic 01 */}
        <div className="topic-1 topic">
          <div
            className="card"
            data-tilt
            data-tilt-glare
            data-tilt-speed="100"
            data-tilt-max="1"
            data-tilt-max-glare="0.6"
          ></div>
          <div className="content-wrapper">
            <div className="create-date">April 20, 2024</div>
            <div className="title">UNTITLED</div>
            <p className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <Link to="/news/newsdetails" className="readmore-btn">
              Read more
            </Link>
          </div>
        </div>
        {/* topic 02 */}
        <div className="topic-2 topic">
          <div
            className="card"
            data-tilt
            data-tilt-glare
            data-tilt-speed="100"
            data-tilt-max="1"
            data-tilt-max-glare="0.6"
          ></div>
          <div className="content-wrapper">
            <div className="create-date">April 05, 2024</div>
            <div className="title">UNTITLED</div>
            <p className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <Link to="/news/newsdetails" className="readmore-btn">
              Read more
            </Link>
          </div>
        </div>
      </div>
      {/* news list */}
      <div className="news-list">
        {[...Array(5)].map((_, index) => (
          // news card
          <div className="news" key={index}>
            <div className="line"></div>
            <div className="news-content">
              <div
                className="card"
                data-tilt
                data-tilt-glare
                data-tilt-speed="100"
                data-tilt-max="1"
                data-tilt-max-glare="0.6"
              ></div>
              <div className="content-wrapper">
                <p className="create-date">April 05, 2024</p>
                <p className="title">UNTITLED</p>
                <p className="content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <Link to="/news/newsdetails" className="readmore-btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

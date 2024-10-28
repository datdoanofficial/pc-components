import React from "react";
import "./Navbar.scss";
import avatar_demo from "../../assets/images/admin-page/avatar.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      {/* welcome */}
      <div className="welcome-txt">
        <span>Hello, Admin</span>
        <br />
        <div className="welcome">Welcome to Dashboard</div>
      </div>
      {/* search box */}
      <div className="search-box">
        <span className="carbon--search search-icon icon"></span>
        <input type="text" placeholder="Search" />
      </div>
      {/* toolbar */}
      <div className="toolbar">
        {/* messages */}
        <div className="messages">
          <span className="ant-design--message-outlined icon"></span>
          <span className="message-count">4</span>
        </div>
        {/* notification */}
        <div className="notification">
          <span className="ph--bell icon"></span>
          <span className="notification-count">3</span>
        </div>
        {/* profile */}
        <div className="profile">
          <img src={avatar_demo} alt="" className="avatar" />
          <div className="profile-wrapper">
            <div className="profile-content">
              <div className="profile-role">Admin</div>
              <span className="profile-name">DATDOAN</span>
            </div>
            <span className="tabler--chevron-down icon"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

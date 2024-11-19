import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    // For example, you might want to clear user data and redirect to the login page
    // localStorage.removeItem("user");
    // window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      <ul>
        <NavLink to="/" className="logo">
          <img src={logo} alt="" />
        </NavLink>
        <NavLink
          to="/admin/overview"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <li className={isActive ? "active" : ""}>
              <span className="mdi-light--view-dashboard overview-icon icon"></span>
              Overview
            </li>
          )}
        </NavLink>
        <NavLink
          to="/admin/customers"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <li className={isActive ? "active" : ""}>
              <span className="ph--users-light customers-icon icon"></span>
              Customers
            </li>
          )}
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <li className={isActive ? "active" : ""}>
              <span className="solar--bag-3-linear orders-icon icon"></span>
              Orders
            </li>
          )}
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <li className={isActive ? "active" : ""}>
              <span className="fluent--box-20-regular products-icon icon"></span>
              Products
            </li>
          )}
        </NavLink>
        <NavLink
          to="/admin/messages"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <li className={isActive ? "active" : ""}>
              <span className="ant-design--message-outlined messages-icon icon"></span>
              Messages
            </li>
          )}
        </NavLink>
        <NavLink
          to="/admin/systems"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <li className={isActive ? "active" : ""}>
              <span className="fluent-mdl2--file-system systems-icon icon"></span>
              Systems
            </li>
          )}
        </NavLink>
        <NavLink
          to="/admin/shipments"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <li className={isActive ? "active" : ""}>
              <span className="la--shipping-fast transports-icon icon"></span>
              Shipments
            </li>
          )}
        </NavLink>
        <NavLink
          to="/admin/pages"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <li className={isActive ? "active" : ""}>
              <span className="iconoir--multiple-pages-empty pages-icon icon"></span>
              Pages
            </li>
          )}
        </NavLink>
        <div className="footer-btn">
          <NavLink
            to="/admin/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {({ isActive }) => (
              <li className={isActive ? "active" : ""}>
                <span className="solar--settings-broken settings-icon icon"></span>
                Settings
              </li>
            )}
          </NavLink>
          <button className="logout-btn" onClick={handleLogout}>
            <li>
              <span className="solar--logout-2-broken logout-icon icon"></span>
              Logout
            </li>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;

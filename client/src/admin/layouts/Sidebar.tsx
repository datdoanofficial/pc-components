import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/admin/overview"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/customers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/systems"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Systems
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/transports"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Transports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/report"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Report
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/comment"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Comment
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

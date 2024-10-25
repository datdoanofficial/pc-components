import React from "react";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import "./AdminLayout.scss";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

import React from "react";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

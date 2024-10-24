import React from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "../admin/AdminLayout";
import Overview from "../admin/pages/Overview";
import Customers from "../admin/pages/Customers";
import Orders from "../admin/pages/Orders";
import Products from "../admin/pages/Products";
import Systems from "../admin/pages/Systems";
import Transports from "../admin/pages/Transports";
import Report from "../admin/pages/Report";
import Comment from "../admin/pages/Comment";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="overview" />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "systems",
        element: <Systems />,
      },
      {
        path: "transports",
        element: <Transports />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "comment",
        element: <Comment />,
      },
    ],
  },
];

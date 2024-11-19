import React from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "../admin/AdminLayout";
import Overview from "../admin/pages/Overview";
import Customers from "../admin/pages/Customers";
import Orders from "../admin/pages/Orders";
import Products from "../admin/pages/Products";
import Systems from "../admin/pages/Systems";
import Shipments from "../admin/pages/Shipments";
import Pages from "../admin/pages/Pages";
import Messages from "../admin/pages/Messages";
import Settings from "../admin/pages/Settings";

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
        element: (
          <Overview
            percentageAccountsChange={20.4}
            percentageOrdersChange={18.2}
          />
        ),
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
        path: "messages",
        element: <Messages />,
      },
      {
        path: "systems",
        element: <Systems />,
      },
      {
        path: "shipments",
        element: <Shipments />,
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
];

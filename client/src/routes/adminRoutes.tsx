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
import Pages from "../admin/pages/Pages";
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
        path: "pages",
        element: <Pages />,
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
        path: "settings",
        element: <Settings />,
      },
    ],
  },
];

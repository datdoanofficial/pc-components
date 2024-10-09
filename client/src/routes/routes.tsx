import home from "../pages/Home";
import store from "../pages/Store";
import news from "../pages/News";
import help from "../pages/Help";
import contact from "../pages/Contact";
import login from "../pages/Login";
import productdetails from "../pages/ProductDetails";

import notfound from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    page: home,
    title: "Next In",
    isShowNavbar: true,
    isShowFooter: false,
  },
  {
    path: "/store",
    page: store,
    title: "Store | Next In",
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    path: "/product-details",
    page: productdetails,
    title: "Product | Next In",
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    path: "/news",
    page: news,
    title: "News | Next In",
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    path: "/help",
    page: help,
    title: "Help | Next In",
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    path: "/contact",
    page: contact,
    title: "Contact | Next In",
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    path: "/login",
    page: login,
    title: "Sign In | Next In",
    isShowNavbar: false,
    isShowFooter: false,
  },
  {
    path: "*",
    page: notfound,
    title: "404 Not Found | Next In",
    isShowNavbar: false,
    isShowFooter: false,
  },
];

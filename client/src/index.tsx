import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { routes } from "./routes/routes";
import { getProductsAPI } from "./Products";

const AppWrapper = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = getProductsAPI();
    console.log(data);
  };

  const location = useLocation();

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );
    const title = currentRoute ? currentRoute.title : "DAT DOAN";
    document.title = title;
  }, [location.pathname]);

  return <App />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <AppWrapper />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

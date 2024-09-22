import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import ScrollToTop from "./hooks/useScrollToTop";
import NavbarComponent from "./components/layouts/Navbar";
import FooterComponent from "./components/layouts/Footer";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        {routes.map((route) => {
          const Navbar = route.isShowNavbar ? (
            <NavbarComponent />
          ) : (
            React.Fragment
          );
          const Footer = route.isShowFooter ? (
            <FooterComponent />
          ) : (
            React.Fragment
          );
          const Page = route.page;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <>
                  {Navbar}
                  <Page />
                  {Footer}
                </>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

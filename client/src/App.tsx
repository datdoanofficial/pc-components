import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { adminRoutes } from "./routes/adminRoutes";
import ScrollToTop from "./hooks/useScrollToTop";
import NavbarComponent from "./components/layouts/Navbar";
import FooterComponent from "./components/layouts/Footer";
import CartPage from "./pages/Cart";

// Define the types for the cart products
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  guarantee: string;
}

function App() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);

  // Check if it's first visit
  useEffect(() => {
    // Get session token for this tab
    const sessionToken = sessionStorage.getItem("tabSession");
    // Get flag for whether user has seen alert this browser session
    const hasSeenAlert = sessionStorage.getItem("hasSeenAlert");

    if (!sessionToken) {
      // New tab/window - set session token
      sessionStorage.setItem("tabSession", Math.random().toString());

      // Check if user has seen alert this browser session
      if (!hasSeenAlert) {
        setShowWelcomeAlert(true);
        sessionStorage.setItem("hasSeenAlert", "true");
      }
    }

    // Cleanup event listeners
    return () => {
      sessionStorage.removeItem("tabSession");
    };
  }, []);

  const handleRemoveProduct = (productId: number) => {
    const productIndex = cartProducts.findIndex(
      (product: Product) => product.id === productId
    );
    if (productIndex !== -1) {
      const newCartProducts = cartProducts.filter(
        (product: Product) => product.id !== productId
      );
      const newQuantities = quantities.filter(
        (_: number, index: number) => index !== productIndex
      );
      setCartProducts(newCartProducts);
      setQuantities(newQuantities);

      const newTotalPrice = newCartProducts.reduce(
        (total: number, product: Product, index: number) =>
          total + product.price * newQuantities[index],
        0
      );
      setTotalPrice(newTotalPrice);
    }
  };

  return (
    <div>
      {showWelcomeAlert && (
        <div className="welcome-alert-overlay">
          <div className="welcome-alert-content">
            <p className="welcome-alert-text">
              Trang web hiện đang trong giai đoạn thử nghiệm, nếu có bất kỳ trải
              nghiệm không tốt nào rất mong nhận được sự thông cảm và phản hồi
              của bạn qua email{" "}
              <a href="mailto:datdoanofficial@gmail.com">
                datdoanofficial@gmail.com
              </a>
              . Trang web sẽ tiếp tục được hoàn thiện để mang lại trải nghiệm
              tốt nhất cho người dùng. Xin chân thành cảm ơn!
            </p>
            <p className="welcome-alert-text">
              The website is currently in the testing phase. We appreciate your
              understanding and welcome any feedback you may have at{" "}
              <a href="mailto:datdoanofficial@gmail.com">
                datdoanofficial@gmail.com
              </a>
              . The website will continue to be improved to ensure the best
              possible user experience. Thank you sincerely!
            </p>
            <button
              className="welcome-alert-button"
              onClick={() => setShowWelcomeAlert(false)}
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}
      <ScrollToTop />
      <Routes>
        {routes.map((route) => {
          const Navbar = route.isShowNavbar ? (
            <NavbarComponent
              cartProducts={cartProducts}
              quantities={quantities}
              totalPrice={totalPrice}
              setCartProducts={setCartProducts}
              setQuantities={setQuantities}
              setTotalPrice={setTotalPrice}
              handleRemoveProduct={handleRemoveProduct}
            />
          ) : (
            <React.Fragment />
          );
          const Footer = route.isShowFooter ? (
            <FooterComponent />
          ) : (
            <React.Fragment />
          );
          const Page = route.page;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <>
                  {Navbar}
                  <Page
                    cartProducts={cartProducts}
                    quantities={quantities}
                    totalPrice={totalPrice}
                    handleRemoveProduct={handleRemoveProduct}
                    setQuantities={setQuantities}
                    setTotalPrice={setTotalPrice}
                  />
                  {Footer}
                </>
              }
            />
          );
        })}
        {/* Add the CartPage route */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartProducts={cartProducts}
              quantities={quantities}
              totalPrice={totalPrice}
              handleRemoveProduct={handleRemoveProduct}
              setQuantities={setQuantities}
              setTotalPrice={setTotalPrice}
            />
          }
        />
        {adminRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children.map((child, childIndex) => (
              <Route
                key={childIndex}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;

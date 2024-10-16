import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
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
      </Routes>
    </div>
  );
}

export default App;

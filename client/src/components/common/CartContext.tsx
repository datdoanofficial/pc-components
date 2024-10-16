import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTools from "./NavTools";
import CartPage from "../../pages/Cart";

// Define the types for the cart products
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  guarantee: string;
}

const App = () => {
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
    <Router>
      <NavTools
        cartProducts={cartProducts}
        quantities={quantities}
        totalPrice={totalPrice}
        setCartProducts={setCartProducts}
        setQuantities={setQuantities}
        setTotalPrice={setTotalPrice}
        handleRemoveProduct={handleRemoveProduct}
      />
      <Routes>
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
    </Router>
  );
};

export default App;

// Add this line to make the file a module
export {};

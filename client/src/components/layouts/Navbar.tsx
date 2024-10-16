import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import NavLinks from "../common/NavLinks";
import NavTools from "../common/NavTools";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  guarantee: string;
}

interface NavbarProps {
  cartProducts: Product[];
  quantities: number[];
  totalPrice: number;
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  handleRemoveProduct: (productId: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  cartProducts,
  quantities,
  totalPrice,
  setCartProducts,
  setQuantities,
  setTotalPrice,
  handleRemoveProduct,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className="navbar-wrapper"
      style={{
        backgroundColor: isHomePage ? "transparent" : "rgba(0, 0, 0, 0.8)",
        backdropFilter: isHomePage ? "blur(0px)" : "blur(30px)",
      }}
    >
      <NavLinks />
      <NavTools
        cartProducts={cartProducts}
        quantities={quantities}
        totalPrice={totalPrice}
        setCartProducts={setCartProducts}
        setQuantities={setQuantities}
        setTotalPrice={setTotalPrice}
        handleRemoveProduct={handleRemoveProduct}
      />
    </div>
  );
};

export default Navbar;

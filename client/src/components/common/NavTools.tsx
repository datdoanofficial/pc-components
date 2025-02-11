import React, { useState, useEffect, useRef } from "react";
import "./NavTools.scss";
import { Link, useNavigate } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";

import icon_empty_cart from "../../assets/images/cart-page/aww.png";

import product_demo from "../../assets/images/product-details/4070ti-demo.png";
import product_demo2 from "../../assets/images/product-details/4090-demo.png";
import product_demo3 from "../../assets/images/product-details/4090msi-demo.png";
import product_demo4 from "../../assets/images/product-details/4080wf.png";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  guarantee: string;
}

type Props = {
  cartProducts: Product[];
  quantities: number[];
  totalPrice: number;
  setCartProducts: (products: Product[]) => void;
  setQuantities: (quantities: number[]) => void;
  setTotalPrice: (price: number) => void;
  handleRemoveProduct: (productId: number) => void;
};

// Demo products
const demoProducts: Product[] = [
  {
    id: 1,
    image: product_demo,
    name: "ZOTAC Gaming GeForce RTX 4070 Ti Trinity OC White Edition",
    brand: "Gigabyte",
    guarantee: "36 Months",
    price: 719.99,
  },
  {
    id: 2,
    image: product_demo2,
    name: "ASUS ROG Strix GeForce RTX™ 4090 White OC Ed",
    brand: "ASUS ROG",
    guarantee: "36 Months",
    price: 2099.99,
  },
  {
    id: 3,
    image: product_demo3,
    name: "MSI GeForce RTX 4090 GAMING X TRIO 24G",
    brand: "MSI",
    guarantee: "36 Months",
    price: 1899.99,
  },
  {
    id: 4,
    image: product_demo4,
    name: "AORUS GeForce RTX™ 4080 16GB XTREME WATERFORCE WB",
    brand: "AORUS",
    guarantee: "36 Months",
    price: 1499.0,
  },
  {
    id: 5,
    image: product_demo4,
    name: "AORUS GeForce RTX™ 4080 16GB XTREME WATERFORCE WB",
    brand: "AORUS",
    guarantee: "36 Months",
    price: 1499.0,
  },
];

const NavTools = ({
  cartProducts,
  quantities,
  totalPrice,
  setCartProducts,
  setQuantities,
  setTotalPrice,
  handleRemoveProduct,
}: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Initialize cart with demo products
  useEffect(() => {
    setCartProducts(demoProducts);
    setQuantities(demoProducts.map(() => 1));
  }, [setCartProducts, setQuantities]);

  // Recalculate total price whenever cartProducts or quantities change
  useEffect(() => {
    const newTotalPrice = cartProducts.reduce(
      (total, product, index) => total + product.price * quantities[index],
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartProducts, quantities, setTotalPrice]);

  // handle quantity change
  const handleQuantityChange = (index: number, newQuantity: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
  };

  // toggle cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    // Close menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // handle click outside
  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      setIsCartOpen(false);
    }
  };

  // handle checkout
  const handleCheckout = () => {
    setIsCartOpen(false); // Close the cart box
    navigate("/cart", { state: { cartProducts, quantities, totalPrice } });
  };

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Disable scrolling
      document.body.style.paddingRight = "0"; // Adjust for scrollbar width
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Enable scrolling
      document.body.style.paddingRight = "0"; // Reset padding
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled on cleanup
      document.body.style.paddingRight = "0"; // Reset padding on cleanup
    };
  }, [isCartOpen]);

  const truncateName = (name: string, maxLength: number) => {
    return name.length > maxLength
      ? name.substring(0, maxLength - 3) + "..."
      : name;
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="tool-bar">
      {/* search button */}
      <span className="carbon--search icon"></span>
      {/* cart button */}
      <div className="cart-icon-wrapper" onClick={toggleCart}>
        <span className="solar--bag-4-outline icon"></span>
        <span className="cart-count">{cartProducts.length}</span>
      </div>
      {/* menu button */}
      <div
        className={`menu-btn ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger"></span>
        <div className={`menu-links ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="/store">Store</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/help">Help</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
      {/* sign in button */}
      <Link to="/login" className="sign-in-btn btn-ripple">
        sign in
      </Link>
      {/* cart box */}
      <div className={`cart-box ${isCartOpen ? "open" : ""}`} ref={cartRef}>
        <div className="cart-content">
          {/* heading */}
          <div className="heading">
            <div className="title">Shopping Cart</div>
            <span className="close-btn" onClick={toggleCart}>
              <span className="line-md--remove"></span>
            </span>
          </div>
          {/* product box */}
          <div className="product-box">
            {/* empty cart */}
            {cartProducts.length === 0 ? (
              <div className="empty-cart-message">
                <img src={icon_empty_cart} alt="" />
                <p>Your cart is empty.</p>
                <a href="/store">discover more</a>
              </div>
            ) : (
              cartProducts.map((product, index) => (
                <div key={product.id} className="product-items">
                  {/* img */}
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  {/* information */}
                  <div className="product-info">
                    {/* name */}
                    <div className="product-name" title={product.name}>
                      {truncateName(product.name, 32)}
                    </div>
                    {/* details */}
                    <div className="product-details">
                      <div className="brand">
                        <span>Brand:</span> {product.brand}
                      </div>
                      <div className="guarantee">
                        <span>Guarantee:</span> {product.guarantee}
                      </div>
                    </div>
                  </div>
                  <div className="action">
                    {/* remove btn */}
                    <div
                      className="remove-toggle"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <span className="fluent--delete-48-regular"></span>
                    </div>
                    {/* quantity btn */}
                    <div className="quantity-toggle">
                      <QuantityBtn
                        initialQuantity={quantities[index]}
                        showTitle={false}
                        onQuantityChange={(newQuantity) =>
                          handleQuantityChange(index, newQuantity)
                        }
                      />
                      <div className="price">
                        ${(product.price * quantities[index]).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* cart footer */}
          <div className="cart-footer">
            <div className="subtotal">
              <p>Subtotal</p>
              <div className="price">${totalPrice.toFixed(2)}</div>
            </div>
            <button
              className="check-out"
              onClick={handleCheckout}
              disabled={cartProducts.length === 0}
            >
              check out
            </button>
          </div>
        </div>
      </div>
      {isCartOpen && <div className="overlay"></div>}
    </div>
  );
};

export default NavTools;

import React, { useState, useEffect, useRef } from "react";
import "./NavTools.scss";
import { Link } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";

import product_demo from "../../assets/images/product-details/4070ti-demo.png";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

type Props = {};

const NavTools = (props: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const cartRef = useRef<HTMLDivElement>(null);

  const basePrice = 719.99;
  const totalPrice = basePrice * quantity;

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled on cleanup
    };
  }, [isCartOpen]);

  const MAX_PRODUCT_NAME_LENGTH = 50; // Set your desired max length here

  const productName =
    "ZOTAC Gaming GeForce RTX 4070 Ti Trinity OC White Edition";
  const truncatedProductName =
    productName.length > MAX_PRODUCT_NAME_LENGTH
      ? `${productName.substring(0, MAX_PRODUCT_NAME_LENGTH)}...`
      : productName;

  return (
    <div className="tool-bar">
      <span className="carbon--search icon"></span>
      <span className="solar--bag-4-outline icon" onClick={toggleCart}></span>
      <Link to="/login" className="sign-in-btn btn-ripple">
        sign in
      </Link>
      <div className={`cart-box ${isCartOpen ? "open" : ""}`} ref={cartRef}>
        <div className="heading">
          <div className="title">Shopping Cart</div>
          <span className="close-btn" onClick={toggleCart}>
            <span className="line-md--remove"></span>
          </span>
        </div>
        {/* product items */}
        <div className="product-items">
          {/* img */}
          <div className="product-image">
            <img src={product_demo} alt="" />
          </div>
          {/* information */}
          <div className="product-info">
            {/* name */}
            <div className="product-name" title={productName}>
              {truncatedProductName}
            </div>
            {/* details */}
            <div className="product-details">
              <div className="brand">
                <span>Brand:</span> Gigabyte
              </div>
              <div className="guarantee">
                <span>Guarantee:</span> 36 Months
              </div>
            </div>
          </div>
          <div className="action">
            {/* remove btn */}
            <div className="remove-toggle">
              <span className="fluent--delete-48-regular"></span>
            </div>
            <div className="quantity-toggle">
              <QuantityBtn
                showTitle={false}
                onQuantityChange={handleQuantityChange}
              />
              <div className="price">${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && <div className="overlay"></div>}
    </div>
  );
};

export default NavTools;

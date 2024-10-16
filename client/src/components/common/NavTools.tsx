import React, { useState, useEffect, useRef } from "react";
import "./NavTools.scss";
import { Link } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";

import product_demo from "../../assets/images/product-details/4070ti-demo.png";
import product_demo2 from "../../assets/images/product-details/4090-demo.png";
import product_demo3 from "../../assets/images/product-details/4090msi-demo.png";
import product_demo4 from "../../assets/images/product-details/4080wf.png";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

type Props = {};

const NavTools = (props: Props) => {
  const products = [
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
  ];

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState(products.map(() => 1));
  const cartRef = useRef<HTMLDivElement>(null);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
  };

  const totalPrice = products.reduce((total, product, index) => {
    return total + product.price * quantities[index];
  }, 0);

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
      document.body.style.paddingRight = "15px"; // Adjust for scrollbar width
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

  return (
    <div className="tool-bar">
      <span className="carbon--search icon"></span>
      <span className="solar--bag-4-outline icon" onClick={toggleCart}></span>
      <Link to="/login" className="sign-in-btn btn-ripple">
        sign in
      </Link>
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
            {/* product items */}
            {products.map((product, index) => (
              <div key={product.id} className="product-items">
                {/* img */}
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                {/* information */}
                <div className="product-info">
                  {/* name */}
                  <div className="product-name" title={product.name}>
                    {truncateName(product.name, 40)}
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
                  <div className="remove-toggle">
                    <span className="fluent--delete-48-regular"></span>
                  </div>
                  <div className="quantity-toggle">
                    <QuantityBtn
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
            ))}
          </div>
          {/* cart footer */}
          <div className="cart-footer">
            <div className="subtotal">
              <p>Subtotal</p>
              <div className="price">${totalPrice.toFixed(2)}</div>
            </div>
            <button className="check-out">check out</button>
          </div>
        </div>
      </div>
      {isCartOpen && <div className="overlay"></div>}
    </div>
  );
};

export default NavTools;

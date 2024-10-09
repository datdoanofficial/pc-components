import React, { useState, useEffect } from "react";
import "../styles/pages/ProductDetails.scss";

import product_demo_1 from "../assets/images/products/product_demo_01.png";
import product_demo_2 from "../assets/images/products/product_demo_02.png";
import product_demo_3 from "../assets/images/products/product_demo_03.png";
import product_demo_4 from "../assets/images/products/product_demo_04.png";

type Props = {};

const ProductDetails = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const imageSources = [
    product_demo_1,
    product_demo_2,
    product_demo_3,
    product_demo_4,
  ];

  const handleItemClick = (index: number) => {
    if (index === activeIndex) {
      return; // Do nothing if the clicked item is already active
    }

    if (index > activeIndex) {
      setAnimationDirection("slide-left");
    } else {
      setAnimationDirection("slide-right");
    }
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDirection("");
    }, 500); // Duration of the animation

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleMinusClick = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handlePlusClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const items = imageSources.map((src, index) => (
    <div
      className={`item ${index === activeIndex ? "active" : ""}`}
      key={index}
      onClick={() => handleItemClick(index)}
    >
      <img src={src} alt={`Product ${index + 1}`} />
    </div>
  ));

  return (
    <div className="product-details-page">
      <section className="section-01">
        <div className="thumbnails">
          <div className="image-items">{items}</div>
          <div className={`main-item ${animationDirection}`}>
            <img src={imageSources[activeIndex]} alt={`Active Product`} />
          </div>
        </div>
        <div className="product-information">
          {/* product heading */}
          <div className="product-heading">
            <div className="name">
              AORUS GeForce RTX™ 4080 16GB XTREME WATERFORCE WB
            </div>
            <div className="wishlist-btn">
              <span className="solar--heart-outline"></span>
            </div>
          </div>
          {/* rating */}
          <div className="product-reviews">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < rating ? "selected" : ""}`}
                onClick={() => handleStarClick(index)}
              >
                <span className="mage--star-fill"></span>
              </span>
            ))}
            <div className="total-reviews">329 reviews</div>
          </div>
          {/* general information */}
          <div className="general-in4">
            <div className="title">General Information:</div>
            <div className="brand">
              <span>Brand:</span> GIGABYTE
            </div>
            <div className="product-code">
              <span>Product Code:</span> GV-N4080AORUSX WB-16GD
            </div>
            <div className="guarantee">
              <span>Guarantee:</span> 36 Months
            </div>
            <div className="return">
              <span>Return Policy:</span> 7 days after the delivered.
            </div>
          </div>
          {/* price and quantity */}
          <div className="price-and-quantity">
            <div className="price">
              <p className="title">Price:</p>
              <p className="price-value">$1499</p>
            </div>
            <div className="quantity">
              <p className="title">Quantity:</p>
              <div className="quantity-btn">
                <span className="minus" onClick={handleMinusClick}>
                  <span className="tabler--minus"></span>
                </span>
                <span className="number">{quantity}</span>
                <span className="plus" onClick={handlePlusClick}>
                  <span className="tabler--plus"></span>
                </span>
              </div>
            </div>
          </div>
          {/* add to cart btn */}
          <div className="add-to-cart">Add to Cart</div>
          {/* buy now */}
          <div className="buy-now">Buy now</div>
        </div>
      </section>
      <section className="section-02"></section>
    </div>
  );
};

export default ProductDetails;

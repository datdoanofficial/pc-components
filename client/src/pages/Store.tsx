import React, { useRef, useEffect } from "react";
import "../styles/pages/Store.scss";

import prdImg_Demo from "../assets/images/products/aorus_geforce_rtx4080_xtreme_waterforce.png";

type Props = {};

const Store = (props: Props) => {
  const items = Array.from({ length: 14 });
  const productsShowcase01Ref = useRef<HTMLDivElement>(null);
  const productsShowcase02Ref = useRef<HTMLDivElement>(null);
  const productsShowcase03Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (productsShowcase01Ref.current) {
        productsShowcase01Ref.current.style.right = value * 0.06 + "px";
      }
      if (productsShowcase02Ref.current) {
        productsShowcase02Ref.current.style.left = value * 0.06 + "px";
      }
      if (productsShowcase03Ref.current) {
        productsShowcase03Ref.current.style.right = value * 0.06 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="store-page">
      {/* text information */}
      <div className="text-information">
        <span>Accessories for the PC - upgrade or assemble yourself</span>
        <div className="title">Explore Our Catalog</div>
      </div>
      {/* navbar background */}
      <div className="navbar-background"></div>
      {/* section 01 */}
      <section className="section-01" id="parallax">
        <div className="products_showcase">
          <div
            className="products_showcase_01 line-showcase"
            id="products_showcase_01"
            ref={productsShowcase01Ref}
          >
            <div className="item_01 item_showcase"></div>
            <div className="item_02 item_showcase"></div>
            <div className="item_03 item_showcase"></div>
          </div>
          <div
            className="products_showcase_02 line-showcase"
            id="products_showcase_02"
            ref={productsShowcase02Ref}
          >
            <div className="item_04 item_showcase"></div>
            <div className="item_05 item_showcase"></div>
            <div className="item_06 item_showcase"></div>
          </div>
          <div
            className="products_showcase_03 line-showcase"
            id="products_showcase_03"
            ref={productsShowcase03Ref}
          >
            <div className="item_07 item_showcase"></div>
            <div className="item_08 item_showcase"></div>
            <div className="item_09 item_showcase"></div>
          </div>
        </div>
      </section>
      {/* section 02 */}
      <div className="section-02">
        <div className="product-list">
          <div className="sort-wrapper">
            <span>Show:</span>
            <div className="sort">
              New Release<span className="tabler--chevron-down icon"></span>
            </div>
          </div>
          <div className="product-items">
            {items.map((_, index) => (
              <div key={index} className="product-card-wrapper">
                {/* product card */}
                <div className="product-card">
                  <div className="header-wrapper">
                    {/* logo */}
                    <div className="logo"></div>
                    {/* wishlist icon */}
                    <button className="wishlist-btn">
                      <span className="solar--heart-outline icon"></span>
                    </button>
                  </div>
                  {/* image */}
                  <div className="product-image">
                    <img src={prdImg_Demo} alt="" />
                  </div>
                  {/* add to cart btn */}
                  <button className="add-to-cart">Add to cart</button>
                </div>
                {/* product information */}
                <div className="product-information">
                  <a href="/" className="product-name">
                    AORUS GeForce RTX™ 4080 16GB XTREME WATERFORCE
                  </a>
                  <div className="product-price">$1499.00</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="product-filter"></div>
      </div>
    </div>
  );
};

export default Store;

import React, { useState, useRef, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import "../styles/pages/Store.scss";

import prdImg_Demo from "../assets/images/products/aorus_geforce_rtx4080_xtreme_waterforce.png";
import prdLogo_Demo from "../assets/images/products/prd_logo_demo.png";

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

  // price range

  const [values, setValues] = useState([10, 9990]); // Initial values

  const handleRangeChange = (values: number[]) => {
    if (values[1] - values[0] >= 100) {
      setValues(values);
    }
  };

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const minValue = Number(event.target.value);
    if (minValue <= values[1] - 100) {
      setValues([minValue, values[1]]);
    } else {
      setValues([minValue, minValue + 100]);
    }
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxValue = Number(event.target.value);
    if (maxValue >= values[0] + 100) {
      setValues([values[0], maxValue]);
    } else {
      setValues([maxValue - 100, maxValue]);
    }
  };

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
                    <div className="logo">
                      <img src={prdLogo_Demo} alt="" />
                    </div>
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
        {/* product filter */}
        <div className="product-filter">
          {/* Categories */}
          <div className="categories">
            <div className="title">Categories</div>
            {/* filter list */}
            <div className="filter-list">
              <div className="filter-item">Desktop Computer</div>
              <div className="filter-item">PC Components</div>
              <div className="filter-item">Gaming Peripherals</div>
              <div className="filter-item">Ergonomic & Gaming Chairs</div>
              <div className="filter-item">PlayStation & Xbox Consoles</div>
              <div className="filter-item">Laptops & Notebook</div>
              <div className="filter-item">Monitors</div>
            </div>
          </div>
          {/* Filter By */}
          <div className="filter-by">
            <div className="title">Filter By</div>
            {/* price range */}
            <div className="price-range">
              <span className="sub-title">Price</span>
              <Range
                values={values}
                step={10}
                min={10}
                max={9990}
                onChange={handleRangeChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "4px",
                      width: "100%",
                      position: "relative",
                      left: "2%",
                      borderRadius: "4px",
                      transition: "0.5s",
                      background: getTrackBackground({
                        values,
                        colors: ["#fff", "#eb7e63", "#fff"],
                        min: 10,
                        max: 9990,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "18px",
                      width: "18px",
                      backgroundColor: "#fff",

                      outline: "1px solid #eb7e63",
                      borderRadius: "50%",
                    }}
                  />
                )}
              />
              <div className="price-change">
                <div className="numb-min">
                  <span className="dollar">$</span>
                  <input
                    type="number"
                    className="input-min"
                    value={values[0]}
                    onChange={handleMinInputChange}
                    readOnly
                  />
                </div>
                <div className="numb-max">
                  <span className="dollar">$</span>
                  <input
                    type="number"
                    className="input-max"
                    value={values[1]}
                    onChange={handleMaxInputChange}
                    readOnly
                  />
                </div>
              </div>
            </div>
            {/* filter list */}
            <div className="filter-list">
              <div className="filter-item">Desktop Computer</div>
              <div className="filter-item">PC Components</div>
              <div className="filter-item">Gaming Peripherals</div>
              <div className="filter-item">Ergonomic & Gaming Chairs</div>
              <div className="filter-item">PlayStation & Xbox Consoles</div>
              <div className="filter-item">Laptops & Notebook</div>
              <div className="filter-item">Monitors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;

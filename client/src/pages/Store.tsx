import React, { useState, useRef, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import "../styles/pages/Store.scss";

import prdImg_Demo from "../assets/images/products/aorus_geforce_rtx4080_xtreme_waterforce.webp";
import prdLogo_Demo from "../assets/images/products/prd_logo_demo.webp";

type Props = {};

const Store = (props: Props) => {
  const items = Array.from({ length: 20 });
  const productsShowcase01Ref = useRef<HTMLDivElement>(null);
  const productsShowcase02Ref = useRef<HTMLDivElement>(null);
  const productsShowcase03Ref = useRef<HTMLDivElement>(null);
  const [activeFilterList1, setActiveFilterList1] = useState<string | null>(
    null
  );
  const [activeFilterList2, setActiveFilterList2] = useState<string | null>(
    null
  );
  const [displayedItems, setDisplayedItems] = useState<number>(9);

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

  const [values, setValues] = useState([100, 9900]); // Initial values

  const handleRangeChange = (values: number[]) => {
    if (values[1] - values[0] >= 1000) {
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

  // handle filter click for list 1
  const handleFilterClickList1 = (filter: string) => {
    setActiveFilterList1((prevFilter) =>
      prevFilter === filter ? null : filter
    );
  };

  // handle filter click for list 2
  const handleFilterClickList2 = (filter: string) => {
    setActiveFilterList2((prevFilter) =>
      prevFilter === filter ? null : filter
    );
  };

  // handle load more items
  const handleLoadMore = () => {
    setDisplayedItems((prevCount) => prevCount + 9);
  };

  // Add state at the top of component
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Add ref for the filter container
  const filterRef = useRef<HTMLDivElement>(null);

  // Modify handleClose to check if click is outside filter
  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node) &&
      isFilterVisible
    ) {
      setIsFilterVisible(false);
    }
  };

  // Add effect to handle click outside
  useEffect(() => {
    if (isFilterVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterVisible]);

  // Add inside component before return
  useEffect(() => {
    if (isFilterVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterVisible]);

  // Add toggle function
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="store-page">
      {/* text information */}
      <div className="text-information">
        <span>Accessories for the PC - upgrade or assemble yourself</span>
        <div className="title">Explore Our Catalog</div>
      </div>
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
        {/* product list */}
        <div className="product-list">
          {/* heading */}
          <div className="heading">
            {/* sort */}
            <div className="sort-wrapper">
              <span>Show:</span>
              <div className="sort">
                New Release<span className="tabler--chevron-down icon"></span>
              </div>
            </div>
            {/* Add Filter Toggle Button */}
            <button className="filter-toggle-btn" onClick={toggleFilter}>
              <span className="bi--filter icon"></span>
              Filter
            </button>
          </div>
          {/* product items */}
          <div className="product-items">
            {items.slice(0, displayedItems).map((_, index) => (
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
                  <a href="/product-details" className="product-name">
                    AORUS GeForce RTX™ 4080 16GB XTREME WATERFORCE
                  </a>
                  <div className="product-price">$1499.00</div>
                </div>
              </div>
            ))}
          </div>
          {/* load more button */}
          {displayedItems < items.length && (
            <button className="load-more-btn" onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </div>
        {/* Add overlay */}
        {isFilterVisible && (
          <div
            className="filter-overlay"
            onClick={() => setIsFilterVisible(false)}
          ></div>
        )}
        {/* product filter */}
        <div
          ref={filterRef}
          className={`product-filter ${isFilterVisible ? "show" : ""}`}
        >
          <div className="filter-content">
            {/* Categories */}
            <div className="categories">
              {/* heading */}
              <div className="heading">
                {/* title */}
                <div className="title">Categories</div>
                {/* close button */}
                <button
                  className="filter-close-btn"
                  onClick={() => setIsFilterVisible(false)}
                >
                  <span className="line-md--remove icon"></span>
                </button>
              </div>

              {/* filter list */}
              <div className="filter-list">
                {[
                  "Desktop Computer",
                  "PC Components",
                  "Gaming Peripherals",
                  "Ergonomic & Gaming Chairs",
                  "PlayStation & Xbox Consoles",
                  "Laptops & Notebook",
                  "Monitors",
                ].map((filter) => (
                  <div
                    key={filter}
                    className={`filter-item ${
                      activeFilterList1 === filter ? "active" : ""
                    }`}
                    onClick={() => handleFilterClickList1(filter)}
                    style={{
                      color:
                        activeFilterList1 === filter ? "#eb7e63" : "#8a8a8a",
                    }}
                  >
                    <p>{filter}</p>
                    {activeFilterList1 === filter && (
                      <span className="tabler--check"></span>
                    )}
                  </div>
                ))}
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
                  step={50}
                  min={100}
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
                        left: "0%",
                        borderRadius: "4px",
                        transition: "0.5s",
                        background: getTrackBackground({
                          values,
                          colors: ["#fff", "#eb7e63", "#fff"],
                          min: 100,
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
                {[
                  "CPUs / Processors",
                  "Motherboards",
                  "GPUs / Graphics Cards",
                  "Memory / RAM",
                  "Hard Drives & SSDs",
                  "Cases",
                  "Power Supplies",
                  "Fans & Cooling",
                  "Custom Liquid Cooling",
                ].map((filter) => (
                  <div
                    key={filter}
                    className={`filter-item ${
                      activeFilterList2 === filter ? "active" : ""
                    }`}
                    onClick={() => handleFilterClickList2(filter)}
                    style={{
                      color:
                        activeFilterList2 === filter ? "#eb7e63" : "#8a8a8a",
                    }}
                  >
                    <p>{filter}</p>
                    {activeFilterList2 === filter && (
                      <span className="tabler--check"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;

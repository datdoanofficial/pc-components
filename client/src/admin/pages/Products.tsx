import React from "react";
import "../styles/Products.scss";

const Products = () => {
  return (
    <div className="products-container">
      {/* header wrapper */}
      <div className="header-wrapper">
        {/* total items */}
        <div className="total-items area">
          <div className="heading">
            <div className="title">Total Items</div>
            <div className="icon">
              <span className="fluent--eye-48-regular"></span>
            </div>
          </div>
          <div className="value">
            <div className="number">4540</div>
            <div className="percentage"></div>
          </div>
        </div>
        {/* products reserved */}
        <div className="products-reserved area"></div>
        {/* quantity in stock */}
        <div className="stock-quantity area"></div>
        {/* all brand */}
        <div className="all-brand area"></div>
      </div>
      {/* products table */}
      <div className="products-tbl"></div>
    </div>
  );
};

export default Products;

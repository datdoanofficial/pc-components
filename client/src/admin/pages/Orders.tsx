import React from "react";
import "../styles/Orders.scss";

const Orders = () => {
  return (
    <div className="orders-container">
      {/* header wrapper */}
      <div className="header-wrapper">
        {/* total orders */}
        <div className="total-orders area">
          <div className="heading">
            <div className="title">Total Orders</div>
            <div className="icon">
              <span className="fluent--eye-48-regular"></span>
            </div>
          </div>
          <div className="value">
            <div className="number">4540</div>
            <div className="percentage"></div>
          </div>
        </div>
        {/* delivered orders */}
        <div className="delivered-orders area"></div>
        {/* cancelled orders */}
        <div className="cancelled-orders area"></div>
        {/* orders status */}
        <div className="orders-status area"></div>
      </div>
      {/* orders tbl */}
      <div className="orders-tbl"></div>
    </div>
  );
};

export default Orders;

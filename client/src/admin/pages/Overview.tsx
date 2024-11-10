import React, { useState, useRef } from "react";
import "../styles/Overview.scss";
import CustomAreaChart from "../components/AreaChart";
import InvoiceChart from "../components/InvoiceChart";
import engaged_users_bg from "../../assets/images/admin-page/engaged-users-bg.png";

interface OverviewProps {
  percentageOrdersChange: number;
  percentageAccountsChange: number;
}

const Overview: React.FC<OverviewProps> = ({
  percentageOrdersChange,
  percentageAccountsChange,
}) => {
  const isOrdersNegative = percentageOrdersChange < 0;
  const ordersColor = isOrdersNegative ? "#eb7e63" : "#a6abff";
  const accountsColor = "#fff"; // Always set to white
  const [totalValue, setTotalValue] = useState(0);

  const [timePeriod, setTimePeriod] = React.useState("Week");
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimePeriod(event.target.value);
  };

  const handleContainerClick = () => {
    if (selectRef.current) {
      selectRef.current.click();
    }
  };

  return (
    <div className="overview">
      <div className="first-part">
        <div className="first-item">
          {/* active accounts */}
          <div className="active-accounts mini-board">
            {/* header */}
            <div className="header-wrapper">
              <div className="title">Active Accounts</div>
              <div className="icon">
                <span className="circum--face-smile"></span>
              </div>
            </div>
            {/* middle */}
            <div className="value">1808</div>
            {/* footer */}
            <div className="footer-wrapper">
              <div className="percent-wrapper">
                <div className="icon" style={{ color: accountsColor }}>
                  {percentageAccountsChange < 0 ? (
                    <span className="formkit--arrowdown"></span> // Replace with your arrow down icon
                  ) : (
                    <span className="formkit--arrowup"></span> // Replace with your arrow up icon
                  )}
                </div>
                <div className="percentage" style={{ color: accountsColor }}>
                  {percentageAccountsChange}%
                </div>
              </div>
              <div className="text">Since last week</div>
            </div>
          </div>
          {/* orders */}
          <div className="orders mini-board">
            {/* header */}
            <div className="header-wrapper">
              <div className="title">Orders</div>
              <div className="icon">
                <span className="iconamoon--invoice-thin"></span>
              </div>
            </div>
            {/* middle */}
            <div className="value">818</div>
            {/* footer */}
            <div className="footer-wrapper">
              <div className="percent-wrapper">
                <div className="icon" style={{ color: ordersColor }}>
                  {isOrdersNegative ? (
                    <span className="formkit--arrowdown"></span> // Replace with your arrow down icon
                  ) : (
                    <span className="formkit--arrowup"></span> // Replace with your arrow up icon
                  )}
                </div>
                <div className="percentage" style={{ color: ordersColor }}>
                  {percentageOrdersChange}%
                </div>
              </div>
              <div className="text">Since last month</div>
            </div>
          </div>
        </div>
        <div className="second-item">
          <div className="invoice-statistics">
            <div className="header-wrapper">
              <div className="title">Invoice Statistics</div>
              <div className="three-dots-btn">
                <span className="ph--dots-three-outline-thin"></span>
              </div>
            </div>
            <InvoiceChart />
          </div>
          {/* engaged users */}
          <div className="engaged-users">
            {/* header wrapper */}
            <div className="header-wrapper">
              {/* user icon */}
              <div className="user-icon">
                <span className="prime--user"></span>
              </div>
              {/* title */}
              <div className="title">Engaged users</div>
            </div>
            {/* area action */}
            <div className="total-users">
              <div className="value">18.080</div>
              <img src={engaged_users_bg} alt="" className="engaged-users-bg" />
            </div>
          </div>
        </div>
      </div>
      {/* second part */}
      <div className="second-part">
        {/* revenue statistics */}
        <div className="revenue-statistics">
          <div className="header-wrapper">
            <p className="title">Revenue Statistics</p>
            <div className="total-info">
              <div className="total-amount">${totalValue.toLocaleString()}</div>
              <div className="total-orders">
                Total Orders: <span>189</span>
              </div>
              <div className="select-container" onClick={handleContainerClick}>
                <select
                  ref={selectRef}
                  value={timePeriod}
                  onChange={handleSelectChange}
                >
                  <option className="active">Week</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
                <span className="tabler--chevron-down icon"></span>
              </div>
            </div>
          </div>
          <div className="charts">
            <CustomAreaChart setTotalValue={setTotalValue} />
          </div>
        </div>
        <div className="recent-orders"></div>
      </div>
    </div>
  );
};

export default Overview;

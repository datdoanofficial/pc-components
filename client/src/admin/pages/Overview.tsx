import React, { useState } from "react";
import "../styles/Overview.scss";
import CustomAreaChart from "../components/AreaChart";

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

  const [timePeriod, setTimePeriod] = useState("Week");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimePeriod(event.target.value);
  };

  const [totalValue, setTotalValue] = useState(0);

  return (
    <div className="overview">
      <div className="first-part">
        <div className="first-item">
          {/* active accounts */}
          <div className="active-accounts mini-board">
            {/* header */}
            <div className="header-wrapper">
              <div className="title">Accounts</div>
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
          <div className="invoice-statistics"></div>
          <div className="engaged-users"></div>
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
              <select value={timePeriod} onChange={handleSelectChange}>
                <option className="active">Week</option>
                <option>Month</option>
                <option>Year</option>
              </select>
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

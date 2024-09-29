import React from "react";
import "../styles/pages/Help.scss";

import MouseMoveHandler from "../components/common/MouseMoveHandler";

import purchaseSupport from "../assets/images/help-page/purchase-sp.png";
import accountSupport from "../assets/images/help-page/account-sp.png";
import systemSupport from "../assets/images/help-page/system-sp.png";

type Props = {};

const Help = (props: Props) => {
  const line01_items = [
    {
      title: "Service & repair",
      iconClass: "mdi--account-service",
    },
    {
      title: "Report Issue",
      iconClass: "ic--round-report",
    },
    {
      title: "Ordering",
      iconClass: "solar--bill-list-bold",
    },
  ];
  const line02_items = [
    {
      title: "Shipping",
      iconClass: "ic--round-local-shipping",
    },
    {
      title: "Products",
      iconClass: "solar--box-bold",
    },
    {
      title: "Returns (RMA)",
      iconClass: "material-symbols--autorenew-rounded",
    },
    {
      title: "Promotions",
      iconClass: "iconamoon--discount-fill",
    },
    {
      title: "Website",
      iconClass: "iconoir--www",
    },
  ];

  return (
    <div className="help-page">
      <MouseMoveHandler />
      {/* header wrapper */}
      <div className="header-wrapper">
        <div className="header">
          <h1>
            Welcome to <span>Next In</span> Support
          </h1>
          <p>
            Server status: <span>Operational</span>
          </p>
        </div>
        {/* search bar */}
        <div className="search-box">
          <button>
            <span className="carbon--search"></span>
          </button>
          <input type="text" placeholder="Search for help" />
        </div>
      </div>
      {/* selection bar */}
      <div className="selection-bar">
        {/* purchase support */}
        <div className="purchase-support select-item">
          <img src={purchaseSupport} alt="" />
          <div className="content-wrapper">
            <div className="content">
              <div className="title">Purchase Support</div>
              <p>Have a problem with the purchase from the Next In website?</p>
            </div>
          </div>
        </div>
        {/* account support */}
        <div className="account-support select-item">
          <img src={accountSupport} alt="" />
          <div className="content-wrapper">
            <div className="content">
              <div className="title">Account Support</div>
              <p>You can find tips and tutorials on using Next In Account.</p>
            </div>
          </div>
        </div>
        {/* system support */}
        <div className="system-support select-item">
          <img src={systemSupport} alt="" />
          <div className="content-wrapper">
            <div className="content">
              <div className="title">System Support</div>
              <p>Find answers to the most common questions and issues.</p>
            </div>
          </div>
        </div>
      </div>
      {/* purchase support center */}
      <div className="support-center">
        <div className="title">Purchase Support</div>
        <div className="content">
          <div className="select-options">
            <div className="option">Order Information</div>
            <div className="option">Shipping Information</div>
            <div className="option">Returns and cancellations</div>
            <div className="option">Online store locator</div>
            <div className="option">Still need help?</div>
            <div className="option">
              <span className="solar--bill-list-bold icon"></span> View your
              order history
            </div>
          </div>
          <div className="list-question">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <a href="/">What payment methods do you accept?</a>
            <a href="/">When will my credit/debit card be charged?</a>
            <a href="/">How will the charge show up on my credit/debit card?</a>
            <a href="/">Do I have to pay sales tax/VAT?</a>
            <a href="/">
              What address should I enter in the billing information screen?
            </a>
            <a href="/">Why are you not accepting my credit/debit card?</a>
            <a href="/">
              I need help with an order I placed with another retailer.
            </a>
          </div>
        </div>
      </div>
      {/* account support center */}
      <div className="support-center">
        <div className="title">Accounts Support</div>
        <div className="content">
          <div className="select-options">
            <div className="option">Account Security</div>
            <div className="option">Connect Account</div>
            <div className="option">Parental Controls</div>
            <div className="option">Next In Account Services</div>
            <div className="option">Still need help?</div>
          </div>
          <div className="list-question">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <a href="/">
              Why did I receive a two-factor sign-in code from Next In?
            </a>
            <a href="/">
              I don't receive two-factor authentication codes in my email?
            </a>
            <a href="/">Securing Your Next In Account</a>
            <a href="/">Disable two-factor authentication (2FA)</a>
            <a href="/">How to reset your Next In password?</a>
            <a href="/">
              How to reset your Next In password if you can’t log in to your
              account?
            </a>
            <a href="/">
              What rewards do I get for enabling two-factor authentication (2FA)
              on my Next In account?
            </a>
            <a href="/">
              My Authenticator app or SMS two-factor authentication (2FA) has
              locked me out of my account
            </a>
            <a href="/">Two-factor authentication (2FA) and how to enable it</a>
          </div>
        </div>
      </div>
      {/* system support center */}
      <div className="system-support-center">
        <div className="title">System support</div>
        {/* card inline */}
        <div className="card-inline">
          {/* line 01 */}
          <div className="line-01">
            {/* item */}
            {line01_items.map((item, index) => (
              <div className="item" key={index}>
                <div className="title">
                  <span className={`icon ${item.iconClass}`}></span>
                  <p>{item.title}</p>
                </div>
                <div className="browse-btn">
                  <div className="overlay"></div>
                  <span className="tabler--arrow-up icon"></span>
                </div>
              </div>
            ))}
          </div>
          <div className="line-02">
            {line02_items.map((item, index) => (
              <div className="item" key={index}>
                <div className="title">
                  <span className={`icon ${item.iconClass}`}></span>
                  <p>{item.title}</p>
                </div>
                <div className="browse-btn">
                  <div className="overlay"></div>
                  <span className="tabler--arrow-up icon"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

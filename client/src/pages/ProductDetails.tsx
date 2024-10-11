import React, { useState, useEffect } from "react";
import "../styles/pages/ProductDetails.scss";

import product_demo_1 from "../assets/images/products/product_demo_01.png";
import product_demo_2 from "../assets/images/products/product_demo_02.png";
import product_demo_3 from "../assets/images/products/product_demo_03.png";
import product_demo_4 from "../assets/images/products/product_demo_04.png";

import product_des from "../assets/images/product-details/product-demo-01.png";
import product_bg from "../assets/images/product-details/bg-demo.png";
import feature_img from "../assets/images/product-details/geforce-rtx-40.png";

import feature_icon_1 from "../assets/images/product-details/icon-1.svg";
import feature_icon_2 from "../assets/images/product-details/icon-2.svg";
import feature_icon_3 from "../assets/images/product-details/icon-3.svg";
import feature_icon_4 from "../assets/images/product-details/icon-4.svg";
import feature_icon_5 from "../assets/images/product-details/icon-5.svg";
import feature_icon_6 from "../assets/images/product-details/icon-6.svg";
import feature_icon_7 from "../assets/images/product-details/icon-7.svg";
import feature_icon_8 from "../assets/images/product-details/icon-8.svg";

import hdmi_logo from "../assets/images/product-details/hdmi_logo.png";

type Props = {};

const ProductDetails = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("key-feature");
  const products = Array.from({ length: 5 });

  const imageSources = [
    product_demo_1,
    product_demo_2,
    product_demo_3,
    product_demo_4,
  ];

  const tableData = [
    { item: "Graphics Processing", value: "GeForce RTX™ 4080" },
    { item: "Core Clock", value: "2565 MHz (Reference Card: 2505 MHz)" },
    { item: "CUDA Cores", value: "9728" },
    { item: "Memory Clock", value: "22.4 Gbps" },
    { item: "Memory Size", value: "16 GB" },
    { item: "Memory Type", value: "GDDR6X" },
    { item: "Memory Bus", value: "256 bit" },
    { item: "Card Bus", value: "PCI-E 4.0" },
    { item: "Digital max resolution", value: "7680x4320" },
    { item: "Multi-view", value: "4" },
    { item: "Card size", value: "L=235 W=169 H=29 mm" },
    { item: "PCB Form", value: "ATX" },
    { item: "DirectX", value: "12 Ultimate" },
    { item: "OpenGL", value: "4.6" },
    { item: "Recommended PSU", value: "850W" },
    { item: "Power Connectors", value: "16 pin * 1" },
    {
      item: "Output",
      value: `DisplayPort 1.4a *3
      HDMI 2.1a *1`,
    },
    { item: "Fitting type", value: "G1/4" },
    {
      item: "Accessories",
      value: `1. Quick guide
      2. Warranty registration
      3. WATERFORCE water block installation guide
      4. AORUS Metal sticker
      5. Xtreme Robot Limited Edition with AORUS flag
      6. One 16 pin to triple 8-pin power adaptor
      7. Thermal grease`,
    },
    { item: "Note", value: "*Please use non-corrosive coolant." },
  ];

  const features = [
    {
      img: feature_icon_1,
      title: "Cutting-Edge GPUs",
      description: "NVIDIA Ada Lovelace Architecture",
    },
    {
      img: feature_icon_2,
      title: "Realistic and Immersive Graphics",
      description: "Dedicated Ray Tracing Cores",
    },
    {
      img: feature_icon_3,
      title: "AI-Accelerated Performance",
      description: "NVIDIA DLSS 3",
    },
    {
      img: feature_icon_4,
      title: "Game-Winning Responsiveness",
      description: "NVIDIA Reflex low-latency platform",
    },
    {
      img: feature_icon_5,
      title: "Built for Live Streaming",
      description: "NVIDIA Encoder",
    },
    {
      img: feature_icon_6,
      title: "AI-Enhanced Voice and Video",
      description: "RTX Video Super Resolution and NVIDIA Broadcast",
    },
    {
      img: feature_icon_7,
      title: "Fast-Track Your Creativity",
      description: "NVIDIA Studio",
    },
    {
      img: feature_icon_8,
      title: "Performance and Reliability",
      description: "Game Ready and Studio Drivers",
    },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

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
      {/* section 01 */}
      <div className="section-01">
        {/* thumbnails */}
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
      </div>
      {/* section 02 */}
      <div className="section-02">
        {/* product description */}
        <div className="product-description">
          {/* feature image */}
          <div className="feature-heading">
            <div className="header-wrapper">
              <div
                className={`key-feature chbar ${
                  activeTab === "key-feature" ? "active" : ""
                }`}
                onClick={() => handleTabClick("key-feature")}
              >
                Key Feature
              </div>
              <div
                className={`specifications chbar ${
                  activeTab === "specifications" ? "active" : ""
                }`}
                onClick={() => handleTabClick("specifications")}
              >
                Specifications
              </div>
            </div>
            {activeTab === "key-feature" && (
              <>
                <img src={product_des} alt="" className="product_des_img" />
                <img src={product_bg} className="background" alt="" />
              </>
            )}
          </div>
          {/* specs */}
          {activeTab === "specifications" && (
            <div className="sp-section">
              {/* display table */}
              <ul className="display-table">
                {/* row */}
                {tableData.map((data, index) => (
                  <li className="display-table-row" key={index}>
                    {/* cell */}
                    <span className="display-table-cell item">{data.item}</span>
                    <span className="display-table-cell">
                      {data.value.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="model-page-memo">
                <img src={hdmi_logo} alt="" />
                <p>
                  * The terms HDMI, HDMI High-Definition Multimedia Interface,
                  HDMI Trade dress and the HDMI Logos are trademarks or
                  registered trademarks of HDMI Licensing Administrator, Inc.
                </p>
                <p>
                  * The entire materials provided herein are for reference only.
                  GIGABYTE reserves the right to modify or revise the content at
                  anytime without prior notice.
                </p>
                <p>
                  * Advertised performance is based on maximum theoretical
                  interface values from respective Chipset vendors or
                  organization who defined the interface specification. Actual
                  performance may vary by system configuration.
                </p>
                <p>
                  * All trademarks and logos are the properties of their
                  respective holders.
                </p>
                <p>
                  * Due to standard PC architecture, a certain amount of memory
                  is reserved for system usage and therefore the actual memory
                  size is less than the stated amount.
                </p>
              </div>
            </div>
          )}
          {/* description wrapper */}
          {activeTab === "key-feature" && (
            <>
              <div className="des-wrapper">
                <h4>WATERFORCE COOLING SYSTEM</h4>
                Designed for DIY PC enthusiasts who aim to create unique custom
                loop builds while achieving the highest possible performance in
                silence. AORUS provides an all-round cooling solution that
                actively cools critical parts, such as the GPU, VRAM, and
                MOSFET, to ensure system stability during high overclocking.
              </div>
              <div className="feature-description">
                <div className="title">
                  <h4>The Ultimate Platform for Gamers and Creators</h4>
                  <h1>Powered by GeForce RTX 40 Series and DLSS 3</h1>
                </div>
                {/* feature wrapper */}
                <div className="feature-wrapper">
                  <img src={feature_img} alt="" className="feature-img" />
                  <div className="feature">
                    <div className="phrase">
                      <label className="title">
                        New Streaming Multiprocessors
                      </label>
                      <p>Up to 2X performance and power efficiency</p>
                    </div>
                    <div className="phrase">
                      <label className="title">Fourth-Gen Tensor Cores</label>
                      <p>
                        Up to 4X performance with DLSS 3<br />
                        vs. brute-force rendering
                      </p>
                    </div>
                    <div className="phrase">
                      <label className="title">Third-Gen RT Cores</label>
                      <p>Up to 2X ray tracing performance</p>
                    </div>
                  </div>
                </div>
                <div className="all-features-wrapper">
                  {features.map((feature, index) => (
                    <div className="feature-items" key={index}>
                      <img src={feature.img} alt={feature.title} />
                      <div className="phrase">
                        <label className="title">{feature.title}</label>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="end-description">
                  <p className="title">Further With AI, Faster on RTX</p>
                  <p className="sub-title">
                    Get next-level AI performance on GeForce RTX.
                  </p>
                  <p className="paragraph">
                    Discover the RTX AI advantage. Built for the era of AI,
                    GeForce RTX™ GPUs feature specialized AI Tensor Cores that
                    deliver cutting-edge performance and revolutionary
                    capabilities. From enhanced creativity and ultra-efficient
                    productivity to blisteringly fast gaming, the ultimate in AI
                    power on Windows PCs is on RTX.
                  </p>
                  <button className="learn-more">Learn More</button>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="product-bar">
          {/* gift */}
          <div className="gift">
            <div className="title">Free Gift with Purchase</div>
            <div className="gift-item"></div>
          </div>
          {/* ratings and reviews */}
          <div className="ratings-and-reviews">
            {/* total ratings */}
            <div className="total-ratings">
              <div className="title">Product Ratings &amp; Reviews</div>
              <div className="overview-board"></div>
            </div>
            {/* user reviews */}
            <div className="user-reviews">
              <div className="heading">
                <div className="title">
                  User reviews<span>(329)</span>
                </div>
                <div className="view-all-reviews">
                  See all reviews<span className="ci--external-link"></span>
                </div>
              </div>
              <div className="all-reviews">
                <div className="review"></div>
                <div className="review"></div>
                <div className="review"></div>
              </div>
            </div>
            {/* related products */}
            <div className="related-products">
              <div className="title">Related Products</div>
              {/* product items */}
              <div className="all-related-products">
                {products.map((_, index) => (
                  <div className="product-item" key={index}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

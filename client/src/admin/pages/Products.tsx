import React from "react";
import "../styles/Products.scss";

import CardHeader from "../components/CardHeader";
import CardLarge from "../components/CartLarge";

// Import avatar images
import vip_member_01 from "../../assets/images/admin-page/avatar.png";
import vip_member_02 from "../../assets/images/admin-page/zhangjie-avt.png";
import vip_member_03 from "../../assets/images/admin-page/wangkai-avt.png";
import vip_member_04 from "../../assets/images/admin-page/zhuyilong-avt.png";
import vip_member_05 from "../../assets/images/admin-page/yangmi-avt.png";
import vip_member_06 from "../../assets/images/admin-page/duchun-avt.png";
import vip_member_07 from "../../assets/images/admin-page/zhangxinyu-avt.png";

// vip members avatar
const allBrand = new Array(28).fill(0).map((_, index) => {
  const avatars = [
    vip_member_01,
    vip_member_02,
    vip_member_03,
    vip_member_04,
    vip_member_05,
    vip_member_06,
    vip_member_07,
  ];
  return avatars[index % avatars.length];
});

const Products = () => {
  return (
    <div className="products-container">
      {/* header wrapper */}
      <div className="header-wrapper">
        {/* total items */}
        <CardHeader title="Total Items" number={240} iconClass="mage--box-3d" />
        {/* out of stock */}
        <CardHeader
          title="Out of Stock"
          number={26}
          iconClass="mage--box-3d-cross"
        />
        {/* quantity in stock */}
        <CardHeader
          title="Inventory"
          number={1840}
          iconClass="mage--box-3d-check"
        />
        {/* all brand */}
        <CardLarge title="All Brand" number={28} image={allBrand} />
      </div>
      {/* products table */}
      <div className="products-tbl"></div>
    </div>
  );
};

export default Products;

import React from "react";
import "../styles/Orders.scss";

import CardHeader from "../components/CardHeader";
import CardLarge from "../components/CartLarge";
// import TableHeader from "../components/TableHeader";
// import ActionButton from "../components/ActionButton";

// Import avatar images
import vip_member_01 from "../../assets/images/admin-page/avatar.png";
import vip_member_02 from "../../assets/images/admin-page/zhangjie-avt.png";
import vip_member_03 from "../../assets/images/admin-page/wangkai-avt.png";
import vip_member_04 from "../../assets/images/admin-page/zhuyilong-avt.png";
import vip_member_05 from "../../assets/images/admin-page/yangmi-avt.png";
import vip_member_06 from "../../assets/images/admin-page/duchun-avt.png";
import vip_member_07 from "../../assets/images/admin-page/zhangxinyu-avt.png";

// vip members avatar
const highestSpenders = new Array(288).fill(0).map((_, index) => {
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

const Orders = () => {
  return (
    <div className="orders-container">
      {/* header wrapper */}
      <div className="header-wrapper">
        {/* total orders */}
        <CardHeader
          title="Total Orders"
          number={4540}
          iconClass="solar--bill-list-linear"
        />
        {/* delivered orders */}
        <CardHeader
          title="Delivered Orders"
          number={4178}
          iconClass="solar--bill-check-linear"
        />
        {/* cancelled orders */}
        <CardHeader
          title="Cancelled Orders"
          number={362}
          iconClass="solar--bill-cross-linear"
        />
        {/* highest spenders */}
        <CardLarge
          title="Highest Spenders"
          number={288}
          image={highestSpenders}
        />
      </div>
      {/* orders tbl */}
      <div className="orders-tbl"></div>
    </div>
  );
};

export default Orders;

import React, { useState } from "react";
import "../styles/Customers.scss";

// Import avatar images
import vip_member_01 from "../../assets/images/admin-page/avatar.png";
import vip_member_02 from "../../assets/images/admin-page/zhangjie-avt.png";
import vip_member_03 from "../../assets/images/admin-page/wangkai-avt.png";
import vip_member_04 from "../../assets/images/admin-page/zhuyilong-avt.png";
import vip_member_05 from "../../assets/images/admin-page/yangmi-avt.png";
import vip_member_06 from "../../assets/images/admin-page/duchun-avt.png";
import vip_member_07 from "../../assets/images/admin-page/zhangxinyu-avt.png";

const Customers = () => {
  // vip members avatar
  const vipMembers = new Array(628).fill(0).map((_, index) => {
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

  // format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  // format currency
  const formatBilling = (billing: string) => {
    const number = parseFloat(billing.replace(/[^0-9.-]+/g, ""));
    return `$${number.toLocaleString("de-DE")}`;
  };

  // membership class
  const getMembershipClass = (membership: string) => {
    switch (membership.toLowerCase()) {
      case "vip":
        return "membership-vip";
      case "basic":
        return "membership-basic";
      case "silver":
        return "membership-silver";
      default:
        return "";
    }
  };

  // status class
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "status-active";
      case "inactive":
        return "status-inactive";
      default:
        return "";
    }
  };

  // customers data
  const customers = [
    {
      id: 1,
      name: "John Doe",
      startDate: "2023-01-01",
      birthday: "1990-05-15",
      gender: "Male",
      membership: "Basic",
      status: "Active",
      billing: "$18000",
    },
    {
      id: 2,
      name: "Jane Smith",
      startDate: "2022-05-12",
      birthday: "1985-07-20",
      gender: "Female",
      membership: "VIP",
      status: "Inactive",
      billing: "$320000",
    },
    {
      id: 3,
      name: "Michael Johnson",
      startDate: "2021-11-30",
      birthday: "1978-03-10",
      gender: "Male",
      membership: "Silver",
      status: "Active",
      billing: "$72000",
    },
    {
      id: 4,
      name: "Emily Davis",
      startDate: "2020-09-15",
      birthday: "1992-08-25",
      gender: "Female",
      membership: "Basic",
      status: "Active",
      billing: "$4500",
    },
    {
      id: 5,
      name: "David Wilson",
      startDate: "2019-03-22",
      birthday: "1988-11-05",
      gender: "Male",
      membership: "VIP",
      status: "Inactive",
      billing: "$126000",
    },
    {
      id: 6,
      name: "Sophia Brown",
      startDate: "2021-07-18",
      birthday: "1995-02-14",
      gender: "Female",
      membership: "Silver",
      status: "Active",
      billing: "$85000",
    },
    {
      id: 7,
      name: "Chris Evans",
      startDate: "2020-01-10",
      birthday: "1982-06-13",
      gender: "Male",
      membership: "VIP",
      status: "Active",
      billing: "$280000",
    },
    {
      id: 8,
      name: "Natalie Portman",
      startDate: "2018-04-22",
      birthday: "1981-06-09",
      gender: "Female",
      membership: "Silver",
      status: "Inactive",
      billing: "$55500",
    },
    {
      id: 9,
      name: "Robert Downey",
      startDate: "2019-11-30",
      birthday: "1965-04-04",
      gender: "Male",
      membership: "Basic",
      status: "Active",
      billing: "$9900",
    },
    {
      id: 10,
      name: "Scarlett Johansson",
      startDate: "2021-03-15",
      birthday: "1984-11-22",
      gender: "Female",
      membership: "VIP",
      status: "Active",
      billing: "$429000",
    },
    {
      id: 11,
      name: "Mark Ruffalo",
      startDate: "2022-07-18",
      birthday: "1967-11-22",
      gender: "Male",
      membership: "Silver",
      status: "Inactive",
      billing: "$65000",
    },
    {
      id: 12,
      name: "Chris Hemsworth",
      startDate: "2020-05-05",
      birthday: "1983-08-11",
      gender: "Male",
      membership: "Basic",
      status: "Active",
      billing: "$5800",
    },
  ];

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 6;

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(customers.length / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(event.currentTarget.id));
  };

  return (
    <div className="customers-container">
      {/* header wrapper */}
      <div className="header-wrapper">
        {/* total clients */}
        <div className="total-clients area">
          <div className="heading">
            <div className="title">Total Clients</div>
            <div className="icon">
              <span className="ph--users-light"></span>
            </div>
          </div>
          <div className="value">
            <div className="number">1808</div>
            <div className="percentage"></div>
          </div>
        </div>
        {/* members */}
        <div className="members area">
          <div className="heading">
            <div className="title">Members</div>
            <div className="icon">
              <span className="ph--user-light"></span>
            </div>
          </div>
          <div className="value">
            <div className="number">826</div>
            <div className="percentage"></div>
          </div>
        </div>
        {/* new members */}
        <div className="new-members area">
          <div className="heading">
            <div className="title">New Members</div>
            <div className="icon">
              <span className="ph--user-plus-light"></span>
            </div>
          </div>
          <div className="value">
            <div className="number">206</div>
            <div className="percentage"></div>
          </div>
        </div>
        {/* vip members */}
        <div className="vip-members area">
          <div className="heading">
            <div className="title">VIP Members</div>
          </div>
          <div className="value">
            <div className="number">628</div>
            <div className="list-vip-members">
              {vipMembers.slice(0, 7).map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`VIP Member ${index + 1}`}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    margin: "0 -0.15rem",
                  }}
                />
              ))}
              {vipMembers.length > 7 && (
                <span className="more-vip-members">+10</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* customer tbl */}
      <div className="tbl-container">
        {/* header */}
        <div className="header-wrapper">
          {/* toolbar */}
          <div className="toolbar">
            <div className="title">All Customers</div>
            {/* search box */}
            <div className="search-box">
              <span className="carbon--search icon"></span>
              <input type="text" placeholder="Search..." />
            </div>
            {/* sort options */}
            <div className="sort-options">
              <select>
                <option value="all-customers">All Customers</option>
                <option value="all-members">All Members</option>
                <option value="all-vip">All V.I.P</option>
              </select>
              <span className="tabler--chevron-down icon"></span>
            </div>
          </div>
          {/* action button */}
          <div className="action-buttons">
            {/* export button */}
            <button className="export-btn">
              <span className="ant-design--export-outlined icon"></span>
              Export
            </button>
            {/* add button */}
            <button className="add-btn">
              <span className="ic--round-plus icon"></span>
              New Customer
            </button>
          </div>
        </div>
        {/* table */}
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Start Date</th>
                <th>Birthday</th>
                <th>Gender</th>
                <th>Membership</th>
                <th>Status</th>
                <th>Expenditure</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="id">{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{formatDate(customer.startDate)}</td>
                  <td>{formatDate(customer.birthday)}</td>
                  <td>{customer.gender}</td>
                  <td className="membership">
                    <span
                      className={`text ${getMembershipClass(
                        customer.membership
                      )}`}
                    >
                      {customer.membership}
                    </span>
                  </td>
                  <td className="status">
                    <span className={`text ${getStatusClass(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="expenditure">
                    {formatBilling(customer.billing)}
                  </td>
                  <td className="action-btn">
                    <div className="edit-btn">
                      <span className="fluent--edit-48-filled icon"></span>
                      Edit
                    </div>
                    <div className="delete-btn">
                      <span className="fluent--delete-48-filled icon"></span>
                      Delete
                    </div>
                    <div className="view-btn">
                      <span className="fluent--eye-48-filled icon"></span>
                      View
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          {pageNumbers.map((number) => (
            <button
              key={number}
              id={number.toString()}
              onClick={handleClick}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;

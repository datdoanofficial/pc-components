import React, { useState, useEffect } from "react";
import "../styles/Customers.scss";

import CardHeader from "../components/CardHeader";
import CardLarge from "../components/CartLarge";
import TableHeader from "../components/TableHeader";
import ActionButton from "../components/ActionButton";

// Import avatar images
import vip_member_01 from "../../assets/images/admin-page/avatar.png";
import vip_member_02 from "../../assets/images/admin-page/zhangjie-avt.png";
import vip_member_03 from "../../assets/images/admin-page/wangkai-avt.png";
import vip_member_04 from "../../assets/images/admin-page/zhuyilong-avt.png";
import vip_member_05 from "../../assets/images/admin-page/yangmi-avt.png";
import vip_member_06 from "../../assets/images/admin-page/duchun-avt.png";
import vip_member_07 from "../../assets/images/admin-page/zhangxinyu-avt.png";

import AddCustomerModal from "../components/AddCustomerModal";
import EditCustomerModal from "../components/EditCustomerModal";
import ViewCustomerModal from "../components/ViewCustomerModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

export interface Customer {
  customerID: number;
  firstName: string;
  lastName: string;
  startDate: string;
  birthday: string;
  gender: string;
  email: string;
  username: string;
  membership: string;
  status: string;
  expenditure: string;
}

const Customers = () => {
  // Fetch customers
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 6;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState<number | null>(null);

  // handle delete
  const handleDelete = async (customerId: number) => {
    try {
      const response = await fetch(
        `http://localhost:7058/api/customers/${customerId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Update the local state to remove the deleted customer
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.customerID !== customerId)
        );
        setIsDeleteModalOpen(false);
        setCustomerToDelete(null);
      } else {
        const error = await response.json();
        console.error("Failed to delete customer:", error);
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const confirmDelete = async () => {
    if (customerToDelete) {
      try {
        const response = await fetch(
          `http://localhost:7058/api/customers/${customerToDelete}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setCustomers(
            customers.filter(
              (customer) => customer.customerID !== customerToDelete
            )
          );
          setIsDeleteModalOpen(false);
          setCustomerToDelete(null);
        }
      } catch (error) {
        console.error("Error deleting customer:", error);
      }
    }
  };

  // Handle Add Customer
  const handleAddCustomer = (newCustomer: Customer) => {
    setCustomers([...customers, newCustomer]);
  };

  // Add these state variables at the top of the Customers component
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Add these handler functions
  const handleEdit = async (customerId: number) => {
    try {
      const response = await fetch(
        `http://localhost:7058/api/customers/${customerId}`
      );
      if (response.ok) {
        const customer = await response.json();
        setSelectedCustomer(customer);
        setIsEditModalOpen(true);
      }
    } catch (error) {
      console.error("Error fetching customer:", error);
    }
  };

  const handleView = async (customerId: number) => {
    try {
      const response = await fetch(
        `http://localhost:7058/api/customers/${customerId}`
      );
      if (response.ok) {
        const customer = await response.json();
        setSelectedCustomer(customer);
        setIsViewModalOpen(true);
      }
    } catch (error) {
      console.error("Error fetching customer:", error);
    }
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        // Use HTTP instead of HTTPS since your server is running on HTTP
        const response = await fetch("http://localhost:7058/api/customers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add CORS headers
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched customers:", data); // Debugging log
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

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
  const formatCurrency = (currency: any) => {
    if (typeof currency !== "number") {
      currency = parseFloat(currency);
    }
    if (isNaN(currency)) {
      return currency; // Return the value as is if it's not a valid number
    }
    return `$${currency.toLocaleString("de-DE")}`;
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

  // pagination
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

  // sort options
  const sortOptions = [
    { value: "all-customers", label: "All Customers" },
    { value: "all-basic", label: "Basic Membership" },
    { value: "all-silver", label: "Silver Membership" },
    { value: "all-vip", label: "V.I.P Membership" },
  ];

  return (
    <div className="customers-container">
      {/* header wrapper */}
      <div className="header-wrapper">
        {/* total clients */}
        <CardHeader
          title="Total Clients"
          number={1808}
          iconClass="ph--user-light"
        />
        {/* members */}
        <CardHeader title="Members" number={826} iconClass="ph--user-light" />
        {/* new members */}
        <CardHeader
          title="New Members"
          number={206}
          iconClass="ph--user-plus-light"
        />
        {/* vip members */}
        <CardLarge title="VIP Members" number={628} image={vipMembers} />
      </div>
      {/* customer tbl */}
      <div className="tbl-container">
        {/* header */}
        <TableHeader
          title="All Customers"
          sortOptions={sortOptions}
          onAddClick={() => setIsModalOpen(true)}
        />
        <AddCustomerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddCustomer}
        />
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
                <tr key={customer.customerID}>
                  <td className="id">{customer.customerID}</td>
                  <td>
                    {customer.firstName} {customer.lastName}
                  </td>
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
                    {formatCurrency(customer.expenditure)}
                  </td>
                  <td className="action-btn">
                    <ActionButton
                      type="edit"
                      onClick={() => {
                        setSelectedCustomer(customer);
                        setIsEditModalOpen(true);
                      }}
                    />
                    <ActionButton
                      type="delete"
                      onClick={() => {
                        setCustomerToDelete(customer.customerID);
                        setIsDeleteModalOpen(true);
                      }}
                    />
                    <ViewCustomerModal
                      isOpen={isViewModalOpen}
                      onClose={() => setIsViewModalOpen(false)}
                      customer={selectedCustomer}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Modals outside of the mapping */}
        <EditCustomerModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          customer={selectedCustomer}
          onUpdate={(updatedCustomer) => {
            setCustomers((prevCustomers) =>
              prevCustomers.map((c) =>
                c.customerID === updatedCustomer.customerID
                  ? updatedCustomer
                  : c
              )
            );
            setIsEditModalOpen(false);
          }}
        />

        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => customerToDelete && handleDelete(customerToDelete)}
          customerName={
            customers.find((c) => c.customerID === customerToDelete)
              ? `${
                  customers.find((c) => c.customerID === customerToDelete)
                    ?.firstName
                } ${
                  customers.find((c) => c.customerID === customerToDelete)
                    ?.lastName
                }`
              : ""
          }
        />

        <ViewCustomerModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          customer={selectedCustomer}
        />
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

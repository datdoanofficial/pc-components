import React from "react";
import "./ViewCustomerModal.scss";

interface Customer {
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

interface ViewCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer: Customer | null;
}

const ViewCustomerModal: React.FC<ViewCustomerModalProps> = ({
  isOpen,
  onClose,
  customer,
}) => {
  if (!isOpen || !customer) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Customer Details</h2>
        <div className="customer-details">
          <div className="detail-row">
            <span className="label">ID:</span>
            <span className="value">{customer.customerID}</span>
          </div>
          <div className="detail-row">
            <span className="label">Name:</span>
            <span className="value">{`${customer.firstName} ${customer.lastName}`}</span>
          </div>
          <div className="detail-row">
            <span className="label">Start Date:</span>
            <span className="value">{formatDate(customer.startDate)}</span>
          </div>
          <div className="detail-row">
            <span className="label">Birthday:</span>
            <span className="value">{formatDate(customer.birthday)}</span>
          </div>
          <div className="detail-row">
            <span className="label">Gender:</span>
            <span className="value">{customer.gender}</span>
          </div>
          <div className="detail-row">
            <span className="label">Email:</span>
            <span className="value">{customer.email}</span>
          </div>
          <div className="detail-row">
            <span className="label">Username:</span>
            <span className="value">{customer.username}</span>
          </div>
          <div className="detail-row">
            <span className="label">Membership:</span>
            <span className="value">{customer.membership}</span>
          </div>
          <div className="detail-row">
            <span className="label">Status:</span>
            <span className="value">{customer.status}</span>
          </div>
          <div className="detail-row">
            <span className="label">Expenditure:</span>
            <span className="value">
              ${Number(customer.expenditure).toLocaleString()}
            </span>
          </div>
        </div>
        <div className="modal-actions">
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomerModal;

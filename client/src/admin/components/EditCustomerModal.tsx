import React, { useState, useEffect } from "react";
import "./EditCustomerModal.scss";

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

interface EditCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer: Customer | null;
  onUpdate: (updatedCustomer: Customer) => void;
}

const EditCustomerModal: React.FC<EditCustomerModalProps> = ({
  isOpen,
  onClose,
  customer,
  onUpdate,
}) => {
  const [formData, setFormData] = useState<Customer>({
    customerID: 0,
    firstName: "",
    lastName: "",
    startDate: new Date().toISOString(),
    birthday: "",
    gender: "Male",
    email: "",
    username: "",
    membership: "Basic",
    status: "Active",
    expenditure: "0",
  });

  useEffect(() => {
    if (customer) {
      // Parse the date and keep it in local timezone without adjusting
      const localDate = new Date(customer.birthday);
      // Get YYYY-MM-DD format for input
      const formattedBirthday = localDate.toLocaleDateString("en-CA"); // en-CA gives YYYY-MM-DD format

      setFormData({
        ...customer,
        birthday: formattedBirthday,
      });
    }
  }, [customer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Format date to match server expectation
      const submissionData = {
        ...formData,
        birthday: new Date(formData.birthday).toISOString(),
      };

      const response = await fetch(
        `http://localhost:7058/api/customers/${customer?.customerID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (response.ok) {
        onUpdate(formData);
        onClose();
      }
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="Birthday"
              value={formData.birthday}
              onChange={(e) =>
                setFormData({ ...formData, birthday: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <select
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <select
              value={formData.membership}
              onChange={(e) =>
                setFormData({ ...formData, membership: e.target.value })
              }
            >
              <option value="Basic">Basic</option>
              <option value="Silver">Silver</option>
              <option value="VIP">VIP</option>
            </select>
          </div>
          <div className="form-group">
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="Expenditure"
              value={formData.expenditure}
              onChange={(e) =>
                setFormData({ ...formData, expenditure: e.target.value })
              }
              required
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="submit-btn">
              Update Customer
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomerModal;

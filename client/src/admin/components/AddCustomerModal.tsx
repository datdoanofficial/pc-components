import React, { useState } from "react";
import "./AddCustomerModal.scss";

interface AddCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (customer: any) => void;
}

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "Male",
    email: "",
    username: "",
    password: "",
    membership: "Basic",
    status: "Active",
    expenditure: "0",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const customerData = {
        ...formData,
        startDate: new Date().toISOString(),
        expenditure: parseFloat(formData.expenditure), // Convert string to number
        membership: formData.membership, // Keep the selected membership
        status: formData.status, // Keep the selected status
      };

      const response = await fetch("http://localhost:7058/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        const newCustomer = await response.json();
        onAdd(newCustomer);
        onClose();
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          birthday: "",
          gender: "Male",
          email: "",
          username: "",
          password: "",
          membership: "Basic",
          status: "Active",
          expenditure: "0",
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Customer</h2>
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
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
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
              Add Customer
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

export default AddCustomerModal;

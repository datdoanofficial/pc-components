import React from "react";
import "./DeleteConfirmModal.scss";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  customerName: string;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  customerName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="delete-modal-content">
        <h2>Delete Customer</h2>
        <p>Are you sure you want to delete customer "{customerName}"?</p>
        <p className="warning">This action cannot be undone.</p>
        <div className="modal-actions">
          <button className="delete-btn" onClick={onConfirm}>
            Delete
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;

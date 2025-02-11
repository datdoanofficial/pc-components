// client/src/admin/components/ActionButton.tsx
import React from "react";
import "./ActionButton.scss";

interface ActionButtonProps {
  type: "edit" | "delete" | "view";
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ type, onClick }) => {
  const getIconClass = () => {
    switch (type) {
      case "edit":
        return "fluent--edit-48-filled";
      case "delete":
        return "fluent--delete-48-filled";
      case "view":
        return "fluent--eye-48-filled";
      default:
        return "";
    }
  };

  const getLabel = () => {
    switch (type) {
      case "edit":
        return "Edit";
      case "delete":
        return "Delete";
      case "view":
        return "View";
      default:
        return "";
    }
  };

  return (
    <div className={`${type}-btn`} onClick={onClick}>
      <span className={`${getIconClass()} icon`}></span>
      {getLabel()}
    </div>
  );
};

export default ActionButton;

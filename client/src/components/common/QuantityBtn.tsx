import React, { useState, useEffect } from "react";
import "./QuantityBtn.scss";

type Props = {
  initialQuantity: number;
  showTitle?: boolean; // Add a prop to control the visibility of the title
  onQuantityChange?: (quantity: number) => void; // Add a callback prop for quantity change
};

const QuantityBtn = ({
  initialQuantity,
  showTitle = true,
  onQuantityChange,
}: Props) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  // Quantity handlers
  const handleMinusClick = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, prevQuantity - 1);
      if (onQuantityChange) onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handlePlusClick = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      if (onQuantityChange) onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="quantity">
      {showTitle && <p className="title">Quantity:</p>}
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
  );
};

export default QuantityBtn;

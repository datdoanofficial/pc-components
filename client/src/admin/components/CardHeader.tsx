// client/src/admin/components/CardHeader.tsx
import React from "react";
import "./CardHeader.scss";

interface CardHeaderProps {
  title: string;
  number: number;
  percentage?: string;
  iconClass: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  number,
  percentage,
  iconClass,
}) => {
  return (
    <div className="card-header area">
      <div className="heading">
        <div className="title">{title}</div>
        <div className="icon">
          <span className={iconClass}></span>
        </div>
      </div>
      <div className="value">
        <div className="number">{number}</div>
        {percentage && <div className="percentage">{percentage}</div>}
      </div>
    </div>
  );
};

export default CardHeader;

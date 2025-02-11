// client/src/admin/components/CardLarge.tsx
import React from "react";
import "./CartLarge.scss";

interface CardLargeProps {
  title: string;
  number: number;
  image: string[];
}

const CardLarge: React.FC<CardLargeProps> = ({ title, number, image }) => {
  return (
    <div className="card-large area">
      <div className="heading">
        <div className="title">{title}</div>
      </div>
      <div className="value">
        <div className="number">{number}</div>
        <div className="list-vip-members">
          {image.slice(0, 7).map((avatar, index) => (
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
          {image.length > 7 && <span className="more-vip-members">+10</span>}
        </div>
      </div>
    </div>
  );
};

export default CardLarge;

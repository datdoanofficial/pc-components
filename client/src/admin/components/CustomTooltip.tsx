import React from "react";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const totalInvoices = 1145;

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    const displayValue =
      name === "Total Invoices"
        ? totalInvoices
        : Math.round((value / 100) * totalInvoices);

    return (
      <div className="custom-tooltip">
        <p className="label">{`${name} : ${displayValue}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;

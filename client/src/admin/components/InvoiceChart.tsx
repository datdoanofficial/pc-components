import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./InvoiceChart.scss";

const data = [
  { name: "Total Paid", value: 36.2, color: "#A6ABFF" },
  { name: "Total Unpaid", value: 27.4, color: "#FC977D" },
  { name: "Total Pending", value: 25, color: "#B47459" },
  { name: "Total Cancelled", value: 11.4, color: "#5A5A5A" },
];

const totalInvoices = 1145;

const formatNumberWithDots = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  index: number;
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className={`pie-label`}
    >
      {`${data[index].value}%`}
    </text>
  );
};

const Legend = ({
  onHover,
  onLeave,
}: {
  onHover: (index: number) => void;
  onLeave: () => void;
}) => (
  <div className="legend">
    <div className="legend-line">
      <div
        className="legend-item"
        onMouseEnter={() => onHover(0)}
        onMouseLeave={onLeave}
      >
        <span
          className="legend-color"
          style={{ backgroundColor: data[0].color }}
        ></span>
        Total Paid
      </div>
      <div
        className="legend-item"
        onMouseEnter={() => onHover(1)}
        onMouseLeave={onLeave}
      >
        <span
          className="legend-color"
          style={{ backgroundColor: data[1].color }}
        ></span>
        Total Unpaid
      </div>
    </div>
    <div className="legend-line">
      <div
        className="legend-item"
        onMouseEnter={() => onHover(2)}
        onMouseLeave={onLeave}
      >
        <span
          className="legend-color"
          style={{ backgroundColor: data[2].color }}
        ></span>
        Total Pending
      </div>
      <div
        className="legend-item"
        onMouseEnter={() => onHover(3)}
        onMouseLeave={onLeave}
      >
        <span
          className="legend-color"
          style={{ backgroundColor: data[3].color }}
        ></span>
        Total Cancelled
      </div>
    </div>
  </div>
);

const InvoiceChart = () => {
  const [dimensions, setDimensions] = useState({
    innerRadius: 0,
    outerRadius: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      setDimensions({
        innerRadius: viewportWidth * 0.06, // Adjusted inner radius
        outerRadius: viewportWidth * 0.09, // Adjusted outer radius
      });
    };

    handleResize(); // Set initial dimensions
    window.addEventListener("resize", handleResize); // Update dimensions on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (index: number | null) => {
    const segments = document.querySelectorAll(".pie-segment");
    const labels = document.querySelectorAll(".pie-label");
    const legendItems = document.querySelectorAll(".legend-item");
    segments.forEach((segment, i) => {
      if (i === index) {
        segment.classList.remove("not-hovered");
      } else {
        segment.classList.add("not-hovered");
      }
    });
    labels.forEach((label, i) => {
      if (i === index) {
        label.classList.remove("not-hovered");
      } else {
        label.classList.add("not-hovered");
      }
    });
    legendItems.forEach((item, i) => {
      if (i === index) {
        item.classList.remove("not-hovered");
      } else {
        item.classList.add("not-hovered");
      }
    });
  };

  const handleMouseLeave = () => {
    const segments = document.querySelectorAll(".pie-segment");
    const labels = document.querySelectorAll(".pie-label");
    const legendItems = document.querySelectorAll(".legend-item");
    segments.forEach((segment) => {
      segment.classList.remove("not-hovered");
    });
    labels.forEach((label) => {
      label.classList.remove("not-hovered");
    });
    legendItems.forEach((item) => {
      item.classList.remove("not-hovered");
    });
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          {/* Outer Pie for values */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={dimensions.innerRadius}
            outerRadius={dimensions.outerRadius}
            stroke="none"
            dataKey="value"
            label={renderCustomLabel}
            labelLine={false}
            onMouseLeave={handleMouseLeave}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                className="pie-segment"
                onMouseEnter={() => handleMouseEnter(index)}
              />
            ))}
          </Pie>
          {/* Inner Pie for total invoices */}
          <Pie
            data={[{ name: "Total Invoices", value: 1 }]}
            cx="50%"
            cy="50%"
            innerRadius={dimensions.innerRadius * 0.75} // Adjusted for inner pie
            outerRadius={dimensions.innerRadius} // Adjusted for inner pie
            stroke="none"
            fill="#2a2a2a"
            dataKey="value"
            isAnimationActive={false}
            labelLine={false}
            onMouseEnter={() => handleMouseEnter(null)} // Ensure tooltip is not shown
            style={{ pointerEvents: "none" }}
          >
            <Cell fill="#2a2a2a" />
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="total-invoices"
          >
            <tspan x="50%" dy="-0.25em" fontSize="1rem" fill="#fff">
              {formatNumberWithDots(totalInvoices)}
            </tspan>
            <tspan x="50%" dy="1.9em" className="invoices-text" fill="#fff">
              Invoices
            </tspan>
          </text>
        </PieChart>
      </ResponsiveContainer>
      <Legend onHover={handleMouseEnter} onLeave={handleMouseLeave} />
    </>
  );
};

export default InvoiceChart;

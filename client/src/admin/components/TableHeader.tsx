import React from "react";
import "./TableHeader.scss";

interface TableHeaderProps {
  title: string;
  sortOptions: { value: string; label: string }[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ title, sortOptions }) => {
  return (
    <div className="header-wrapper">
      {/* toolbar */}
      <div className="toolbar">
        <div className="title">{title}</div>
        {/* search box */}
        <div className="search-box">
          <span className="carbon--search icon"></span>
          <input type="text" placeholder="Search..." />
        </div>
        {/* sort options */}
        <div className="sort-options">
          <select>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="tabler--chevron-down icon"></span>
        </div>
      </div>
      {/* action button */}
      <div className="action-buttons">
        {/* export button */}
        <button className="export-btn">
          <span className="ant-design--export-outlined icon"></span>
          Export
        </button>
        {/* add button */}
        <button className="add-btn">
          <span className="ic--round-plus icon"></span>
          New Customer
        </button>
      </div>
    </div>
  );
};

export default TableHeader;

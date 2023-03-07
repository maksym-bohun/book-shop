import React from "react";

const Select = ({ options, value, onChange, onClick }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onClick={onClick}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.value === "default" ? true : false}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

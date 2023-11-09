import React from "react";

function Select({ label, options, value, ...props}) {
  return (
    <div className="px-1">
      <label
        htmlFor="countries"
        className="block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        id="countries"
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 pr-9 pl-3 focus:shadow-blueRing duration-200"
      >
        {options.map((option, index) => {
          return (
            <option key={index} selected={value == option ? true : false} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;

import React from "react";

function Input({
  label,
  type = "text",
  id,
  placeholder,
  value,
  onChange,
  disabled,
  ...props
}) {
  return (
    <div>
      {label && (
        <label
          for="first_name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className="bg-gray-50 ring-1 ring-gray-300 text-gray-900 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none rounded-lg block w-full p-2.5 disabled:bg-gray-200 disabled:cursor-not-allowed"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

export default Input;

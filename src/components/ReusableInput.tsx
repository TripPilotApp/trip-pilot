import React from "react";
import { ReusableInputProps } from "../utils/interfaces";
import { twMerge } from "tailwind-merge";

const ReusableInput: React.FC<ReusableInputProps> = ({
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  options,
  rows,
  className,
}) => {
  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={twMerge("form_input shadow", className)}
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            rows={rows}
            className={twMerge("form_input shadow", className)}
          />
        );
      default:
        return (
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={twMerge("form_input shadow w-full", className)}
          />
        );
    }
  };

  return (
    <div className="flex flex-col w-full">
      {renderInput()}
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default ReusableInput;

import React from "react";

const Button = ({ children, variant = "primary", size = "md", onClick, disabled }) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition duration-200 ease-in-out focus:outline-none";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-300",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

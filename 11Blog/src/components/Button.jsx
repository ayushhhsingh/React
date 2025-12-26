import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {" "}
      {children}{" "}
    </button>
  );
}

export default Button;

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center w-full p-2 text-sm font-medium rounded-lg
              bg-red-600 text-white hover:bg-red-500 active:bg-red-700
              focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1
              transition duration-100 ease-in-out
              disabled:opacity-50 disabled:cursor-not-allowed
              ${className}`}
    >
      {children}
    </button>
  );
}

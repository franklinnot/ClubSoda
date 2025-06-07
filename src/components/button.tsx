import React from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  className = "",
  disabled,
  children,
  ...props
}: IProps) {
  const baseClasses = `inline-flex justify-center items-center px-4 py-2 
                      transition ease-in-out duration-150 border 
                      border-transparent rounded-md font-medium text-sm 
                      text-white bg-red-500 hover:bg-rose-600 
                      focus:bg-rose-600 active:bg-red-600 focus:outline-none 
                      focus:ring-2 focus:ring-rose-600 focus:ring-offset-2`;
  const disabledClasses = disabled ? "opacity-25" : "";

  return (
    <button
      className={twMerge(baseClasses, disabledClasses, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

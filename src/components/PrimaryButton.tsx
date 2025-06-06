import React from "react";

interface IProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: ()=>void
}

export default function PrimaryButton({
  className = "",
  disabled,
  children,
  ...props
}: IProps) {
  return (
    <button
      {...props}
      className={
        `inline-flex justify-center items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-medium text-base text-white hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}

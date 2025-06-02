import React from "react";

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  value?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function InputLabel({
  value,
  className = '',
  children,
  ...props
}: InputLabelProps) {
  return (
    <label
      {...props}
      className={`block font-normal text-sm text-[#444444] ${className}`}
    >
      {value ?? children}
    </label>
  );
}
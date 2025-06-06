import React from "react";

export default function Checkbox({
    className = '',
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'size-4 rounded-sm border accent-red-500' +
                className
  }
        />
    );
}
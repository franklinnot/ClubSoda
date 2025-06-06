import React, { forwardRef, useEffect, useRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isFocused?: boolean;
    error?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            type = "text",
            className = "",
            isFocused = false,
            disabled = false,
            value,
            error,
            onChange,
            maxLength = 255,
            required = false,
            ...props
        },
        ref
    ) => {
        const internalRef = useRef<HTMLInputElement>(null);
        const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;

        useEffect(() => {
            if (isFocused && inputRef.current) {
                inputRef.current.focus();
            }
        }, [isFocused, inputRef]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;

            if (type === "number") {
                if (/^[0-9]*$/.test(value) || value === "") {
                    onChange?.(e);
                }
            } else if (type === "float") {
                if (/^[0-9]*\.?([0-9]*)?$/.test(value) || value === "") {
                    onChange?.(e);
                }
            } else {
                onChange?.(e);
            }
        };

        const inputType = type === "number" || type === "float" ? "text" : type;

        return (
            <input
                {...props}
                value={value}
                type={inputType}
                className={`w-full px-3 py-2 border rounded-md text-sm transition-all duration-200
                        placeholder-[#979797] focus:outline-none focus:ring-1 focus:ring-[#CDCDCD] focus:border-[#CDCDCD]  
                    ${className} 
                    ${disabled ? "opacity-70 cursor-not-allowed bg-gray-100" : ""}
                    ${error ? "border-red-500" : "border-gray-300"}
                    ${value ? "bg-blue-50" : ""}`}
                ref={inputRef}
                onChange={handleChange}
                disabled={disabled}
                required={required}
                maxLength={maxLength}
            />
        );
    }
);

export default TextInput;

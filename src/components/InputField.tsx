import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    id: string;
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    isFocused?: boolean;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
}

export default function InputField({
    className = "",
    id,
    label,
    type = "text",
    value,
    onChange,
    error,
    autoComplete = "off",
    isFocused = false,
    required = false,
    placeholder = "",
    disabled = false,
    maxLength = 255,
    ...props
}: InputFieldProps) {
    return (
        <div className={className}>
            <InputLabel htmlFor={id} value={label} />

            <TextInput
                id={id}
                type={type}
                name={id}
                value={value}
                className="mt-1 block w-full"
                autoComplete={autoComplete}
                isFocused={isFocused}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                error={!!error}
                disabled={disabled}
                maxLength={maxLength}
                {...props}
            />

            {/* <InputError message={error} className="mt-2" /> */}
        </div>
    );
}

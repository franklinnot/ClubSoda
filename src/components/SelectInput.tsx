import React, { useState, useMemo, useRef, useEffect } from "react"; // Added React import
import { ArrowDown } from "./Icons";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

// Define the type for individual items in the select list
interface Item {
  id: string;
  name: string;
}

// Define the props interface for SelectInput
interface SelectInputProps {
  id?: string; // Made id optional as it might not always be needed
  placeholder?: string;
  className?: string;
  items?: Item[];
  value: Item | null; // Value can be an Item object or null
  onChange: (value: Item | null) => void; // Typed onChange handler
  disabled?: boolean;
  error?: string | null; // Error can be a string message or null
  isFocused?: boolean;
  required?: boolean;
}

export default function SelectInput({
  id,
  placeholder = "Selecciona una opción...",
  className = "",
  items = [],
  value,
  onChange,
  disabled = false,
  error = null,
  isFocused = false,
  required = false,
}: SelectInputProps) {
  const [query, setQuery] = useState<string>(""); // Typed state
  const inputRef = useRef<HTMLDivElement>(null); // Typed ref for the div
  const comboboxInputRef = useRef<HTMLInputElement>(null); // Typed ref for ComboboxInput
  const [inputWidth, setInputWidth] = useState<string>("auto"); // Typed state

  useEffect(() => {
    if (!inputRef.current) return;
    const updateWidth = () => {
      const width = inputRef.current!.getBoundingClientRect().width; // Added non-null assertion
      setInputWidth(`${width}px`);
    };
    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(inputRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (isFocused && comboboxInputRef.current) {
      comboboxInputRef.current.focus();
    }
  }, [isFocused]);

  const filteredItems = useMemo<Item[]>(() => {
    // Typed return value of useMemo
    const queryString = query.toLowerCase().trim();
    if (queryString === "") return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(queryString)
    );
  }, [items, query]);

  const displayValue = (item: Item | null) => (item ? item.name : ""); // Typed function parameter

  const baseOptionsContainerClasses =
    "mt-1.5 max-h-60 overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-gray-300 ring-opacity-5 focus:outline-none empty:hidden";
  const baseOptionClasses =
    "relative cursor-default select-none py-2 px-4 text-gray-600 data-[focus]:bg-indigo-100";

  return (
    <div className={`w-full ${className}`}>
      <Combobox
        value={value}
        onChange={onChange}
        onClose={() => setQuery("")}
        disabled={disabled}
      >
        {(
          { open }: { open: boolean } // Typed render prop parameter
        ) => (
          <div>
            <div className="relative" ref={inputRef}>
              <ComboboxInput
                ref={comboboxInputRef}
                id={id}
                className={`w-full border-gray-300 outline-none border py-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm text-sm pl-3
                            ${
                              disabled
                                ? " opacity-70 cursor-not-allowed bg-gray-100 "
                                : ""
                            }
                            ${error ? " border-red-500" : ""}
                            ${value && value.name ? " bg-blue-50 " : " "}`}
                displayValue={displayValue as (item: unknown) => string} // Added type assertion for displayValue compatibility with Headless UI
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement> // Typed event
                ) => setQuery(event.target.value)}
                placeholder={placeholder}
                autoComplete="off"
              />

              {required && (
                <input
                  type="text"
                  value={value ? value.id : ""}
                  required
                  className="sr-only top-8 right-24"
                  aria-hidden="true"
                  tabIndex={-1}
                  onChange={() => {}}
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                    e.target.blur()
                  } // Typed event
                />
              )}

              <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ArrowDown
                  className={`text-gray-400 transition-transform duration-150 transform ${
                    open ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  strokeWidth={1.8}
                  size="20"
                />
              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor="bottom"
              transition
              className={`${baseOptionsContainerClasses} transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0:`}
              style={{ width: inputWidth }}
            >
              {filteredItems.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-sm text-gray-700">
                  Sin resultados.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <ComboboxOption
                    key={item.id}
                    value={item}
                    className={`${baseOptionClasses} data-[selected]:font-semibold data-[selected]:bg-indigo-50`}
                  >
                    <span className="block truncate">{item.name}</span>
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </div>
        )}
      </Combobox>
    </div>
  );
}

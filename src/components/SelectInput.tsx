import React, { useState, useMemo, useRef, useEffect } from "react";
import { ArrowDown } from "./Icons";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
} from "@headlessui/react";

// Define the type for individual items in the select list
interface Item {
  id: string;
  name: string;
}

// Define the props interface for SelectInput
interface SelectInputProps {
  id?: string;
  placeholder?: string;
  className?: string;
  items?: Item[];
  value: Item | null;
  onChange: (value: Item | null) => void;
  disabled?: boolean;
  error?: string | null;
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
  const [query, setQuery] = useState<string>("");
  const [open, setOpen] = useState(false); // State to manage dropdown open/close
  const inputRef = useRef<HTMLDivElement>(null);
  const comboboxInputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState<string>("auto");
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the main container

  // Close Combobox when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!inputRef.current) return;
    const updateWidth = () => {
      const width = inputRef.current!.getBoundingClientRect().width;
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
    const queryString = query.toLowerCase().trim();
    if (queryString === "") return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(queryString)
    );
  }, [items, query]);

  const displayValue = (item: Item | null) => (item ? item.name : "");

  // Base classes for options container and individual options
  const baseOptionsContainerClasses =
    "mt-1 max-h-[188px] absolute overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-gray-200 z-20 ring-opacity-5 focus:outline-none empty:hidden transition duration-100 ease-in-out";
  const baseOptionClasses =
    "relative cursor-default select-none py-2 px-4 text-gray-600 data-[focus]:bg-indigo-100";

  return (
    <div className={`w-full ${className}`} ref={containerRef}>
      <Combobox
        value={value}
        onChange={(selected) => {
          setOpen(false); // Close dropdown on selection
          onChange(selected);
        }}
        onClose={() => setQuery("")}
        disabled={disabled}
      >
        {() => (
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
                displayValue={displayValue as (item: unknown) => string}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setQuery(event.target.value)
                }
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
                  }
                />
              )}

              <ComboboxButton
                className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
                onClick={() => setOpen((prev) => !prev)} // Toggle open state on button click
              >
                <ArrowDown
                  className={`text-gray-400 transition-transform duration-150 transform ${
                    open ? "rotate-180" : "" // Use the 'open' state for rotation
                  }`}
                  aria-hidden="true"
                  strokeWidth={1.8}
                  size="20"
                />
              </ComboboxButton>
            </div>

            {/* Elements container */}
            {open && ( // Conditionally render the div based on 'open' state
              <div
                className={`${baseOptionsContainerClasses} ${
                  open ? "flex flex-col" : "hidden"
                }`}
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
              </div>
            )}
          </div>
        )}
      </Combobox>
    </div>
  );
}

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { FormValues } from "./DemoForm";

type SearchableDropdownProps = {
  field: {
    name: keyof FormValues;
    label: string;
    options?: string[];
    colSpan?: number;
  };
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  watch: UseFormWatch<FormValues>;
  errors: FieldErrors<FormValues>;
};

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  field,
  register,
  setValue,
  watch,
  errors,
}) => {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Watch the form value to sync with external changes
  const formValue = watch(field.name);

  // Update local state when form value changes
  useEffect(() => {
    if (formValue && formValue !== selectedValue) {
      setSelectedValue(formValue as string);
      setSearch(formValue as string);
    }
  }, [formValue, selectedValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        // Reset search to selected value when clicking outside
        setSearch(selectedValue);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedValue]);

  const handleSelect = (value: string) => {
    setValue(field.name, value, { shouldValidate: true });
    setSelectedValue(value);
    setSearch(value);
    setShowDropdown(false);
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
    // Clear search when focusing to show all options
    setSearch("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowDropdown(true);
  };

  // Filter options based on search, but show all if search is empty or matches selected value
  const filteredOptions = field.options?.filter((option) => {
    if (!search || search === selectedValue) return true;
    return option?.toLowerCase()?.includes(search?.toLowerCase());
  });

  return (
    <div
      style={{
        background:
          "linear-gradient(128.65deg, rgba(255, 255, 255, 0.2) -75.81%, rgba(255, 255, 255, 0) 154.59%) 1",
      }}
      className={`relative w-full rounded-[4px]`}
      ref={dropdownRef}
    >
      <div className="relative flex items-center">
        <input
          type="text"
          autoComplete="off"
          value={search}
          onFocus={handleInputFocus}
          placeholder={`Select ${field.label}`}
          style={{
            background:
              "linear-gradient(125.31deg, rgba(255, 255, 255, 0.1) -56.15%, rgba(255, 255, 255, 0) 104.12%)",
          
          }}
          className={`w-full m-1  px-2 py-[9px] md:px-3 md:py-[7px] border rounded-[4px]  text-[12px] md:text-[13px] text-[#B1B1B1] placeholder:text-gray-500 cursor-pointer hover:border-[#606162] focus:outline-none ${
            errors[field.name] ? "border-red-500" : "border-[#E5E5E533]"
          }`}
          {...register(field.name)}
        />
        <div
          className="absolute right-2 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Image
            src="/dropdown-orange.svg"
            alt="arrow"
            width={16}
            height={16}
          />
        </div>

        {showDropdown && (
          <div
            className={`absolute top-8 mt-1 bg-[#121212]  rounded-md shadow-md max-h-40 overflow-y-auto z-10 w-full rounded-tl-none rounded-tr-none`}
          >
            {filteredOptions?.length === 0 ? (
              <div className="px-3 py-2 text-[12px] text-gray-500">
                No options found
              </div>
            ) : (
              filteredOptions?.map((option) => (
                <div
                  key={option}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-800 transition text-[12px] text-[#B1B1B1] ${
                    selectedValue === option ? "bg-gray-700" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))
            )}
          </div>
        )}
      </div>
      {errors[field.name] && (
        <div className="col-span-2">
          <p className="text-red-500 text-xs">
            {errors[field.name]?.message?.toString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;

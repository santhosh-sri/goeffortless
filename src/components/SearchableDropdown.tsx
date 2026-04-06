import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

type SearchableDropdownProps<T extends FieldValues = FieldValues> = {
  field: {
    name: keyof T & string;
    label: string;
    options?: string[];
    colSpan?: number;
    placeholder?: string;
  };
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  watch: UseFormWatch<T>;
  errors: FieldErrors<T>;
};

const SearchableDropdown = <T extends FieldValues = FieldValues>({
  field,
  register,
  setValue,
  watch,
  errors,
}: SearchableDropdownProps<T>) => {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Watch the form value to sync with external changes
  const fieldName = field.name as any;
  const formValue = watch(fieldName);

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
    setValue(fieldName, value as any, { shouldValidate: true });
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
          placeholder={field.placeholder || `Select ${field.label}`}
          style={{
            background:
              "linear-gradient(125.31deg, rgba(255, 255, 255, 0.1) -56.15%, rgba(255, 255, 255, 0) 104.12%)",
          }}
          className={`w-full px-2 py-[9px] md:px-3 md:py-[7px] border rounded-[4px]  text-[12px] md:text-[13px] text-[#B1B1B1] placeholder-[#B1B1B1] cursor-pointer hover:border-[#606162] focus:outline-none ${
            errors[fieldName] ? "border-red-500" : "border-[#E5E5E533]"
          }`}
          {...register(fieldName)}
        />
        <div
          className="absolute right-4 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Image
            src="/dropdown-orange.svg"
            alt="arrow"
            width={12}
            height={12}
          />
        </div>

        {showDropdown && (
          <div
            className={`absolute top-8 bg-[#121212] rounded-md shadow-md max-h-40 overflow-y-auto z-10 w-full rounded-tl-none rounded-tr-none`}
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
      {errors[fieldName] && (
        <div className="col-span-2">
          <p className="text-red-500 text-xs">
            {(errors[fieldName] as any)?.message?.toString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;

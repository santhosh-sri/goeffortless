import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { cn } from "@/lib/cn";
import { INPUT_CLASSES } from "./InputField";

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

  const error = (errors[fieldName] as any)?.message?.toString();

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative flex items-center">
        <input
          type="text"
          autoComplete="off"
          value={search}
          onFocus={handleInputFocus}
          placeholder={field.placeholder || `Select ${field.label}`}
          aria-invalid={error ? true : undefined}
          className={cn(
            INPUT_CLASSES,
            "cursor-pointer pr-9",
            error && "border-danger focus:border-danger focus:ring-danger/20"
          )}
          {...register(fieldName)}
          onChange={handleInputChange}
        />
        <button
          type="button"
          aria-label="Toggle options"
          className="absolute right-3 inline-flex h-6 w-6 items-center justify-center"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Image
            src="/dropdown-orange.svg"
            alt=""
            width={12}
            height={12}
            className={cn("transition-transform duration-200", showDropdown && "rotate-180")}
          />
        </button>

        {showDropdown && (
          <div className="absolute left-0 top-full z-10 mt-1 max-h-40 w-full overflow-y-auto rounded-sm border border-line bg-surface-raised shadow-lift">
            {filteredOptions?.length === 0 ? (
              <div className="px-3 py-2 text-label text-content-subtle">
                No options found
              </div>
            ) : (
              filteredOptions?.map((option) => (
                <div
                  key={option}
                  className={cn(
                    "cursor-pointer px-3 py-2 text-label text-content transition-colors hover:bg-surface-hover",
                    selectedValue === option && "bg-accent-subtle text-accent"
                  )}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))
            )}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-caption text-danger">{error}</p>}
    </div>
  );
};

export default SearchableDropdown;

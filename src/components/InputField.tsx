import { UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/cn";

type InputFieldProps = {
  field: {
    name: string;
    type: string;
    label: string;
    maxLength?: number;
  };
  register: UseFormRegister<any>;
  error?: string; // Error passed as prop
  placeholder?: string;
};

/** Shared field chrome for the CMS forms: white well, `line` stroke, accent focus ring. */
export const INPUT_CLASSES =
  "w-full rounded-sm border border-line bg-surface px-3 py-2.5 text-body text-content placeholder:text-content-subtle transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

const InputField: React.FC<InputFieldProps> = ({
  field,
  register,
  error,
  placeholder,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (field.name === "phone") {
      const value = e.currentTarget.value;

      // Allow Backspace to delete characters
      if (e.key === "Backspace") {
        return;
      }

      // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      if (e.ctrlKey && ["a", "c", "v", "x"].includes(e.key.toLowerCase())) {
        return;
      }

      // Allow Tab and Arrow keys for navigation
      if (
        ["Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
          e.key
        )
      ) {
        return;
      }

      // Prevent non-numeric characters and prevent entering more than 10 digits
      if (!/[0-9]/.test(e.key) || value.length >= 10) {
        e.preventDefault();
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        {...register(field.name)}
        maxLength={field.maxLength}
        placeholder={placeholder ?? field.label}
        autoComplete="off"
        aria-invalid={error ? true : undefined}
        className={cn(INPUT_CLASSES, error && "border-danger focus:border-danger focus:ring-danger/20")}
        onKeyDown={handleKeyDown}
      />
      {error && <p className="mt-1 text-caption text-danger">{error}</p>}
    </div>
  );
};

export default InputField;

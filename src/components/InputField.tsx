import { UseFormRegister } from "react-hook-form";

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
    <div
      style={{
        background:
          "linear-gradient(128.65deg, rgba(255, 255, 255, 0.2) -75.81%, rgba(255, 255, 255, 0) 154.59%) 1",
      }}
      className="rounded-[4px]"
    >
      <input
        type="text"
        {...register(field.name)}
        maxLength={field.maxLength}
        placeholder={placeholder ?? field.label}
        autoComplete="off"
        style={{
          background:
            "linear-gradient(125.31deg, rgba(255, 255, 255, 0.1) -56.15%, rgba(255, 255, 255, 0) 104.12%)",
        }}
        className={`w-full rounded-[4px] m-1 border px-2 py-[9px] md:px-3 md:py-[7px] text-[#B1B1B1] text-[12px] md:text-[13px] focus:outline-none ${
          error ? "border-red-500" : "border-[#E5E5E533]"
        }`}
        onKeyDown={handleKeyDown}
      />
      {error && (
        <div className="col-span-2">
          <p className="text-red-500 text-xs">{error}</p>
        </div>
      )}
    </div>
  );
};

export default InputField;

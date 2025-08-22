import { FieldErrors, UseFormSetValue, UseFormWatch } from "react-hook-form";

type CheckboxGroupProps = {
  field: {
    name: string;
    options?: string[];
  };
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
  errors: FieldErrors;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ field, watch, setValue, errors }) => {
  const selectedValues = watch(field.name, []) || [];

  const handleCheckboxChange = (value: string) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item:any) => item !== value)
      : [...selectedValues, value];

    setValue(field.name, updatedValues, { shouldValidate: true });
  };

  return (
    <div className="space-y-2 mt-2">
      {field.options?.map((option) => (
        <label key={option} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedValues.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="h-4 w-4  !bg-[linear-gradient(125.31deg,rgba(255,255,255,0.1)_-56.15%,rgba(255,255,255,0)_104.12%)]  border-gray-400 focus:ring-0 checked:border-black cursor-pointer"
          />
          <span className="text-[#B1B1B1] text-[13px]">{option}</span>
        </label>
      ))}
      {errors[field?.name] && (
        <div className="col-span-2">
          <p className="text-red-500 text-xs">{errors[field?.name]?.message?.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default CheckboxGroup;

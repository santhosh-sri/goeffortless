import { partnerFormFields } from "@/data/formFields";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import parse from "html-react-parser";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import InputField from "./InputField";
import SuccessToast from "./SuccessToast";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Custom phone validation function
const validatePhone = (phone: string) => {
  const invalidNumbers = [
    "9999999999",
    "9090909090",
    "8989898989",
    "9898989898",
    "7878787878",
    "6767676767",
    "8888888888",
    "9876543210",
    "6868688668",
    "9999999998",
    "9999999988",
    "9999998888",
    "7777777777",
    "6666666666",
    "9090909998",
    "6868686868",
    "6666677777",
    "9696966999",
  ];

  // Check if phone number is exactly 10 digits
  if (!/^\d{10}$/.test(phone)) {
    return false;
  }

  // Check if it's in the invalid numbers list
  if (invalidNumbers.includes(phone)) {
    return false;
  }

  // Check if first digit is less than 6
  if (parseInt(phone[0]) < 6) {
    return false;
  }

  return true;
};

// Zod validation schema with enhanced phone validation
export const partnerFormSchema = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  workMail: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone number is required").refine(validatePhone, {
    message: "Please enter a valid mobile number",
  }),
  companyName: z.string().min(2, "Company Name is required"),
  numberOfClients: z.string().optional(),
  companyWebsite: z.string().optional(),
  companyDescription: z.string().optional(),
  hearAboutUs: z.string().optional(),
});

export type PartnerFormValues = z.infer<typeof partnerFormSchema>;

const PartnerForm = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    mode: "onSubmit",
  });
  const [showSucessPopup, setShowSucessPopup] = useState<boolean>(false);

  const onSubmit: SubmitHandler<PartnerFormValues> = async (data) => {
    const {
      workMail,
      phone,
      firstName,
      lastName,
      companyName,
      numberOfClients,
      companyWebsite,
      companyDescription,
      hearAboutUs,
    } = data;
    try {
      const payload = {
        email: workMail,
        firstname: firstName,
        lastname: lastName,
        company: companyName,
        no_of_clients: numberOfClients,
        phone,
        website: companyWebsite,
        company_description: companyDescription,
        source: hearAboutUs,
      };

      const response = await axios.post("/api/processlead", payload);
      // Reset form values
      partnerFormFields.forEach(({ name }) =>
        setValue(name as keyof PartnerFormValues, "")
      );
      setShowSucessPopup(true);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Error submitting form, please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      {showSucessPopup && (
        <SuccessToast setShowSucessPopup={setShowSucessPopup} />
      )}
      <div className="md:max-w-[777px] md:mx-auto p-5 md:p-[40px] bg-[#08090A] border-[1px] border-[#E5E5E533] rounded-md text-white max-md:mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 md:gap-6 gap-4"
          noValidate
        >
          {partnerFormFields.map((field) => {
            const { name, label, type, colSpan, validation, placeholder } =
              field;
            const fieldName = name as keyof PartnerFormValues;

            return (
              <div key={name} className={`col-span-${colSpan}`}>
                <label
                  htmlFor={name}
                  className="block md:mb-3 mb-2 font-medium text-sm"
                >
                  {parse(label)}{" "}
                  {validation?.required && (
                    <span className="text-[#F08B32]">*</span>
                  )}
                </label>

                {type === "textarea" ? (
                  <textarea
                    id={name}
                    {...register(fieldName)}
                    placeholder={label}
                    rows={1}
                    style={{
                      background:
                        "linear-gradient(125.31deg, rgba(255, 255, 255, 0.1) -56.15%, rgba(255, 255, 255, 0) 104.12%)",
                      border: "1px solid transparent",
                      borderImage:
                        "linear-gradient(128.65deg, rgba(255, 255, 255, 0.2) -75.81%, rgba(255, 255, 255, 0) 154.59%) 1",
                    }}
                    className={`w-full rounded border px-3 py-2 text-[#B1B1B1] placeholder:text-[13px] focus:outline-none text-[13px] ${
                      errors[fieldName]
                        ? "border-red-500"
                        : "border-[#E5E5E533]"
                    }`}
                  />
                ) : (
                  <InputField
                    field={field}
                    register={register}
                    error={errors[fieldName]?.message} // Pass error as prop instead of entire errors object
                    placeholder={field?.placeholder}
                  />
                )}

                {/* {errors[fieldName] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[fieldName]?.message}
                  </p>
                )} */}
              </div>
            );
          })}

          <div className="col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-fit group relative overflow-hidden max-md:!w-full bg-[#F08B32] text-white font-[500] px-8 py-3 rounded transition-all duration-500 disabled:opacity-50 flex items-center justify-center self-center mx-auto md:text-[16px] text-[14px]"
            >
              <span className="relative inline-flex items-center">
                {isSubmitting ? "Submitting..." : "Become a Partner"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PartnerForm;

import { partnerFormFields } from "@/data/formFields";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import parse from "html-react-parser";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import InputField, { INPUT_CLASSES } from "./InputField";
import { cn } from "@/lib/cn";
import Button from "./ui/Button";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";

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
  // lastName: z.string().min(2, "Last Name is required"),
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

const SERVICE_ID: any = process.env.SERVICE_ID;
const PARTNER_TEMPLATE_ID: any = process.env.PARTNER_TEMPLATE_ID;
const PUBLIC_KEY: any = process.env.PUBLIC_KEY;

const PartnerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    mode: "onSubmit",
  });
  const [showSucessPopup, setShowSucessPopup] = useState<boolean>(false);
  const [showErrorPopup, setShowErrorPopup] = useState<boolean>(false);

  const onSubmit: SubmitHandler<PartnerFormValues> = async (data) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        PARTNER_TEMPLATE_ID,
        {
          firstName: data.firstName,
          workMail: data.workMail,
          phone: data.phone,
          companyName: data.companyName,
          numberOfClients: data.numberOfClients,
          companyWebsite: data.companyWebsite,
          companyDescription: data.companyDescription,
          hearAboutUs: data.hearAboutUs,
        },
        PUBLIC_KEY
      );

      toast.success("Email sent successfully!");
      setShowSucessPopup(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setShowErrorPopup(true);
    }
  };

  return (
    <>
      {showSucessPopup && (
        <SuccessToast setShowSucessPopup={setShowSucessPopup} />
      )}
      {showErrorPopup && (
        <ErrorToast setShowErrorPopup={setShowErrorPopup} />
      )}
      <div className="mx-auto w-full max-w-[777px] rounded-xl border border-line bg-surface p-5 text-content shadow-lift md:p-10">
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
              <div key={name} className={`${colSpan === 1 ? "md:col-span-1" : "md:col-span-2"} col-span-2`}>
                <label
                  htmlFor={name}
                  className="mb-2 block text-label font-medium text-content"
                >
                  {parse(label)}{" "}
                  {validation?.required && (
                    <span className="text-accent">*</span>
                  )}
                </label>

                {type === "textarea" ? (
                  <textarea
                    id={name}
                    {...register(fieldName)}
                    placeholder={placeholder ?? label}
                    rows={3}
                    aria-invalid={errors[fieldName] ? true : undefined}
                    className={cn(
                      INPUT_CLASSES,
                      "resize-y",
                      errors[fieldName] && "border-danger focus:border-danger focus:ring-danger/20"
                    )}
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

          <div className="col-span-2 mt-2 flex justify-center">
            <Button type="submit" disabled={isSubmitting} className="w-full font-semibold sm:w-auto sm:min-w-[220px]">
              {isSubmitting ? "Submitting..." : "Become a Partner"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PartnerForm;

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { trialFormFields } from "../data/formFields";
import InputField from "./InputField";
import SearchableDropdown from "./SearchableDropdown";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";
import parse from "html-react-parser";

const trialFormSchema = z.object({
  clientFirmName: z.string().min(2, "Client Firm Name is required"),
  website: z.string().optional(),
  clientFullName: z.string().min(2, "Client Full Name is required"),
  clientEmail: z.string().email("Invalid email format"),
  clientPhone: z.string().regex(/^\d{10}$/, "Invalid mobile number"),
  clientRole: z.string().min(1, "Please select a role"),
  industryType: z.string().optional(),
  turnover: z.string().optional(),
  partnerName: z.string().optional(),
  businessProblems: z.string().optional(),
  hearAboutUs: z.string().optional(),
});

type TrialFormValues = z.infer<typeof trialFormSchema>;

const SERVICE_ID: any = process.env.SERVICE_ID;
const TEMPLATE_ID: any = process.env.TEMPLATE_ID;
const PUBLIC_KEY: any = process.env.PUBLIC_KEY;

const TrialForm = ({
  setShowForm,
}: {
  setShowForm: (show: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TrialFormValues>({
    resolver: zodResolver(trialFormSchema),
    mode: "onSubmit",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  useEffect(() => {
    if (showSuccessPopup || showErrorPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSuccessPopup, showErrorPopup]);

  const onSubmit: SubmitHandler<TrialFormValues> = async (data) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          clientFirmName: data.clientFirmName,
          website: data.website || "",
          clientFullName: data.clientFullName,
          clientEmail: data.clientEmail,
          clientPhone: data.clientPhone,
          clientRole: data.clientRole,
          industryType: data.industryType || "",
          turnover: data.turnover || "",
          partnerName: data.partnerName || "",
          businessProblems: data.businessProblems || "",
          hearAboutUs: data.hearAboutUs || "",
        },
        PUBLIC_KEY
      );

      setShowSuccessPopup(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setShowErrorPopup(true);
    }
  };

  if (showSuccessPopup) {
    return (
      <SuccessToast
        setShowSucessPopup={setShowSuccessPopup}
        setShowForm={setShowForm}
      />
    );
  }

  if (showErrorPopup) {
    return (
      <ErrorToast
        setShowErrorPopup={setShowErrorPopup}
        setShowForm={setShowForm}
      />
    );
  }

  return (
    <div className="bg-black/75 h-dvh w-dvw flex justify-center items-center fixed top-0 left-0 z-[999]">
      <div className="bg-[#08090A] z-[9999] relative border border-[#E5E5E533] rounded-2xl w-full max-h-[90vh] md:max-w-[800px] flex flex-col mx-5">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-4 md:p-6 md:border-none shrink-0">
          <h2 className="text-white text-[18px] md:text-[24px] font-[300] flex-1 text-center">
            Request a Free{" "}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F08B32] to-[#FFF]">
              Trial
            </span>
          </h2>
          <Image
            onClick={() => setShowForm(false)}
            className="cursor-pointer"
            src="/round-close.svg"
            alt="Close"
            width={24}
            height={24}
          />
        </div>

        {/* Form Content - Scrollable */}
        <div className="flex-1 overflow-y-auto min-h-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 md:gap-6 p-4 md:px-[28px] md:pt-0 pb-4"
          >
            {trialFormFields.map((field) => {
              const fieldName = field.name as keyof TrialFormValues;
              return (
                <div
                  key={field.name}
                  className={`${
                    field.colSpan === 1 ? "md:col-span-1" : "md:col-span-2"
                  } col-span-2 w-full flex flex-col gap-[11px]`}
                >
                  <p className="text-[#FFFFFF] font-normal text-[14px]">
                    {parse(field.label)}
                    {field.validation?.required && (
                      <span className="text-[#F08B32]">*</span>
                    )}
                  </p>

                  {["text", "number", "email"].includes(field.type) && (
                    <InputField
                      field={field}
                      register={register}
                      error={errors[fieldName]?.message}
                      placeholder={field.placeholder}
                    />
                  )}

                  {field.type === "textarea" && (
                    <textarea
                      {...register(fieldName)}
                      placeholder={field.placeholder || field.label}
                      rows={2}
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
                  )}

                  {field.type === "select" && field.options?.length ? (
                    <SearchableDropdown<TrialFormValues>
                      field={{
                        ...field,
                        name: fieldName,
                      }}
                      setValue={setValue}
                      register={register}
                      watch={watch}
                      errors={errors}
                    />
                  ) : null}
                </div>
              );
            })}
          </form>
        </div>

        {/* Footer - Fixed */}
        <div className="shrink-0 bg-[#08090A] flex justify-center p-4 md:px-[28px] border-t border-[#E5E5E533] rounded-b-2xl">
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="bg-[#F08B32] py-[12px] px-[2.5rem] rounded text-[14px] md:text-[16px] text-white font-[500] w-full md:w-auto disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialForm;

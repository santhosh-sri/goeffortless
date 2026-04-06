"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { contactFormFields } from "../data/formFields";
import InputField from "./InputField";
import SearchableDropdown from "./SearchableDropdown";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";

// ✅ Define Form Schema using Zod (Validation)
export const formSchema = z.object({
  firstname: z.string().min(2, "Full Name is required"),
  company: z.string().min(2, "Company Name is required"),
  location: z.string().min(2, "Company Location is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\d{10}$/, "Invalid mobile number"),
  your_current_erp: z.string().min(1, "Please select your ERP"),
  other_erp: z.string().optional(),
  preferred_contact_time: z
    .string()
    .min(1, "Please select a preferred contact time"),
  message: z.string(),
});

export type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const [showSucessPopup, setShowSucessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const SERVICE_ID: any = process.env.SERVICE_ID;
  const TEMPLATE_ID: any = process.env.TEMPLATE_ID;
  const PUBLIC_KEY: any = process.env.PUBLIC_KEY;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          firstname: data.firstname,
          company: data.company,
          location: data.location,
          email: data.email,
          phone: data.phone,
          your_current_erp:
            data.your_current_erp === "Others" && data.other_erp
              ? data.other_erp
              : data.your_current_erp,
          preferred_contact_time: data.preferred_contact_time,
          message: data.message,
        },
        PUBLIC_KEY
      );

      toast.success("Email sent successfully!");
      setShowSucessPopup(true);
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setShowErrorPopup(true);
    }
  };

  return (
    <>
      <div>
        <div className="pb-6">
          <h2 className="text-white text-[18px] md:text-[32px] font-[300]">
            Send us a{" "}
            <span className="font-medium bg-custom-gradient bg-clip-text text-transparent">
              Message{" "}
            </span>
          </h2>
          <p className="text-white text-base md:text-2xl font-light">
            Fill out the form below and we'll get back to you within 2 hours
            during business hours.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto md:overflow-visible">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {contactFormFields.map((field) => (
              <React.Fragment key={field.name}>
                <div
                  className={`md:col-span-${field.colSpan} max-md:col-span-2 w-full flex flex-col gap-[11px]`}
                >
                  <p className="text-[#FFFFFF] font-normal text-[14px]">
                    {field.label}
                    {field?.type !== "textArea" && (
                      <span className="text-[#F08B32]">*</span>
                    )}
                  </p>

                  {["text", "number", "email"].includes(field.type) && (
                    <InputField
                      field={field}
                      register={register}
                      error={errors[field.name as keyof FormValues]?.message}
                    />
                  )}

                  {field?.type === "textArea" && (
                    <textarea
                      {...register(field.name as keyof FormValues)}
                      placeholder="Tell us more about your inquiry..."
                      rows={4}
                      style={{
                        background:
                          "linear-gradient(125.31deg, rgba(255, 255, 255, 0.1) -56.15%, rgba(255, 255, 255, 0) 104.12%)",
                      }}
                      className={`w-full rounded-[4px] border px-2 py-[9px] md:px-3 md:py-[7px] text-[#B1B1B1] text-[12px] md:text-[13px] placeholder-[#B1B1B1] focus:outline-none resize-none ${
                        errors[field.name as keyof FormValues]
                          ? "border-red-500"
                          : "border-[#E5E5E533]"
                      }`}
                    />
                  )}

                  {field.type === "select" && field?.options?.length ? (
                    <SearchableDropdown
                      field={{
                        ...field,
                        name: field.name as keyof FormValues,
                      }}
                      setValue={setValue}
                      register={register}
                      watch={watch}
                      errors={errors}
                    />
                  ) : null}
                </div>

                {field.name === "your_current_erp" &&
                  watch("your_current_erp") === "Others" && (
                    <div className="col-span-1 w-full flex flex-col gap-[11px]">
                      <p className="text-[#FFFFFF] font-normal text-[14px]">
                        Please specify your ERP
                        {/* <span className="text-[#F08B32]">*</span> */}
                      </p>
                      <InputField
                        field={{
                          name: "other_erp",
                          label: "Please specify your ERP",
                          type: "text",
                        }}
                        register={register}
                        error={errors.other_erp?.message}
                        placeholder="Enter your ERP name"
                      />
                    </div>
                  )}
              </React.Fragment>
            ))}

            {/* Submit Button inside form so it triggers handleSubmit properly */}
            <div className="flex justify-center col-span-2 mt-4">
              <button
                type="submit"
                className="bg-[#F08B32] py-[12px] px-[2.5rem] rounded text-[14px] md:text-[16px] text-white font-[500] w-full md:w-auto disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showSucessPopup && (
        <SuccessToast setShowSucessPopup={setShowSucessPopup} />
      )}
      {showErrorPopup && <ErrorToast setShowErrorPopup={setShowErrorPopup} />}
    </>
  );
};

export default ContactForm;

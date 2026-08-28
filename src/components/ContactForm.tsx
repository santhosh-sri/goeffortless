"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { contactFormFields } from "../data/formFields";
import InputField, { INPUT_CLASSES } from "./InputField";
import { cn } from "@/lib/cn";
import Button from "./ui/Button";
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
        <div className="mb-6 flex flex-col gap-3 md:mb-8">
          <h2 className="text-heading-sm font-light text-content md:text-heading-md">
            Send us a <span className="font-bold text-accent">Message</span>
          </h2>
          <p className="text-body text-content-muted md:text-body-lg">
            Fill out the form below and we&apos;ll get back to you within 2 hours
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
                  className={cn(
                    "col-span-2 flex w-full flex-col gap-2",
                    field.colSpan === 1 ? "md:col-span-1" : "md:col-span-2"
                  )}
                >
                  <p className="text-label font-medium text-content">
                    {field.label}
                    {field?.type !== "textArea" && (
                      <span className="text-accent">*</span>
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
                      aria-invalid={errors[field.name as keyof FormValues] ? true : undefined}
                      className={cn(
                        INPUT_CLASSES,
                        "resize-y",
                        errors[field.name as keyof FormValues] &&
                          "border-danger focus:border-danger focus:ring-danger/20"
                      )}
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
                    <div className="col-span-2 flex w-full flex-col gap-2 md:col-span-1">
                      <p className="text-label font-medium text-content">
                        Please specify your ERP
                        {/* <span className="text-accent">*</span> */}
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
            <div className="col-span-2 mt-2 flex justify-center">
              <Button type="submit" disabled={isSubmitting} className="w-full font-semibold sm:w-auto sm:min-w-[220px]">
                {isSubmitting ? "Submitting..." : "Send"}
              </Button>
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

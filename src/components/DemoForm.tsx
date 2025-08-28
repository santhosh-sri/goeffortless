import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { formFields } from "../data/formFields";
import InputField from "./InputField";
import SearchableDropdown from "./SearchableDropdown";
import SuccessToast from "./SuccessToast";

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// ✅ Define Form Schema using Zod (Validation)
export const formSchema = z.object({
  firstname: z.string().min(2, "Full Name is required"),
  company: z.string().min(2, "Company Name is required"),
  location: z.string().min(2, "Company Location is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\d{10}$/, "Invalid mobile number"),
  your_current_erp: z.string().min(1, "Please select your ERP"),
  team_size: z.string().min(1, "Please select your team size"),
  preferred_contact_time: z
    .string()
    .min(1, "Please select a preferred contact time"),
});

// ✅ Infer Type from Schema
export type FormValues = z.infer<typeof formSchema>;

const RequestDemoForm = ({
  setShowForm,
  selectedPlan,
}: {
  setShowForm: (show: boolean) => void;
  selectedPlan?: string;
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });
  const [showSucessPopup, setShowSucessPopup] = useState<boolean>(false);

  useEffect(() => {
    if (showSucessPopup) {
      // Add class to disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Remove class to enable scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount or modal close
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSucessPopup]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const payload = {
      email: data.email,
      firstname: data.firstname,
      company: data.company,
      phone: data.phone,
      location: data.location,
      your_current_erp: data.your_current_erp,
      prefer_contact_time: data.preferred_contact_time,
      package_name: selectedPlan,
      team_size: data?.team_size,
    };

    try {
      const response = await axios.post("/api/processlead", payload);
      const { id, properties } = response?.data;
      const location = properties.location;
      window.dataLayer.push({
        event: "lead_created",
        conversion_data: {
          ticketId: id,
          city: location,
        },
      });
      setShowSucessPopup(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form, please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      {showSucessPopup ? (
        <SuccessToast
          setShowSucessPopup={setShowSucessPopup}
          setShowForm={setShowForm}
        />
      ) : (
        <div className="bg-black/75 h-dvh w-dvw flex justify-center items-center fixed top-0 left-0 z-[999] md:p-4 pt-[45px] pb-[45px]">
          {" "}
          {/* Added padding for mobile */}
          <div className="bg-[#08090A] z-[9999] relative border border-[#E5E5E533] md:p-[20px] rounded-2xl w-full h-full md:h-auto md:max-w-[700px] flex flex-col mx-5 max-md:overflow-y-auto">
            {/* Header - Fixed on mobile */}
            <div className="flex items-center justify-between p-4 md:p-[28px] pb-6  md:border-none">
              <h2 className="text-white text-[18px]  md:text-[24px] font-[300] flex-1 text-center ">
                Get a Free{" "}
                <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F08B32] to-[#FFF]">
                  Demo{" "}
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

            {/* Form Content - Scrollable on mobile */}
            <div className="flex-1 overflow-y-auto md:overflow-visible">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-4 md:gap-6 p-4 md:px-[28px] md:pt-0 pb-4"
              >
                {formFields.map((field) => (
                  <div
                    key={field.name}
                    className={`md:col-span-${field.colSpan} max-md:col-span-2 w-full flex flex-col gap-[11px]`}
                  >
                    <p className="text-[#FFFFFF] font-normal text-[14px]">
                      {field.label}
                      <span className="text-[#F08B32]">*</span>
                    </p>

                    {["text", "number", "email"].includes(field.type) && (
                      <InputField
                        field={field}
                        register={register}
                        error={errors[field.name as keyof FormValues]?.message} // Pass error as prop
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
                ))}
              </form>
            </div>

            {/* Sticky Button - Fixed at bottom on mobile */}
            <div className="sticky bottom-0 bg-[#08090A] flex justify-center p-4 md:px-[28px]">
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="bg-[#F08B32] py-[12px] px-[2.5rem] rounded text-[14px] md:text-[16px] text-white font-[500] w-full md:w-auto disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request a Demo"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestDemoForm;

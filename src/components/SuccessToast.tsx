import Image from "next/image";
import { useRouter } from "next/router";

const SuccessToast = ({
  setShowSucessPopup,
  setShowForm=()=>{},
}: {
  setShowSucessPopup: (show: boolean) => void;
  setShowForm?: (show: boolean) => void;
}) => {
  const router = useRouter();
  const handleClick = () => {
    setShowSucessPopup(false);
    setShowForm(false);
  };
  return (
    <div className="fixed left-0 top-0 z-[999] flex h-dvh w-dvw items-center justify-center bg-content/60">
      <div className={`absolute m-4 rounded-2xl border border-line bg-surface-raised shadow-raised max-md:w-[90%] md:w-[400px]`}>
        <div className="flex flex-col items-center justify-center gap-6 p-6">
          <Image
            src={"/sucesstick.svg"}
            alt="Effortless-logo"
            width={50}
            height={50}
            //   className="w-[188px] h-[48px]"
          />{" "}
          <p className="text-heading-sm font-medium text-accent">
            Request Submitted!
          </p>
          <p className="text-center text-body text-content-muted">
            Thank you for your interest. Our team will get in touch with you
            shortly.{" "}
          </p>
          <button
            onClick={handleClick}
            className="inline-flex min-h-[44px] min-w-[260px] cursor-pointer items-center justify-center rounded-sm bg-accent px-6 py-3 text-body font-semibold text-content-on-accent transition-colors hover:bg-accent-hover"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessToast;

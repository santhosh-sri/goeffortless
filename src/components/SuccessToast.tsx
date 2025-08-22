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
    <div className="bg-black/75 h-dvh w-dvw flex justify-center items-center fixed top-0 left-0 z-[999]">
      <div className={`bg-[#08090A] border border-[#E5E5E533] absolute rounded-2xl m-4 md:w-[400px] max-md:w-[90%]`}>
        <div className="flex flex-col gap-6 p-4 items-center justify-center">
          <Image
            src={"/sucesstick.svg"}
            alt="Effortless-logo"
            width={50}
            height={50}
            //   className="w-[188px] h-[48px]"
          />{" "}
          <p className="text-[24px] font-[400] text-[#F08B32] leading-[32px]">
            Request Submitted!
          </p>
          <p className="text-[16px] text-[#E4E4E7] leading-[23px] font-[300] text-center">
            Thank you for your interest. Our team will get in touch with you
            shortly.{" "}
          </p>
          <button
            onClick={handleClick}
            className="min-w-[260px] bg-[#F08B32] hover:bg-[#DD781F] py-[12px] rounded text-white text-[16px] font-[600] md:max-w-[30%] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessToast;

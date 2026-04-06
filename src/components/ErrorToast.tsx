const ErrorToast = ({
  setShowErrorPopup,
  setShowForm = () => {},
}: {
  setShowErrorPopup: (show: boolean) => void;
  setShowForm?: (show: boolean) => void;
}) => {
  const handleClick = () => {
    setShowErrorPopup(false);
  };
  return (
    <div className="bg-black/75 h-dvh w-dvw flex justify-center items-center fixed top-0 left-0 z-[999]">
      <div
        className={`bg-[#08090A] border border-[#E5E5E533] absolute rounded-2xl m-4 md:w-[400px] max-md:w-[90%]`}
      >
        <div className="flex flex-col gap-6 p-4 items-center justify-center">
          <div className="w-[50px] h-[50px] rounded-full bg-red-500/20 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-[24px] font-[400] text-[#EF4444] leading-[32px]">
            Submission Failed
          </p>
          <p className="text-[16px] text-[#E4E4E7] leading-[23px] font-[300] text-center">
            Something went wrong. Please try again.
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

export default ErrorToast;

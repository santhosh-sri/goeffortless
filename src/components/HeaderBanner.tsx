const HeaderBanner = ({ setCloseBanner }: any) => {
  const handleCloseBanner = () => {
    sessionStorage.setItem("headerBannerClosed", "true");
    setCloseBanner(true);
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScY9QisYn1E8Sj1vxXwvkQv6qZltjCqWzdg_DLiwtpZbak3ww/viewform",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <>
      <div className="hidden md:flex bg-[#FFE8D4] px-[80px] py-[12px] gap-2 justify-between items-center">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 13.5C10.5523 13.5 11 13.0523 11 12.5C11 11.9477 10.5523 11.5 10 11.5C9.4477 11.5 9 11.9477 9 12.5C9 13.0523 9.4477 13.5 10 13.5Z"
              fill="#F08B32"
            />
            <path
              d="M6 13.5C6.5523 13.5 7 13.0523 7 12.5C7 11.9477 6.5523 11.5 6 11.5C5.4477 11.5 5 11.9477 5 12.5C5 13.0523 5.4477 13.5 6 13.5Z"
              fill="#F08B32"
            />
            <path
              d="M10 17.5C10.5523 17.5 11 17.0523 11 16.5C11 15.9477 10.5523 15.5 10 15.5C9.4477 15.5 9 15.9477 9 16.5C9 17.0523 9.4477 17.5 10 17.5Z"
              fill="#F08B32"
            />
            <path
              d="M6 17.5C6.5523 17.5 7 17.0523 7 16.5C7 15.9477 6.5523 15.5 6 15.5C5.4477 15.5 5 15.9477 5 16.5C5 17.0523 5.4477 17.5 6 17.5Z"
              fill="#F08B32"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5 23.5C21.2614 23.5 23.5 21.2614 23.5 18.5C23.5 15.7386 21.2614 13.5 18.5 13.5C15.7386 13.5 13.5 15.7386 13.5 18.5C13.5 21.2614 15.7386 23.5 18.5 23.5ZM19.25 18.1141V16H17.75V18.886L20.4244 20.7963L21.2963 19.5757L19.25 18.1141Z"
              fill="#F08B32"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 3C21.6568 3 23 4.34315 23 6V13H21.5V9.5H2.5V18C2.5 18.8285 3.17157 19.5 4 19.5H12V21H4C2.34314 21 1 19.6569 1 18V6C1 4.34315 2.34314 3 4 3H20ZM7.25 7V4.5H5.75V7H7.25ZM18.25 7V4.5H16.75V7H18.25Z"
              fill="#F08B32"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.25 0.5V4.5H5.75V0.5H7.25Z"
              fill="#F08B32"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.25 0.5V4.5H16.75V0.5H18.25Z"
              fill="#F08B32"
            />
          </svg>
          <p className="text-[#F08B32] text-base font-medium whitespace-nowrap">
            Live Masterclass: Fix the process blocks slowing your business.
            Every Tue & Thu · 4–4:30 PM
          </p>
        </div>
        <div className="flex gap-6">
          <button
            className="text-[#F08B32] text-sm font-semibold py-1.5 px-[16px] leading-4 whitespace-nowrap border-2 border-[#F08B32] rounded"
            onClick={handleCloseBanner}
          >
            Save My Spot
          </button>
          <button className="border-0" onClick={setCloseBanner}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6L18 18"
                stroke="#FF0000"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 18L18 6"
                stroke="#FF0000"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="fixed inset-0 z-50 md:hidden flex items-end pointer-events-none">
        {/* Backdrop */}
        {/* <div
          className="absolute inset-0"
          onClick={() => setCloseBanner(false)}
        /> */}

        {/* Bottom Sheet */}
        <div className="relative w-full rounded-t-md bg-[#FFE8D4] p-4 animate-slideUp pointer-events-auto">
          <div className="flex justify-end">
            <button onClick={setCloseBanner}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 6L18 18"
                  stroke="#FF0000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 18L18 6"
                  stroke="#FF0000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-2 items-start">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 13.5C10.5523 13.5 11 13.0523 11 12.5C11 11.9477 10.5523 11.5 10 11.5C9.4477 11.5 9 11.9477 9 12.5C9 13.0523 9.4477 13.5 10 13.5Z"
                fill="#F08B32"
              />
              <path
                d="M6 13.5C6.5523 13.5 7 13.0523 7 12.5C7 11.9477 6.5523 11.5 6 11.5C5.4477 11.5 5 11.9477 5 12.5C5 13.0523 5.4477 13.5 6 13.5Z"
                fill="#F08B32"
              />
              <path
                d="M10 17.5C10.5523 17.5 11 17.0523 11 16.5C11 15.9477 10.5523 15.5 10 15.5C9.4477 15.5 9 15.9477 9 16.5C9 17.0523 9.4477 17.5 10 17.5Z"
                fill="#F08B32"
              />
              <path
                d="M6 17.5C6.5523 17.5 7 17.0523 7 16.5C7 15.9477 6.5523 15.5 6 15.5C5.4477 15.5 5 15.9477 5 16.5C5 17.0523 5.4477 17.5 6 17.5Z"
                fill="#F08B32"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.5 23.5C21.2614 23.5 23.5 21.2614 23.5 18.5C23.5 15.7386 21.2614 13.5 18.5 13.5C15.7386 13.5 13.5 15.7386 13.5 18.5C13.5 21.2614 15.7386 23.5 18.5 23.5ZM19.25 18.1141V16H17.75V18.886L20.4244 20.7963L21.2963 19.5757L19.25 18.1141Z"
                fill="#F08B32"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 3C21.6568 3 23 4.34315 23 6V13H21.5V9.5H2.5V18C2.5 18.8285 3.17157 19.5 4 19.5H12V21H4C2.34314 21 1 19.6569 1 18V6C1 4.34315 2.34314 3 4 3H20ZM7.25 7V4.5H5.75V7H7.25ZM18.25 7V4.5H16.75V7H18.25Z"
                fill="#F08B32"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.25 0.5V4.5H5.75V0.5H7.25Z"
                fill="#F08B32"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.25 0.5V4.5H16.75V0.5H18.25Z"
                fill="#F08B32"
              />
            </svg>

            <p className="text-[#F08B32] text-xs font-medium">
              Live Masterclass: Fix the process blocks slowing your business.
              Tue & Thu · 4–4:30 PM
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              className="flex-1 text-[#F08B32] text-xs font-semibold py-2 border-2 border-[#F08B32] rounded"
              onClick={handleCloseBanner}
            >
              Save My Spot
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;

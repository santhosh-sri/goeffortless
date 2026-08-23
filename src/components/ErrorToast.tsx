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
    <div className="fixed left-0 top-0 z-[999] flex h-dvh w-dvw items-center justify-center bg-content/60">
      <div
        className={`absolute m-4 rounded-2xl border border-line bg-surface-raised shadow-raised max-md:w-[90%] md:w-[400px]`}
      >
        <div className="flex flex-col items-center justify-center gap-6 p-6">
          <div className="w-[50px] h-[50px] rounded-full bg-danger/15 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="rgb(var(--color-danger))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-heading-sm font-medium text-danger">
            Submission Failed
          </p>
          <p className="text-center text-body text-content-muted">
            Something went wrong. Please try again.
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

export default ErrorToast;

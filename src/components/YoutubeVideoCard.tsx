import React, { useState } from "react";

interface YoutubeVideoCardProps {
  videoId: string; // YouTube video ID
  title?: string;
  onClose?: () => void;
  onBack?: () => void;
  type?: string;
}

const YoutubeVideoCard: React.FC<YoutubeVideoCardProps> = ({
  videoId,
  onClose,
  onBack,
  type = "",
}) => {
  const [play, setPlay] = useState(false);

  return (
    <>
      {type === "page" ? (
        <div className="w-full">
          <div
            className="relative h-[630px] w-full rounded-xl bg-[#0F1113] overflow-hidden cursor-pointer"
            onClick={() => setPlay(true)}
          >
            {!play ? (
              <>
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="video thumbnail"
                  className="h-full w-full object-cover contrast-110"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M62.662 16.4951C61.926 13.7231 59.758 11.5411 57.004 10.7991C52.012 9.45312 32 9.45312 32 9.45312C32 9.45312 11.986 9.45312 6.996 10.7991C4.242 11.5391 2.074 13.7231 1.338 16.4951C0 21.5191 0 31.9991 0 31.9991C0 31.9991 0 42.4811 1.338 47.5031C2.074 50.2751 4.242 52.4571 6.996 53.1971C11.988 54.5431 32 54.5431 32 54.5431C32 54.5431 52.014 54.5431 57.004 53.1971C59.758 52.4571 61.926 50.2731 62.662 47.5031C64 42.4791 64 31.9991 64 31.9991C64 31.9991 64 21.5191 62.662 16.4951ZM25.454 41.5151V22.4831L42.182 31.9991L25.454 41.5151Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 w-full p-8">
          <div className="flex items-center justify-end">
            {/* <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:opacity-80"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12.2656L3.94737 12.2656"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 18.25L3 12.25L9 6.25"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button> */}
            <button onClick={onBack} className="text-red-500 text-xl font-bold">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M10 10L22 22"
                  stroke="#FF0000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 22L22 10"
                  stroke="#FF0000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="relative h-[630px] w-full aspect-video rounded-xl overflow-hidden bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default YoutubeVideoCard;

import React, { useState } from "react";

interface YoutubeVideoCardProps {
  videoId: string; // YouTube video ID
  title?: string;
  onClose?: () => void;
  onBack?: () => void;
  type?: string;
  /**
   * Hold a true 16:9 box instead of the fixed 630px desktop height. The fixed
   * height works out to roughly 1.93:1, so YouTube pillarboxes the player with
   * black bars. Opt-in, to leave the pages built against the old height alone.
   */
  widescreen?: boolean;
}

const YoutubeVideoCard: React.FC<YoutubeVideoCardProps> = ({
  videoId,
  onClose,
  onBack,
  type = "",
  widescreen = false,
}) => {
  const [play, setPlay] = useState(false);

  return (
    <>
      {type === "page" ? (
        <div className="w-full">
          <div
            className={`relative aspect-video w-full rounded-xl bg-[#0F1113] overflow-hidden cursor-pointer ${
              widescreen ? "" : "md:aspect-auto md:h-[630px]"
            }`}
            onClick={() => setPlay(true)}
          >
            {!play ? (
              <>
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="video thumbnail"
                  className="h-full w-full object-cover contrast-110"
                />

                {/*
                  The glyph is white, so on a thumbnail with a light centre it
                  used to disappear completely. The scrim and the dark disc
                  behind it guarantee contrast whatever the poster looks like.
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label="Play video"
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm transition hover:scale-105 hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M62.662 16.4951C61.926 13.7231 59.758 11.5411 57.004 10.7991C52.012 9.45312 32 9.45312 32 9.45312C32 9.45312 11.986 9.45312 6.996 10.7991C4.242 11.5391 2.074 13.7231 1.338 16.4951C0 21.5191 0 31.9991 0 31.9991C0 31.9991 0 42.4811 1.338 47.5031C2.074 50.2751 4.242 52.4571 6.996 53.1971C11.988 54.5431 32 54.5431 32 54.5431C32 54.5431 52.014 54.5431 57.004 53.1971C59.758 52.4571 61.926 50.2731 62.662 47.5031C64 42.4791 64 31.9991 64 31.9991C64 31.9991 64 21.5191 62.662 16.4951ZM25.454 41.5151V22.4831L42.182 31.9991L25.454 41.5151Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPlay(false);
                  }}
                  className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>

                <iframe
                  key="youtube-player"
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 w-full p-4">
          <div className="flex items-center justify-end">
            <button type="button" onClick={onClose} aria-label="Close">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="rgb(var(--color-bg-subtle))" />
            <path d="M10 10L22 22M10 22L22 10" stroke="rgb(var(--color-danger))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
            </button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black md:aspect-auto md:h-[630px]">
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

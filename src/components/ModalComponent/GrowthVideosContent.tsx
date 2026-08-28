import React from "react";

interface DemoVideo {
  id: string;
  title: string;
  subtitle: string;
  videoId: string;
}

interface VideoCardProps {
  title: string;
  subtitle: string;
  videoId: string;
  onClick: () => void;
}

interface GrowthVideosContentProps {
  videos: DemoVideo[];
  onBack: () => void;
  onPlay: (video: DemoVideo) => void;
  onClose: () => void;
}

const GrowthVideosContent: React.FC<GrowthVideosContentProps> = ({
  onBack,
  onClose,
  onPlay,
  videos,
}) => {
  return (
    <div className="flex flex-col gap-8  p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-content hover:opacity-80"
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
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 18.25L3 12.25L9 6.25"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-base md:text-xl font-medium leading-6">
            {" "}
            Change Language
          </span>
        </button>

        <button type="button" onClick={onClose} aria-label="Close">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <rect
              width="32"
              height="32"
              rx="4"
              fill="rgb(var(--color-bg-subtle))"
            />
            <path
              d="M10 10L22 22M10 22L22 10"
              stroke="rgb(var(--color-danger))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Title */}
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-sm font-semibold text-content md:text-heading-md">
          Effortless Growth Videos
        </h2>

        {/* Sections */}
        <div className="max-md:h-[500px] max-md:overflow-hidden max-md:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                subtitle={video.subtitle}
                videoId={video.videoId}
                onClick={() => onPlay(video)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthVideosContent;

const VideoCard = ({ title, subtitle, videoId, onClick }: VideoCardProps) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <div
      className="group flex flex-col gap-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col gap-2">
        <p className="text-body-lg font-semibold text-accent">{title}</p>
        <p className="text-label text-content-muted md:text-body">{subtitle}</p>
      </div>

      {/* Thumbnail */}
      <div
        className="
          relative w-full max-w-[416px]
          aspect-video md:aspect-auto md:h-[228px]
          rounded-xl overflow-hidden
          hover:shadow-md transition
        "
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/*
          Same treatment as the product-page player (YoutubeVideoCard): the
          glyph is white, so a thumbnail with a light centre used to swallow
          it. The scrim and the dark disc behind it guarantee contrast
          whatever the poster looks like.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-black/70"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.662 16.4951C61.926 13.7231 59.758 11.5411 57.004 10.7991C52.012 9.45312 32 9.45312 32 9.45312C32 9.45312 11.986 9.45312 6.996 10.7991C4.242 11.5391 2.074 13.7231 1.338 16.4951C0 21.5191 0 31.9991 0 31.9991C0 31.9991 0 42.4811 1.338 47.5031C2.074 50.2751 4.242 52.4571 6.996 53.1971C11.988 54.5431 32 54.5431 32 54.5431C32 54.5431 52.014 54.5431 57.004 53.1971C59.758 52.4571 61.926 50.2731 62.662 47.5031C64 42.4791 64 31.9991 64 31.9991C64 31.9991 64 21.5191 62.662 16.4951ZM25.454 41.5151V22.4831L42.182 31.9991L25.454 41.5151Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

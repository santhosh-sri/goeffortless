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
          <span className="text-base md:text-xl font-medium leading-6">
            {" "}
            Change Language
          </span>
        </button>

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

      {/* Title */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-[32px] font-medium text-content leading-10">
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
    <div className="flex flex-col gap-4 cursor-pointer" onClick={onClick}>
      <div className="flex flex-col gap-2">
        <p className="text-accent text-lg md:text-xl font-medium leading-6">
          {title}
        </p>
        <p className="text-content text-sm md:text-base font-light leading-5">
          {subtitle}
        </p>
      </div>

      {/* Thumbnail */}
      <div
        className="
          relative w-full max-w-[416px]
          aspect-video md:aspect-auto md:h-[228px]
          rounded-xl overflow-hidden
          border border-white/10 bg-[#121317]
        "
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
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
    </div>
  );
};

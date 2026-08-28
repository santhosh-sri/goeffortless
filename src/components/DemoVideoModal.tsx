import React, { useState } from "react";
import type { LanguageModalConfig } from "@/interface/type";
import Modal from "./ModalComponent/Modal";
import LanguageModalContent from "./ModalComponent/LanguageModalContent";
import GrowthVideosContent from "./ModalComponent/GrowthVideosContent";
import YoutubeVideoCard from "./YoutubeVideoCard";

type Step = "language" | "videos" | "play";
type Language = LanguageModalConfig["options"][number];
type Video = NonNullable<Language["videos"]>[number];

/**
 * The "See it in Action" flow from goeffortless.ai: pick a language, pick a
 * product walkthrough, play it. One component so the redesigned home hero and
 * the CMS `UsecaseFold` share the state machine instead of each re-deriving it.
 */
export function DemoVideoModal({
  open,
  onClose,
  config,
}: {
  open: boolean;
  onClose: () => void;
  config: LanguageModalConfig;
}) {
  const [step, setStep] = useState<Step>("language");
  const [language, setLanguage] = useState<Language | null>(null);
  const [video, setVideo] = useState<Video | null>(null);

  const close = () => {
    onClose();
    setStep("language");
    setLanguage(null);
    setVideo(null);
  };

  return (
    <Modal open={open} onClose={close}>
      {step === "language" && (
        <LanguageModalContent
          data={config}
          onSelect={(l) => {
            setLanguage(l);
            setStep("videos");
          }}
          onClose={close}
        />
      )}
      {step === "videos" && (
        <GrowthVideosContent
          videos={language?.videos ?? []}
          onBack={() => setStep("language")}
          onPlay={(v) => {
            setVideo(v);
            setStep("play");
          }}
          onClose={close}
        />
      )}
      {step === "play" && video && (
        <YoutubeVideoCard
          videoId={video.videoId}
          title={video.title}
          onBack={() => setStep("videos")}
          onClose={close}
        />
      )}
    </Modal>
  );
}

export default DemoVideoModal;

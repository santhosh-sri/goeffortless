import { useState, useEffect, useCallback } from "react";

const useElementVisibility = (elementId: string, offset: { top?: number; bottom?: number } = {}) => {
  
  const { top = 0, bottom = 0 } = offset;
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = useCallback(() => {
    const element = document.getElementById(elementId);
    if (!element) {
      setIsVisible(true);
      return;
    }
    const bounding = element.getBoundingClientRect();
    const totalHeight = window.innerHeight;
    const isInViewport =
      totalHeight - bounding.top - top > 0 && bounding.bottom - bottom > 0;
    setIsVisible(!isInViewport);
  }, [elementId, top, bottom]);

  useEffect(() => {
    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener("scroll", handleScroll);
    checkVisibility(); // Initial check when the component mounts

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [checkVisibility]);

  return isVisible;
};

export default useElementVisibility;


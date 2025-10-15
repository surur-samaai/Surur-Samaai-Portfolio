// src/components/BackgroundVideo.tsx
import React from "react";

const BackgroundVideo: React.FC = () => {
  const showVideo =
    typeof window !== "undefined" &&
    !window.matchMedia("(max-width: 640px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {showVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/galaxy_bg_video.mp4" type="video/mp4" />
          <source src="/videos/galaxy_bg_video.webm" type="video/webm" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-[url('/images/hero-fallback.jpg')] bg-center bg-cover" />
      )}

      
      <div className="absolute inset-0 pointer-events-none z-5" />
    </div>
  );
};

export default BackgroundVideo;

import { useEffect, useRef } from "react";

type ScrollVideoProps = {
  src: string;
  className?: string;
  label?: string;
  poster?: string;
  loop?: boolean;
};

export default function ScrollVideo({
  src,
  className = "shoaling-video",
  label = "Numerical comparison of solitary waves shoaling and overturning over different slopes",
  poster,
  loop = false,
}: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!loop) video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
          if (!loop) video.currentTime = 0;
        }
      },
      { threshold: loop ? 0.15 : 0.55 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [src, loop]);

  return (
    <video
      ref={videoRef}
      className={`${className}${loop ? " ambient-video" : ""}`}
      muted
      loop={loop}
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      controlsList="nodownload nofullscreen noremoteplayback"
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

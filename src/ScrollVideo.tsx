import { useEffect, useRef } from "react";

type ScrollVideoProps = {
  src: string;
};

export default function ScrollVideo({ src }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.55 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="shoaling-video"
      muted
      playsInline
      preload="metadata"
      aria-label="Numerical comparison of solitary waves shoaling and overturning over different slopes"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

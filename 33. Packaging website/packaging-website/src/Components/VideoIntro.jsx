import { useEffect, useRef } from "react";

export default function VideoIntro({ onFinish }) {
  const videoRef = useRef(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("intro-playing");

    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        video.play();
      });
    }

    video.onended = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;

      video.classList.add("exit");

      setTimeout(() => {
        document.body.style.overflow = "auto";
        document.body.classList.remove("intro-playing");
        onFinish(); // ✅ THIS triggers handleIntroFinish in App.jsx
      }, 800);
    };

    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("intro-playing");
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-9999 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/videos/video1.mp4"
        muted
        playsInline
        preload="auto"
        className="w-full h-236 object-cover rounded-xl"
      />
    </div>
  );
}

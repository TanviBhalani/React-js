import React, { useEffect, useRef } from "react";

const logos = [
  "/images/brand-1.webp",
  "/images/brand2.webp",
  "/images/brand3.webp",
  "/images/brand4.avif",
  "/images/brand5.webp",
  "/images/brand-1.webp",
  "/images/brand2.webp",
  "/images/brand3.webp",
  "/images/brand4.avif",
  "/images/brand5.webp"
];

export default function Brand() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    let animationFrameId;

    const scrollSpeed = 0.8; // adjust speed (smaller = slower, larger = faster)

    const smoothScroll = () => {
      if (!container) return;

      scrollAmount += scrollSpeed;
      container.scrollLeft = scrollAmount;

      // reset scroll to start for infinite loop
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }

      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="border-t border-gray-200 py-10 bg-white">
      <div
        ref={scrollRef}
        className="flex gap-16 items-center overflow-hidden w-full"
      >
        {/* Duplicate logos to create an infinite loop effect */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`brand-${index}`}
            className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition duration-300 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

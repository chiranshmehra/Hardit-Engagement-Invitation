import React, { useRef, useEffect } from 'react';

export default function VideoIntro({ isVisible, onVideoComplete }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.log('Autoplay prevented:', err));
      }
    }
  }, [isVisible]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      // Trigger fade out 0.8s before video finishes
      if (video.currentTime >= video.duration - 0.8 && !video.dataset.fading) {
        video.dataset.fading = '1';
        onVideoComplete();
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100000] flex items-center justify-center bg-[#F9F0E0] transition-opacity duration-1000 ease-out overflow-hidden ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-full max-w-[500px] flex items-center justify-center">
        <video
          ref={videoRef}
          src="/video_intro_final.mp4"
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={onVideoComplete}
          className="w-full h-auto object-cover scale-[1.05]"
        />
      </div>
    </div>
  );
}


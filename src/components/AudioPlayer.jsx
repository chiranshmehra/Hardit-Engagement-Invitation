import React, { useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export default function AudioPlayer({ isPlaying, togglePlay, showButton, audioSrc = "audio/tere-vaastey.m4a" }) {
  const audioRef = useRef(null);
  const hasSetInitialTime = useRef(false);
  const [currentSrc, setCurrentSrc] = React.useState(audioSrc);

  const fallbackSrc = "https://pub-4dc8201144ca418fb604349c73e8c724.r2.dev/Einaudi_%20Divenire%20(1)%20(1).mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        if (!hasSetInitialTime.current) {
          try {
            audio.currentTime = 29; // Skip first 29 seconds
          } catch (e) {
            // Seek prior to metadata load handled gracefully
          }
          hasSetInitialTime.current = true;
        }
        audio.play().catch((err) => console.log("Audio play deferred:", err));
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, currentSrc]);

  const handleEnded = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 29; // Loop back to 29 seconds
      audio.play().catch(() => {});
    }
  };

  const handleError = () => {
    console.warn(`Audio file ${currentSrc} not found. Switching to fallback audio.`);
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentSrc}
        preload="auto"
        onEnded={handleEnded}
        onError={handleError}
      />

      {showButton && (
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#5A0F1B] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all z-[9999] cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 fill-white text-white" />
          ) : (
            <Play className="w-6 h-6 fill-white text-white ml-0.5" />
          )}
        </button>
      )}
    </>
  );
}


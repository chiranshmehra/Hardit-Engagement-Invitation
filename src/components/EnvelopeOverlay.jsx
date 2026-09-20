import React from 'react';

export default function EnvelopeOverlay({ onOpen, isVisible }) {
  // We keep it mounted but hidden to allow the 1-second fade out transition to play
  return (
    <div
      onClick={onOpen}
      onTouchStart={onOpen}
      className={`fixed inset-0 z-[99999] bg-[#F9F0E0] flex flex-col items-center justify-center cursor-pointer select-none transition-opacity duration-1000 ease-out overflow-hidden ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Full width container to avoid edge gaps */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[500px]">
        {/* Envelope Graphic with Integrated H & J Wax Seal */}
        <div className="relative w-full flex items-center justify-center">
          <img
            src="/images/envelope_hj.png"
            alt="Open your invitation"
            className="w-full h-auto object-cover scale-[1.05]"
            draggable="false"
          />
        </div>

        {/* Tap to Open Callout */}
        <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in z-10">
          {/* Chevron */}
          <div className="w-3 h-3 border-r-2 border-t-2 border-[#8C643C]/80 -rotate-45 animate-chevron-bounce mb-1" />
          
          <span className="font-cinzel text-xs tracking-[0.26em] uppercase text-[#8C643C]/90 font-medium whitespace-nowrap animate-pulse-slow">
            Tap to open
          </span>
        </div>
      </div>
    </div>
  );
}

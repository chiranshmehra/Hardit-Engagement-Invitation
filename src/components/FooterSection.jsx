import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function FooterSection() {
  return (
    <footer className="relative w-full min-h-[360px] bg-[#F9F0E0] py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden border-t border-[#a67d2b]/20">
      
      {/* Background Overlay Image - Couple Illustration */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply">
        <img
          src="images/couple_end.jpg"
          alt="Couple illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Decorative Floral Ornament */}
      <ScrollReveal animation="zoom-in" delay={100} className="w-48 h-12 mb-4 relative z-10 opacity-90">
        <img
          src="https://static.tildacdn.net/tild3732-6364-4131-b837-353363666335/623915249_2629494717.png"
          alt="Footer ornament"
          className="w-full h-full object-contain"
        />
      </ScrollReveal>

      {/* Footer Text */}
      <ScrollReveal animation="fade-up" delay={250} className="relative z-10 space-y-2 pb-6">
        <h3 className="font-serifCustom text-3xl sm:text-4xl text-black font-medium italic drop-shadow-md">
          Hope to see you there!
        </h3>
        <p className="font-script text-3xl sm:text-4xl text-black font-semibold tracking-wide pt-2 drop-shadow-md">
          Hardit Singh & Jaipreet Kaur
        </p>
      </ScrollReveal>

    </footer>
  );
}

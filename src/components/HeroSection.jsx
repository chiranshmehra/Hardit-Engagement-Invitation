import React from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F9F0E0] text-[#a67d2b] flex flex-col items-center pt-0 pb-16 px-0 overflow-hidden">
      
      {/* Hero Arch Video Frame Container (450px wide x 762px tall exact Tilda aspect ratio) */}
      <div className="relative w-full max-w-[450px] h-[720px] sm:h-[762px] flex flex-col items-center justify-between mx-auto overflow-visible z-10">
        
        {/* Background Swans Video (Includes Arch, Pillars, Swans & Flowers) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="https://res.cloudinary.com/ukb8xb7m/video/upload/v1787037092/Swans2_1_qwzsod.mov"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Subtle Center Radial Glow */}
        <div className="absolute inset-0 bg-radial from-[#FFF9EB]/35 via-transparent to-transparent z-1 pointer-events-none opacity-50" />

        {/* Content Container Overlaid ON TOP of Video */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-10 px-4">
          
          {/* 1. Header Text (Engagement Day & 14.11.26) */}
          <div className="flex flex-col items-center space-y-0.5 animate-fade-in pt-36 sm:pt-44">
            <h2 className="font-script text-[30px] sm:text-[36px] text-[#a67d2b] font-normal leading-tight tracking-wide drop-shadow-sm">
              Engagement Day
            </h2>
            <p className="font-ovo text-[17px] sm:text-[21px] font-semibold text-[#a67d2b] tracking-wider drop-shadow-xs">
              14.11.26
            </p>
          </div>

          {/* 2. Couple Names (Hardit Singh & Jaipreet Kaur) */}
          <div className="flex flex-col items-center space-y-0 my-auto py-1">
            <h1 className="font-script text-[42px] sm:text-[52px] font-normal text-[#a67d2b] leading-tight drop-shadow-sm text-center px-4">
              Hardit Singh
            </h1>
            <span className="font-script text-[25px] sm:text-[30px] text-[#a07b33] leading-none my-0.5">
              &
            </span>
            <h1 className="font-script text-[42px] sm:text-[52px] font-normal text-[#a67d2b] leading-tight drop-shadow-sm text-center px-4">
              Jaipreet Kaur
            </h1>
          </div>

          {/* 3. Scroll Down & Chevron (Positioned above Swans in Lake) */}
          <div className="flex flex-col items-center gap-1 text-[#a67d2b] pb-24 sm:pb-28">
            <span className="font-script text-[22px] sm:text-[27px] text-[#a67d2b] font-normal">
              Scroll down
            </span>
            <ChevronDown className="w-4 h-4 text-[#a67d2b] animate-bounce-subtle" />
          </div>

        </div>

      </div>

      {/* TORN PAPER CARD WITH WIDE OVERLAID TEXT */}
      <div className="relative w-full sm:w-full max-w-none sm:max-w-[850px] mx-auto -mt-16 sm:-mt-24 z-20">
        
        {/* Left Floral Bouquet - Placed over the video border (z-30) */}
        <img
          src="images/flowers_left.webp"
          alt="Left floral bouquet"
          className="absolute -top-[115px] sm:-top-[135px] left-0 sm:left-4 w-48 sm:w-64 h-auto z-30 pointer-events-none drop-shadow-sm animate-flower-left"
          loading="lazy"
        />

        {/* Right Floral Bouquet - Placed over the video border (z-30) */}
        <img
          src="images/flowers_right.webp"
          alt="Right floral bouquet"
          className="absolute -top-[115px] sm:-top-[135px] right-0 sm:right-4 w-48 sm:w-64 h-auto z-30 pointer-events-none drop-shadow-sm animate-flower-right"
          loading="lazy"
        />

        <div className="relative w-full min-h-[720px] sm:min-h-[780px]">
          {/* Background Torn Paper Card Image (z-10) - Scaled horizontally and nudged left to balance PNG asymmetry */}
          <img
            src="https://static.tildacdn.net/tild3134-6461-4832-a236-633431616631/623915249_2629494717.png"
            alt="Torn paper floral invitation card"
            className="absolute inset-0 w-full h-full object-fill drop-shadow-md z-10 scale-x-[1.25] sm:scale-x-100 origin-center -translate-x-[4%] sm:translate-x-0"
          />

          {/* Text Overlaid DIRECTLY ON TOP of the Paper Card */}
          <div className="relative z-40 w-full h-full flex flex-col items-center justify-start text-center px-12 sm:px-24 pt-[110px] sm:pt-[140px] pb-14 sm:pb-20">
            
            <ScrollReveal animation="fade-up" delay={150} className="w-full flex flex-col items-center">
              {/* 1. Mool Mantar */}
              <div className="mb-4 sm:mb-6">
                <p className="font-serifCustom text-[20px] sm:text-[28px] text-[#a67d2b] font-medium tracking-wide">
                  ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ
                </p>
              </div>

              {/* 2. Calligraphy Script Quote */}
              <div className="space-y-1 sm:space-y-2 text-center font-signature text-[40px] sm:text-[56px] text-[#a67d2b] font-normal leading-tight drop-shadow-sm mb-5 sm:mb-9">
                <div>Two Souls</div>
                <div>One destiny</div>
                <div>A Lifetime written by Waheguru</div>
              </div>

              {/* 3. Invitation Subtext */}
              <div className="space-y-2 text-center max-w-sm sm:max-w-xl px-2">
                <p className="font-bodoni text-[20px] sm:text-[26px] text-[#5A0F1B] font-normal tracking-wide">
                  Dear Friends and Family
                </p>
                <p className="font-bodoni text-[18px] sm:text-[22px] text-[#6a5140] font-normal leading-relaxed">
                  With hearts full of love, we invite you to celebrate the beginning of our forever.
                </p>
              </div>

              {/* 4. Organized by Nagi Family Section */}
              <div className="w-full max-w-sm sm:max-w-xl mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-[#a67d2b]/30 flex flex-col items-center">
                <p className="font-signature text-[32px] sm:text-[40px] text-[#a67d2b] font-normal tracking-wide mb-5 text-center">
                  Organized by Nagi Family
                </p>

                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-4 w-full">
                  
                  {/* Left Column: Grandparents */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                    <div className="flex flex-col items-center sm:items-start">
                      <span className="font-serifCustom text-[14px] sm:text-[18px] text-[#5A0F1B] font-semibold leading-tight">
                        Lt. S. Jagdish Singh
                      </span>
                      <span className="font-ovo text-[11px] sm:text-[13px] text-[#a67d2b] font-medium tracking-wider uppercase mt-0.5">
                        Grandfather
                      </span>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                      <span className="font-serifCustom text-[14px] sm:text-[18px] text-[#5A0F1B] font-semibold leading-tight">
                        Sdn. Surinder Kaur Nagi
                      </span>
                      <span className="font-ovo text-[11px] sm:text-[13px] text-[#a67d2b] font-medium tracking-wider uppercase mt-0.5">
                        Grandmother
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Parents */}
                  <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-3">
                    <div className="flex flex-col items-center sm:items-end">
                      <span className="font-serifCustom text-[14px] sm:text-[18px] text-[#5A0F1B] font-semibold leading-tight">
                        S. Tajinder Singh Nagi
                      </span>
                      <span className="font-ovo text-[11px] sm:text-[13px] text-[#a67d2b] font-medium tracking-wider uppercase mt-0.5">
                        Father
                      </span>
                    </div>

                    <div className="flex flex-col items-center sm:items-end">
                      <span className="font-serifCustom text-[14px] sm:text-[18px] text-[#5A0F1B] font-semibold leading-tight">
                        Jasdeep Kaur Nagi
                      </span>
                      <span className="font-ovo text-[11px] sm:text-[13px] text-[#a67d2b] font-medium tracking-wider uppercase mt-0.5">
                        Mother
                      </span>
                    </div>
                  </div>

                </div>

                {/* Sister (Centered below columns) */}
                <div className="w-full mt-5 sm:mt-6 flex flex-col items-center space-y-3">
                  <div className="flex flex-col items-center">
                    <span className="font-serifCustom text-[14px] sm:text-[18px] text-[#5A0F1B] font-semibold leading-tight">
                      Ramanjeet Kaur Nagi
                    </span>
                    <span className="font-ovo text-[11px] sm:text-[13px] text-[#a67d2b] font-medium tracking-wider uppercase mt-0.5">
                      Sister
                    </span>
                  </div>
                </div>
              </div>

            </ScrollReveal>

          </div>
        </div>

      </div>

    </section>
  );
}

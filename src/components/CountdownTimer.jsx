import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function CountdownTimer() {
  // Target date: November 14, 2026 at 19:00 (7 PM)
  const targetDate = new Date('2026-11-14T19:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00', isOver: true };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      isOver: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#F9F0E0] pt-6 pb-16 px-4 flex flex-col items-center justify-center text-center">
      <ScrollReveal animation="fade-up" delay={100} className="w-full flex flex-col items-center">
        <h2 className="font-alex text-[38px] sm:text-[46px] text-[#a67d2b] font-normal tracking-wide leading-tight mb-8 sm:mb-10 whitespace-nowrap">
          The Celebration Begins In
        </h2>

        {timeLeft.isOver ? (
          <div className="font-ovo text-[30px] text-[#a67d2b]">
            The Celebration Has Begun!
          </div>
        ) : (
          <div className="flex items-start justify-center gap-2 sm:gap-4 max-w-xl text-[#a67d2b]">
            {/* Days */}
            <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
              <span className="font-ovo text-[46px] sm:text-[56px] font-normal tracking-tight leading-none">
                {timeLeft.days}
              </span>
              <span className="font-ovo text-[16px] sm:text-[18px] mt-3 font-normal capitalize tracking-wide">
                Days
              </span>
            </div>

            <span className="font-ovo text-[40px] sm:text-[50px] leading-none pt-0.5 sm:pt-1">:</span>

            {/* Hours */}
            <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
              <span className="font-ovo text-[46px] sm:text-[56px] font-normal tracking-tight leading-none">
                {timeLeft.hours}
              </span>
              <span className="font-ovo text-[16px] sm:text-[18px] mt-3 font-normal capitalize tracking-wide">
                Hours
              </span>
            </div>

            <span className="font-ovo text-[40px] sm:text-[50px] leading-none pt-0.5 sm:pt-1">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
              <span className="font-ovo text-[46px] sm:text-[56px] font-normal tracking-tight leading-none">
                {timeLeft.minutes}
              </span>
              <span className="font-ovo text-[16px] sm:text-[18px] mt-3 font-normal capitalize tracking-wide">
                Minutes
              </span>
            </div>

            <span className="font-ovo text-[40px] sm:text-[50px] leading-none pt-0.5 sm:pt-1">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
              <span className="font-ovo text-[46px] sm:text-[56px] font-normal tracking-tight leading-none">
                {timeLeft.seconds}
              </span>
              <span className="font-ovo text-[16px] sm:text-[18px] mt-3 font-normal capitalize tracking-wide">
                Seconds
              </span>
            </div>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}

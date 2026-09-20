import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ScheduleSection() {
  const containerRef = useRef(null);
  const [flowerProgress, setFlowerProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHalf = window.innerHeight / 2;
      
      // Determine the exact pixel offsets for the top and bottom of the track
      // Events are min-h-[140px] (mobile) or min-h-[180px] (desktop)
      // The center of the first event is half that height from the top.
      const isDesktop = window.innerWidth >= 640;
      const offset = isDesktop ? 90 : 70;
      
      const trackStart = rect.top + offset;
      const trackEnd = rect.bottom - offset;
      const trackLength = trackEnd - trackStart;
      
      if (trackLength <= 0) return;

      let progress = (windowHalf - trackStart) / trackLength;
      progress = Math.max(0, Math.min(1, progress));
      
      setFlowerProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // init
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#F9F0E0] py-8 sm:py-12 flex flex-col items-center justify-center text-center">
      
      <div className="relative w-full min-h-[800px]">
        {/* Background Torn Paper Card Image matching Two Souls */}
        <img
          src="https://static.tildacdn.net/tild3134-6461-4832-a236-633431616631/623915249_2629494717.png"
          alt="Torn paper floral card"
          className="absolute inset-0 w-full h-full object-fill drop-shadow-md z-10 scale-x-[1.25] sm:scale-x-100 origin-center -translate-x-[4%] sm:translate-x-0"
        />

        {/* Content Overlaid on Paper Card */}
        <div className="relative z-40 w-full h-full flex flex-col items-center justify-start text-center px-4 pt-[80px] sm:pt-[100px] pb-24">
          
          {/* Section Header with Flourishes and Quote */}
          <div className="w-full flex flex-col items-center justify-center mb-12 z-10">
            <ScrollReveal animation="fade-up" delay={150} className="w-full flex items-center justify-center gap-3 sm:gap-6 mb-4">
              <img
                src="https://static.tildacdn.net/tild3638-3336-4136-a131-633463346265/left-element_1.png"
                alt="flourish left"
                className="w-16 sm:w-28 h-auto object-contain opacity-85"
              />
              <h2 className="font-alex text-[36px] sm:text-[52px] text-[#a67d2b] font-normal tracking-wide whitespace-nowrap pt-2">
                Schedule of Events
              </h2>
              <img
                src="https://static.tildacdn.net/tild3638-3336-4136-a131-633463346265/left-element_1.png"
                alt="flourish right"
                className="w-16 sm:w-28 h-auto object-contain opacity-85 scale-x-[-1]"
              />
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200} className="max-w-xl mx-auto px-4 mt-2">
              <p className="font-stalemate text-[22px] sm:text-[28px] text-[#846f61] leading-[1.3] drop-shadow-sm">
                "We look forward to beginning this beautiful chapter surrounded by the love and blessings of our family and friends."
              </p>
            </ScrollReveal>
          </div>

          {/* Events Timeline Container */}
          <div ref={containerRef} className="relative max-w-lg w-full z-10 px-2 sm:px-6 mx-auto mt-2">
            
            {/* The continuous vertical line in the center - starts/ends at the event icons */}
            <div className="absolute top-[70px] sm:top-[90px] bottom-[70px] sm:bottom-[90px] left-1/2 -translate-x-1/2 w-[1px] bg-[#a67d2b]/40 z-0"></div>

            {/* JS Animated Rose Track - Perfectly matches the vertical line bounds */}
            <div className="absolute top-[70px] sm:top-[90px] bottom-[70px] sm:bottom-[90px] left-1/2 -translate-x-1/2 w-16 sm:w-20 z-20 pointer-events-none">
              <div 
                className="absolute w-full flex justify-center -translate-y-1/2 will-change-transform"
                style={{ top: `${flowerProgress * 100}%` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <img src="https://static.tildacdn.net/tild3363-3665-4330-a361-666466346532/rose_-_Copy.png" alt="rose animated" className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-md" />
                </div>
              </div>
            </div>

            {/* Event 1 */}
            <div className="relative flex items-center justify-between w-full min-h-[140px] sm:min-h-[180px] z-10">
              <div className="w-1/2 text-right pr-6 sm:pr-10">
                <span className="font-serifCustom text-[24px] sm:text-[32px] text-[#6c513f] font-normal tracking-wide whitespace-nowrap">7 PM</span>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-transparent z-10">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#a67d2b]/70 rotate-45"></div>
              </div>
              <div className="w-1/2 text-left pl-6 sm:pl-10">
                <div className="font-bilbo text-[28px] sm:text-[38px] text-[#6c513f] font-light leading-tight">
                  Welcome & <br/> Arrival
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative flex items-center justify-between w-full min-h-[140px] sm:min-h-[180px] z-10">
              <div className="w-1/2 text-right pr-6 sm:pr-10">
                <span className="font-serifCustom text-[24px] sm:text-[32px] text-[#6c513f] font-normal tracking-wide whitespace-nowrap">8 PM</span>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-transparent z-10">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#a67d2b]/70 rotate-45"></div>
              </div>
              <div className="w-1/2 text-left pl-6 sm:pl-10">
                <div className="font-bilbo text-[28px] sm:text-[38px] text-[#6c513f] font-light leading-tight">
                  Sagan <br/> Ceremony
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="relative flex items-center justify-between w-full min-h-[140px] sm:min-h-[180px] z-10">
              <div className="w-1/2 text-right pr-6 sm:pr-10">
                <span className="font-serifCustom text-[24px] sm:text-[32px] text-[#6c513f] font-normal tracking-wide whitespace-nowrap">9 PM</span>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-transparent z-10">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#a67d2b]/70 rotate-45"></div>
              </div>
              <div className="w-1/2 text-left pl-6 sm:pl-10">
                <div className="font-bilbo text-[28px] sm:text-[38px] text-[#6c513f] font-light leading-tight">
                  Exchange of <br/> Rings
                </div>
              </div>
            </div>

            {/* Event 4 */}
            <div className="relative flex items-center justify-between w-full min-h-[140px] sm:min-h-[180px] z-10">
              <div className="w-1/2 text-right pr-6 sm:pr-10">
                <span className="font-serifCustom text-[24px] sm:text-[32px] text-[#6c513f] font-normal tracking-wide whitespace-nowrap">9:30 PM</span>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-transparent z-10">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#a67d2b]/70 rotate-45"></div>
              </div>
              <div className="w-1/2 text-left pl-6 sm:pl-10">
                <div className="font-bilbo text-[28px] sm:text-[38px] text-[#6c513f] font-light leading-tight">
                  Dinner & <br/> Celebrations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

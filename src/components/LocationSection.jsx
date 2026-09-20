import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function LocationSection() {
  const address = "Karkardooma, Delhi-110032";
  const googleMapsUrl = "https://www.google.com/maps/dir//Golden+Rose+Banquet's+-+Group+Gurmeet,+Office+71,+Aditya+Mega+Mall,+near+Karkardooma+Road,+Vishwas+Nagar+Extension,+Vishwas+Nagar,+Shahdara,+Delhi,+110032/@28.6403193,77.2749958,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfb69b5cfb6b9:0x4c6c9c8e570c3718!2m2!1d77.3013154!2d28.6559747?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="relative w-full bg-[#F9F0E0] py-16 px-4 flex flex-col items-center justify-center text-center">
      
      {/* Header Accent Frame */}
      <ScrollReveal animation="fade-down" delay={100} className="w-full max-w-md mb-4 opacity-80 pointer-events-none">
        <img
          src="https://static.tildacdn.net/tild3232-3638-4338-a134-336230313236/acomm-decor.png"
          alt="Location header frame"
          className="w-full h-auto object-contain max-h-[120px]"
        />
      </ScrollReveal>

      {/* Section Title */}
      <ScrollReveal animation="fade-up" delay={150}>
        <h2 className="font-serifCustom text-[30px] sm:text-[41px] text-[#a67d2b] font-light tracking-wide mb-6">
          Location
        </h2>
      </ScrollReveal>

      {/* Venue Image / Illustration Card */}
      <ScrollReveal animation="zoom-in" delay={200} className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-md border border-[#a67d2b]/20 mb-8 bg-[#FFF9EB] p-2">
        <div className="w-full h-[220px] rounded-xl overflow-hidden relative">
          <img
            src="https://static.tildacdn.net/tild3637-3939-4864-a263-333836383139/ChatGPT_Image_May_25.png"
            alt="Venue"
            className="w-full h-full object-cover"
          />
        </div>
      </ScrollReveal>

      {/* Venue Name & Address */}
      <ScrollReveal animation="fade-up" delay={300} className="max-w-md space-y-3 px-4">
        <h3 className="font-serifCustom text-[24px] sm:text-[30px] text-[#846f61] font-semibold">
          Golden Rose Banquet's - Group Gurmeet
        </h3>
        
        <p className="font-serifCustom text-[18px] sm:text-[21px] text-[#6c513f] font-light flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 text-[#a67d2b] shrink-0" />
          <span>{address}</span>
        </p>

        {/* Get Directions Button */}
        <div className="pt-4">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#a67d2b] text-white font-serifCustom text-base rounded-full shadow-md hover:bg-[#8e6a22] transition-colors"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>
      </ScrollReveal>

    </section>
  );
}

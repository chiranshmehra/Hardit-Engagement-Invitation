import React from 'react';
import { Shirt, Gift } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function DetailsSection() {
  return (
    <section className="w-full bg-[#F9F0E0] py-16 px-4 flex flex-col items-center justify-center text-center">
      <div className="max-w-xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Dress Code Card */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="bg-[#FFFDF9] border border-[#a67d2b]/20 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center space-y-3 h-full">
            <div className="w-12 h-12 rounded-full bg-[#F9F0E0] flex items-center justify-center text-[#a67d2b] mb-1">
              <Shirt className="w-6 h-6" />
            </div>
            <h3 className="font-serifCustom text-[30px] sm:text-[41px] font-light text-[#a67d2b]">
              Dress Code
            </h3>
            <p className="font-serifCustom text-[18px] sm:text-[21px] text-[#6c513f] font-light leading-[1.25]">
              We kindly ask guests to avoid deep red and maroon attire for the celebration.
            </p>
          </div>
        </ScrollReveal>

        {/* Gift Preference Card */}
        <ScrollReveal animation="fade-up" delay={250}>
          <div className="bg-[#FFFDF9] border border-[#a67d2b]/20 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center space-y-3 h-full">
            <div className="w-12 h-12 rounded-full bg-[#F9F0E0] flex items-center justify-center text-[#a67d2b] mb-1">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="font-serifCustom text-[30px] sm:text-[41px] font-light text-[#a67d2b]">
              Gift Preference
            </h3>
            <p className="font-serifCustom text-[18px] sm:text-[21px] text-[#6c513f] font-light leading-[1.25]">
              Kindly, no boxed gifts please.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

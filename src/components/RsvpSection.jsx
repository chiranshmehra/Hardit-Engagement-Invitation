import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function RsvpSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'accepts',
    guestCount: '1',
    childrenDetails: '',
    songRequest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  return (
    <section className="w-full bg-[#F9F0E0] py-20 px-4 flex flex-col items-center justify-center text-center">
      
      {/* Title */}
      <ScrollReveal animation="fade-up" delay={150}>
        <h2 className="font-serifCustom text-[30px] sm:text-[41px] text-[#a67d2b] font-light tracking-wide mb-3">
          Confirm Your Attendance
        </h2>
      </ScrollReveal>

      {/* Description */}
      <ScrollReveal animation="fade-up" delay={250}>
        <p className="font-serifCustom text-[18px] sm:text-[21px] text-[#6c513f] font-light max-w-md mb-8 leading-[1.25]">
          To help us prepare for a joyful celebration, kindly confirm your attendance.
        </p>
      </ScrollReveal>

      {/* Wax Seal Button with H & J Monogram */}
      <ScrollReveal animation="zoom-in" delay={350}>
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
        >
          <div className="w-36 h-36 sm:w-44 sm:h-44 relative">
            <img
              src="/images/hj_seal_perfect.png"
              alt="Wax seal trigger H & J"
              className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-serifCustom text-[24px] sm:text-[32px] text-[#a67d2b] font-light mt-3 group-hover:text-[#5A0F1B] transition-colors">
            Click to open
          </span>
        </button>
      </ScrollReveal>

      {/* RSVP Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100001] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#F9F0E0] border-2 border-[#a67d2b]/30 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-fade-in text-left">
            
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#a67d2b] hover:text-[#5A0F1B] transition-colors p-1"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-[#a67d2b] mx-auto animate-bounce-subtle" />
                <h3 className="font-serifCustom text-2xl text-[#a67d2b] font-medium">
                  Response Received!
                </h3>
                <p className="font-serifCustom text-lg text-[#6A5140] font-light">
                  Thank you for your RSVP. We look forward to celebrating together!
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2 bg-[#a67d2b] text-white font-serifCustom rounded-full hover:bg-[#8e6a22] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center space-y-1 mb-6">
                  <h3 className="font-serifCustom text-2xl sm:text-3xl text-[#a67d2b] font-light">
                    Confirm Your Attendance
                  </h3>
                  <p className="font-serifCustom text-sm text-[#6A5140] font-light">
                    Please RSVP before August 09
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block font-serifCustom text-sm text-[#846f61] mb-1 font-medium">
                    Your name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FFFDF9] border border-[#a67d2b]/30 text-gray-800 focus:outline-none focus:border-[#a67d2b] font-serifCustom"
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label className="block font-serifCustom text-sm text-[#846f61] mb-2 font-medium">
                    Will you be attending? *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="attendance"
                        value="accepts"
                        checked={formData.attendance === 'accepts'}
                        onChange={handleChange}
                        className="accent-[#a67d2b] w-4 h-4"
                      />
                      <span className="font-serifCustom text-base text-[#6A5140]">Accepts with pleasure</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="attendance"
                        value="declines"
                        checked={formData.attendance === 'declines'}
                        onChange={handleChange}
                        className="accent-[#a67d2b] w-4 h-4"
                      />
                      <span className="font-serifCustom text-base text-[#6A5140]">Declines with regret</span>
                    </label>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block font-serifCustom text-sm text-[#846f61] mb-1 font-medium">
                    Number of Guests Attending
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FFFDF9] border border-[#a67d2b]/30 text-gray-800 focus:outline-none focus:border-[#a67d2b] font-serifCustom"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>

                {/* Children Details */}
                <div>
                  <label className="block font-serifCustom text-sm text-[#846f61] mb-1 font-medium">
                    Children Attending
                  </label>
                  <input
                    type="text"
                    name="childrenDetails"
                    value={formData.childrenDetails}
                    onChange={handleChange}
                    placeholder="Please include names and ages."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FFFDF9] border border-[#a67d2b]/30 text-gray-800 focus:outline-none focus:border-[#a67d2b] font-serifCustom"
                  />
                </div>

                {/* Song Request */}
                <div>
                  <label className="block font-serifCustom text-sm text-[#846f61] mb-1 font-medium">
                    A Song That Gets You Dancing
                  </label>
                  <input
                    type="text"
                    name="songRequest"
                    value={formData.songRequest}
                    onChange={handleChange}
                    placeholder="Song title & artist"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FFFDF9] border border-[#a67d2b]/30 text-gray-800 focus:outline-none focus:border-[#a67d2b] font-serifCustom"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#5A0F1B] text-white font-serifCustom text-lg rounded-xl shadow-md hover:bg-[#3d0a12] transition-colors"
                  >
                    Submit RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
}

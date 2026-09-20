import React, { useState } from 'react';
import EnvelopeOverlay from './components/EnvelopeOverlay';
import VideoIntro from './components/VideoIntro';
import AudioPlayer from './components/AudioPlayer';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import ScheduleSection from './components/ScheduleSection';
import LocationSection from './components/LocationSection';
import FooterSection from './components/FooterSection';

export default function App() {
  // Step flow: 'envelope' -> 'video' -> 'main'
  const [step, setStep] = useState('envelope');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Triggered when user taps envelope overlay
  const handleOpenEnvelope = () => {
    setIsPlayingAudio(true);
    setStep('video');
  };

  // Triggered when video intro finishes
  const handleVideoComplete = () => {
    setStep('main');
  };

  // Toggle audio on floating button click
  const toggleAudio = () => {
    setIsPlayingAudio((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#F9F0E0] text-gray-900 selection:bg-[#a67d2b]/20 selection:text-[#5A0F1B]">
      
      {/* Background Audio Player */}
      <AudioPlayer
        isPlaying={isPlayingAudio}
        togglePlay={toggleAudio}
        showButton={step === 'main'}
      />

      {/* 1. Envelope Overlay Cover */}
      <EnvelopeOverlay
        isVisible={step === 'envelope'}
        onOpen={handleOpenEnvelope}
      />

      {/* 2. Video Intro Modal */}
      <VideoIntro
        isVisible={step === 'video'}
        onVideoComplete={handleVideoComplete}
      />

      {/* 3. Main Invitation Website */}
      <main className={`transition-opacity duration-1000 ${step === 'main' ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <CountdownTimer />
        <ScheduleSection />
        <LocationSection />
        <FooterSection />
      </main>

    </div>
  );
}


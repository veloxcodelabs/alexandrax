import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ScheduleSection } from './components/ScheduleSection';
import { FeaturedGrid } from './components/FeaturedGrid';
import { LinksHub } from './components/LinksHub';
import { MerchTeaser } from './components/MerchTeaser';
import { Footer } from './components/Footer';

export default function App() {
  const [isLive, setIsLive] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#241E1C] selection:bg-[#E63973] selection:text-white">
      {/* Top Ambient Announcement Bar when Live */}
      {isLive && (
        <div className="bg-gradient-to-r from-[#E63973] via-[#FF4D6D] to-[#F5B800] text-white text-xs font-heading-lux font-bold py-2 px-4 text-center tracking-wider flex items-center justify-center gap-2 shadow-xs">
          <span className="inline-block w-2 h-2 rounded-full bg-white animate-ping" />
          <span>ALEXANDRA IS LIVE NOW ON TWITCH — "Sunset Tea, Ranked Games & Travel Stories"</span>
          <a
            href="https://twitch.tv/alexandraxalmonte"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1 font-extrabold hover:text-[#241E1C] transition-colors"
          >
            Tune In &rarr;
          </a>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar isLive={isLive} setIsLive={setIsLive} />

      {/* Hero Section */}
      <HeroSection isLive={isLive} />

      {/* About Section */}
      <AboutSection />

      {/* Weekly Schedule Section */}
      <ScheduleSection />

      {/* Featured 6-Card Content Grid (Clips & Photos) */}
      <FeaturedGrid />

      {/* Links & Social Hub (Link in Bio style) */}
      <LinksHub />

      {/* Capsule Merch Teaser */}
      <MerchTeaser />

      {/* Footer */}
      <Footer />
    </div>
  );
}

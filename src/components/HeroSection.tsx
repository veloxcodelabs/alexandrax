import React from 'react';
import { Play, Instagram, Sparkles, Tv, ArrowRight, Waves } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  isLive: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isLive }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32 bg-[#FAF6F0]">
      {/* Decorative ambient sunset aura in the background */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#FF2E79]/15 via-[#F5B800]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-gradient-to-tr from-[#F5B800]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Top Micro Eyebrow with Keyhole Motif Accent */}
            <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E63973]/25 shadow-xs">
              <span className="w-2 h-3.5 rounded-full bg-gradient-to-b from-[#E63973] to-[#F5B800] inline-block"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#241E1C]/80">
                Tropical Chic • Twitch Partner • Creator
              </span>
              <span className="text-xs text-[#E63973]">✨</span>
            </div>

            {/* Main Heading: Alexandra X Almonte */}
            <div className="space-y-2">
              <h1 className="font-heading-lux font-black tracking-tight text-4xl sm:text-6xl lg:text-7xl text-[#241E1C] leading-[1.05]">
                ALEXANDRA <br className="hidden sm:inline" />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#E63973] via-[#FF4D6D] to-[#F5B800]">
                  X ALMONTE
                </span>
              </h1>
              
              {/* Catchy Tagline */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-heading-lux font-semibold text-[#241E1C]/90 tracking-wide pt-2">
                “{CREATOR_PROFILE.tagline}”
              </p>
            </div>

            {/* Signature Quote Banner */}
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-center py-2 px-4 font-semibold text-sm tracking-wide shadow-md rounded-2xl">
              🐎 "Horses don’t stop they keep going!" — Alexandra X Almonte
            </div>

            {/* Luxury Editorial Subtitle */}
            <p className="font-serif-lux text-base sm:text-lg text-[#241E1C]/75 max-w-xl leading-relaxed">
              Where luxury resort escapism meets high-octane FPS lobbies, cozy midnight chats, and sun-drenched coastal stories. Step into the sunset lounge.
            </p>

            {/* Dual-CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary: Watch Live on Twitch */}
              <a
                href={CREATOR_PROFILE.twitchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#E63973] to-[#FF4D6D] hover:from-[#d8225e] hover:to-[#e6395b] text-white font-heading-lux font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#E63973]/25 active:scale-[0.98]"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-3.5 h-3.5 fill-current text-white ml-0.5" />
                </div>
                <span>Watch Live on Twitch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary: Follow on Instagram */}
              <a
                href={CREATOR_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white hover:bg-[#FAF6F0] border-2 border-[#241E1C]/15 hover:border-[#F5B800] text-[#241E1C] font-heading-lux font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-xs hover:shadow-md active:scale-[0.98]"
              >
                <Instagram className="w-4 h-4 text-[#E63973]" />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-[#241E1C]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {CREATOR_PROFILE.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-heading-lux font-extrabold text-xl sm:text-2xl text-[#241E1C]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-[#241E1C]/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-Impact Lifestyle Portrait */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Decorative Frame with Resort Motif */}
            <div className="relative w-full max-w-md">
              
              {/* Behind-card warm gradient halo */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#E63973]/30 via-[#F5B800]/30 to-transparent blur-xl opacity-70 transform rotate-1"></div>

              {/* Main Image Card */}
              <div className="relative rounded-[2rem] overflow-hidden bg-white p-2.5 sm:p-3 shadow-2xl border border-[#241E1C]/10 transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative aspect-[3/4] w-full rounded-[1.6rem] overflow-hidden bg-[#ECE3D6]">
                  <img
                    src="/images/alexandra_hero_1789721144815.jpg"
                    alt="Alexandra X Almonte at cliffside infinity pool at sunset in coral halter dress"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241E1C]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Bottom Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#FAF6F0]/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E63973] block">
                        Now Streaming
                      </span>
                      <p className="font-heading-lux font-bold text-[#241E1C] text-sm">
                        Just Chatting & Sunset Horizons
                      </p>
                    </div>

                    {/* Audio wave pulse bars */}
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-[#E63973] rounded-full animate-pulse"></span>
                      <span className="w-1 h-5 bg-[#F5B800] rounded-full animate-pulse delay-75"></span>
                      <span className="w-1 h-4 bg-[#E63973] rounded-full animate-pulse delay-150"></span>
                    </div>
                  </div>

                  {/* Top Live / Verified Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#241E1C]/85 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping inline-block"></span>
                    <span className="tracking-wider">@alexandraxalmonte</span>
                  </div>

                  {/* Tropical Sun Motif Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F5B800] text-[#241E1C] flex items-center justify-center font-bold text-xs shadow-md">
                    ☀️
                  </div>

                </div>
              </div>

              {/* Floating Decorative Keyhole Motif Accent Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-[#241E1C]/10 items-center gap-3">
                <div className="w-7 h-7 rounded-xl bg-[#F5B800]/20 flex items-center justify-center text-[#996500]">
                  <Waves className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#241E1C]">
                    Resort Chic
                  </div>
                  <div className="text-[10px] text-[#241E1C]/60">
                    Luxury Travel & Gaming
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

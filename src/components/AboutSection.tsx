import React, { useState } from 'react';
import { Sparkles, Gamepad2, Palmtree, Heart, Coffee, Monitor, Award, Compass } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'vibe' | 'setup' | 'games'>('story');

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Subtle textured background decoration */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#241E1C 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5B800]/20 border border-[#F5B800]/40 text-[#8A5B00] text-xs font-bold uppercase tracking-widest">
            <Palmtree className="w-3.5 h-3.5" />
            <span>Behind The Sunset</span>
          </div>
          <h2 className="font-heading-lux font-extrabold text-3xl sm:text-5xl text-[#241E1C] tracking-tight">
            Meet Alexandra
          </h2>
          <p className="font-serif-lux text-base sm:text-lg text-[#241E1C]/75">
            Sun-seeker by day, high-intensity streamer by twilight. Here's a glimpse into the lifestyle.
          </p>
        </div>

        {/* Main About Card Overlaying Textured Canvas */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-xl border border-[#241E1C]/8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Photo Column: Image_0 reference style */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-[#FAF0E6] overflow-hidden group">
              <img
                src="/images/alexandra_about_1789721158572.jpg"
                alt="Alexandra X Almonte relaxing in chic resort daybed by limestone arch"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241E1C]/70 via-transparent to-transparent lg:hidden" />
              
              {/* Photo Caption Badge */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-[#FAF6F0]/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E63973]">
                      Lifestyle & Origins
                    </span>
                    <h3 className="font-heading-lux font-bold text-sm text-[#241E1C]">
                      Miami Sunsets & Caribbean Roots
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F5B800]/20 flex items-center justify-center text-[#996500]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Keyhole Cutout Geometric Accent */}
              <div className="hidden lg:block absolute top-6 left-6 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold tracking-wider text-[#241E1C] uppercase shadow-sm">
                Authentic & Unfiltered
              </div>
            </div>

            {/* Right Bio & Interactive Information Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between space-y-8">
              
              {/* First-Person Bio Header & Body */}
              <div className="space-y-6">
                
                {/* Interactive Navigation Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-[#241E1C]/10 pb-4">
                  {[
                    { id: 'story', label: 'My Story', icon: Heart },
                    { id: 'vibe', label: 'The Stream Vibe', icon: Palmtree },
                    { id: 'setup', label: 'Villa Battlestation', icon: Monitor },
                    { id: 'games', label: 'Main Rotations', icon: Gamepad2 },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                          isActive
                            ? 'bg-[#E63973] text-white shadow-sm'
                            : 'bg-[#FAF6F0] text-[#241E1C]/75 hover:bg-[#F5EFEB] hover:text-[#241E1C]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content 1: My Story */}
                {activeTab === 'story' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-heading-lux font-bold text-2xl text-[#241E1C]">
                      "I wanted a stream that felt like golden hour at a private beach villa."
                    </h3>
                    <p className="font-serif-lux text-base text-[#241E1C]/85 leading-relaxed">
                      {CREATOR_PROFILE.bio}
                    </p>
                    <p className="font-serif-lux text-base text-[#241E1C]/85 leading-relaxed">
                      I started streaming because I loved the thrill of gaming, but I craved a space that felt elevated, warm, and genuine. On my channel, you won't find generic noise—just authentic laughter, passionate gameplay, travel updates, and an incredibly supportive community who lift each other up every single broadcast.
                    </p>
                  </div>
                )}

                {/* Tab Content 2: Stream Vibe */}
                {activeTab === 'vibe' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-heading-lux font-bold text-2xl text-[#241E1C]">
                      Tropical Escapism Meets High-Energy Entertainment
                    </h3>
                    <p className="font-serif-lux text-base text-[#241E1C]/85 leading-relaxed">
                      Streams are designed to feel like an effortless evening hangout. We kick off with sunset chill chats, dive deep into hilarious viewer advice hot-takes, and then ramp up the intensity into ranked tournaments or spooky late-night horror adventures.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#241E1C]/5">
                        <span className="font-bold text-xs uppercase text-[#E63973] block mb-1">Cozy & Candid</span>
                        <p className="text-xs text-[#241E1C]/75">No corporate filters. Real talks on wellness, runway fashion, and creative growth.</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#241E1C]/5">
                        <span className="font-bold text-xs uppercase text-[#F5B800] block mb-1">Competitive Drive</span>
                        <p className="text-xs text-[#241E1C]/75">High elo FPS matches, clutches, and squad tournaments with top creators.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 3: Setup */}
                {activeTab === 'setup' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-heading-lux font-bold text-2xl text-[#241E1C]">
                      The Oceanfront Studio Specs
                    </h3>
                    <p className="font-serif-lux text-base text-[#241E1C]/85 leading-relaxed">
                      Engineered for crystal-clear broadcast fidelity, warm ambient sunset backlighting, and latency-free competitive performance.
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#241E1C]/80">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E63973]" />
                        <strong>Streaming Rig:</strong> RTX 4090 OC, Ryzen 9 7950X, 64GB DDR5 6000MHz
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F5B800]" />
                        <strong>Audio:</strong> Shure SM7B + Cloudlifter CL-1 + GoXLR Broadcast Mixer
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E63973]" />
                        <strong>Camera:</strong> Sony A7 IV with 24-70mm f/2.8 GM II Lens & Cam Link 4K
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F5B800]" />
                        <strong>Peripherals:</strong> Custom lubed 65% mechanical board & Wooting 60HE
                      </li>
                    </ul>
                  </div>
                )}

                {/* Tab Content 4: Top Games */}
                {activeTab === 'games' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-heading-lux font-bold text-2xl text-[#241E1C]">
                      Current Main Gaming Rotations
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { title: 'Valorant', genre: 'Competitive Tactical FPS' },
                        { title: 'Horizon Forbidden West', genre: 'Cinematic Action RPG' },
                        { title: 'Grand Theft Auto RP', genre: 'Story & Character RP' },
                        { title: 'Overwatch 2', genre: 'Hero Shooter' },
                        { title: 'Phasmophobia', genre: 'Horror Friday Community' },
                        { title: 'Animal Crossing / Cozy', genre: 'Sunday Wind-down' },
                      ].map((game, i) => (
                        <div key={i} className="p-3 rounded-2xl bg-[#FAF6F0] border border-[#241E1C]/5">
                          <p className="font-heading-lux font-bold text-sm text-[#241E1C]">{game.title}</p>
                          <span className="text-[11px] text-[#241E1C]/60 block">{game.genre}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Quick Fun Facts Pill Row */}
              <div className="pt-6 border-t border-[#241E1C]/10 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6F0] text-[#241E1C] text-xs font-medium">
                  <Coffee className="w-3.5 h-3.5 text-[#E63973]" />
                  <span>Iced Matcha & Coconut Water</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6F0] text-[#241E1C] text-xs font-medium">
                  <Palmtree className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>Endless Golden Hour Chaser</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6F0] text-[#241E1C] text-xs font-medium">
                  <Award className="w-3.5 h-3.5 text-[#E63973]" />
                  <span>Twitch Ambassador</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6F0] text-[#241E1C] text-xs font-medium">
                  <Compass className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>Next Trip: Amalfi & Tokyo</span>
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

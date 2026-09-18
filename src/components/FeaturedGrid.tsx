import React, { useState } from 'react';
import { Play, Heart, Eye, Sparkles, Filter, ExternalLink, Instagram, Tv } from 'lucide-react';
import { FEATURED_CONTENT } from '../data/portfolioData';
import { ContentCard } from '../types';
import { MediaModal } from './MediaModal';

export const FeaturedGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'twitch' | 'instagram'>('all');
  const [selectedCard, setSelectedCard] = useState<ContentCard | null>(null);

  const filteredCards = FEATURED_CONTENT.filter(card => {
    if (activeFilter === 'all') return true;
    return card.platform === activeFilter;
  });

  return (
    <section id="featured" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#E63973]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-[#F5B800]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E63973]/15 border border-[#E63973]/30 text-[#E63973] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Highlights & Lifestyle</span>
            </div>
            <h2 className="font-heading-lux font-black text-3xl sm:text-5xl text-[#241E1C] tracking-tight">
              Featured Content
            </h2>
            <p className="font-serif-lux text-base sm:text-lg text-[#241E1C]/75 max-w-xl">
              A curated mix of top stream highlights, clutch gameplay moments, and sun-lit tropical travel diaries.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center p-1 rounded-2xl bg-white border border-[#241E1C]/10 shadow-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#241E1C] text-white shadow-xs'
                  : 'text-[#241E1C]/70 hover:text-[#241E1C]'
              }`}
            >
              All Content (6)
            </button>
            <button
              onClick={() => setActiveFilter('twitch')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'twitch'
                  ? 'bg-[#9146FF] text-white shadow-xs'
                  : 'text-[#241E1C]/70 hover:text-[#9146FF]'
              }`}
            >
              <Tv className="w-3 h-3" />
              <span>Twitch Clips</span>
            </button>
            <button
              onClick={() => setActiveFilter('instagram')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'instagram'
                  ? 'bg-[#E63973] text-white shadow-xs'
                  : 'text-[#241E1C]/70 hover:text-[#E63973]'
              }`}
            >
              <Instagram className="w-3 h-3" />
              <span>Instagram</span>
            </button>
          </div>
        </div>

        {/* 6 Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => {
            const isClip = card.type === 'clip';

            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className="group cursor-pointer rounded-3xl bg-white border border-[#241E1C]/10 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Card Media Preview */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE3D6]">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241E1C]/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge: Platform Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm text-white flex items-center gap-1 ${
                        isClip ? 'bg-[#9146FF]' : 'bg-[#E63973]'
                      }`}
                    >
                      {isClip ? <Tv className="w-3 h-3" /> : <Instagram className="w-3 h-3" />}
                      <span>{isClip ? 'Twitch Clip' : 'Instagram'}</span>
                    </span>
                  </div>

                  {/* Play Button Indicator (for clips) or Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                        isClip
                          ? 'bg-white/90 text-[#E63973] shadow-lg group-hover:scale-110 group-hover:bg-[#E63973] group-hover:text-white'
                          : 'bg-black/30 text-white opacity-0 group-hover:opacity-100 group-hover:scale-110'
                      }`}
                    >
                      {isClip ? (
                        <Play className="w-6 h-6 fill-current ml-1" />
                      ) : (
                        <Sparkles className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Stats Overlay inside image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="truncate max-w-[70%] font-heading-lux text-xs drop-shadow-sm">
                      {card.subtitle}
                    </span>
                    <span className="bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-mono">
                      {card.duration || card.likes}
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-heading-lux font-bold text-base sm:text-lg text-[#241E1C] group-hover:text-[#E63973] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="font-serif-lux text-xs sm:text-sm text-[#241E1C]/70 line-clamp-2">
                      {card.caption || card.videoPlaceholderText}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#241E1C]/8 text-xs font-semibold text-[#241E1C]/60">
                    <span className="flex items-center gap-1 text-[#E63973]">
                      Click to inspect media
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Media Modal */}
      <MediaModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </section>
  );
};

import React, { useState } from 'react';
import { X, Play, Heart, MessageCircle, ExternalLink, Share2, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { ContentCard } from '../types';

interface MediaModalProps {
  card: ContentCard | null;
  onClose: () => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ card, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#241E1C]/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#241E1C]/10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#241E1C]/10 bg-[#FAF6F0]">
          <div className="flex items-center gap-2.5">
            <span 
              className={`w-3 h-3 rounded-full ${
                card.type === 'clip' ? 'bg-[#9146FF]' : 'bg-[#E63973]'
              }`} 
            />
            <span className="font-heading-lux font-bold text-xs uppercase tracking-wider text-[#241E1C]">
              {card.type === 'clip' ? 'Twitch Clip Preview' : 'Instagram Photo View'}
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#241E1C]/10 text-[#241E1C] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          
          {/* Media Player / Image Display */}
          <div className="md:col-span-7 bg-[#1C1715] relative flex items-center justify-center min-h-[300px] md:min-h-[460px]">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-contain max-h-[500px]"
              referrerPolicy="no-referrer"
            />

            {/* Video overlay controls if it's a clip */}
            {card.type === 'clip' && (
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-md bg-[#9146FF] text-white text-[10px] font-extrabold uppercase tracking-wider">
                    Twitch Highlight
                  </span>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-white/90 text-[#241E1C] hover:bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                  >
                    <Play className="w-7 h-7 fill-current text-[#E63973] ml-1" />
                  </button>
                </div>

                {/* Simulated video playback scrubber */}
                <div className="space-y-1.5 bg-black/40 backdrop-blur-xs p-2 rounded-xl">
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#E63973] to-[#F5B800] h-full w-2/3 rounded-full animate-pulse" />
                  </div>
                  <div className="flex justify-between text-[10px] text-white/80 font-mono">
                    <span>0:38</span>
                    <span>{card.duration || '1:15'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Media Info & Interactive Reactions */}
          <div className="md:col-span-5 p-6 flex flex-col justify-between bg-white space-y-6">
            <div className="space-y-4">
              
              {/* Creator Profile Mini Bar */}
              <div className="flex items-center gap-3 pb-3 border-b border-[#241E1C]/8">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FAF6F0] border border-[#E63973]/30">
                  <img
                    src="/images/alexandra_hero_1789721144815.jpg"
                    alt="Alexandra"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-heading-lux font-bold text-sm text-[#241E1C]">
                    Alexandra X Almonte
                  </h4>
                  <p className="text-xs text-[#241E1C]/60">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="space-y-2">
                <h3 className="font-heading-lux font-bold text-lg text-[#241E1C] leading-snug">
                  {card.title}
                </h3>
                <p className="font-serif-lux text-sm text-[#241E1C]/80 leading-relaxed">
                  {card.caption || card.videoPlaceholderText}
                </p>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-4 text-xs font-semibold text-[#241E1C]/70 pt-2">
                {card.views && <span>👀 {card.views}</span>}
                {card.likes && <span>❤️ {card.likes}</span>}
                <span>💬 1.2K comments</span>
              </div>

            </div>

            {/* Actions: Heart + Share + Open on Platform */}
            <div className="space-y-3 pt-4 border-t border-[#241E1C]/8">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    liked
                      ? 'bg-[#E63973]/10 border-[#E63973]/30 text-[#E63973]'
                      : 'border-[#241E1C]/15 text-[#241E1C] hover:bg-[#FAF6F0]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-current text-[#E63973]' : ''}`} />
                  <span>{liked ? 'Liked!' : 'Like Clip'}</span>
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(card.link);
                    alert('Link copied to clipboard!');
                  }}
                  className="p-2.5 rounded-xl border border-[#241E1C]/15 text-[#241E1C] hover:bg-[#FAF6F0]"
                  title="Share link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-white font-heading-lux font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  card.platform === 'twitch'
                    ? 'bg-[#9146FF] hover:bg-[#7c2cf5]'
                    : 'bg-[#E63973] hover:bg-[#cf245e]'
                }`}
              >
                <span>Open on {card.platform === 'twitch' ? 'Twitch' : 'Instagram'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

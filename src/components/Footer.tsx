import React from 'react';
import { ArrowUp, Instagram, Tv, MessageSquare, Flame, Heart, Mail } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1715] text-[#FAF6F0] pt-16 pb-12 border-t border-[#FAF6F0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#FAF6F0]/10">
          
          {/* Brand Col */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#" className="inline-block group">
              <span className="font-heading-lux font-black tracking-tight text-2xl text-white uppercase">
                Alexandra <span className="text-[#E63973]">X</span> Almonte
              </span>
            </a>
            <p className="font-serif-lux text-xs sm:text-sm text-[#FAF6F0]/60 max-w-sm">
              Tropical chic creator, competitive gamer, and sunset chaser. Welcome to the lounge.
            </p>
          </div>

          {/* Social Icons Strip */}
          <div className="flex items-center gap-3">
            <a
              href={CREATOR_PROFILE.twitchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-[#9146FF] text-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="Twitch"
            >
              <Tv className="w-5 h-5" />
            </a>
            <a
              href={CREATOR_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-[#E63973] text-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={CREATOR_PROFILE.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-[#5865F2] text-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="Discord"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com/@alexandraxalmonte"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-[#F5B800] hover:text-[#241E1C] text-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="TikTok"
            >
              <Flame className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${CREATOR_PROFILE.businessEmail}`}
              className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="Email Management"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 text-xs font-semibold tracking-wider text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#F5B800]" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6F0]/50 gap-4">
          <p>© {new Date().getFullYear()} Alexandra X Almonte. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built for</span>
            <span className="font-heading-lux font-bold text-white">Alexandra X Almonte</span>
            <span className="text-[#E63973]">♥</span>
            <span className="text-[#F5B800]">☀️</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

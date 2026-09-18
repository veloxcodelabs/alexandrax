import React, { useState } from 'react';
import { Radio, Menu, X, ExternalLink, Sparkles, Tv } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  isLive: boolean;
  setIsLive: (live: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isLive, setIsLive }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#241E1C]/8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E63973] to-[#F5B800] p-[2px] shadow-sm transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#FAF6F0] rounded-full flex items-center justify-center">
                <span className="font-heading-lux font-extrabold text-[#241E1C] text-sm tracking-wider">AX</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading-lux font-bold tracking-tight text-lg sm:text-xl text-[#241E1C] uppercase leading-tight">
                Alexandra <span className="text-[#E63973]">X</span>
              </span>
              <span className="text-[11px] font-medium tracking-widest text-[#241E1C]/60 uppercase">
                Almonte
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#about" className="text-[#241E1C]/80 hover:text-[#E63973] transition-colors py-2">
              About
            </a>
            <a href="#schedule" className="text-[#241E1C]/80 hover:text-[#E63973] transition-colors py-2">
              Schedule
            </a>
            <a href="#featured" className="text-[#241E1C]/80 hover:text-[#E63973] transition-colors py-2">
              Content & Clips
            </a>
            <a href="#links" className="text-[#241E1C]/80 hover:text-[#E63973] transition-colors py-2">
              Social Hub
            </a>
            <a href="#merch" className="text-[#241E1C]/80 hover:text-[#E63973] transition-colors py-2 flex items-center gap-1.5">
              Merch
              <span className="text-[10px] font-semibold bg-[#F5B800]/25 text-[#735100] px-1.5 py-0.5 rounded-full">
                Soon
              </span>
            </a>
          </nav>

          {/* Live Indicator & Twitch CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Live Status Badge / Toggle */}
            <button
              onClick={() => setIsLive(!isLive)}
              title="Click to toggle demo live state"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide transition-all ${
                isLive
                  ? 'bg-[#FF2E79]/10 border-[#FF2E79]/40 text-[#D81B60]'
                  : 'bg-[#241E1C]/5 border-[#241E1C]/10 text-[#241E1C]/70'
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                {isLive && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2E79] opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isLive ? 'bg-[#FF2E79]' : 'bg-[#241E1C]/40'}`}></span>
              </span>
              <span>{isLive ? 'LIVE ON TWITCH' : 'OFFLINE • 6PM EST'}</span>
            </button>

            {/* Direct Twitch Button */}
            <a
              href={CREATOR_PROFILE.twitchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#241E1C] hover:bg-[#9146FF] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Watch Stream</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsLive(!isLive)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border border-[#FF2E79]/30 bg-[#FF2E79]/10 text-[#D81B60]"
            >
              <span className={`h-2 w-2 rounded-full ${isLive ? 'bg-[#FF2E79] animate-pulse' : 'bg-[#241E1C]/40'}`}></span>
              {isLive ? 'LIVE' : 'OFFLINE'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-[#241E1C] hover:bg-[#241E1C]/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#241E1C]/10 bg-[#FAF6F0] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#241E1C] hover:bg-[#241E1C]/5"
          >
            About
          </a>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#241E1C] hover:bg-[#241E1C]/5"
          >
            Stream Schedule
          </a>
          <a
            href="#featured"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#241E1C] hover:bg-[#241E1C]/5"
          >
            Content & Clips
          </a>
          <a
            href="#links"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#241E1C] hover:bg-[#241E1C]/5"
          >
            Social Hub (Link in Bio)
          </a>
          <a
            href="#merch"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#241E1C] hover:bg-[#241E1C]/5"
          >
            Merch Capsule Drop
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={CREATOR_PROFILE.twitchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl bg-[#9146FF] text-white font-semibold text-sm shadow-sm"
            >
              Open Twitch Stream
            </a>
            <a
              href={CREATOR_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl border border-[#241E1C]/15 text-[#241E1C] font-semibold text-sm hover:bg-white"
            >
              Follow @alexandraxalmonte
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

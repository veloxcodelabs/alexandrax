import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Mail, Send, Sparkles, Tv, Instagram, MessageSquare, Flame } from 'lucide-react';
import { SOCIAL_LINKS, CREATOR_PROFILE } from '../data/portfolioData';

export const LinksHub: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    budget: '$5,000 - $15,000',
    details: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CREATOR_PROFILE.businessEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInquiryModalOpen(false);
      setFormData({ brandName: '', email: '', budget: '$5,000 - $15,000', details: '' });
    }, 2500);
  };

  return (
    <section id="links" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      
      {/* Background Radiance */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#F5B800]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#E63973]/15 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E63973]/10 border border-[#E63973]/25 text-[#E63973] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="font-heading-lux font-black text-3xl sm:text-5xl text-[#241E1C] tracking-tight">
            Links & Social Hub
          </h2>
          <p className="font-serif-lux text-base sm:text-lg text-[#241E1C]/75">
            Your direct passport into Alexandra's digital sanctuary, stream community, and official brand partnerships.
          </p>
        </div>

        {/* The "Link in Bio" Luxury Stack */}
        <div className="space-y-4">
          {SOCIAL_LINKS.map((link) => {
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-5 sm:p-6 rounded-3xl bg-white border border-[#241E1C]/8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle Hover Gradient Accent Bar */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-2 transition-all duration-300 group-hover:w-3"
                  style={{ backgroundColor: link.accentColor }}
                />

                <div className="flex items-center justify-between gap-4 pl-3">
                  <div className="flex items-center gap-4">
                    {/* Channel Icon Avatar */}
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-110"
                      style={{ backgroundColor: link.accentColor }}
                    >
                      {link.iconName === 'twitch' && <Tv className="w-6 h-6" />}
                      {link.iconName === 'instagram' && <Instagram className="w-6 h-6" />}
                      {link.iconName === 'discord' && <MessageSquare className="w-6 h-6" />}
                      {link.iconName === 'tiktok' && <Flame className="w-6 h-6" />}
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading-lux font-bold text-base sm:text-lg text-[#241E1C] group-hover:text-[#E63973] transition-colors">
                          {link.name}
                        </h3>
                        {link.badge && (
                          <span className="hidden sm:inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#241E1C]/70 border border-[#241E1C]/10">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-serif-lux text-xs sm:text-sm text-[#241E1C]/70 line-clamp-1">
                        {link.description}
                      </p>
                    </div>
                  </div>

                  {/* Action arrow button */}
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF6F0] flex items-center justify-center text-[#241E1C]/60 group-hover:bg-[#241E1C] group-hover:text-white transition-all shrink-0">
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}

          {/* Business & Brand Partnerships Button */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#241E1C] to-[#1C1715] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-1">
                <Mail className="w-3.5 h-3.5 text-[#F5B800]" />
                <span>Commercial Inquiries</span>
              </div>
              <h3 className="font-heading-lux font-bold text-xl text-white">
                Brand Deals & Press Relations
              </h3>
              <p className="font-serif-lux text-xs sm:text-sm text-white/75 max-w-md">
                Represented by top-tier creator talent management. Open for luxury travel, gaming tech, beauty & lifestyle sponsorships.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#00E676]" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <button
                onClick={() => setInquiryModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[#E63973] to-[#FF4D6D] hover:from-[#d8225e] hover:to-[#e6395b] text-white font-heading-lux font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 text-center whitespace-nowrap"
              >
                Submit Proposal
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Business Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241E1C]/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#241E1C]/10">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#241E1C]/10">
              <h3 className="font-heading-lux font-bold text-xl text-[#241E1C]">
                Brand Partnership Inquiry
              </h3>
              <button
                onClick={() => setInquiryModalOpen(false)}
                className="p-1 rounded-full text-[#241E1C]/60 hover:text-[#241E1C]"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-heading-lux font-bold text-xl text-[#241E1C]">
                  Proposal Received!
                </h4>
                <p className="font-serif-lux text-sm text-[#241E1C]/70">
                  Thank you! Alexandra's management team will review your inquiry and respond within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#241E1C]/70 mb-1">
                    Brand / Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sony, Red Bull, Cult Gaia"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#241E1C]/15 focus:border-[#E63973] focus:ring-1 focus:ring-[#E63973] text-sm text-[#241E1C] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#241E1C]/70 mb-1">
                    Corporate Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partnerships@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#241E1C]/15 focus:border-[#E63973] focus:ring-1 focus:ring-[#E63973] text-sm text-[#241E1C] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#241E1C]/70 mb-1">
                    Campaign Scope / Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#241E1C]/15 focus:border-[#E63973] focus:ring-1 focus:ring-[#E63973] text-sm text-[#241E1C] outline-none bg-white"
                  >
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $15,000</option>
                    <option>$15,000 - $35,000</option>
                    <option>$35,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#241E1C]/70 mb-1">
                    Campaign Overview & Deliverables
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe deliverables (e.g., Twitch integration, sponsored stream, Instagram reel, travel vlog integration)..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#241E1C]/15 focus:border-[#E63973] focus:ring-1 focus:ring-[#E63973] text-sm text-[#241E1C] outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setInquiryModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-[#241E1C]/15 text-xs font-semibold text-[#241E1C]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#E63973] hover:bg-[#cf245e] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Send to Management
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

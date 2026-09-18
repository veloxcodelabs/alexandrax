import React, { useState } from 'react';
import { ShoppingBag, Sparkles, ArrowRight, Check } from 'lucide-react';

export const MerchTeaser: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section id="merch" className="py-16 md:py-24 bg-[#F5EFEB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#241E1C] via-[#2A2321] to-[#1C1715] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E63973]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#F5B800]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5B800] text-xs font-bold uppercase tracking-widest">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Capsule 01 • Limited Release</span>
              </div>

              <h2 className="font-heading-lux font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                "Sol & Sunset" <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] to-[#F5B800]">
                  Resort Wear Meets Streamer Comfort
                </span>
              </h2>

              <p className="font-serif-lux text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
                Handcrafted knitwear, sun-bleached heavyweight fleece, and sunset linen pieces tailored for both luxury vacations and 10-hour marathon streams.
              </p>

              {/* Waitlist Form */}
              <div className="pt-2">
                {subscribed ? (
                  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#00E676]/20 border border-[#00E676]/40 text-[#00E676] font-bold text-sm">
                    <Check className="w-4 h-4" />
                    <span>You're on the VIP early access list! Check your inbox soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <input
                      type="email"
                      required
                      placeholder="Enter email for VIP early access..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#E63973] to-[#FF4D6D] hover:from-[#d8225e] hover:to-[#e6395b] text-white font-heading-lux font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
                    >
                      Join Waitlist
                    </button>
                  </form>
                )}
                <p className="text-[11px] text-white/50 mt-2">
                  First 500 signups receive an exclusive embroidered sunset tote bag with orders over $80.
                </p>
              </div>

            </div>

            {/* Right Merch Preview Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-3 backdrop-blur-sm shadow-xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#1C1715]">
                  <img
                    src="/images/alexandra_garden_1789721169464.jpg"
                    alt="Sol & Sunset capsule collection sneak peek with Alexandra in resort knit"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] font-bold text-[#F5B800] uppercase tracking-wider block">
                          Preview Item
                        </span>
                        <h4 className="font-heading-lux font-bold text-white text-sm">
                          Sunset Knit Halter & Tote
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-white/90 bg-white/20 px-2 py-1 rounded-md">
                        Drop 01
                      </span>
                    </div>
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

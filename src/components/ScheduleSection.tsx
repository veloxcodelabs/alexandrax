import React, { useState } from 'react';
import { Calendar, Clock, Globe, Bell, Check, Sparkles, Tv, Flame } from 'lucide-react';
import { WEEKLY_SCHEDULE, CREATOR_PROFILE } from '../data/portfolioData';

type TimeZoneType = 'EST' | 'PST' | 'GMT';

export const ScheduleSection: React.FC = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState<TimeZoneType>('EST');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [copied, setCopied] = useState(false);
  const [reminderSet, setReminderSet] = useState(false);

  const categories = ['All', 'Just Chatting', 'Gaming', 'IRL Travel'];

  const filteredSchedule = WEEKLY_SCHEDULE.filter(item => {
    if (filterCategory === 'All') return true;
    return item.category === filterCategory;
  });

  const getTimeForZone = (item: typeof WEEKLY_SCHEDULE[0]) => {
    if (item.category === 'Day Off') return 'Off Stream (Vlogs & Stories)';
    if (selectedTimeZone === 'EST') return item.timeEST;
    if (selectedTimeZone === 'PST') return item.timePST;
    return item.timeGMT;
  };

  const handleCopySchedule = () => {
    const text = WEEKLY_SCHEDULE.map(
      s => `${s.day}: ${s.title} (${getTimeForZone(s)})`
    ).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSetReminder = () => {
    setReminderSet(true);
    setTimeout(() => setReminderSet(false), 3000);
  };

  return (
    <section id="schedule" className="py-20 md:py-28 bg-[#F5EFEB] relative overflow-hidden">
      
      {/* Subtle Sun Accent Aura */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-40 w-96 h-96 rounded-full bg-[#F5B800]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 -mr-40 w-96 h-96 rounded-full bg-[#E63973]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E63973]/10 border border-[#E63973]/25 text-[#E63973] text-xs font-bold uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5" />
              <span>Broadcast Itinerary</span>
            </div>
            <h2 className="font-heading-lux font-black text-3xl sm:text-5xl text-[#241E1C] tracking-tight">
              Weekly Stream Schedule
            </h2>
            <p className="font-serif-lux text-base sm:text-lg text-[#241E1C]/75 max-w-xl">
              Relaxed, resort-paced broadcasts starting late afternoon into twilight. Check your local time zone below.
            </p>
          </div>

          {/* Timezone Switcher & Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Timezone Toggle */}
            <div className="flex items-center p-1 rounded-2xl bg-white border border-[#241E1C]/10 shadow-xs">
              <span className="px-2.5 text-xs font-medium text-[#241E1C]/50 flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>Zone:</span>
              </span>
              {(['EST', 'PST', 'GMT'] as TimeZoneType[]).map(tz => (
                <button
                  key={tz}
                  onClick={() => setSelectedTimeZone(tz)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedTimeZone === tz
                      ? 'bg-[#241E1C] text-white shadow-xs'
                      : 'text-[#241E1C]/70 hover:text-[#241E1C]'
                  }`}
                >
                  {tz}
                </button>
              ))}
            </div>

            {/* Copy Schedule */}
            <button
              onClick={handleCopySchedule}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white hover:bg-[#FAF6F0] border border-[#241E1C]/10 text-xs font-semibold text-[#241E1C] shadow-xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Calendar className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Share Itinerary'}</span>
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#241E1C]/50 mr-1">
            Filter:
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterCategory === cat
                  ? 'bg-[#F5B800] text-[#241E1C] shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#241E1C]/70 border border-[#241E1C]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Weekly Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchedule.map((item) => {
            const isOff = item.category === 'Day Off';
            const isLiveToday = item.isLiveToday;

            return (
              <div
                key={item.id}
                className={`relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isLiveToday
                    ? 'bg-gradient-to-br from-white via-white to-[#FAF0E6] border-[#E63973]/30 shadow-xl ring-2 ring-[#E63973]/20'
                    : isOff
                    ? 'bg-white/60 border-[#241E1C]/5 shadow-sm'
                    : 'bg-white border-[#241E1C]/8 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Card Top Row: Day + Category Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-heading-lux font-black text-xl text-[#241E1C]">
                        {item.day}
                      </span>
                      {isLiveToday && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E63973] text-white text-[10px] font-extrabold uppercase tracking-wider animate-pulse">
                          Today's Stream
                        </span>
                      )}
                    </div>
                    
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        item.category === 'Just Chatting'
                          ? 'bg-[#F5B800]/20 text-[#8B6200]'
                          : item.category === 'Gaming'
                          ? 'bg-[#E63973]/15 text-[#C2185B]'
                          : item.category === 'IRL Travel'
                          ? 'bg-[#00B4D8]/15 text-[#0077B6]'
                          : 'bg-[#241E1C]/5 text-[#241E1C]/50'
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Time Row */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#241E1C]/70 mb-4 bg-[#FAF6F0] px-3 py-1.5 rounded-xl self-start">
                    <Clock className="w-3.5 h-3.5 text-[#E63973]" />
                    <span>{getTimeForZone(item)}</span>
                  </div>

                  {/* Stream Title & Description */}
                  <h3 className="font-heading-lux font-bold text-lg text-[#241E1C] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-serif-lux text-xs sm:text-sm text-[#241E1C]/75 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags & Action Button */}
                <div className="pt-4 border-t border-[#241E1C]/8 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium text-[#241E1C]/60 bg-[#FAF6F0] px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {!isOff && (
                    <a
                      href={CREATOR_PROFILE.twitchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-xl text-[#241E1C]/70 hover:text-white hover:bg-[#9146FF] transition-colors"
                      title="Tune in on Twitch"
                    >
                      <Tv className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Resort Reminder Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#241E1C]/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#F5B800]/20 flex items-center justify-center text-[#8A5B00] shrink-0">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading-lux font-bold text-base sm:text-lg text-[#241E1C]">
                Never Miss a Sunset Broadcast
              </h4>
              <p className="text-xs sm:text-sm text-[#241E1C]/70">
                Get notified 15 minutes before Alexandra goes live on Twitch with direct stream links.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleSetReminder}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#E63973] hover:bg-[#cf245e] text-white font-heading-lux font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm active:scale-95 text-center whitespace-nowrap"
            >
              {reminderSet ? '✓ Stream Reminder Active' : 'Set Stream Reminder'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

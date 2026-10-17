import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { MessageSquareQuote, TrendingUp, MapPin } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tiktok' | 'ai' | 'affiliate' | 'funnel'>('all');

  const filteredList = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === filter);

  return (
    <section id="testimoni" className="py-14 sm:py-20 bg-[#0c0e12] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] sm:text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
              Section 05 · Bukti &amp; Cerita Warga
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Gunjingan Warga: Yang Sudah Sukses &ldquo;Ngepet&rdquo;
            </h2>
            <p className="mt-2.5 sm:mt-3 text-neutral-300 text-sm sm:text-base lg:text-lg">
              Kisah nyata warga padepokan yang sempat digosipin tetangga punya pesugihan, padahal cuma rajin praktik ilmu digital marketing.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control) - Mobile friendly scroll */}
          <div className="flex items-center gap-1.5 p-1 bg-[#12161f] border border-white/10 rounded-xl overflow-x-auto max-w-full no-scrollbar">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-emerald-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Semua Gunjingan
            </button>
            <button
              type="button"
              onClick={() => setFilter('tiktok')}
              className={`px-3 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'tiktok'
                  ? 'bg-emerald-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              TikTok &amp; Meta Ads
            </button>
            <button
              type="button"
              onClick={() => setFilter('affiliate')}
              className={`px-3 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'affiliate'
                  ? 'bg-emerald-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Affiliate &amp; Dropship
            </button>
            <button
              type="button"
              onClick={() => setFilter('ai')}
              className={`px-3 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'ai'
                  ? 'bg-emerald-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Khodam AI
            </button>
            <button
              type="button"
              onClick={() => setFilter('funnel')}
              className={`px-3 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'funnel'
                  ? 'bg-emerald-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Landing Page
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((testi) => (
            <div
              key={testi.id}
              className="rounded-2xl bg-[#12161f] border border-white/10 p-6 flex flex-col justify-between space-y-6 hover:border-emerald-500/30 transition-colors"
            >
              {/* Quote & Author Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 font-bold text-xs text-emerald-400 flex items-center justify-center">
                      {testi.avatarText}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">
                        {testi.name}
                      </h3>
                      <p className="text-xs text-neutral-400">
                        {testi.role}
                      </p>
                    </div>
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-neutral-600 shrink-0" />
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Metric & Location Tag */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase font-semibold">
                    {testi.metricLabel}:
                  </div>
                  <div className="font-mono text-sm font-bold text-emerald-400 flex items-center gap-1 mt-0.5 tabular-nums">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{testi.metric}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                  <MapPin className="w-3 h-3 text-red-400" />
                  <span>{testi.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

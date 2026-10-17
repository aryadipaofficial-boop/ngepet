import React from 'react';
import { COMMUNITY_STATS } from '../data/content';
import { ArrowDownRight, Sparkles, ShieldCheck, Flame, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-white/10">
      {/* Background ambient lighting effects */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unboxed editorial kicker / metadata */}
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
          <span>Padepokan Bisnis Digital &amp; AI</span>
          <span aria-hidden="true">·</span>
          <span>100% Halal Tanpa Tumbal</span>
          <span aria-hidden="true">·</span>
          <span>Angkatan Aktif 2026</span>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance">
              <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.35)]">NGEPET</span>{' '}
              <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.35)]">ONLINE</span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-neutral-100 tracking-tight">
              Gak Harus Pintar, Yang Penting Mau Belajar.
            </p>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Komunitas tempat para pebisnis online dan praktisi digital berkumpul. Belajar cara{' '}
              <strong className="text-emerald-400 font-semibold">&ldquo;rebahan elit, transferan sulit dibendung&rdquo;</strong>{' '}
              dengan bantuan kecerdasan buatan (AI) dan digital marketing, tanpa harus pake tumbal.
            </p>

            {/* Micro value props with clean unboxed styling */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <Flame className="w-4 h-4 text-emerald-400 shrink-0" />
                Trafik Organik &amp; Paid Ads
              </span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                Khodam ChatGPT &amp; Claude
              </span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                Anti Boncos &amp; Anti Hoax
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#pintu-gaib"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <span>Masuk Padepokan</span>
                <ArrowDownRight className="w-5 h-5" />
              </a>

              <a
                href="#kitab-sakti"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 rounded-xl transition-colors"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Pelajari Kitab Sakti</span>
              </a>

              <button
                onClick={onOpenQuiz}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Tes Khodam Cocok</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier with Mascot & Cyber Setup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#12161f] shadow-2xl shadow-emerald-950/50 p-2 sm:p-3">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-[#08090c] flex items-center justify-center">
                  <img
                    src="/src/assets/images/mascot_ngepet_online_1792229844272.jpg"
                    alt="Maskot Babi Ngepet Online dengan Lilin AI dan Rupiah"
                    className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Live Indicator Sticker */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0e1218]/90 backdrop-blur-md border border-white/10 rounded-lg p-3 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-white">Status Lilin Padepokan</p>
                      <p className="text-neutral-400">Server &amp; Funnel Menyala 24 Jam</p>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold tabular-nums">ONLINE</span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Quote Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block max-w-[260px] bg-[#141820]/95 backdrop-blur-md border border-red-500/30 p-3.5 rounded-xl shadow-xl">
                <p className="text-xs text-neutral-300 italic">
                  &ldquo;Tetangga sibuk nyinyir, rekening sibuk nerima mutasi bank.&rdquo;
                </p>
                <p className="text-[11px] font-semibold text-red-400 mt-1">
                  — Wejangan Warga Padepokan
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Adjacency Claim-to-Proof Metric Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-emerald-400">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-400">
                {stat.context}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

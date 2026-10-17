import React from 'react';
import { Flame, Cpu, Users, Zap, Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const BenefitSection: React.FC = () => {
  return (
    <section id="benefit" className="py-20 bg-[#0d1016] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            Section 02 · Nilai Utama Komunitas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kenapa Harus Gabung Warga Pesugihan?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-300">
            Tinggalkan mitos kuno yang bikin sial. Di sini kita membedah sains konversi, algoritma paid traffic, dan automasi AI dengan santai tapi berpenghasilan nyata.
          </p>
        </div>

        {/* Bento Grid with Asymmetric Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 (Span 2): Tanpa Tumbal (Organik & Ads) + Cyber Photo Visual */}
          <div className="md:col-span-2 rounded-2xl bg-[#12161f] border border-white/10 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 space-y-4 max-w-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Tanpa Tumbal (Organik &amp; Ads)
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Mendatangkan ribuan calon pembeli yang siap bayar ke tokomu tanpa perlu tumbal ayam cemani apalagi waktu tidurmu. Kuasai Meta Ads (Facebook &amp; Instagram), TikTok Ads, dan SEO organik yang terbukti stabil menghasilkan omset jangka panjang.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Formula Anti Boncos Iklan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>FYP Hack TikTok &amp; Reels</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>SEO Google Ranking #1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Retargeting Audiens Hangat</span>
                </div>
              </div>
            </div>

            {/* Inset visual background thumbnail */}
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-4">
              <img
                src="/src/assets/images/hero_ngepet_cyber_1792229846732.jpg"
                alt="Meja Kerja Warga Pesugihan Cyber"
                className="w-24 h-16 rounded-lg object-cover border border-white/10 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-xs text-neutral-400">
                <span className="font-semibold text-neutral-200">Meja Kerja Warga:</span> Cukup laptop, koneksi internet, dan secangkir kopi. Nyalakan lilin analitik ads Anda.
              </div>
            </div>
          </div>

          {/* Card 2: Dibantu Khodam AI */}
          <div className="rounded-2xl bg-[#12161f] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Dibantu Khodam AI
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Manfaatkan ChatGPT, Claude 3.7, dan AI tools mutakhir sebagai asisten pribadi yang bekerja tanpa gaji bulanan. Bikin 100 copywriting, riset produk winning, dan generate skrip video dalam hitungan menit.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>Efisiensi Kerja</span>
              <span className="font-bold">+850% Lebih Cepat</span>
            </div>
          </div>

          {/* Card 3: Anti Gaptek */}
          <div className="rounded-2xl bg-[#12161f] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Bahasa Tongkrongan Anti Gaptek
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Kami muak dengan webinar yang sok pakai bahasa Inggris rumit cuma biar kelihatan pintar. Di padepokan, semua diajarkan dengan analogi receh tongkrongan: mudah dicerna, langsung bisa dipraktikkan.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span>Level Masuk</span>
              <span className="text-white font-medium">Pemula Nol Puter</span>
            </div>
          </div>

          {/* Card 4 (Span 2): Lilin Anti Padam (Automasi Funnel) & Perbandingan Mitos vs Fakta */}
          <div className="md:col-span-2 rounded-2xl bg-[#12161f] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-neutral-400 bg-black/40 px-3 py-1 rounded-md border border-white/5">
                  Autopilot 24/7
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Lilin Digital Anti Padam
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Di dunia mistis kalau lilin padam pelakunya ketahuan warga. Di Ngepet Online, lilin kita adalah landing page cloud server dan integrasi Make.com yang gak pernah padam sekalipun kamu ketiduran di depan kipas angin.
              </p>
            </div>

            {/* Comparison Mini Matrix */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-red-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Pesugihan Kuno (Mitos Bodoh)</span>
                </div>
                <p className="text-neutral-300">
                  Butuh tumbal, keliling kampung pake sarung, kalau lilin mati digebuk warga sekampung, dosa akhirat.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Ngepet Online (Digital Modern)</span>
                </div>
                <p className="text-neutral-300">
                  Modal koneksi internet, rebahan ber-AC, bayar zakat dan pajak, transferan legal dari buyer seluruh Indonesia.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

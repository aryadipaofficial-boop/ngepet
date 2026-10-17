import React, { useState, useId } from 'react';
import { Calculator, Eye, AlertTriangle, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

export const CalculatorSection: React.FC = () => {
  const [hours, setHours] = useState<number>(3);
  const [budget, setBudget] = useState<number>(300000);
  const [weapon, setWeapon] = useState<'gratisan' | 'semi-pro' | 'autopilot'>('semi-pro');
  const hoursInputId = useId();
  const budgetInputId = useId();

  // Multiplier logic
  const weaponMultiplier = weapon === 'gratisan' ? 2.5 : weapon === 'semi-pro' ? 5.8 : 12.2;
  const estimatedRevenue = Math.round(budget * weaponMultiplier + (hours * 1250000));
  const estimatedProfit = Math.round(estimatedRevenue * (weapon === 'gratisan' ? 0.8 : weapon === 'semi-pro' ? 0.55 : 0.48));

  // Neighborhood suspicion score (0 - 100)
  const suspicionScore = Math.min(
    100,
    Math.round((estimatedProfit / 50000000) * 80 + (hours <= 3 ? 20 : 5))
  );

  const getSuspicionDetails = (score: number) => {
    if (score < 30) {
      return {
        level: 'Level 1: Aman & Terkendali',
        color: 'text-neutral-300',
        borderColor: 'border-white/10',
        description: 'Warga RT masih mengira kamu cuma anak rumahan introvert yang hobi begadang main game online biasa.',
      };
    } else if (score < 60) {
      return {
        level: 'Level 2: Tetangga Mulai Melirik',
        color: 'text-amber-400',
        borderColor: 'border-amber-500/30',
        description: 'Ibu-ibu komplek mulai heran: gak pernah kelihatan mandi pagi atau berangkat kantor, tapi kurir J&T bolak-balik ngedrop barang ke rumah.',
      };
    } else if (score < 85) {
      return {
        level: 'Level 3: Rapat Darurat Pos Ronda',
        color: 'text-orange-400',
        borderColor: 'border-orange-500/40',
        description: 'Pak RT mulai kepo pas arisan: "Mas/Mbak kerjanya apa ya sebenarnya?". Gosip tuyul modern mulai dibahas di grup WhatsApp PKK RT 04.',
      };
    } else {
      return {
        level: 'Level 4: Siaga 1 Lilin Gaib!',
        color: 'text-red-400',
        borderColor: 'border-red-500/50',
        description: 'Tetangga curiga keras kamu beneran piara babi ngepet karena mendadak beli mobil & renovasi rumah 2 lantai modal rebahan dasteran!',
      };
    }
  };

  const suspicion = getSuspicionDetails(suspicionScore);

  return (
    <section id="kalkulator" className="py-14 sm:py-20 bg-[#0a0c10] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-[11px] sm:text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            Interactive Tool · Simulasi Cuan &amp; Gunjingan
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator Cuan Rebahan &amp; Sensor Curiga Tetangga
          </h2>
          <p className="mt-2.5 sm:mt-3 text-neutral-300 text-sm sm:text-base lg:text-lg">
            Berapa potensi transferan yang bisa kamu hasilkan dengan modal rebahan dan sejauh apa tetanggamu bakal mulai curiga?
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-[#12161f] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
            
            {/* Input 1: Jam Jaga Lilin */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-white">
                <label htmlFor={hoursInputId} className="cursor-pointer">
                  Jam &ldquo;Jaga Lilin&rdquo; (Waktu di Laptop)
                </label>
                <span className="font-mono text-emerald-400 font-bold text-sm sm:text-base tabular-nums">
                  {hours} Jam / Hari
                </span>
              </div>
              <input
                id={hoursInputId}
                type="range"
                min="1"
                max="10"
                step="1"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-3 bg-neutral-800 rounded-lg touch-none"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-neutral-400 font-mono">
                <span>1 Jam (Santai)</span>
                <span>5 Jam (Fokus)</span>
                <span>10 Jam (Sepuh)</span>
              </div>
            </div>

            {/* Input 2: Modal Awal Iklan / Kuota */}
            <div className="space-y-2.5 pt-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-white">
                <label htmlFor={budgetInputId} className="cursor-pointer">
                  Modal Anggaran Bulanan
                </label>
                <span className="font-mono text-emerald-400 font-bold text-sm sm:text-base tabular-nums">
                  Rp {budget.toLocaleString('id-ID')}
                </span>
              </div>
              <input
                id={budgetInputId}
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-3 bg-neutral-800 rounded-lg touch-none"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-neutral-400 font-mono">
                <span>Rp 50rb (Paket Data)</span>
                <span>Rp 1jt (Ads Pemula)</span>
                <span>Rp 5jt (Scale Up)</span>
              </div>
            </div>

            {/* Input 3: Senjata Khodam yang Dipakai */}
            <div className="space-y-3 pt-2">
              <span className="text-sm font-semibold text-white block">
                Senjata Khodam AI &amp; Strategi yang Diaktifkan
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setWeapon('gratisan')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    weapon === 'gratisan'
                      ? 'bg-emerald-950/40 border-emerald-400 text-white shadow-sm'
                      : 'bg-neutral-900/60 border-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold text-emerald-400 mb-1">Khodam Gratisan</div>
                  <div className="text-xs leading-snug">Organik TikTok + ChatGPT Free</div>
                </button>

                <button
                  type="button"
                  onClick={() => setWeapon('semi-pro')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    weapon === 'semi-pro'
                      ? 'bg-emerald-950/40 border-emerald-400 text-white shadow-sm'
                      : 'bg-neutral-900/60 border-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold text-emerald-400 mb-1">Khodam Semi-Pro</div>
                  <div className="text-xs leading-snug">TikTok Ads + AI Copywriter</div>
                </button>

                <button
                  type="button"
                  onClick={() => setWeapon('autopilot')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    weapon === 'autopilot'
                      ? 'bg-emerald-950/40 border-emerald-400 text-white shadow-sm'
                      : 'bg-neutral-900/60 border-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold text-emerald-400 mb-1">Autopilot Master</div>
                  <div className="text-xs leading-snug">Meta CBO + Make.com Automation</div>
                </button>
              </div>
            </div>

            <div className="pt-2 text-xs text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Simulasi didasarkan pada rata-rata konversi riil warga padepokan 2025-2026.</span>
            </div>

          </div>

          {/* Results Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Cuan Estimates Card */}
            <div className="bg-[#12161f] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <DollarSign className="w-4 h-4" />
                <span>Proyeksi Transferan Masuk</span>
              </div>

              <div>
                <div className="text-xs text-neutral-400">Estimasi Omset / Bulan:</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums mt-1">
                  Rp {estimatedRevenue.toLocaleString('id-ID')}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-neutral-400">Estimasi Bersih (Profit):</div>
                  <div className="text-xl font-bold text-emerald-400 font-mono tabular-nums mt-0.5">
                    Rp {estimatedProfit.toLocaleString('id-ID')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-400">Balik Modal:</div>
                  <div className="text-sm font-semibold text-white">~14-25 Hari</div>
                </div>
              </div>
            </div>

            {/* Suspicion Meter Card */}
            <div className={`bg-[#12161f] border ${suspicion.borderColor} rounded-2xl p-6 sm:p-8 space-y-4`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-200">
                  <Eye className="w-4 h-4 text-red-400" />
                  <span>Sensor Curiga Warga RT</span>
                </div>
                <span className={`font-mono text-sm font-bold ${suspicion.color} tabular-nums`}>
                  {suspicionScore}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    suspicionScore > 75
                      ? 'bg-red-500'
                      : suspicionScore > 50
                      ? 'bg-orange-500'
                      : 'bg-emerald-500'
                  }`}
                  style={{ width: `${suspicionScore}%` }}
                />
              </div>

              <div className="pt-1">
                <div className={`text-sm font-bold ${suspicion.color} mb-1 flex items-center gap-1.5`}>
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{suspicion.level}</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {suspicion.description}
                </p>
              </div>

              <a
                href="#kitab-sakti"
                className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors mt-2"
              >
                <span>Buka Kurikulum Kitab Sakti</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

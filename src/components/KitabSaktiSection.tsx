import React, { useState } from 'react';
import { CURRICULUM_DATA } from '../data/content';
import { BookOpen, CheckCircle2, ChevronRight, Clock, Award, Wrench, ArrowRight } from 'lucide-react';

interface KitabSaktiSectionProps {
  onSelectLevel: (levelId: 'pemula' | 'menengah' | 'mahir') => void;
}

export const KitabSaktiSection: React.FC<KitabSaktiSectionProps> = ({ onSelectLevel }) => {
  const [activeLevelId, setActiveLevelId] = useState<string>('jin-lampu-kuning');
  const [expandedModuleIdx, setExpandedModuleIdx] = useState<number>(0);

  const activeLevel = CURRICULUM_DATA.find((item) => item.id === activeLevelId) || CURRICULUM_DATA[0];

  const handleRegisterForLevel = () => {
    let levelKey: 'pemula' | 'menengah' | 'mahir' = 'pemula';
    if (activeLevelId === 'dukun-trafik') levelKey = 'menengah';
    if (activeLevelId === 'master-pesugihan') levelKey = 'mahir';
    onSelectLevel(levelKey);
    const element = document.getElementById('pintu-gaib');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kitab-sakti" className="py-20 bg-[#0d1016] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            Section 04 · Kurikulum &amp; Silabus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kitab Sakti: Jenjang Ilmu Padepokan
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Kurikulum bertahap dari pemula nol puter sampai master autopilot, dirancang agar setiap warga punya peta jalan jelas tanpa tersesat.
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#12161f] border border-white/10 rounded-xl mb-10 max-w-2xl">
          {CURRICULUM_DATA.map((lvl) => {
            const isActive = lvl.id === activeLevelId;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => {
                  setActiveLevelId(lvl.id);
                  setExpandedModuleIdx(0);
                }}
                className={`flex-1 min-w-[140px] px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  isActive
                    ? 'bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-500/20'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {lvl.alias}
              </button>
            );
          })}
        </div>

        {/* Level Overview Banner */}
        <div className="bg-[#12161f] border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  {activeLevel.badge}
                </span>
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  {activeLevel.duration}
                </span>
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5 text-neutral-400" />
                  {activeLevel.highlightTool}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeLevel.name}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {activeLevel.description}
              </p>

              <div className="text-xs text-emerald-400 font-medium">
                🎯 Sasaran: {activeLevel.targetAudience}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-left lg:text-right space-y-1">
                <div className="text-xs text-neutral-400">Total Pembelajaran:</div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  {activeLevel.modulesCount} Modul Utama
                </div>
                <div className="text-xs text-neutral-400">Termasuk studi kasus live</div>
              </div>

              <button
                type="button"
                onClick={handleRegisterForLevel}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Daftar Tingkat Ini</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Modules Breakdown (Accordion Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Modules List Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
              Daftar Modul Tingkat {activeLevel.alias}:
            </h4>
            {activeLevel.modules.map((mod, idx) => {
              const isSelected = expandedModuleIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setExpandedModuleIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-neutral-900 border-emerald-400 text-white shadow-sm'
                      : 'bg-[#12161f] border-white/5 text-neutral-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="space-y-1 pr-2">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold block">
                      MODUL 0{idx + 1}
                    </span>
                    <span className="text-sm font-bold leading-tight block">
                      {mod.title.replace(/^Modul \d+:\s*/, '')}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-emerald-400 translate-x-1' : 'text-neutral-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Module View (7 cols) */}
          <div className="lg:col-span-7 bg-[#12161f] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            {activeLevel.modules[expandedModuleIdx] && (
              <>
                <div className="space-y-2 border-b border-white/10 pb-5">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    SILABUS LENGKAP
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {activeLevel.modules[expandedModuleIdx].title}
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {activeLevel.modules[expandedModuleIdx].description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Yang Akan Dipelajari &amp; Dipraktikkan:
                  </h5>
                  <div className="space-y-2.5">
                    {activeLevel.modules[expandedModuleIdx].lessons.map((lesson, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between bg-black/30 p-4 rounded-xl border border-white/5">
                  <div className="space-y-0.5">
                    <div className="text-[11px] text-neutral-400 font-semibold uppercase flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Output Wajib Selesai:</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {activeLevel.modules[expandedModuleIdx].deliverable}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleRegisterForLevel}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap pl-2"
                  >
                    Buka Akses &rarr;
                  </button>
                </div>
              </>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

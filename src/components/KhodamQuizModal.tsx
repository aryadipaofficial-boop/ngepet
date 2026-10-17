import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';

interface KhodamQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyRecommendation: (level: 'pemula' | 'menengah' | 'mahir') => void;
}

export const KhodamQuizModal: React.FC<KhodamQuizModalProps> = ({
  isOpen,
  onClose,
  onApplyRecommendation,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  if (!isOpen) return null;

  const questions = [
    {
      question: 'Apa target utama & modal yang kamu miliki saat ini?',
      options: [
        { label: 'Modal nol rupiah, pengen pecah telur affiliate Shopee/TikTok secepatnya', score: 1 },
        { label: 'Punya modal tes iklan 300rb - 1jt, pengen jualan produk laris manis', score: 2 },
        { label: 'Sudah punya bisnis/tim, pengen full automasi dan scale up omset ratusan juta', score: 3 },
      ],
    },
    {
      question: 'Berapa banyak waktu yang bisa kamu dedikasikan per hari untuk "Jaga Lilin"?',
      options: [
        { label: '1 - 2 jam santai di sela-sela kerjaan atau waktu luang', score: 1 },
        { label: '3 - 5 jam fokus belajar utak-atik dashboard iklan dan konten', score: 2 },
        { label: 'Full time dari kamar tidur, siap tancap gas kapan saja', score: 3 },
      ],
    },
    {
      question: 'Tugas apa yang paling bikin kamu pusing dan ingin diserahkan ke AI?',
      options: [
        { label: 'Mikirin ide caption dan naskah copywriting jualan yang anti-skip', score: 1 },
        { label: 'Menganalisis data iklan Meta/TikTok dan bikin landing page cepat', score: 2 },
        { label: 'Balas chat WhatsApp customer 24 jam dan rekap orderan otomatis', score: 3 },
      ],
    },
  ];

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length); // Results step
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
  };

  const calculateResult = () => {
    const total = answers.reduce((a, b) => a + b, 0);
    if (total <= 4) {
      return {
        khodamName: 'Khodam ChatGPT Jurus Copywriting Hipnotis',
        levelRecommendation: 'pemula' as const,
        levelTitle: 'Tingkat 1: Jin Lampu Kuning',
        description: 'Kamu paling cocok fokus pada konten organik dan affiliate tanpa modal. Gunakan Khodam ChatGPT untuk menghasilkan 20 hook konten TikTok dalam hitungan detik!',
        toolset: 'ChatGPT Free + Canva + CapCut AI',
      };
    } else if (total <= 7) {
      return {
        khodamName: 'Khodam Dukun Trafik Paid Ads',
        levelRecommendation: 'menengah' as const,
        levelTitle: 'Tingkat 2: Dukun Trafik',
        description: 'Waktunya kamu naik kelas ke paid traffic! Kuasai Meta Ads & TikTok Ads CBO. Khodam AI akan membantu meriset audiens tajam dan split testing video kreatif tanpa boncos.',
        toolset: 'Meta Ads Manager + TikTok Spark Ads + Claude',
      };
    } else {
      return {
        khodamName: 'Khodam Master Lilin Autopilot',
        levelRecommendation: 'mahir' as const,
        levelTitle: 'Tingkat 3: Master Pesugihan',
        description: 'Kamu siap menjadi Master Pesugihan Digital! Bangun sistem autonomous multi-agent dan CRM otomatis sehingga toko onlinemu mencetak transferan 24 jam walau kamu sedang jalan-jalan.',
        toolset: 'Make.com + Claude 3.7 + Custom AI CS Bot',
      };
    }
  };

  const result = currentStep === questions.length ? calculateResult() : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#12161f] border border-white/10 rounded-2xl w-full max-w-lg max-h-[92dvh] flex flex-col overflow-hidden shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#161b26] shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Tes Diagnosa Khodam AI</h3>
              <p className="text-[10px] sm:text-[11px] text-neutral-400">Padepokan Ngepet Online</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Tutup Diagnosa"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {currentStep < questions.length ? (
            <div className="space-y-4 sm:space-y-6">
              
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Pertanyaan {currentStep + 1} dari {questions.length}</span>
                <span className="font-mono text-emerald-400 font-bold">{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
              </div>

              <h4 className="text-sm sm:text-lg font-bold text-white leading-snug">
                {questions[currentStep].question}
              </h4>

              <div className="space-y-2.5 sm:space-y-3">
                {questions[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-3.5 sm:p-4 min-h-[48px] rounded-xl bg-neutral-900/70 hover:bg-neutral-800 border border-white/5 hover:border-emerald-500/30 text-xs sm:text-sm text-neutral-200 hover:text-white transition-all flex items-center justify-between group active:scale-[0.99]"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 shrink-0 ml-2" />
                  </button>
                ))}
              </div>

            </div>
          ) : result ? (
            <div className="space-y-6 text-center">
              
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <Sparkles className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Hasil Diagnosa Ritual:
                </span>
                <h4 className="text-xl font-black text-white">
                  {result.khodamName}
                </h4>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/5 text-left space-y-2 text-xs">
                <p className="text-neutral-300 leading-relaxed">
                  {result.description}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-neutral-400">
                  <span>Senjata Utama:</span>
                  <span className="font-mono text-emerald-400 font-bold">{result.toolset}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Rekomendasi Kelas:</span>
                  <span className="text-white font-semibold">{result.levelTitle}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onApplyRecommendation(result.levelRecommendation);
                    onClose();
                  }}
                  className="w-full py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20"
                >
                  Pelajari {result.levelTitle} Sekarang
                </button>

                <button
                  type="button"
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white pt-2 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Tes</span>
                </button>
              </div>

            </div>
          ) : null}
        </div>

      </div>
    </div>
  );
};

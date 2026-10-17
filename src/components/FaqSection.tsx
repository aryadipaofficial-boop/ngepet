import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-[#0d1016] border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            Section 06 · Klarifikasi &amp; Pertanyaan Tetangga
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tanya Jawab Seputar Padepokan (FAQ)
          </h2>
          <p className="mt-3 text-neutral-300 text-base">
            Jawaban lugas dan tanpa basa-basi untuk semua kecurigaan dan rasa penasaranmu sebelum bergabung.
          </p>
        </div>

        {/* Search Bar for FAQ */}
        <div className="relative mb-8 max-w-lg mx-auto">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan... (contoh: pesugihan, biaya, gaptek)"
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#12161f] border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#12161f] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 text-neutral-400 text-sm">
              Tidak ada pertanyaan yang cocok dengan pencarian kata kunci tersebut.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

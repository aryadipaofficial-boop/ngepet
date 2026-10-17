/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BenefitSection } from './components/BenefitSection';
import { StorySection } from './components/StorySection';
import { KitabSaktiSection } from './components/KitabSaktiSection';
import { CalculatorSection } from './components/CalculatorSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FaqSection } from './components/FaqSection';
import { PintuGaibSection } from './components/PintuGaibSection';
import { Footer } from './components/Footer';
import { KhodamQuizModal } from './components/KhodamQuizModal';
import { GutenbergModal } from './components/GutenbergModal';

export default function App() {
  const [isGutenbergOpen, setIsGutenbergOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<'pemula' | 'menengah' | 'mahir'>('pemula');

  const handleSelectLevel = (level: 'pemula' | 'menengah' | 'mahir') => {
    setSelectedLevel(level);
  };

  const handleApplyQuizRecommendation = (level: 'pemula' | 'menengah' | 'mahir') => {
    setSelectedLevel(level);
    const element = document.getElementById('kitab-sakti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#f1f5f9] flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenGutenberg={() => setIsGutenbergOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* 2. Kenapa Gabung (Benefit Warga) */}
        <BenefitSection />

        {/* 3. Kisah Padepokan (Tentang Kami & Filosofi) */}
        <StorySection />

        {/* 4. Kitab Sakti (3 Level Kurikulum) */}
        <KitabSaktiSection onSelectLevel={handleSelectLevel} />

        {/* Interactive Tool: Sensor Curiga Tetangga & Kalkulator Cuan */}
        <CalculatorSection />

        {/* 5. Gunjingan Warga (Testimoni) */}
        <TestimonialSection />

        {/* 6. FAQ (Pertanyaan Tetangga) */}
        <FaqSection />

        {/* 7. Pintu Gaib (Pendaftaran & Channel VIP) */}
        <PintuGaibSection selectedLevel={selectedLevel} />
      </main>

      {/* Footer */}
      <Footer
        onOpenGutenberg={() => setIsGutenbergOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Mobile Sticky Bottom Thumb-Zone Bar (Visible only on mobile screens < 640px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0e12]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="#kitab-sakti"
          className="flex-1 py-2 px-2 text-center text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 rounded-lg border border-white/5"
        >
          Kitab Sakti
        </a>
        <button
          onClick={() => setIsQuizOpen(true)}
          type="button"
          className="flex-1 py-2 px-2 text-center text-xs font-semibold text-emerald-400 bg-white/5 rounded-lg border border-white/5"
        >
          Tes Khodam
        </button>
        <a
          href="#pintu-gaib"
          className="flex-2 py-2 px-3 text-center text-xs font-bold text-neutral-950 bg-emerald-400 rounded-lg shadow-sm"
        >
          Masuk Padepokan
        </a>
      </div>

      {/* Interactive Modals */}
      <KhodamQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onApplyRecommendation={handleApplyQuizRecommendation}
      />

      <GutenbergModal
        isOpen={isGutenbergOpen}
        onClose={() => setIsGutenbergOpen(false)}
      />
    </div>
  );
}

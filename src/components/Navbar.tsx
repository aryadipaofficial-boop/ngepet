import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenGutenberg: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGutenberg, onOpenQuiz }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c0e12]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark with clean mascot mark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
        >
          <img 
            src="/src/assets/images/mascot_ngepet_online_1792229844272.jpg" 
            alt="Mascot Ngepet Online" 
            className="w-10 h-10 rounded-full border border-emerald-500/40 object-cover shadow-sm group-hover:border-emerald-400 transition-colors"
            referrerPolicy="no-referrer"
          />
          <span className="font-extrabold tracking-tight">
            <span className="text-emerald-400">NGEPET</span>{' '}
            <span className="text-red-500">ONLINE</span>
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a 
            href="#benefit" 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 focus-visible:text-emerald-400"
          >
            Kenapa Gabung
          </a>
          <a 
            href="#kisah" 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 focus-visible:text-emerald-400"
          >
            Kisah Padepokan
          </a>
          <a 
            href="#kitab-sakti" 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 focus-visible:text-emerald-400"
          >
            Kitab Sakti
          </a>
          <a 
            href="#kalkulator" 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 focus-visible:text-emerald-400"
          >
            Sensor Tetangga
          </a>
          <a 
            href="#testimoni" 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 focus-visible:text-emerald-400"
          >
            Gunjingan Warga
          </a>
          <a 
            href="#faq" 
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 focus-visible:text-emerald-400"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action + subtle utility link */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuiz}
            type="button"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors whitespace-nowrap shrink-0"
            title="Tes Khodam AI"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tes Khodam</span>
          </button>

          <button
            onClick={onOpenGutenberg}
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-emerald-300 bg-neutral-900/60 hover:bg-neutral-800 rounded-lg border border-white/5 transition-colors whitespace-nowrap shrink-0"
            title="Template WordPress FSE & Gutenberg JSON (Bagian 2)"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-500" />
            <span className="hidden xl:inline">WordPress FSE</span>
          </button>

          <a
            href="#pintu-gaib"
            className="px-4 py-2 text-xs md:text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm hover:shadow-emerald-500/20 transition-all whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400"
          >
            Masuk Padepokan
          </a>
        </div>
      </div>
    </header>
  );
};

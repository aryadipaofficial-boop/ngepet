import React, { useState } from 'react';
import { Sparkles, Terminal, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenGutenberg: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGutenberg, onOpenQuiz }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c0e12]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Zone 1: Single text element wordmark with clean mascot mark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
        >
          <img 
            src="/src/assets/images/mascot_ngepet_online_1792229844272.jpg" 
            alt="Mascot Ngepet Online" 
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-emerald-500/40 object-cover shadow-sm group-hover:border-emerald-400 transition-colors"
            referrerPolicy="no-referrer"
          />
          <span className="font-extrabold tracking-tight">
            <span className="text-emerald-400">NGEPET</span>{' '}
            <span className="text-red-500">ONLINE</span>
          </span>
        </a>

        {/* Zone 2: Desktop clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-neutral-300">
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

        {/* Zone 3: Desktop Actions & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenQuiz}
            type="button"
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors whitespace-nowrap shrink-0"
            title="Tes Khodam AI"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tes Khodam</span>
          </button>

          <button
            onClick={onOpenGutenberg}
            type="button"
            className="hidden md:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-emerald-300 bg-neutral-900/60 hover:bg-neutral-800 rounded-lg border border-white/5 transition-colors whitespace-nowrap shrink-0"
            title="Template WordPress FSE & Gutenberg JSON"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-500" />
            <span>WP FSE</span>
          </button>

          <a
            href="#pintu-gaib"
            className="hidden sm:inline-flex px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm hover:shadow-emerald-500/20 transition-all whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Masuk Padepokan
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors focus:outline-none"
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1117] border-b border-white/10 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            <a
              href="#benefit"
              onClick={closeMenu}
              className="px-3 py-2.5 text-sm font-semibold text-neutral-200 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Kenapa Gabung</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#kisah"
              onClick={closeMenu}
              className="px-3 py-2.5 text-sm font-semibold text-neutral-200 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Kisah Padepokan</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#kitab-sakti"
              onClick={closeMenu}
              className="px-3 py-2.5 text-sm font-semibold text-neutral-200 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Kitab Sakti (Kurikulum)</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#kalkulator"
              onClick={closeMenu}
              className="px-3 py-2.5 text-sm font-semibold text-neutral-200 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Sensor Curiga Tetangga</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#testimoni"
              onClick={closeMenu}
              className="px-3 py-2.5 text-sm font-semibold text-neutral-200 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Gunjingan Warga (Testimoni)</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="px-3 py-2.5 text-sm font-semibold text-neutral-200 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Tanya Jawab (FAQ)</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onOpenQuiz();
              }}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-emerald-400 font-bold flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Tes Khodam AI</span>
            </button>

            <button
              type="button"
              onClick={() => {
                closeMenu();
                onOpenGutenberg();
              }}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-neutral-300 font-semibold flex items-center justify-center gap-1.5"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>WP FSE Kit</span>
            </button>
          </div>

          <a
            href="#pintu-gaib"
            onClick={closeMenu}
            className="w-full py-3 px-4 text-center text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md block"
          >
            Masuk Padepokan Sekarang
          </a>
        </div>
      )}
    </header>
  );
};


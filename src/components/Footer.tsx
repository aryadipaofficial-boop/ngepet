import React from 'react';
import { Flame, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenGutenberg: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGutenberg, onOpenQuiz }) => {
  return (
    <footer className="bg-[#080a0d] border-t border-white/10 text-neutral-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/src/assets/images/mascot_ngepet_online_1792229844272.jpg" 
                alt="Logo Ngepet Online" 
                className="w-8 h-8 rounded-full border border-emerald-500/40 object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-base font-extrabold text-white tracking-tight">
                <span className="text-emerald-400">NGEPET</span>{' '}
                <span className="text-red-500">ONLINE</span>
              </span>
            </div>

            <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm max-w-sm">
              Komunitas praktisi digital marketing, affiliate marketer, dan otomatisasi AI. Mencetak jutawan dari kamar tidur tanpa tumbal.
            </p>

            <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>100% Edukasi Bisnis Legal &amp; Halal. Berizin &amp; Terdaftar.</span>
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Jelajahi Padepokan
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#benefit" className="hover:text-emerald-400 transition-colors">Kenapa Gabung Warga</a>
              </li>
              <li>
                <a href="#kisah" className="hover:text-emerald-400 transition-colors">Kisah &amp; Filosofi Padepokan</a>
              </li>
              <li>
                <a href="#kitab-sakti" className="hover:text-emerald-400 transition-colors">Silabus Kitab Sakti</a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-emerald-400 transition-colors">Sensor Curiga Tetangga</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-emerald-400 transition-colors">Gunjingan Warga (Testimoni)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">Tanya Jawab (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Kitab & Tools (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Akses Cepat &amp; Sumber Daya
            </div>
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={onOpenQuiz}
                className="w-full text-left p-3 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between text-neutral-300 hover:text-white"
              >
                <span>Tes Khodam AI Cocok</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">GRATIS</span>
              </button>

              <button
                type="button"
                onClick={onOpenGutenberg}
                className="w-full text-left p-3 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between text-neutral-300 hover:text-white"
              >
                <span>WordPress FSE &amp; Gutenberg Code</span>
                <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">DEV KIT</span>
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-white/5 space-y-4">
          <p className="text-[11px] text-neutral-500 leading-relaxed text-center sm:text-left">
            <strong>Disclaimer Satire:</strong> Nama &ldquo;Ngepet Online&rdquo; merupakan bentuk satire edukatif terhadap stigma masyarakat Indonesia terhadap profesi digital nomad dan pekerja jarak jauh. Tidak ada unsur perdukunan mistis, klenik, sihir, ataupun pemujaan gaib di dalamnya. Seluruh hasil finansial sangat bergantung pada komitmen belajar, riset pasar, dan disiplin eksekusi masing-masing individu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
            <div>
              &copy; {new Date().getFullYear()} Ngepet Online Padepokan. Hak cipta dilindungi undang-undang.
            </div>
            <div className="flex items-center gap-4">
              <span>Gak Harus Pintar, Yang Penting Mau Belajar.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { WORDPRESS_GUTENBERG_SPEC } from '../data/content';
import { X, Copy, Check, Terminal, FileCode, Layers, Code } from 'lucide-react';

interface GutenbergModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GutenbergModal: React.FC<GutenbergModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'gutenberg-markup' | 'custom-css' | 'prompt'>('architecture');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyContent = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const fullPromptText = `Act as an Expert WordPress Developer and UI/UX Designer specialized in Native WordPress Full Site Editing (FSE) and Gutenberg Blocks.

I need you to generate a complete website structure, block patterns (in Gutenberg block markup/JSON), and copywriting for a new online community called "Ngepet Online".

CONTEXT & BRANDING:
- Niche: Digital Marketing, Online Business, and AI Automation.
- Brand Vibe: Satirical, humorous, modern, "dark mode" tech vibe. The concept plays on the Indonesian urban legend of "Babi Ngepet" (black magic to get rich), but flipped into a modern context where "Ngepet" actually means working smart from home using a laptop, AI, and digital marketing.
- Tagline: "Gak Harus Pintar, Yang Penting Mau Belajar" (You don't have to be smart, you just have to be willing to learn).
- Target Audience: Beginners in online business, affiliate marketers, drop-shippers, who want to learn how to make money online without being intimidated by complex terms.

TECHNICAL REQUIREMENTS:
- Platform: WordPress native.
- Builder: STRICTLY Gutenberg Block Editor (Full Site Editing). DO NOT use Elementor or any heavy third-party page builders.
- Focus: Lightweight, fast loading, responsive, SEO-friendly.
- Color Palette: Dark background (#0c0e12), Neon Green accents (#22c55e - representing rising charts/matrix), and Red accents (#ef4444).`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12161f] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[92dvh] sm:max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#161b26]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>WordPress FSE &amp; Gutenberg</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                  Bagian 2
                </span>
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-400">
                Spesifikasi teknis Native WordPress Full Site Editing
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 p-2 bg-[#0d1016] border-b border-white/5 text-xs overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'architecture'
                ? 'bg-neutral-800 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>1. Arsitektur</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('gutenberg-markup')}
            className={`flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'gutenberg-markup'
                ? 'bg-neutral-800 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5 text-emerald-400" />
            <span>2. Block Markup</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('custom-css')}
            className={`flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'custom-css'
                ? 'bg-neutral-800 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-red-400" />
            <span>3. Custom CSS</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('prompt')}
            className={`flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-lg font-semibold transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'prompt'
                ? 'bg-neutral-800 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>4. Master Prompt</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto flex-1 text-xs text-neutral-300 font-mono space-y-4">
          
          {activeTab === 'architecture' && (
            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white">Struktur Halaman WordPress FSE:</h4>
                <button
                  type="button"
                  onClick={() => copyContent(JSON.stringify(WORDPRESS_GUTENBERG_SPEC.pages, null, 2), 'arch')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-white/10 hover:bg-white/15 rounded text-white"
                >
                  {copiedKey === 'arch' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'arch' ? 'Tersalin' : 'Salin JSON'}</span>
                </button>
              </div>

              <div className="space-y-3">
                {WORDPRESS_GUTENBERG_SPEC.pages.map((pg, i) => (
                  <div key={i} className="p-3.5 bg-neutral-900/80 border border-white/5 rounded-xl space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-400">{pg.name}</span>
                      <span className="text-[11px] font-mono text-neutral-400">{pg.template}</span>
                    </div>
                    <div className="text-xs text-neutral-300">
                      <strong>Blok Gutenberg:</strong> <span className="font-mono text-neutral-400">{pg.blocks}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gutenberg-markup' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-xs">
                  Copy block markup ini langsung ke code editor WordPress Block Editor (Gutenberg):
                </span>
                <button
                  type="button"
                  onClick={() => copyContent(WORDPRESS_GUTENBERG_SPEC.sampleGutenbergMarkup, 'markup')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded font-sans"
                >
                  {copiedKey === 'markup' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'markup' ? 'Berhasil Tersalin!' : 'Salin Block Code'}</span>
                </button>
              </div>
              <pre className="p-4 bg-neutral-950 rounded-xl border border-white/10 overflow-x-auto text-[11px] text-emerald-400/90 whitespace-pre-wrap leading-relaxed">
                {WORDPRESS_GUTENBERG_SPEC.sampleGutenbergMarkup}
              </pre>
            </div>
          )}

          {activeTab === 'custom-css' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-xs">
                  Pasang di Appearance &rarr; Customize &rarr; Additional CSS atau file style.css tema:
                </span>
                <button
                  type="button"
                  onClick={() => copyContent(WORDPRESS_GUTENBERG_SPEC.cssCode, 'css')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded font-sans"
                >
                  {copiedKey === 'css' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'css' ? 'Berhasil Tersalin!' : 'Salin Custom CSS'}</span>
                </button>
              </div>
              <pre className="p-4 bg-neutral-950 rounded-xl border border-white/10 overflow-x-auto text-[11px] text-red-300/90 whitespace-pre-wrap leading-relaxed">
                {WORDPRESS_GUTENBERG_SPEC.cssCode}
              </pre>
            </div>
          )}

          {activeTab === 'prompt' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-xs">
                  Prompt siap pakai untuk Claude/ChatGPT/Gemini:
                </span>
                <button
                  type="button"
                  onClick={() => copyContent(fullPromptText, 'prompt')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded font-sans"
                >
                  {copiedKey === 'prompt' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'prompt' ? 'Berhasil Tersalin!' : 'Salin Prompt Lengkap'}</span>
                </button>
              </div>
              <pre className="p-4 bg-neutral-950 rounded-xl border border-white/10 overflow-x-auto text-[11px] text-sky-300/90 whitespace-pre-wrap leading-relaxed font-sans">
                {fullPromptText}
              </pre>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#161b26] flex items-center justify-between text-xs text-neutral-400">
          <span>Kompensasi visual &amp; semantic 100% selaras dengan FSE Gutenberg</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors font-medium"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};

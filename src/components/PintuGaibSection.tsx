import React, { useState } from 'react';
import { RegistrationFormData } from '../types';
import { Send, CheckCircle2, MessageCircle, Disc as Discord, Shield, Sparkles, Copy, Check } from 'lucide-react';

interface PintuGaibSectionProps {
  selectedLevel?: 'pemula' | 'menengah' | 'mahir';
}

export const PintuGaibSection: React.FC<PintuGaibSectionProps> = ({ selectedLevel = 'pemula' }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    experienceLevel: selectedLevel,
    primaryInterest: 'affiliate',
    motivation: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Nama warga wajib diisi';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Format email tidak valid (contoh: warga@gmail.com)';
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) {
      errs.whatsapp = 'Nomor WhatsApp / Telegram minimal 8 digit';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section id="pintu-gaib" className="py-14 sm:py-20 bg-[#0c0e12] relative overflow-hidden">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="text-[11px] sm:text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            Section 07 · Pintu Masuk Komunitas
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pintu Gaib: Mulai Ritual Belajar
          </h2>
          <p className="mt-2.5 sm:mt-3 text-neutral-300 text-sm sm:text-base">
            Isi identitas digitalmu. Dapatkan akses instan ke lounge WhatsApp resmi, channel Telegram sinyal algoritma, dan ruang voice Discord.
          </p>
        </div>

        {!submitted ? (
          <div className="bg-[#12161f] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="reg-fullname" className="text-xs font-bold text-neutral-200 uppercase tracking-wider block">
                    Nama Lengkap / Panggilan Warga <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="reg-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 bg-neutral-900/90 border border-white/10 rounded-xl text-white placeholder-neutral-500 text-base sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="reg-email" className="text-xs font-bold text-neutral-200 uppercase tracking-wider block">
                    Alamat Email Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contoh: budi@gmail.com"
                    className="w-full px-4 py-3 bg-neutral-900/90 border border-white/10 rounded-xl text-white placeholder-neutral-500 text-base sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                
                {/* WhatsApp / Telegram */}
                <div className="space-y-2">
                  <label htmlFor="reg-whatsapp" className="text-xs font-bold text-neutral-200 uppercase tracking-wider block">
                    Nomor WhatsApp / Username Telegram <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="reg-whatsapp"
                    type="text"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="08123456789 atau @username_tele"
                    className="w-full px-4 py-3 bg-neutral-900/90 border border-white/10 rounded-xl text-white placeholder-neutral-500 text-base sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  {errors.whatsapp && (
                    <p className="text-xs text-red-400">{errors.whatsapp}</p>
                  )}
                </div>

                {/* Level Pengalaman */}
                <div className="space-y-2">
                  <label htmlFor="reg-experience" className="text-xs font-bold text-neutral-200 uppercase tracking-wider block">
                    Tingkat Pengalaman Saat Ini
                  </label>
                  <select
                    id="reg-experience"
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value as any })}
                    className="w-full px-4 py-3 bg-neutral-900/90 border border-white/10 rounded-xl text-white text-base sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="pemula">Tingkat 1: Jin Lampu Kuning (Pemula Nol Puter)</option>
                    <option value="menengah">Tingkat 2: Dukun Trafik (Pernah Jualan &amp; Ads)</option>
                    <option value="mahir">Tingkat 3: Master Pesugihan (Scale Up &amp; Autopilot)</option>
                  </select>
                </div>

              </div>

              {/* Minat Senjata Utama */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-200 uppercase tracking-wider block">
                  Jalur Cuan yang Ingin Didalami Pertama Kali:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
                  {[
                    { id: 'affiliate', label: 'Affiliate TikTok & Shopee' },
                    { id: 'tiktok_ads', label: 'Meta & TikTok Ads' },
                    { id: 'ai_automation', label: 'AI Copywriting & Bot' },
                    { id: 'dropship', label: 'Dropship & Funnel' },
                  ].map((interest) => (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, primaryInterest: interest.id as any })}
                      className={`p-3 min-h-[44px] rounded-xl border text-center transition-all flex items-center justify-center ${
                        formData.primaryInterest === interest.id
                          ? 'bg-emerald-950/40 border-emerald-400 text-emerald-300 font-bold'
                          : 'bg-neutral-900/50 border-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {interest.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Motivasi */}
              <div className="space-y-2">
                <label htmlFor="reg-motivation" className="text-xs font-bold text-neutral-200 uppercase tracking-wider block">
                  Motivasi Singkat (Kenapa Mau &ldquo;Ngepet Online&rdquo;?)
                </label>
                <textarea
                  id="reg-motivation"
                  rows={2}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Contoh: Pengen punya penghasilan sampingan 10 juta/bulan..."
                  className="w-full px-4 py-3 bg-neutral-900/90 border border-white/10 rounded-xl text-white placeholder-neutral-500 text-base sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-base font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Mulai Ritual Belajar (Masuk Padepokan Sekarang)</span>
                </button>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-neutral-400">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Data privasimu aman. Tanpa spam, tanpa bayar di awal.</span>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation & Direct Community Links */
          <div className="bg-[#12161f] border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-300">
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Selamat Datang di Padepokan, {formData.fullName}!
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
                Identitas digitalmu telah tercatat sebagai warga resmi. Silakan masuk ke markas komunitas melalui pintu di bawah ini untuk memulai belajar:
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* WhatsApp Card */}
              <div className="bg-[#181d28] border border-emerald-500/20 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Grup WhatsApp VIP</h4>
                  <p className="text-xs text-neutral-300">
                    Lounge utama warga untuk tanya jawab harian, diskusi materi, dan kenalan sesama pegiat bisnis.
                  </p>
                </div>

                <a
                  href="https://chat.whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg text-center transition-colors block"
                >
                  Buka WhatsApp Group
                </a>
              </div>

              {/* Telegram Card */}
              <div className="bg-[#181d28] border border-sky-500/20 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Channel Telegram</h4>
                  <p className="text-xs text-neutral-300">
                    Pemberitahuan sinyal algoritma terbaru, update prompt AI mingguan, dan template landing page baru.
                  </p>
                </div>

                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-lg text-center transition-colors block"
                >
                  Gabung Channel Telegram
                </a>
              </div>

              {/* Discord Card */}
              <div className="bg-[#181d28] border border-indigo-500/20 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Discord className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Voice Room Discord</h4>
                  <p className="text-xs text-neutral-300">
                    Sesi &ldquo;Jaga Lilin Bareng&rdquo; live share screen bareng mentor setiap malam jam 20:00 WIB.
                  </p>
                </div>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg text-center transition-colors block"
                >
                  Masuk Server Discord
                </a>
              </div>

            </div>

            {/* Reset or Change Details */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-neutral-400 hover:text-white underline transition-colors"
              >
                Ubah data pendaftaran
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

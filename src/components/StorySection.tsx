import React from 'react';
import { Target, Compass, HeartHandshake, Laptop, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="kisah" className="py-20 bg-[#0c0e12] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            Section 03 · Kisah &amp; Filosofi Padepokan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dari Stigma Kamar Gelap Menuju Kemakmuran Digital
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Menjawab kecurigaan tetangga dengan karya nyata, bukan dengan debat kusir di pos ronda.
          </p>
        </div>

        {/* 2-Column Split: Story Narrative & Authentic Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base">
            <div className="space-y-4">
              <p>
                Di Indonesia, ada fenomena sosial unik: kalau kamu mandi jam 7 pagi, macet-macetan di jalan pakai kemeja rapi, masyarakat langsung menganggapmu orang sukses dan pekerja keras — meskipun gaji akhir bulan cuma numpang lewat.
              </p>
              <p>
                Sebaliknya, kalau kamu bangun jam 10 siang, dasteran atau celana pendekan di teras, tapi tiba-tiba bisa bayar renovasi rumah atau beli mobil cash, tetangga langsung bisik-bisik: <em className="text-white font-medium">&ldquo;Pasti miara tuyul atau babi ngepet tuh!&rdquo;</em>
              </p>
              <p className="border-l-2 border-emerald-500 pl-4 py-1 text-white font-semibold italic">
                &ldquo;Ngepet Online lahir untuk membalik satir itu menjadi gerakan edukasi nyata. Kita buktikan bahwa kamar tidur dan laptop bisa jadi mesin pencetak jutawan baru berkat internet dan Artificial Intelligence.&rdquo;
              </p>
              <p>
                Kami adalah wadah bagi siapa saja yang ingin belajar jualan online, iklan digital, dan otomatisasi bisnis tanpa perlu latar belakang IT, tanpa modal ratusan juta, dan tanpa harus jadi sarjana komputer.
              </p>
            </div>

            {/* Visi & Misi Box */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Visi Padepokan</span>
                </div>
                <p className="text-xs text-neutral-300 leading-normal">
                  Mencetak 100.000 jutawan digital dari kamar tidur di seluruh pelosok Indonesia bermodalkan koneksi internet dan kemauan belajar.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                  <Compass className="w-4 h-4" />
                  <span>Misi Warga</span>
                </div>
                <p className="text-xs text-neutral-300 leading-normal">
                  Mendemokratisasi akses tools AI, mengajarkan strategi iklan anti-boncos, serta membangun komunitas yang saling angkat tanpa gatekeeping.
                </p>
              </div>
            </div>

          </div>

          {/* Image & Trust Markers Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/src/assets/images/warga_pesugihan_nomad_1792229847221.jpg"
                alt="Warga Ngepet Online bekerja santai dari kamar dengan dashboard penjualan"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>POTRET WARGA ASLI PADEPOKAN</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  Rebahan di kamar, pesanan masuk dari Sabang sampai Merauke.
                </p>
                <p className="text-xs text-neutral-300 mt-1">
                  Bermodalkan AI automasi, toko online berjalan 24 jam walau owner sedang ngopi di warung.
                </p>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#12161f] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                  <span>Anti Jual Ludah</span>
                </div>
                <p className="text-neutral-400">
                  Semua materi berbasis studi kasus riil yang sedang kami jalankan saat ini.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#12161f] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <Laptop className="w-4 h-4 text-red-400" />
                  <span>Tanpa Koding</span>
                </div>
                <p className="text-neutral-400">
                  Full no-code tools dan prompt instan siap copas untuk pemula total.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

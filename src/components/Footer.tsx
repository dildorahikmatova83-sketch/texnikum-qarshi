import React from 'react';
import { ShieldCheck, Scale, ExternalLink, Globe, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Platform Brand & Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {t.appName[currentLang]}
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-md">
              {t.appSubtitle[currentLang]}. Mazkur platforma O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi o'quv standartlari, Markaziy bank va Adliya vazirligi me'yoriy hujjatlariga muvofiq ishlab chiqilgan.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
              <Scale className="w-3.5 h-3.5 text-amber-500" />
              <span>O'zbekiston Respublikasi qonunlariga qat'iy muvofiq</span>
            </div>
          </div>

          {/* Col 2: Course Modules */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Bo'limlar
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('lectures')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
                >
                  6 ta Asosiy Ma'ruza
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('registry')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
                >
                  Taqiqlangan va Rasmiy Saytlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('simulators')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
                >
                  Krizis & Kiber Simulyatorlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('practice')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
                >
                  Sinov Testi & Sertifikat
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official State Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Rasmiy Portallar
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://lex.uz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <span>Lex.uz Qonunchilik bazasi</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://cbu.uz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <span>O'zbekiston Markaziy Banki</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://soliq.uz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <span>Davlat Soliq Qo'mitasi</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://my.gov.uz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <span>my.gov.uz Davlat Xizmatlari</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dedicated Author & University Developer Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-800/90 dark:via-emerald-950/30 dark:to-slate-800/90 border border-emerald-200 dark:border-emerald-800/60 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold shadow-sm shadow-emerald-500/30 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Muallif & Ishlab chiquvchi (Developed by):
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-300 dark:border-emerald-700">
                  Oliy Ta'lim
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                Sabirova Zeniniso ustoz
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Qarshi davlat texnika universiteti uchun tayyorlandi
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right shrink-0">
            <span className="inline-block px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300 shadow-2xs">
              🏛️ Qarshi davlat texnika universiteti
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Iqtisodiy Xavfsizlik Portali. <span className="font-semibold text-slate-700 dark:text-slate-300">Sabirova Zeniniso ustoz</span> tomonidan <span className="font-semibold text-slate-700 dark:text-slate-300">Qarshi davlat texnika universiteti</span> uchun tayyorlandi va ishlab chiqildi.
          </div>
          <div className="flex items-center gap-4">
            <span>Toza kod (Clean Code)</span>
            <span>&bull;</span>
            <span>Responsive Layout</span>
            <span>&bull;</span>
            <span>Zero Error Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

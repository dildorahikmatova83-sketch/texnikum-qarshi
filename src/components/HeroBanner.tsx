import React from 'react';
import { Shield, Sparkles, ArrowRight, Play, AlertOctagon, CheckCircle2, TrendingUp, Lock, Landmark, Award } from 'lucide-react';
import { Language } from '../types';
import { getLocalized } from '../data/translations';
import { INTERESTING_FACTS } from '../data/casesAndFacts';
import { sound } from '../utils/audio';

interface HeroBannerProps {
  currentLang: Language;
  onNavigate: (tab: string) => void;
  completedLecturesCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currentLang,
  onNavigate,
  completedLecturesCount,
}) => {
  const [factIndex, setFactIndex] = React.useState(0);
  const currentFact = INTERESTING_FACTS[factIndex];

  const handleNextFact = () => {
    sound.playClick();
    setFactIndex((prev) => (prev + 1) % INTERESTING_FACTS.length);
  };

  const titles = {
    badge: {
      uz: "O'zbekiston Oliy Ta'lim Muassasalari Uchun Rasmiy O'quv Portali",
      'uz-Cyrl': 'Ўзбекистон Олий Таълим Муассасалари Учун Расмий Ўқув Портали',
      ru: 'Официальный учебный портал для вузов Республики Узбекистан',
      en: 'Official Educational Portal for Universities in Uzbekistan',
    },
    mainTitle: {
      uz: "Iqtisodiy Xavfsizlik: Milliy Suverenitet va Raqamli Barqarorlik",
      'uz-Cyrl': 'Иқтисодий Хавфсизлик: Миллий Суверенитет ва Рақамли Барқарорлик',
      ru: 'Экономическая Безопасность: Национальный Суверенитет и Цифровая Устойчивость',
      en: 'Economic Security: National Sovereignty & Digital Resilience',
    },
    lead: {
      uz: "Nazariyadan amaliyotga: makroiqtisodiy krizis simulyatorlari, kiber-moliyaviy firibgarlik tekshiruvlari, taqiqlangan va ruxsat etilgan resurslar reyestri hamda universitet darsliklari.",
      'uz-Cyrl': 'Назариядан амалиётга: макроиқтисодий инқироз симуляторлари, кибер-молиявий фирибгарлик текширувлари ва олий таълим дарсликлари.',
      ru: 'От теории к практике: симуляторы макрокризисов, детекторы финансового фишинга, реестр опасных сайтов и аккредитованные лекции.',
      en: 'Theory into practice: macroeconomic crisis simulators, cyber fraud inspection drills, registry of forbidden/permitted domains, and university curriculum.',
    },
    startSim: {
      uz: "Krizis Simulyatorini O'ynash",
      'uz-Cyrl': 'Инқироз Симуляторини Ўйнаш',
      ru: 'Запустить симулятор кризиса',
      en: 'Play Crisis Simulator',
    },
    browseRegistry: {
      uz: "Saytlar Reyestrini Ochish",
      'uz-Cyrl': 'Сайтлар Реестрини Очиш',
      ru: 'Реестр сайтов и угроз',
      en: 'Inspect Sites Registry',
    },
    factTitle: {
      uz: "Kunning Muhim Fakta & Qoidasi",
      'uz-Cyrl': 'Куннинг Муҳим Факти ва Қоидаси',
      ru: 'Факт дня и правило безопасности',
      en: 'Security Fact & Rule of the Day',
    }
  };

  return (
    <div className="relative overflow-hidden py-10 sm:py-14 bg-gradient-to-b from-slate-50 via-white to-slate-100/60 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{getLocalized(titles.badge, currentLang)}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {getLocalized(titles.mainTitle, currentLang)}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {getLocalized(titles.lead, currentLang)}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('simulators');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{getLocalized(titles.startSim, currentLang)}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('registry');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-semibold shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
              >
                <AlertOctagon className="w-4 h-4 text-amber-500" />
                <span>{getLocalized(titles.browseRegistry, currentLang)}</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('lectures');
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{completedLecturesCount}/6 Ma'ruzalar</span>
              </button>
            </div>

            {/* National Benchmark Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
              <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 shadow-xs">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                  <Landmark className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Oltin-Valyuta</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">
                  $35.4+ mlrd
                </div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                  12+ oy import qoplami
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 shadow-xs">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                  <Lock className="w-3.5 h-3.5 text-blue-500" />
                  <span>Qarz Chegarasi</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">
                  &lt; 60% YaIM
                </div>
                <div className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">
                  Qonuniy qat'iy me'yor
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 shadow-xs">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Inflyatsiya Targeti</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">
                  5.0%
                </div>
                <div className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">
                  Markaziy bank maqsad
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 shadow-xs">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>Sertifikat</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">
                  Davlat Standarti
                </div>
                <div className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">
                  Testdan o'tgach beriladi
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Fact of the Day & Quick Modules */}
          <div className="lg:col-span-5 space-y-4">
            {/* Fact Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 text-white shadow-xl shadow-emerald-950/20 border border-emerald-700/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <Shield className="w-4 h-4" />
                  <span>{getLocalized(titles.factTitle, currentLang)}</span>
                </div>
                <button
                  onClick={handleNextFact}
                  className="text-[11px] text-emerald-200 hover:text-white underline cursor-pointer"
                >
                  Boshqasi →
                </button>
              </div>

              <p className="text-sm text-slate-100 font-medium leading-relaxed min-h-[72px]">
                "{getLocalized(currentFact.fact, currentLang)}"
              </p>

              <div className="mt-4 pt-3 border-t border-emerald-800/50 flex items-center justify-between text-[11px] text-emerald-300/80">
                <span>Manba: {currentFact.source}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">
                  {currentFact.category}
                </span>
              </div>
            </div>

            {/* Quick interactive cards */}
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => {
                  sound.playClick();
                  onNavigate('simulators');
                }}
                className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer group shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-emerald-600" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                  Kiber-Detektiv O'yini
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                  Real havolalar, SMS va fishinglarni fosh qiling
                </p>
              </div>

              <div
                onClick={() => {
                  sound.playClick();
                  onNavigate('aiPrompts');
                }}
                className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer group shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                  AI Studio Promptlari
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                  Talaba va o'qituvchilar uchun professional ta'limiy promptlar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

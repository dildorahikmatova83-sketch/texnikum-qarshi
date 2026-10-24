import React from 'react';
import { Calculator, BookOpen, Search, TrendingDown, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { GLOSSARY_ITEMS } from '../data/glossary';
import { getLocalized } from '../data/translations';
import { sound } from '../utils/audio';

interface GlossaryAndCalcProps {
  currentLang: Language;
}

export const GlossaryAndCalc: React.FC<GlossaryAndCalcProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = React.useState<'calc' | 'glossary'>('calc');
  const [glossarySearch, setGlossarySearch] = React.useState('');

  // Inflation Calculator State
  const [initialAmount, setInitialAmount] = React.useState<number>(10000000); // 10 mln so'm
  const [inflationRate, setInflationRate] = React.useState<number>(9); // 9%
  const [years, setYears] = React.useState<number>(5);

  // Debt Calculator State
  const [gdpAmount, setGdpAmount] = React.useState<number>(100); // $100 Billion
  const [debtAmount, setDebtAmount] = React.useState<number>(36); // $36 Billion

  // Calculate inflation erosion
  const futureRealValue = Math.round(initialAmount / Math.pow(1 + inflationRate / 100, years));
  const lostValue = initialAmount - futureRealValue;

  // Calculate debt ratio
  const debtRatio = Number(((debtAmount / gdpAmount) * 100).toFixed(1));
  const isDebtSafe = debtRatio <= 50;
  const isDebtWarning = debtRatio > 50 && debtRatio <= 60;
  const isDebtBreach = debtRatio > 60;

  const filteredGlossary = GLOSSARY_ITEMS.filter((item) => {
    const q = glossarySearch.toLowerCase();
    return (
      getLocalized(item.term, currentLang).toLowerCase().includes(q) ||
      getLocalized(item.definition, currentLang).toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <Calculator className="w-4 h-4" />
          <span>Iqtisodiy Hisob-Kitoblar & Glossariy</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          Iqtisodiy Ko'rsatkichlar Kalkulyatori va Terminlar Lug'ati
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Inflyatsiyaning pul qadriga ta'sirini hisoblang, davlat qarzi barqarorligini tahlil qiling va iqtisodiy xavfsizlikning fundamental atamalarini o'rganing.
        </p>
      </div>

      {/* Switcher */}
      <div className="flex items-center gap-2 text-xs font-semibold">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('calc');
          }}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all cursor-pointer ${
            activeTab === 'calc'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Interaktiv Kalkulyatorlar</span>
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('glossary');
          }}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all cursor-pointer ${
            activeTab === 'glossary'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Terminlar Lug'ati ({GLOSSARY_ITEMS.length})</span>
        </button>
      </div>

      {activeTab === 'calc' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator 1: Inflation & Purchasing Power */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
              <TrendingDown className="w-5 h-5 text-rose-500" />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Inflyatsiya va Real Xarid Qobiliyati
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Vaqt o'tishi bilan inflyatsiya jamg'armaning qanchasini "yeb qo'yishi"ni hisoblang
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Boshlang'ich mablag' (so'm):
                </label>
                <input
                  type="number"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Kutilayotgan yillik inflyatsiya:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{inflationRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Muddat:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{years} yil</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Results display */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Hozirgi nominal qiymati:</span>
                <span className="font-mono font-bold">{initialAmount.toLocaleString()} so'm</span>
              </div>
              <div className="flex justify-between text-rose-600 dark:text-rose-400">
                <span>Inflyatsiya tufayli yo'qotish:</span>
                <span className="font-mono font-bold">-{lostValue.toLocaleString()} so'm</span>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                <span>{years} yildan keyingi real xarid qiymati:</span>
                <span className="font-mono">{futureRealValue.toLocaleString()} so'm</span>
              </div>
            </div>
          </div>

          {/* Calculator 2: Public Debt & Sovereign Solvency */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Davlat Qarzi Xavfsizlik Chegarasi
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  O'zbekiston Qonunchiligidagi 60% qat'iy cheklovga nisbatan barqarorlikni tekshirish
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Yalpi Ichki Mahsulot (YaIM) hajmi ($ milliard):
                </label>
                <input
                  type="number"
                  value={gdpAmount}
                  onChange={(e) => setGdpAmount(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Jami Davlat Qarzi ($ milliard):
                </label>
                <input
                  type="number"
                  value={debtAmount}
                  onChange={(e) => setDebtAmount(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono font-bold text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Visual Gauge */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span>Qarz / YaIM nisbati:</span>
                <span className={`font-mono text-sm ${isDebtBreach ? 'text-rose-600' : isDebtWarning ? 'text-amber-500' : 'text-emerald-600'}`}>
                  {debtRatio}%
                </span>
              </div>

              <div className="w-full bg-slate-100 dark:bg-slate-700 h-3 rounded-full overflow-hidden relative">
                <div
                  className={`h-full transition-all duration-500 ${
                    isDebtBreach ? 'bg-rose-500' : isDebtWarning ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${Math.min(100, (debtRatio / 80) * 100)}%` }}
                />
                {/* 60% legal line marker */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-red-600 z-10"
                  style={{ left: `${(60 / 80) * 100}%` }}
                  title="60% qonuniy chegara"
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>0% Xavfsiz</span>
                <span className="text-red-500 font-bold">60% (Qonuniy Chegara)</span>
                <span>80%+ Xavf</span>
              </div>
            </div>

            {/* Verdict */}
            <div
              className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                isDebtBreach
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  : isDebtWarning
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                  : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold mb-1">
                {isDebtBreach ? (
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                ) : (
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                )}
                <span>
                  {isDebtBreach
                    ? "QONUN BUZILISHI & DEFOLT XAVFI!"
                    : isDebtWarning
                    ? "OGOHLANTIRISH DARAJASI"
                    : "BARQAROR VA XAVFSIZ ME'YOR"}
                </span>
              </div>
              <p>
                {isDebtBreach
                  ? "Davlat qarzi qonunda belgilangan 60% chegaradan oshdi. Bu xalqaro reytinglarning tushishi va qarz xizmati byudjetni ezishiga olib keladi."
                  : isDebtWarning
                  ? "Qarz 50% dan oshgan, zudlik bilan yangi tashqi qarzlarni cheklash va byudjet defitsitini qisqartirish talab etiladi."
                  : "Qarz miqdori xavfsiz zonada. Mamlakatning to'lov qobiliyati va moliyaviy suvereniteti mustahkam."}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Glossary List View */
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              placeholder="Termin yoki ta'rifni qidirish..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredGlossary.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {getLocalized(item.term, currentLang)}
                  </h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 uppercase">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {getLocalized(item.definition, currentLang)}
                </p>
                {item.formulaOrRule && (
                  <div className="pt-2 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    Formulasi/Norma: {item.formulaOrRule}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

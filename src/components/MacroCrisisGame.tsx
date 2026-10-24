import React from 'react';
import { TrendingUp, Landmark, ShieldCheck, AlertCircle, RefreshCw, Award, ArrowRight } from 'lucide-react';
import { Language, MacroIndicator } from '../types';
import { MACRO_SCENARIOS } from '../data/gamesData';
import { getLocalized } from '../data/translations';
import { sound } from '../utils/audio';

interface MacroCrisisGameProps {
  currentLang: Language;
  onGameComplete: (points: number) => void;
}

const INITIAL_INDICATORS: MacroIndicator = {
  inflation: 8.5, // %
  reserves: 35.4, // $ Billion
  budgetDeficit: 3.2, // % of GDP
  foodSecurityIndex: 78, // %
  publicTrust: 82, // %
};

export const MacroCrisisGame: React.FC<MacroCrisisGameProps> = ({ currentLang, onGameComplete }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = React.useState(0);
  const [indicators, setIndicators] = React.useState<MacroIndicator>(INITIAL_INDICATORS);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = React.useState<number | null>(null);
  const [gameOver, setGameOver] = React.useState(false);
  const [turnFeedback, setTurnFeedback] = React.useState<{ text: string; theory: string } | null>(null);

  const scenario = MACRO_SCENARIOS[currentScenarioIndex] || MACRO_SCENARIOS[0];

  const handleChoice = (index: number) => {
    if (selectedChoiceIndex !== null) return;
    sound.playClick();
    setSelectedChoiceIndex(index);

    const choice = scenario.choices[index];
    const newIndicators: MacroIndicator = {
      inflation: Number(Math.max(1, indicators.inflation + choice.impact.inflation).toFixed(1)),
      reserves: Number(Math.max(0, indicators.reserves + choice.impact.reserves).toFixed(1)),
      budgetDeficit: Number(Math.max(0, indicators.budgetDeficit + choice.impact.budgetDeficit).toFixed(1)),
      foodSecurityIndex: Math.min(100, Math.max(0, indicators.foodSecurityIndex + choice.impact.foodSecurityIndex)),
      publicTrust: Math.min(100, Math.max(0, indicators.publicTrust + choice.impact.publicTrust)),
    };

    setIndicators(newIndicators);
    setTurnFeedback({
      text: getLocalized(choice.feedback, currentLang),
      theory: getLocalized(choice.economicTheory, currentLang),
    });

    if (choice.impact.publicTrust > 0) {
      sound.playSuccess();
    } else {
      sound.playWarning();
    }
  };

  const handleNextTurn = () => {
    sound.playClick();
    if (currentScenarioIndex < MACRO_SCENARIOS.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setSelectedChoiceIndex(null);
      setTurnFeedback(null);
    } else {
      setGameOver(true);
      sound.playBadge();
      // Calculate score based on public trust and reserves
      const finalScore = Math.round((indicators.publicTrust + indicators.foodSecurityIndex) / 2);
      onGameComplete(finalScore);
    }
  };

  const handleRestart = () => {
    sound.playClick();
    setIndicators(INITIAL_INDICATORS);
    setCurrentScenarioIndex(0);
    setSelectedChoiceIndex(null);
    setTurnFeedback(null);
    setGameOver(false);
  };

  return (
    <div className="space-y-6">
      {/* Live Dashboard Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Inflyatsiya</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className={`text-base sm:text-lg font-extrabold ${indicators.inflation > 10 ? 'text-rose-500' : 'text-emerald-500'}`}>
              {indicators.inflation}%
            </span>
            <span className="text-[10px] text-slate-400">Target: 5%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${indicators.inflation > 10 ? 'bg-rose-500' : 'bg-emerald-500'}`}
              style={{ width: `${Math.min(100, indicators.inflation * 7)}%` }}
            />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Zaxiralar</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-base sm:text-lg font-extrabold text-blue-500">
              ${indicators.reserves}B
            </span>
            <span className="text-[10px] text-slate-400">Oltin & Valyuta</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${Math.min(100, (indicators.reserves / 40) * 100)}%` }}
            />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Byudjet Kamomadi</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className={`text-base sm:text-lg font-extrabold ${indicators.budgetDeficit > 4 ? 'text-amber-500' : 'text-slate-800 dark:text-slate-200'}`}>
              {indicators.budgetDeficit}%
            </span>
            <span className="text-[10px] text-slate-400">YaIMga</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-amber-500 transition-all duration-500"
              style={{ width: `${Math.min(100, indicators.budgetDeficit * 15)}%` }}
            />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Oziq-ovqat Ta'minoti</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-base sm:text-lg font-extrabold text-teal-500">
              {indicators.foodSecurityIndex}%
            </span>
            <span className="text-[10px] text-slate-400">Mustaqillik</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-teal-500 transition-all duration-500"
              style={{ width: `${indicators.foodSecurityIndex}%` }}
            />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs col-span-2 sm:col-span-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Aholi Ishonchi</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className={`text-base sm:text-lg font-extrabold ${indicators.publicTrust < 50 ? 'text-rose-500' : 'text-emerald-500'}`}>
              {indicators.publicTrust}%
            </span>
            <span className="text-[10px] text-slate-400">Ijtimoiy barqarorlik</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${indicators.publicTrust < 50 ? 'bg-rose-500' : 'bg-emerald-500'}`}
              style={{ width: `${indicators.publicTrust}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Crisis Game Arena */}
      {!gameOver ? (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-6 shadow-sm">
          {/* Scenario Headline */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
                Favqulodda Vaziyat #{scenario.id} &bull; {getLocalized(scenario.tag, currentLang)}
              </span>
              <span className="text-xs text-slate-400">
                Bosqich: {currentScenarioIndex + 1} / {MACRO_SCENARIOS.length}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-2">
              {getLocalized(scenario.title, currentLang)}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              {getLocalized(scenario.description, currentLang)}
            </p>
          </div>

          {/* Decision Choices */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Iqtisodiy Xavfsizlik Kengashi Qaroringizni Tanlang:
            </span>
            {scenario.choices.map((ch, idx) => {
              const isSelected = selectedChoiceIndex === idx;
              let style = 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 hover:border-emerald-500';
              if (selectedChoiceIndex !== null) {
                if (isSelected) {
                  style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 shadow-sm';
                } else {
                  style = 'opacity-40 border-slate-200 dark:border-slate-700';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={selectedChoiceIndex !== null}
                  onClick={() => handleChoice(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm cursor-pointer ${style}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {getLocalized(ch.text, currentLang)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback & Economic Theory */}
          {turnFeedback && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Strategik Natija va Tahlil:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                {turnFeedback.text}
              </p>
              <div className="pt-2 border-t border-emerald-200/60 dark:border-emerald-800/60 text-[11px] text-slate-600 dark:text-slate-400">
                <strong>Iqtisodiy nazariya:</strong> {turnFeedback.theory}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNextTurn}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs cursor-pointer"
                >
                  <span>{currentScenarioIndex < MACRO_SCENARIOS.length - 1 ? "Keyingi Bosqichga O'tish" : "Yakuniy Natijalarni Ko'rish"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Game Over Screen */
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-5 shadow-md">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Simulyatsiya Muvaffaqiyatli Yakunlandi!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-md mx-auto">
              Siz O'zbekiston iqtisodiyotini makro-tahdidlardan himoya qildingiz. Barcha ko'rsatkichlar tahlil qilindi.
            </p>
          </div>

          <div className="inline-block p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-left space-y-1.5 text-xs">
            <div><strong>Yakuniy Aholi Ishonchi:</strong> {indicators.publicTrust}%</div>
            <div><strong>Saqlab qolingan Zaxiralar:</strong> ${indicators.reserves} milliard</div>
            <div><strong>Oziq-ovqat Mustaqilligi:</strong> {indicators.foodSecurityIndex}%</div>
          </div>

          <div>
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm cursor-pointer shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Qaytadan O'ynash</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

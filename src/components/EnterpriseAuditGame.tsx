import React from 'react';
import { Building2, FileSearch, AlertCircle, CheckCircle, Shield, Award, RotateCcw } from 'lucide-react';
import { Language } from '../types';
import { ENTERPRISE_CASES } from '../data/gamesData';
import { getLocalized } from '../data/translations';
import { sound } from '../utils/audio';

interface EnterpriseAuditGameProps {
  currentLang: Language;
  onCompleteCase: (points: number) => void;
}

export const EnterpriseAuditGame: React.FC<EnterpriseAuditGameProps> = ({ currentLang, onCompleteCase }) => {
  const [currentCaseIndex, setCurrentCaseIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [completed, setCompleted] = React.useState(false);

  const activeCase = ENTERPRISE_CASES[currentCaseIndex] || ENTERPRISE_CASES[0];

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    sound.playClick();
    setSelectedOption(idx);
    const opt = activeCase.options[idx];

    if (opt.isOptimal) {
      sound.playSuccess();
      onCompleteCase(30);
    } else {
      sound.playWarning();
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedOption(null);
    setCompleted(false);
  };

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              {getLocalized(activeCase.department, currentLang)}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {getLocalized(activeCase.title, currentLang)}
            </h3>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-semibold">
          ISO 37001 Auditi
        </span>
      </div>

      {/* Case Situation Brief */}
      <div className="space-y-3">
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          {getLocalized(activeCase.situation, currentLang)}
        </p>

        {/* Evidence Discovered */}
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <FileSearch className="w-3.5 h-3.5" />
            <span>Aniqlangan Ashyoviy Dalillar (Due Diligence):</span>
          </span>
          <div className="space-y-2">
            {activeCase.evidence.map((ev, eIdx) => (
              <div
                key={eIdx}
                className="p-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-300 flex items-start gap-2"
              >
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{getLocalized(ev, currentLang)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decision Options */}
      <div className="space-y-3 pt-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
          Auditor sifatida qanday chora ko'rasiz?
        </span>

        {activeCase.options.map((opt, oIdx) => {
          const isSelected = selectedOption === oIdx;
          let style = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-500';
          if (selectedOption !== null) {
            if (opt.isOptimal) {
              style = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
            } else if (isSelected) {
              style = 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-200';
            } else {
              style = 'opacity-40 border-slate-200 dark:border-slate-700';
            }
          }

          return (
            <button
              key={oIdx}
              disabled={selectedOption !== null}
              onClick={() => handleOptionSelect(oIdx)}
              className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm cursor-pointer ${style}`}
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {String.fromCharCode(65 + oIdx)}
                </span>
                <span>{getLocalized(opt.text, currentLang)}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Outcome Feedback */}
      {selectedOption !== null && (
        <div
          className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed animate-fadeIn ${
            activeCase.options[selectedOption].isOptimal
              ? 'bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
              : 'bg-rose-100/70 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200 border-rose-300 dark:border-rose-800'
          }`}
        >
          <p className="font-bold">
            {activeCase.options[selectedOption].isOptimal ? "Muvaffaqiyatli Audit Qarori:" : "Xavfli Qaror:"}
          </p>
          <p className="mt-1">
            {getLocalized(activeCase.options[selectedOption].consequence, currentLang)}
          </p>

          <div className="mt-3 flex justify-end">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Qaytadan tahlil qilish</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

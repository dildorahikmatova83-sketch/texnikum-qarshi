import React from 'react';
import { Play, TrendingUp, Smartphone, Building2, Award } from 'lucide-react';
import { Language } from '../types';
import { MacroCrisisGame } from './MacroCrisisGame';
import { ScamDetectorGame } from './ScamDetectorGame';
import { EnterpriseAuditGame } from './EnterpriseAuditGame';
import { sound } from '../utils/audio';

interface SimulatorsHubProps {
  currentLang: Language;
  onAddScore: (points: number) => void;
}

export const SimulatorsHub: React.FC<SimulatorsHubProps> = ({ currentLang, onAddScore }) => {
  const [activeGame, setActiveGame] = React.useState<'macro' | 'scam' | 'enterprise'>('macro');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <Play className="w-4 h-4 fill-emerald-600" />
          <span>Interaktiv O'yinlar & Simulyatorlar Markazi</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          Iqtisodiy Xavfsizlik bo'yicha Real-Vaqt Simulyatsiyalari
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Makroiqtisodiy inqirozlarni bartaraf eting, kiber-moliyaviy firibgarlarni fosh qiling va korxona xaridlarida antikorrupsiya auditini o'tkazing.
        </p>
      </div>

      {/* Simulator Switcher Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => {
            sound.playClick();
            setActiveGame('macro');
          }}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeGame === 'macro'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wide">
            <TrendingUp className="w-4 h-4" />
            <span>1-Simulyator</span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">
            Davlat Inqirozi Simulyatori
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Inflyatsiya, zaxiralar va oziq-ovqat muvozanatini saqlang
          </p>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveGame('scam');
          }}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeGame === 'scam'
              ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 shadow-sm'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wide">
            <Smartphone className="w-4 h-4" />
            <span>2-Simulyator</span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">
            Kiber-Moliyaviy Detektiv
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Soxta domen, SMS fishing va piramidalarni aniqlang
          </p>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveGame('enterprise');
          }}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeGame === 'enterprise'
              ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-500 shadow-sm'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wide">
            <Building2 className="w-4 h-4" />
            <span>3-Simulyator</span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">
            Korxona Xavfsizlik Auditi
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Manfaatlar to'qnashuvi va bir kunlik firmalarni fosh etish
          </p>
        </button>
      </div>

      {/* Active Game Component */}
      <div className="pt-2">
        {activeGame === 'macro' && (
          <MacroCrisisGame
            currentLang={currentLang}
            onGameComplete={(pts) => onAddScore(pts)}
          />
        )}
        {activeGame === 'scam' && (
          <ScamDetectorGame
            currentLang={currentLang}
            onCompleteGame={(pts) => onAddScore(pts)}
          />
        )}
        {activeGame === 'enterprise' && (
          <EnterpriseAuditGame
            currentLang={currentLang}
            onCompleteCase={(pts) => onAddScore(pts)}
          />
        )}
      </div>
    </div>
  );
};

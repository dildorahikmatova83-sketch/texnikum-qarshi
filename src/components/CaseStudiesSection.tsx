import React from 'react';
import { FileText, Globe, Landmark, Lightbulb, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { CASE_STUDIES, INTERESTING_FACTS } from '../data/casesAndFacts';
import { getLocalized } from '../data/translations';
import { sound } from '../utils/audio';

interface CaseStudiesSectionProps {
  currentLang: Language;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'uzbekistan' | 'international'>('all');
  const [selectedCaseId, setSelectedCaseId] = React.useState<string>(CASE_STUDIES[0].id);

  const filteredCases = activeTab === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.region === activeTab);

  const selectedCase = CASE_STUDIES.find(c => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          <FileText className="w-4 h-4" />
          <span>Real Keyslar & Tarixiy Darslar</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          O'zbekiston va Xalqaro Amaliyotdagi Iqtisodiy Inqirozlar Tahlili
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Nazariyani mustahkamlovchi real hodisalar: valyuta bozorini liberallashtirish, xalqaro sanksiyalar va boykotlar, korporativ buxgalteriya qallobligi.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 text-xs font-semibold">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('all');
          }}
          className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'all'
              ? 'bg-teal-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          Barcha Keyslar
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('uzbekistan');
          }}
          className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'uzbekistan'
              ? 'bg-teal-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          O'zbekiston Amaliyoti
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('international');
          }}
          className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'international'
              ? 'bg-teal-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          Xalqaro Tajriba
        </button>
      </div>

      {/* Case Grid and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Case Selector Cards */}
        <div className="lg:col-span-5 space-y-3">
          {filteredCases.map((c) => {
            const isSelected = c.id === selectedCase.id;
            return (
              <div
                key={c.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedCaseId(c.id);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 shadow-sm'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                  <span className="font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    {c.region === 'uzbekistan' ? "O'zbekiston" : "Xalqaro"}
                  </span>
                  <span>{c.year}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {getLocalized(c.title, currentLang)}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {getLocalized(c.summary, currentLang)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: In-depth Case Breakdown */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-700 pb-3">
            <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              {selectedCase.year} &bull; Chuqur Keys Tahlili
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
              {getLocalized(selectedCase.title, currentLang)}
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div>
              <strong className="text-slate-900 dark:text-white block mb-0.5">Xulosa va Mohiyati:</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {getLocalized(selectedCase.summary, currentLang)}
              </p>
            </div>

            <div>
              <strong className="text-rose-600 dark:text-rose-400 block mb-0.5">Inqiroz Sababi va Triggeri:</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {getLocalized(selectedCase.trigger, currentLang)}
              </p>
            </div>

            <div>
              <strong className="text-indigo-600 dark:text-indigo-400 block mb-0.5">Iqtisodiy Oqibatlari va Yo'qotishlar:</strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {getLocalized(selectedCase.economicImpact, currentLang)}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-teal-950 dark:text-teal-200">
              <div className="flex items-center gap-2 font-bold mb-1">
                <Lightbulb className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Asosiy Iqtisodiy Saboq (Lesson Learned):</span>
              </div>
              <p className="leading-relaxed">
                {getLocalized(selectedCase.solutionAndLesson, currentLang)}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Ta'sirlangan Indikatorlar:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCase.keyIndicatorsAffected.map((ind, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium"
                  >
                    &bull; {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

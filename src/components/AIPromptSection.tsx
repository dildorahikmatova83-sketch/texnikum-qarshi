import React from 'react';
import { Cpu, Copy, Check, Sparkles, ExternalLink, Sliders, BookOpen, User, GraduationCap, ShieldAlert } from 'lucide-react';
import { Language, EducationalPrompt } from '../types';
import { AI_PROMPTS_DATA } from '../data/aiPrompts';
import { getLocalized } from '../data/translations';
import { sound } from '../utils/audio';

interface AIPromptSectionProps {
  currentLang: Language;
}

export const AIPromptSection: React.FC<AIPromptSectionProps> = ({ currentLang }) => {
  const [selectedPromptId, setSelectedPromptId] = React.useState<string>(AI_PROMPTS_DATA[0].id);
  const [copied, setCopied] = React.useState(false);

  // Variables state mapping: { [promptId]: { [varName]: value } }
  const [customVars, setCustomVars] = React.useState<{ [key: string]: { [v: string]: string } }>(() => {
    const init: { [key: string]: { [v: string]: string } } = {};
    AI_PROMPTS_DATA.forEach((p) => {
      init[p.id] = {};
      p.sampleVariables.forEach((v) => {
        init[p.id][v.name] = v.defaultVal;
      });
    });
    return init;
  });

  const activePrompt = AI_PROMPTS_DATA.find((p) => p.id === selectedPromptId) || AI_PROMPTS_DATA[0];

  const handleVarChange = (varName: string, val: string) => {
    setCustomVars((prev) => ({
      ...prev,
      [activePrompt.id]: {
        ...(prev[activePrompt.id] || {}),
        [varName]: val,
      },
    }));
  };

  // Replace {{varName}} in the prompt text
  const getRenderedPrompt = () => {
    let raw = activePrompt.promptTextUz;
    if (currentLang === 'ru') raw = activePrompt.promptTextRu;
    else if (currentLang === 'en') raw = activePrompt.promptTextEn;

    const vars = customVars[activePrompt.id] || {};
    Object.keys(vars).forEach((k) => {
      raw = raw.replaceAll(`{{${k}}}`, vars[k]);
    });
    return raw;
  };

  const handleCopyPrompt = () => {
    sound.playClick();
    const text = getRenderedPrompt();
    navigator.clipboard.writeText(text);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-4 h-4" />
          <span>Google AI Studio & Gemini Ta'limiy Dasturlash</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          Google AI Studio Uchun Maxsus O'zbekcha Ta'limiy Promtlar
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Universitet o'qituvchilari, talabalar va iqtisodiy tahlilchilar uchun maxsus tuzilgan, O'zbekiston qonunchiligiga asoslangan Sokratik va keys-tahlil promtlari.
        </p>
      </div>

      {/* Grid: Left Prompt selector, Right Customizer & Copier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Selector */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Tayyor Promt Shabloni:
          </span>

          {AI_PROMPTS_DATA.map((p) => {
            const isSelected = p.id === activePrompt.id;
            return (
              <div
                key={p.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedPromptId(p.id);
                  setCopied(false);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 shadow-sm'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1">
                    {p.targetRole === 'student' ? (
                      <GraduationCap className="w-3.5 h-3.5" />
                    ) : p.targetRole === 'teacher' ? (
                      <User className="w-3.5 h-3.5" />
                    ) : (
                      <ShieldAlert className="w-3.5 h-3.5" />
                    )}
                    <span>{p.targetRole.toUpperCase()}</span>
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {getLocalized(p.title, currentLang)}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {getLocalized(p.purpose, currentLang)}
                </p>
              </div>
            );
          })}

          {/* Quick Guide to Google AI Studio */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white space-y-2 text-xs shadow-md border border-indigo-800/40">
            <div className="flex items-center gap-1.5 font-bold text-indigo-300">
              <Cpu className="w-4 h-4" />
              <span>Qanday ishlatiladi?</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px] leading-relaxed">
              <li>Quyidagi promtni o'zingizga moslashtiring va <strong>Nusxalash</strong> tugmasini bosing.</li>
              <li>Google AI Studio (aistudio.google.com) sahifasini oching.</li>
              <li>Model sifatida <strong>Gemini 2.5 Flash</strong> yoki <strong>Gemini 3 Pro</strong> ni tanlang.</li>
              <li>Temperature parametrini <strong>0.3</strong> ga qo'yib, javob oling!</li>
            </ol>
            <div className="pt-2">
              <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-white font-bold underline"
              >
                <span>Google AI Studio-ga o'tish</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Customizer & Rendered Prompt Preview */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
            <div>
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                {activePrompt.targetRole.toUpperCase()} &bull; Professional AI Promti
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {getLocalized(activePrompt.title, currentLang)}
              </h3>
            </div>

            <button
              onClick={handleCopyPrompt}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Promt Nusxalandi!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Promtni Nusxalash</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Variables Customizer */}
          {activePrompt.sampleVariables && activePrompt.sampleVariables.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                <Sliders className="w-3.5 h-3.5 text-indigo-500" />
                <span>Parametrlarni kiritish va o'zgartirish (Dinamik to'ldirish):</span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {activePrompt.sampleVariables.map((v) => (
                  <div key={v.name}>
                    <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                      {getLocalized(v.label, currentLang)}:
                    </label>
                    <input
                      type="text"
                      value={customVars[activePrompt.id]?.[v.name] || ''}
                      onChange={(e) => handleVarChange(v.name, e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prompt Code Preview */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Google AI Studio uchun Yakuniy Promt Matni:
            </span>
            <div className="p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap border border-slate-800 max-h-[420px] select-all shadow-inner">
              {getRenderedPrompt()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert, ShieldCheck, Search, ExternalLink, Scale, HelpCircle, Eye, Info } from 'lucide-react';
import { Language, WebResourceItem } from '../types';
import { RESOURCES_REGISTRY } from '../data/resourcesRegistry';
import { getLocalized, t } from '../data/translations';
import { sound } from '../utils/audio';

interface ResourcesRegistryProps {
  currentLang: Language;
}

export const ResourcesRegistry: React.FC<ResourcesRegistryProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'forbidden' | 'permitted'>('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState<WebResourceItem | null>(null);

  // URL Quick Inspector state
  const [inspectorInput, setInspectorInput] = React.useState('');
  const [inspectorResult, setInspectorResult] = React.useState<{
    status: 'safe' | 'danger' | 'unknown';
    message: string;
    details: string;
  } | null>(null);

  const handleInspectUrl = () => {
    sound.playClick();
    const query = inspectorInput.toLowerCase().trim();
    if (!query) return;

    if (
      query.includes('1xbet') ||
      query.includes('mostbet') ||
      query.includes('pin-up') ||
      query.includes('melbet') ||
      query.includes('casino') ||
      query.includes('vavada')
    ) {
      sound.playWarning();
      setInspectorResult({
        status: 'danger',
        message: "QAT'IY TAQIQLANGAN! Noqonuniy qimor va bukmeykerlik.",
        details: "O'zbekiston Respublikasi JK 278-moddasiga muvofiq qimor o'yinlarini tashkil etish va o'ynash jinoiy javobgarlikka (7 yilgacha qamoq) sabab bo'ladi. Ushbu saytlarga kirish va karta ma'lumotlarini kiritish taqiqlanadi.",
      });
    } else if (
      query.includes('yordam') ||
      query.includes('bonus') ||
      query.includes('kompensatsiya') ||
      query.includes('prezident-fond') ||
      query.includes('.xyz') ||
      query.includes('.top')
    ) {
      sound.playWarning();
      setInspectorResult({
        status: 'danger',
        message: "XAVFLI! Fishing yoki Soxta Subsidiyalar Tuzog'i.",
        details: "Davlat idoralari hech qachon norasmiy domenlar orqali shaxsiy kartaga pul tarqatmaydi. Sizdan SMS-kod talab qilinib, hisobingizdagi pullar o'g'irlanishi ko'zda tutilgan.",
      });
    } else if (
      query.includes('my.gov.uz') ||
      query.includes('soliq.uz') ||
      query.includes('cbu.uz') ||
      query.includes('lex.uz') ||
      query.includes('e-auksion.uz') ||
      query.includes('stat.uz') ||
      query.includes('finlit.uz')
    ) {
      sound.playSuccess();
      setInspectorResult({
        status: 'safe',
        message: "100% XAVFSIZ VA RASMIY! Davlat va Moliya Portali.",
        details: "Bu O'zbekiston Respublikasining litsenziyalangan, sertifikatlangan va qonuniy kuchga ega rasmiy axborot tizimidir.",
      });
    } else {
      sound.playClick();
      setInspectorResult({
        status: 'unknown',
        message: "Noma'lum resurs: Ehtiyot bo'ling!",
        details: "Manzilni tekshiring: SSL qulf belgisi bormi, davlat organi bo'lsa '.gov.uz' bilan tugaganmi? Agar sizdan SMS-kod yoki oldindan pul kiritish so'ralsa, darhol sahifani yoping.",
      });
    }
  };

  const filteredResources = RESOURCES_REGISTRY.filter((res) => {
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'forbidden' && res.status === 'forbidden') ||
      (activeTab === 'permitted' && res.status === 'permitted');

    const matchesSearch =
      res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.urlExample.toLowerCase().includes(searchQuery.toLowerCase()) ||
      getLocalized(res.shortDesc, currentLang).toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.legalBasis.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <Scale className="w-4 h-4" />
          <span>O'zbekiston Qonunchiligi & Kiber-Gigiyena</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          Saytlar va Resurslar Reyestri (Taqiqlangan vs Ruxsat Etilgan)
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
          Universitet talabalari bilishi shart bo'lgan taqiqlangan noqonuniy qimor, moliyaviy piramida va fishing manbalari hamda rasmiy davlat axborot tizimlarining qiyosiy huquqiy tahlili.
        </p>
      </div>

      {/* Interactive URL Inspector Sandbox */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg border border-indigo-800/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base sm:text-lg font-bold">
              Tezkor Havola & Domen Xavfsizlik Skanneri
            </h3>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
            Interaktiv Mashq
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          Shubhali sayt nomini yoki havolani kiriting (masalan: <code className="text-amber-300">1xbet.com</code>, <code className="text-emerald-300">my.gov.uz</code>, <code className="text-rose-300">davlat-yordam.xyz</code>):
        </p>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={inspectorInput}
            onChange={(e) => setInspectorInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleInspectUrl()}
            placeholder="Havolani yoki domen nomini kiriting..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800/90 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
          <button
            onClick={handleInspectUrl}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs sm:text-sm shadow-md transition-colors cursor-pointer shrink-0"
          >
            Tekshirish
          </button>
        </div>

        {/* Quick sample chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
          <span>Namuna:</span>
          {['1xbet-uz.com', 'my.gov.uz', 'prezident-yordam-2026.xyz', 'soliq.uz'].map((sample) => (
            <button
              key={sample}
              onClick={() => {
                setInspectorInput(sample);
              }}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] border border-slate-700 cursor-pointer"
            >
              {sample}
            </button>
          ))}
        </div>

        {/* Inspection Result Card */}
        {inspectorResult && (
          <div
            className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed animate-fadeIn ${
              inspectorResult.status === 'danger'
                ? 'bg-rose-950/80 border-rose-500/80 text-rose-200'
                : inspectorResult.status === 'safe'
                ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-200'
                : 'bg-amber-950/80 border-amber-500/80 text-amber-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
              {inspectorResult.status === 'danger' ? (
                <ShieldAlert className="w-5 h-5 text-rose-400" />
              ) : inspectorResult.status === 'safe' ? (
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              )}
              <span>{inspectorResult.message}</span>
            </div>
            <p className="mt-1.5 opacity-90">{inspectorResult.details}</p>
          </div>
        )}
      </div>

      {/* Tabs and Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-full sm:w-auto text-xs font-semibold">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('all');
            }}
            className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {t.common.filterAll[currentLang]} ({RESOURCES_REGISTRY.length})
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('forbidden');
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'forbidden'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-rose-600 dark:text-rose-400'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Taqiqlangan & Xavfli</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('permitted');
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'permitted'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-emerald-600 dark:text-emerald-400'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ruxsat etilgan & Rasmiy</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Nom yoki moddani qidirish..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Grid of Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredResources.map((res) => {
          const isForbidden = res.status === 'forbidden';
          return (
            <div
              key={res.id}
              className={`p-5 rounded-2xl border transition-all ${
                isForbidden
                  ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
                  : 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60'
              }`}
            >
              {/* Top status banner */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    isForbidden
                      ? 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300 border border-rose-300 dark:border-rose-800'
                      : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                  }`}
                >
                  {isForbidden ? (
                    <>
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{t.common.statusForbidden[currentLang]}</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{t.common.statusPermitted[currentLang]}</span>
                    </>
                  )}
                </span>

                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {getLocalized(res.categoryTitle, currentLang)}
                </span>
              </div>

              {/* Title & URL preview */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {res.name}
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                {res.urlExample}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {getLocalized(res.shortDesc, currentLang)}
              </p>

              {/* Risks or Benefits bullet list */}
              <div className="mt-3 space-y-1.5">
                {res.risksOrBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isForbidden ? 'bg-rose-500' : 'bg-emerald-500'}`} />
                    <span>{getLocalized(item, currentLang)}</span>
                  </div>
                ))}
              </div>

              {/* Legal basis footer */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                  <Scale className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="font-semibold">{res.legalBasis}</span>
                </div>

                <button
                  onClick={() => {
                    sound.playClick();
                    setSelectedItem(res);
                  }}
                  className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold hover:underline cursor-pointer shrink-0"
                >
                  <Eye className="w-3 h-3" />
                  <span>Batafsil tekshirish</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  selectedItem.status === 'forbidden' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {selectedItem.status === 'forbidden' ? "Taqiqlangan / Xavfli" : "Ruxsat etilgan"}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {selectedItem.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div>
                <strong className="block text-slate-900 dark:text-white mb-0.5">Qisqacha tavsif:</strong>
                <p>{getLocalized(selectedItem.shortDesc, currentLang)}</p>
              </div>

              <div>
                <strong className="block text-slate-900 dark:text-white mb-0.5">Huquqiy javobgarlik va asos:</strong>
                <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
                  {selectedItem.legalBasis}
                </div>
              </div>

              {selectedItem.warningSigns && selectedItem.warningSigns.length > 0 && (
                <div>
                  <strong className="block text-rose-600 dark:text-rose-400 mb-1">Xavfli belgilari (Qizil bayroqchalar):</strong>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedItem.warningSigns.map((w, idx) => (
                      <li key={idx}>{getLocalized(w, currentLang)}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <strong className="block text-slate-900 dark:text-white mb-0.5">Haqiqiyligini tekshirish usuli:</strong>
                <p>{getLocalized(selectedItem.verificationMethod, currentLang)}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

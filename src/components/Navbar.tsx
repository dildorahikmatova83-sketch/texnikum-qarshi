import React from 'react';
import { ShieldCheck, Moon, Sun, Volume2, VolumeX, Globe, Award, Menu, X, BookOpen, AlertTriangle, Play, HelpCircle, FileText, Cpu, Calculator } from 'lucide-react';
import { Language, Theme } from '../types';
import { t } from '../data/translations';
import { sound } from '../utils/audio';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  score: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  theme,
  onThemeToggle,
  soundEnabled,
  onSoundToggle,
  activeTab,
  onTabChange,
  score,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'overview', label: t.nav.overview[currentLang], icon: ShieldCheck },
    { id: 'lectures', label: t.nav.lectures[currentLang], icon: BookOpen },
    { id: 'registry', label: t.nav.registry[currentLang], icon: AlertTriangle },
    { id: 'simulators', label: t.nav.simulators[currentLang], icon: Play },
    { id: 'practice', label: t.nav.practice[currentLang], icon: HelpCircle },
    { id: 'cases', label: t.nav.cases[currentLang], icon: FileText },
    { id: 'glossary', label: t.nav.glossary[currentLang], icon: Calculator },
    { id: 'aiPrompts', label: t.nav.aiPrompts[currentLang], icon: Cpu },
  ];

  const handleNavClick = (id: string) => {
    sound.playClick();
    onTabChange(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('overview')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                {t.appName[currentLang]}
                <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                  EDU
                </span>
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Oliy Ta'lim Portali
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Controls: Score, Lang, Theme, Sound */}
          <div className="flex items-center space-x-2">
            {/* Student Score Badge */}
            <div
              onClick={() => handleNavClick('practice')}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400 text-xs font-semibold cursor-pointer hover:scale-105 transition-transform"
              title="Sizning ballingiz"
            >
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>{score}</span>
              <span className="text-[10px] opacity-80">{t.common.points[currentLang]}</span>
            </div>

            {/* Language Selector */}
            <div className="relative flex items-center">
              <label htmlFor="lang-select" className="sr-only">Tilni tanlash</label>
              <Globe className="w-3.5 h-3.5 text-slate-400 absolute left-2 pointer-events-none" />
              <select
                id="lang-select"
                aria-label="Tilni tanlash"
                value={currentLang}
                onChange={(e) => {
                  sound.playClick();
                  onLanguageChange(e.target.value as Language);
                }}
                className="pl-7 pr-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="uz">O'zbek</option>
                <option value="uz-Cyrl">Ўзбек</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                onSoundToggle();
                sound.playClick();
              }}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              title={soundEnabled ? t.common.soundOn[currentLang] : t.common.soundOff[currentLang]}
              aria-label="Ovoz sozlamasi"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                onThemeToggle();
              }}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              title={theme === 'dark' ? t.common.lightMode[currentLang] : t.common.darkMode[currentLang]}
              aria-label="Rejimni o'zgartirish"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-1.5 animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

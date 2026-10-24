/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { LectureViewer } from './components/LectureViewer';
import { ResourcesRegistry } from './components/ResourcesRegistry';
import { SimulatorsHub } from './components/SimulatorsHub';
import { QuizCertification } from './components/QuizCertification';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { GlossaryAndCalc } from './components/GlossaryAndCalc';
import { AIPromptSection } from './components/AIPromptSection';
import { Footer } from './components/Footer';
import { sound } from './utils/audio';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('iqtisodiy_xavfsizlik_lang');
      if (saved === 'uz' || saved === 'uz-Cyrl' || saved === 'ru' || saved === 'en') {
        return saved;
      }
    }
    return 'uz';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('iqtisodiy_xavfsizlik_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Gamification progress states
  const [studentScore, setStudentScore] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('iqtisodiy_xavfsizlik_score');
      return saved ? parseInt(saved, 10) : 100;
    }
    return 100;
  });

  const [completedLectures, setCompletedLectures] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('iqtisodiy_xavfsizlik_completed_lec');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    return ['lec-1'];
  });

  // Apply dark mode class to root document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('iqtisodiy_xavfsizlik_theme', theme);
  }, [theme]);

  // Persist language
  useEffect(() => {
    localStorage.setItem('iqtisodiy_xavfsizlik_lang', lang);
  }, [lang]);

  // Persist score
  useEffect(() => {
    localStorage.setItem('iqtisodiy_xavfsizlik_score', studentScore.toString());
  }, [studentScore]);

  // Persist completed lectures
  useEffect(() => {
    localStorage.setItem('iqtisodiy_xavfsizlik_completed_lec', JSON.stringify(completedLectures));
  }, [completedLectures]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  const handleThemeToggle = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSoundToggle = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
  };

  const handleAddScore = (points: number) => {
    setStudentScore(prev => prev + points);
  };

  const handleCompleteLecture = (lectureId: string, earnedPoints: number) => {
    if (!completedLectures.includes(lectureId)) {
      setCompletedLectures(prev => [...prev, lectureId]);
      handleAddScore(earnedPoints);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-200 flex flex-col">
      {/* Top Navigation */}
      <Navbar
        currentLang={lang}
        onLanguageChange={handleLanguageChange}
        theme={theme}
        onThemeToggle={handleThemeToggle}
        soundEnabled={soundEnabled}
        onSoundToggle={handleSoundToggle}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        score={studentScore}
      />

      {/* Main Content Sections based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div>
            <HeroBanner
              currentLang={lang}
              onNavigate={setActiveTab}
              completedLecturesCount={completedLectures.length}
            />

            {/* In-overview quick previews */}
            <div className="space-y-12 pb-12">
              <ResourcesRegistry currentLang={lang} />
              <SimulatorsHub currentLang={lang} onAddScore={handleAddScore} />
            </div>
          </div>
        )}

        {activeTab === 'lectures' && (
          <LectureViewer
            currentLang={lang}
            completedLectures={completedLectures}
            onCompleteLecture={handleCompleteLecture}
          />
        )}

        {activeTab === 'registry' && (
          <ResourcesRegistry currentLang={lang} />
        )}

        {activeTab === 'simulators' && (
          <SimulatorsHub currentLang={lang} onAddScore={handleAddScore} />
        )}

        {activeTab === 'practice' && (
          <QuizCertification currentLang={lang} onAddScore={handleAddScore} />
        )}

        {activeTab === 'cases' && (
          <CaseStudiesSection currentLang={lang} />
        )}

        {activeTab === 'glossary' && (
          <GlossaryAndCalc currentLang={lang} />
        )}

        {activeTab === 'aiPrompts' && (
          <AIPromptSection currentLang={lang} />
        )}
      </main>

      {/* Academic Footer */}
      <Footer currentLang={lang} onNavigate={setActiveTab} />
    </div>
  );
}

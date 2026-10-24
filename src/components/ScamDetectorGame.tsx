import React from 'react';
import { ShieldAlert, ShieldCheck, Smartphone, Check, X, Award, RotateCcw, ArrowRight, AlertTriangle, Scale } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { SCAM_DETECTOR_SCENARIOS } from '../data/gamesData';
import { getLocalized } from '../data/translations';
import { sound } from '../utils/audio';

interface ScamDetectorGameProps {
  currentLang: Language;
  onCompleteGame: (points: number) => void;
}

export const ScamDetectorGame: React.FC<ScamDetectorGameProps> = ({ currentLang, onCompleteGame }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<boolean | null>(null);
  const [score, setScore] = React.useState(0);
  const [streak, setStreak] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  const scenario = SCAM_DETECTOR_SCENARIOS[currentIndex] || SCAM_DETECTOR_SCENARIOS[0];

  const handleDecision = (userClaimScam: boolean) => {
    if (selectedAnswer !== null) return;
    sound.playClick();
    setSelectedAnswer(userClaimScam);

    const isCorrect = userClaimScam === scenario.isScam;
    if (isCorrect) {
      sound.playSuccess();
      const pointsEarned = 20 + streak * 5;
      setScore(prev => prev + pointsEarned);
      setStreak(prev => prev + 1);
    } else {
      sound.playWarning();
      setStreak(0);
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex < SCAM_DETECTOR_SCENARIOS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setGameOver(true);
      sound.playBadge();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
      onCompleteGame(score);
    }
  };

  const handleRestart = () => {
    sound.playClick();
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setStreak(0);
    setGameOver(false);
  };

  return (
    <div className="space-y-6">
      {/* Header & Scoreboard */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-indigo-500" />
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Kiber-Moliyaviy Detektiv
            </h3>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Bosqich: {currentIndex + 1} / {SCAM_DETECTOR_SCENARIOS.length}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="text-right">
            <span className="text-slate-400">Streak:</span>
            <span className="ml-1 text-emerald-500 font-bold">🔥 {streak}x</span>
          </div>
          <div className="text-right">
            <span className="text-slate-400">Ball:</span>
            <span className="ml-1 text-amber-500 font-bold">{score}</span>
          </div>
        </div>
      </div>

      {!gameOver ? (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-6 shadow-sm">
          {/* Simulated Mobile Device Preview Card */}
          <div className="max-w-md mx-auto rounded-3xl bg-slate-900 text-white p-5 border-4 border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Top Phone bar */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-4 pb-2 border-b border-slate-800">
              <span className="font-mono">12:45 PM</span>
              <span className="font-semibold text-slate-300">
                {scenario.sourceType.toUpperCase()} XABAR
              </span>
              <span>100% 🔋</span>
            </div>

            {/* Sender address */}
            <div className="p-2.5 rounded-xl bg-slate-800/80 mb-3 text-xs flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block">Yuboruvchi:</span>
                <span className="font-mono font-bold text-emerald-400 truncate block">
                  {scenario.senderOrUrl}
                </span>
              </div>
            </div>

            {/* Message Body */}
            <div className="p-4 rounded-2xl bg-slate-800 text-xs sm:text-sm text-slate-100 font-sans leading-relaxed border border-slate-700 shadow-inner">
              {getLocalized(scenario.messageContent, currentLang)}
            </div>

            <p className="text-[10px] text-center text-slate-400 mt-4">
              Ushbu xabarni diqqat bilan o'rganing. Bu firibgarlikmi yoki rasmiy xizmat?
            </p>
          </div>

          {/* Action Choice Buttons */}
          {selectedAnswer === null ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto pt-2">
              <button
                onClick={() => handleDecision(true)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-600/20 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Xavfli / Firibgarlik! (Scam)</span>
              </button>

              <button
                onClick={() => handleDecision(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Xavfsiz / Rasmiy Manba</span>
              </button>
            </div>
          ) : (
            /* Result and Forensic Feedback */
            <div className="space-y-4 max-w-xl mx-auto animate-fadeIn">
              <div
                className={`p-4 rounded-2xl border text-xs sm:text-sm ${
                  selectedAnswer === scenario.isScam
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base mb-1">
                  {selectedAnswer === scenario.isScam ? (
                    <>
                      <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span>To'g'ri tahlil! Siz fosh qildingiz.</span>
                    </>
                  ) : (
                    <>
                      <X className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                      <span>Xato xulosa! Bu xavfli tuzoq edi.</span>
                    </>
                  )}
                </div>

                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  {getLocalized(scenario.expertExplanation, currentLang)}
                </p>

                {scenario.redFlags && scenario.redFlags.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide block mb-1">
                      Fosh etuvchi belgilar:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                      {scenario.redFlags.map((flag, fIdx) => (
                        <li key={fIdx}>{getLocalized(flag, currentLang)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{scenario.legalNote}</span>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md cursor-pointer"
                >
                  <span>{currentIndex < SCAM_DETECTOR_SCENARIOS.length - 1 ? "Keyingi Xabar Tekshiruvi" : "O'yinni Yakunlash"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Final Score Card */
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-4 shadow-md">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Kiber-Detektiv Tekshiruvi Yakunlandi!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            Siz kiber-moliyaviy xavfsizlik va fishing tuzoqlarini fosh etish bo'yicha yuqori hushyorlik ko'rsatdingiz.
          </p>

          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
            +{score} Ball
          </div>

          <div>
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Qaytadan O'ynash</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

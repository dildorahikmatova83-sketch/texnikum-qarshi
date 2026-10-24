import React from 'react';
import { BookOpen, CheckCircle, Volume2, Square, ArrowLeft, ArrowRight, Shield, Award, HelpCircle, FileText, Clock } from 'lucide-react';
import { Language, Lecture } from '../types';
import { LECTURES_DATA } from '../data/lectures';
import { getLocalized, t } from '../data/translations';
import { sound } from '../utils/audio';

interface LectureViewerProps {
  currentLang: Language;
  completedLectures: string[];
  onCompleteLecture: (lectureId: string, earnedPoints: number) => void;
}

export const LectureViewer: React.FC<LectureViewerProps> = ({
  currentLang,
  completedLectures,
  onCompleteLecture,
}) => {
  const [selectedLecture, setSelectedLecture] = React.useState<Lecture>(LECTURES_DATA[0]);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  const [checkpointAnswer, setCheckpointAnswer] = React.useState<number | null>(null);
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [isSpeaking, setIsSpeaking] = React.useState(false);

  // Stop speech when slide or lecture changes
  React.useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setCheckpointAnswer(null);
    setShowExplanation(false);
  }, [selectedLecture, currentSlideIndex]);

  const currentSlide = selectedLecture.slides[currentSlideIndex] || selectedLecture.slides[0];
  const isLastSlide = currentSlideIndex === selectedLecture.slides.length - 1;
  const isCompleted = completedLectures.includes(selectedLecture.id);

  const handleSpeechToggle = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const text = `${getLocalized(currentSlide.title, currentLang)}. ${getLocalized(currentSlide.content, currentLang)}`;
      const utterance = new SpeechSynthesisUtterance(text);
      if (currentLang === 'ru') utterance.lang = 'ru-RU';
      else if (currentLang === 'en') utterance.lang = 'en-US';
      else utterance.lang = 'uz-UZ';
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleAnswerSubmit = (optionIndex: number) => {
    if (showExplanation) return;
    setCheckpointAnswer(optionIndex);
    setShowExplanation(true);
    if (optionIndex === selectedLecture.checkpoint.correctIndex) {
      sound.playSuccess();
      if (!isCompleted) {
        onCompleteLecture(selectedLecture.id, 25);
      }
    } else {
      sound.playWarning();
    }
  };

  const filteredLectures = activeCategory === 'all'
    ? LECTURES_DATA
    : LECTURES_DATA.filter(l => l.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <BookOpen className="w-4 h-4" />
            <span>Oliy Ta'lim Darsliklari & Modullari</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Iqtisodiy Xavfsizlik Akademik Kursi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            O'zbekiston qonunchiligi, davlat strategiyalari va xalqaro indikatorlar asosida tayyorlangan 6 ta asosiy ma'ruza
          </p>
        </div>

        {/* Progress pill */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">O'zlashtirish:</span>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {completedLectures.length} / {LECTURES_DATA.length} tugatildi
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-extrabold text-sm">
            {Math.round((completedLectures.length / LECTURES_DATA.length) * 100)}%
          </div>
        </div>
      </div>

      {/* Main Grid: Left selector cards, Right slide presenter */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Lecture List */}
        <div className="lg:col-span-4 space-y-3">
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              Barchasi
            </button>
            <button
              onClick={() => setActiveCategory('macro')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                activeCategory === 'macro'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              Makroiqtisod
            </button>
            <button
              onClick={() => setActiveCategory('micro')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                activeCategory === 'micro'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              Korxona
            </button>
            <button
              onClick={() => setActiveCategory('cyber')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                activeCategory === 'cyber'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              Kiber-moliya
            </button>
          </div>

          {/* Cards */}
          <div className="space-y-2">
            {filteredLectures.map((lec) => {
              const isSelected = selectedLecture.id === lec.id;
              const isDone = completedLectures.includes(lec.id);
              return (
                <div
                  key={lec.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedLecture(lec);
                    setCurrentSlideIndex(0);
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      № {lec.number} Ma'ruza
                    </span>
                    {isDone ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {t.common.completed[currentLang]}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        {lec.estimatedMinutes} daq
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1.5 leading-snug">
                    {getLocalized(lec.title, currentLang)}
                  </h3>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {getLocalized(lec.shortDesc, currentLang)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Lecture Slide Stage */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-7 shadow-xs space-y-6">
          {/* Header of Active Lecture */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-4">
            <div>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                № {selectedLecture.number}-Mavzu &bull; Slayd {currentSlideIndex + 1}/{selectedLecture.slides.length}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                {getLocalized(currentSlide.title, currentLang)}
              </h2>
            </div>

            {/* Audio Reader Button */}
            <button
              onClick={handleSpeechToggle}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                isSpeaking
                  ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600 hover:bg-slate-200'
              }`}
              title="Matnni ovozda eshitish"
            >
              {isSpeaking ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>To'xtatish</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Ovozda eshitish</span>
                </>
              )}
            </button>
          </div>

          {/* Slide Main Content */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {getLocalized(currentSlide.content, currentLang)}
            </p>

            {/* Highlighted core principle */}
            {currentSlide.highlight && (
              <div className="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm font-semibold flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{getLocalized(currentSlide.highlight, currentLang)}</span>
              </div>
            )}

            {/* Bullet points */}
            {currentSlide.bulletPoints && currentSlide.bulletPoints.length > 0 && (
              <div className="space-y-2 pt-1">
                {currentSlide.bulletPoints.map((bp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{getLocalized(bp, currentLang)}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Law Reference */}
            {currentSlide.lawReference && (
              <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-[12px] text-amber-900 dark:text-amber-300 flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  <strong>{t.common.legalBasis[currentLang]}:</strong> {currentSlide.lawReference}
                </span>
              </div>
            )}

            {/* Stat or Fact */}
            {currentSlide.statOrFact && (
              <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50 text-[12px] text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>
                  <strong>O'zbekiston ko'rsatkichi:</strong> {getLocalized(currentSlide.statOrFact, currentLang)}
                </span>
              </div>
            )}
          </div>

          {/* Slide Navigation Buttons */}
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/80 pt-4">
            <button
              disabled={currentSlideIndex === 0}
              onClick={() => {
                sound.playClick();
                setCurrentSlideIndex(prev => prev - 1);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.common.previous[currentLang]}</span>
            </button>

            {/* Slide dots */}
            <div className="flex items-center gap-1">
              {selectedLecture.slides.map((_, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => {
                    sound.playClick();
                    setCurrentSlideIndex(sIdx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    sIdx === currentSlideIndex
                      ? 'w-6 bg-emerald-600'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Slayd ${sIdx + 1}`}
                />
              ))}
            </div>

            <button
              disabled={isLastSlide}
              onClick={() => {
                sound.playClick();
                setCurrentSlideIndex(prev => prev + 1);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>{t.common.next[currentLang]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* End-of-lecture Checkpoint Question */}
          {isLastSlide && (
            <div className="mt-6 pt-6 border-t-2 border-dashed border-emerald-300 dark:border-emerald-800/60 space-y-4 bg-emerald-50/40 dark:bg-emerald-950/20 p-5 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>Ma'ruzani mustahkamlash savoli (25 ball)</span>
                </div>
                {isCompleted && (
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2.5 py-0.5 rounded-full">
                    O'zlashtirilgan
                  </span>
                )}
              </div>

              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {getLocalized(selectedLecture.checkpoint.question, currentLang)}
              </h4>

              <div className="grid grid-cols-1 gap-2">
                {selectedLecture.checkpoint.options.map((opt, oIdx) => {
                  const isSelected = checkpointAnswer === oIdx;
                  const isCorrect = oIdx === selectedLecture.checkpoint.correctIndex;
                  let style = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-500';
                  if (showExplanation) {
                    if (isCorrect) style = 'bg-emerald-100 dark:bg-emerald-950 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                    else if (isSelected) style = 'bg-rose-100 dark:bg-rose-950 border-rose-500 text-rose-900 dark:text-rose-200';
                    else style = 'opacity-60 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700';
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={showExplanation}
                      onClick={() => handleAnswerSubmit(oIdx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${style}`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{getLocalized(opt, currentLang)}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed ${
                  checkpointAnswer === selectedLecture.checkpoint.correctIndex
                    ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800'
                    : 'bg-rose-50 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-800'
                }`}>
                  <p className="font-semibold">
                    {checkpointAnswer === selectedLecture.checkpoint.correctIndex ? "A'lo! Javob to'g'ri topildi:" : "Noto'g'ri! Tushuntirish:"}
                  </p>
                  <p className="mt-1">
                    {getLocalized(selectedLecture.checkpoint.explanation, currentLang)}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key terms bar */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Mavzuning asosiy atamalari:
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedLecture.keyTerms.map((term, tIdx) => (
                <div
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 text-xs"
                >
                  <span className="font-bold">{getLocalized(term.term, currentLang)}:</span>{' '}
                  <span className="opacity-90">{getLocalized(term.definition, currentLang)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

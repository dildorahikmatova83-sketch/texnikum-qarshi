import React from 'react';
import { HelpCircle, Award, CheckCircle, XCircle, RotateCcw, Printer, ShieldCheck, Download, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { QUIZ_QUESTIONS } from '../data/quizzesData';
import { getLocalized } from '../data/translations';
import { sound } from '../utils/audio';

interface QuizCertificationProps {
  currentLang: Language;
  onAddScore: (points: number) => void;
}

export const QuizCertification: React.FC<QuizCertificationProps> = ({ currentLang, onAddScore }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Certificate student details
  const [studentName, setStudentName] = React.useState('Dildora Hikmatova');
  const [universityName, setUniversityName] = React.useState('Qarshi davlat texnika universiteti');
  const [certId] = React.useState(`UZ-ECSEC-${Math.floor(100000 + Math.random() * 900000)}`);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optIndex: number) => {
    if (isSubmitted) return;
    sound.playClick();
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: optIndex }));
  };

  const handleNext = () => {
    sound.playClick();
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    sound.playClick();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });
    const percentage = Math.round((correct / QUIZ_QUESTIONS.length) * 100);
    return { correct, total: QUIZ_QUESTIONS.length, percentage };
  };

  const handleSubmitQuiz = () => {
    sound.playClick();
    setIsSubmitted(true);
    const { percentage } = calculateResults();
    if (percentage >= 70) {
      sound.playBadge();
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
      onAddScore(50);
    } else {
      sound.playWarning();
    }
  };

  const handleResetQuiz = () => {
    sound.playClick();
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
  };

  const results = calculateResults();
  const passed = results.percentage >= 70;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <HelpCircle className="w-4 h-4" />
          <span>Attestatsiya & Malaka Sertifikati</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          Iqtisodiy Xavfsizlik bo'yicha Sinov Testi
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Makroiqtisodiy chegaralar, kiber-moliyaviy qonunchilik va korxona xavfsizligi bo'yicha 6 ta universitet darajasidagi sinov savollari. 70% dan yuqori natija ko'rsatgan talabaga rasmiy elektron sertifikat taqdim etiladi.
        </p>
      </div>

      {!isSubmitted ? (
        /* Quiz taking view */
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
          {/* Progress bar */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-500 dark:text-slate-400">
              Savol {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
            </span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              Belgilangan: {Object.keys(userAnswers).length} / {QUIZ_QUESTIONS.length}
            </span>
          </div>

          <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              Mavzu: {currentQ.category.toUpperCase()} &bull; Qiyinlik: {currentQ.difficulty}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {getLocalized(currentQ.question, currentLang)}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = userAnswers[currentQuestionIndex] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-semibold shadow-xs'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-emerald-600 text-white'
                          : 'border border-slate-300 dark:border-slate-600 text-slate-500'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{getLocalized(opt, currentLang)}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Prev / Next / Submit Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
            <button
              disabled={currentQuestionIndex === 0}
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-40 cursor-pointer"
            >
              Oldingi
            </button>

            {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer shadow-xs"
              >
                Keyingi Savol
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(userAnswers).length < QUIZ_QUESTIONS.length}
                className="px-6 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-white cursor-pointer shadow-md disabled:opacity-40"
              >
                Testni Yakunlash & Baholash
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results and Certificate View */
        <div className="space-y-8 animate-fadeIn">
          {/* Result Score Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-4 shadow-sm">
            <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center ${passed ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400' : 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400'}`}>
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {passed ? "Tabriklaymiz! Testdan muvaffaqiyatli o'tdingiz!" : "Afsuski, yetarli ball to'play olmadingiz."}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Siz {results.total} ta savoldan {results.correct} tasiga to'g'ri javob berdingiz ({results.percentage}% natija).
              {passed ? " Quyida rasmiy elektron sertifikatingiz taqdim etildi." : " Ma'ruzalarni qayta o'qib, qayta topshirishni tavsiya qilamiz."}
            </p>

            <button
              onClick={handleResetQuiz}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Qaytadan topshirish</span>
            </button>
          </div>

          {/* Certificate View (if passed) */}
          {passed && (
            <div className="space-y-4">
              {/* Customizer controls */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-wrap gap-3 items-center justify-between text-xs">
                <div className="flex flex-wrap gap-2 items-center flex-1">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">
                    Ism-familiyangiz:
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 font-bold text-xs"
                    placeholder="Talaba ismi"
                  />
                  <input
                    type="text"
                    value={universityName}
                    onChange={(e) => setUniversityName(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 text-xs"
                    placeholder="Universitet nomi"
                  />
                </div>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold cursor-pointer shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Sertifikatni Chop Etish</span>
                </button>
              </div>

              {/* Printable Official Certificate */}
              <div
                id="certificate-print-area"
                className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 text-slate-900 border-8 border-double border-amber-500/40 shadow-2xl relative overflow-hidden text-center space-y-6"
              >
                {/* Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                  <ShieldCheck className="w-96 h-96 text-emerald-900" />
                </div>

                {/* Top Badge */}
                <div className="flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-700">
                  <Sparkles className="w-4 h-4" />
                  <span>O'zbekiston Respublikasi Oliy Ta'lim Tizimi</span>
                  <Sparkles className="w-4 h-4" />
                </div>

                {/* Certificate Title */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase font-serif">
                    MALAKA SERTIFIKATI
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                    CERTIFICATE OF PROFESSIONAL COMPETENCE IN ECONOMIC SECURITY
                  </p>
                </div>

                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-500 mx-auto rounded-full" />

                {/* Recipient */}
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 italic block">Ushbu sertifikat tasdiqlaydi:</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-800 underline decoration-amber-400 decoration-2">
                    {studentName || 'Talaba'}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mt-1">
                    {universityName}
                  </p>
                </div>

                {/* Course description */}
                <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
                  "Iqtisodiy Xavfsizlik" fani bo'yicha makroiqtisodiy immunitet, kiber-moliyaviy tahdidlar profilaktikasi, qonuniy va taqiqlangan resurslar tahlili hamda korporativ xavfsizlik auditlari kursini muvaffaqiyatli yakunlab, <strong>{results.percentage}%</strong> natija ko'rsatdi.
                </p>

                {/* Footer signatures & Stamp */}
                <div className="pt-6 border-t border-amber-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="text-left text-[11px] text-slate-600 space-y-0.5">
                    <div><strong>Sertifikat ID:</strong> <span className="font-mono">{certId}</span></div>
                    <div><strong>Berilgan sana:</strong> {new Date().toLocaleDateString('uz-UZ')}</div>
                    <div><strong>Holati:</strong> <span className="text-emerald-700 font-bold">VERIFIED & ACCREDITED</span></div>
                  </div>

                  {/* Golden seal */}
                  <div className="w-20 h-20 rounded-full border-4 border-amber-400 bg-amber-100 flex flex-col items-center justify-center text-amber-800 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-amber-600" />
                    <span className="text-[8px] font-black uppercase tracking-wider mt-0.5">OFFICIAL SEAL</span>
                  </div>

                  <div className="text-right text-[11px] text-slate-600 space-y-0.5">
                    <div className="font-serif italic font-bold text-slate-800">Sabirova Zeniniso ustoz</div>
                    <div>Qarshi davlat texnika universiteti</div>
                    <div className="text-slate-400">Attestatsiya Komissiyasi</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Answer Key & Explanations Review */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Savollarning huquqiy tushuntirishlari va ashyoviy tahlili:
            </h4>

            <div className="space-y-3">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border text-xs sm:text-sm ${
                      isCorrect
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                        : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800'
                    }`}
                  >
                    <div className="flex items-start gap-2 font-bold">
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      )}
                      <span>{idx + 1}-Savol: {getLocalized(q.question, currentLang)}</span>
                    </div>

                    <p className="mt-2 text-slate-700 dark:text-slate-300">
                      <strong>To'g'ri javob:</strong> {getLocalized(q.options[q.correctIndex], currentLang)}
                    </p>

                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      {getLocalized(q.explanation, currentLang)}
                    </p>

                    {q.legalArticle && (
                      <div className="mt-2 text-[11px] text-amber-700 dark:text-amber-400 font-semibold">
                        Huquqiy manba: {q.legalArticle}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

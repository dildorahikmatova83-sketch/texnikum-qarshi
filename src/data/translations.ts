import { Language } from '../types';

export const t = {
  appName: {
    uz: 'Iqtisodiy Xavfsizlik',
    'uz-Cyrl': 'Иқтисодий Хавфсизлик',
    ru: 'Экономическая Безопасность',
    en: 'Economic Security',
  },
  appSubtitle: {
    uz: "Oliy ta'lim talabalari uchun milliy, korxona va raqamli moliyaviy barqarorlik interaktiv portali",
    'uz-Cyrl': 'Олий таълим талабалари учун миллий, корхона ва рақамли молиявий барқарорлик интерактив портали',
    ru: 'Интерактивный портал национальной, корпоративной и цифровой финансовой устойчивости для студентов вузов',
    en: 'Interactive portal of national, corporate and digital financial stability for university students',
  },
  nav: {
    overview: { uz: 'Bosh sahifa', 'uz-Cyrl': 'Бош саҳифа', ru: 'Главная', en: 'Home' },
    lectures: { uz: "Ma'ruzalar", 'uz-Cyrl': 'Маърузалар', ru: 'Лекции', en: 'Lectures' },
    registry: { uz: 'Saytlar Reyestri', 'uz-Cyrl': 'Сайтлар Реестри', ru: 'Реестр Сайтов', en: 'Sites Registry' },
    simulators: { uz: "O'yinlar & Simulyatorlar", 'uz-Cyrl': 'Ўйинлар & Симуляторлар', ru: 'Симуляторы и Игры', en: 'Simulators & Games' },
    practice: { uz: 'Testlar & Sertifikat', 'uz-Cyrl': 'Тестлар & Сертификат', ru: 'Тесты и Сертификат', en: 'Quizzes & Certificate' },
    cases: { uz: 'Keyslar & Faktlar', 'uz-Cyrl': 'Кейслар & Фактлар', ru: 'Кейсы и Факты', en: 'Cases & Facts' },
    glossary: { uz: "Glossariy & Kalkulyator", 'uz-Cyrl': 'Глоссарий & Калькулятор', ru: 'Глоссарий и Калькулятор', en: 'Glossary & Calc' },
    aiPrompts: { uz: 'AI Studio Promptlar', 'uz-Cyrl': 'AI Studio Промптлар', ru: 'Промпты AI Studio', en: 'AI Studio Prompts' },
  },
  common: {
    start: { uz: 'Boshlash', 'uz-Cyrl': 'Бошлаш', ru: 'Начать', en: 'Start' },
    continue: { uz: 'Davom etish', 'uz-Cyrl': 'Давом этиш', ru: 'Продолжить', en: 'Continue' },
    reset: { uz: 'Qayta boshlash', 'uz-Cyrl': 'Қайта бошлаш', ru: 'Сбросить', en: 'Reset' },
    check: { uz: 'Tekshirish', 'uz-Cyrl': 'Текшириш', ru: 'Проверить', en: 'Verify' },
    next: { uz: 'Keyingi', 'uz-Cyrl': 'Кейинги', ru: 'Next', en: 'Next' },
    previous: { uz: 'Oldingi', 'uz-Cyrl': 'Олдинги', ru: 'Назад', en: 'Previous' },
    readMore: { uz: "Batafsil o'qish", 'uz-Cyrl': 'Батафсил ўқиш', ru: 'Подробнее', en: 'Read More' },
    search: { uz: 'Qidirish...', 'uz-Cyrl': 'Қидириш...', ru: 'Поиск...', en: 'Search...' },
    filterAll: { uz: 'Barchasi', 'uz-Cyrl': 'Барчаси', ru: 'Все', en: 'All' },
    completed: { uz: 'Bajarildi', 'uz-Cyrl': 'Бажарилди', ru: 'Завершено', en: 'Completed' },
    points: { uz: 'ball', 'uz-Cyrl': 'балл', ru: 'баллов', en: 'pts' },
    soundOn: { uz: 'Ovoz yoqilgan', 'uz-Cyrl': 'Овоз ёқилган', ru: 'Звук включен', en: 'Sound On' },
    soundOff: { uz: "Ovoz o'chirilgan", 'uz-Cyrl': 'Овоз ўчирилган', ru: 'Звук выключен', en: 'Sound Off' },
    darkMode: { uz: 'Tungi rejim', 'uz-Cyrl': 'Тунги режим', ru: 'Тёмная тема', en: 'Dark Mode' },
    lightMode: { uz: 'Yorug‘ rejim', 'uz-Cyrl': 'Ёруғ режим', ru: 'Светлая тема', en: 'Light Mode' },
    legalBasis: { uz: 'Huquqiy asos', 'uz-Cyrl': 'Ҳуқуқий асос', ru: 'Правовая основа', en: 'Legal Basis' },
    statusForbidden: { uz: 'Taqiqlangan / Xavfli', 'uz-Cyrl': 'Тақиқланган / Хавфли', ru: 'Запрещено / Опасно', en: 'Forbidden / High Risk' },
    statusPermitted: { uz: 'Ruxsat etilgan / Rasmiy', 'uz-Cyrl': 'Рухсат этилган / Расмий', ru: 'Разрешено / Официально', en: 'Permitted / Official' },
    uzbekistanContext: { uz: 'O‘zbekiston amaliyotida', 'uz-Cyrl': 'Ўзбекистон амалиётида', ru: 'В практике Узбекистана', en: 'In Uzbekistan Practice' },
  },
  stats: {
    threatIndex: { uz: 'Iqtisodiy barqarorlik darajasi', 'uz-Cyrl': 'Иқтисодий барқарорлик даражаси', ru: 'Индекс экономической стабильности', en: 'Economic Stability Index' },
    studentRank: { uz: 'Talaba unvoni', 'uz-Cyrl': 'Талаба унвони', ru: 'Звание студента', en: 'Student Rank' },
    modulesDone: { uz: "O'zlashtirilgan darslar", 'uz-Cyrl': 'Ўзлаштирилган дарслар', ru: 'Пройдено лекций', en: 'Completed Lectures' },
    simulationsWon: { uz: "Bajarilgan simulyatsiyalar", 'uz-Cyrl': 'Бажарилган симуляциялар', ru: 'Пройдено симуляторов', en: 'Simulations Mastered' },
  },
  ranks: {
    novice: { uz: 'Kichik Tahlilchi', 'uz-Cyrl': 'Кичик Таҳлилчи', ru: 'Младший аналитик', en: 'Junior Analyst' },
    specialist: { uz: 'Iqtisodiy Xavfsizlik Mutaxassisi', 'uz-Cyrl': 'Иқтисодий Хавфсизлик Мутахассиси', ru: 'Специалист по экономической безопасности', en: 'Security Specialist' },
    expert: { uz: 'Davlat Strategi & Auditor', 'uz-Cyrl': 'Давлат Стратеги & Аудитор', ru: 'Государственный стратег и аудитор', en: 'Chief Strategist & Auditor' },
  }
};

export function getLocalized(obj: { uz: string; 'uz-Cyrl': string; ru: string; en: string }, lang: Language): string {
  return obj[lang] || obj.uz;
}

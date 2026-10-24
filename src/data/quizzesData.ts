import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'macro',
    difficulty: 'easy',
    question: {
      uz: "O'zbekiston Respublikasi 'Davlat qarzi to'g'risida'gi Qonuniga muvofiq, davlat qarzi yalpi ichki mahsulot (YaIM) ning necha foizidan oshmasligi shart?",
      'uz-Cyrl': 'Ўзбекистон Республикаси "Давлат қарзи тўғрисида"ги Қонунига кўра, давлат қарзи ЯИМнинг неча фоизидан ошмаслиги керак?',
      ru: 'Согласно Закону РУз «О государственном долге», госдолг не должен превышать скольких процентов к ВВП?',
      en: 'According to the Public Debt Act of Uzbekistan, public debt must not exceed what percentage of GDP?',
    },
    options: [
      { uz: "40%", 'uz-Cyrl': '40%', ru: '40%', en: '40%' },
      { uz: "60%", 'uz-Cyrl': '60%', ru: '60%', en: '60%' },
      { uz: "80%", 'uz-Cyrl': '80%', ru: '80%', en: '80%' },
      { uz: "100%", 'uz-Cyrl': '100%', ru: '100%', en: '100%' }
    ],
    correctIndex: 1,
    explanation: {
      uz: "To'g'ri javob: 60%. Mazkur chegara milliy iqtisodiyotning to'lov qobiliyati va moliyaviy suverenitetini xalqaro qarz inqirozlaridan kafolatli himoya qilish uchun belgilangan.",
      'uz-Cyrl': 'Тўғри жавоб: 60%. Бу кўрсаткич молиявий хавфсизликни таъминлаш учун белгиланган.',
      ru: 'Правильный ответ: 60%. Этот фискальный порог защищает финансовый суверенитет страны от дефолта.',
      en: 'Correct answer: 60%. This ceiling guarantees sovereign solvency and insulates against sovereign default contagion.',
    },
    legalArticle: "O'RQ-822 'Davlat qarzi to'g'risida'gi Qonun",
  },
  {
    id: 2,
    category: 'cyber',
    difficulty: 'easy',
    question: {
      uz: "O'zbekiston Respublikasi Jinoyat kodeksining 278-moddasiga binoan onlayn bukmeykerlik va qimor o'yinlarini tashkil etish qanday jazo chorasini nazarda tutadi?",
      'uz-Cyrl': 'Жиноят кодексининг 278-моддасига асосан онлайн қимор ва букмекерликни ташкил қилиш қандай жазоланади?',
      ru: 'Какое наказание предусматривает статья 278 УК РУз за организацию нелегальных азартных онлайн-игр и тотализаторов?',
      en: 'What maximum legal penalty does Article 278 of the Uzbek Criminal Code prescribe for organizing illegal online gambling?',
    },
    options: [
      { uz: "Faqat ogohlantirish beriladi", 'uz-Cyrl': 'Фақат огоҳлантириш берилади', ru: 'Только предупреждение', en: 'Only an administrative warning' },
      { uz: "7 yilgacha ozodlikdan mahrum qilish bilan jinoiy javobgarlik", 'uz-Cyrl': '7 йилгача озодликдан маҳрум қилиш', ru: 'Уголовная ответственность с лишением свободы до 7 лет', en: 'Criminal penalty with imprisonment up to 7 years' },
      { uz: "Faqat bir oylik maosh miqdorida jarima", 'uz-Cyrl': 'Фақат бир ойлик маош жарима', ru: 'Штраф в размере одной зарплаты', en: 'A fine of one month salary' },
      { uz: "Jinoiy jazo mavjud emas", 'uz-Cyrl': 'Жиноий жазо мавжуд эмас', ru: 'Уголовного наказания нет', en: 'No criminal sanctions exist' }
    ],
    correctIndex: 1,
    explanation: {
      uz: "JK 278-moddasiga ko'ra, qimor va tavakkalchilikka asoslangan boshqa o'yinlarni qonunga xilof ravishda tashkil etish yoki o'tkazish og'ir jinoyat bo'lib, 7 yilgacha ozodlikdan mahrum qilish jazosi tayinlanadi.",
      'uz-Cyrl': 'ЖК 278-моддасига кўра 7 йилгача озодликдан маҳрум қилиш жазоси белгиланган.',
      ru: 'Статья 278 УК РУз относит организацию азартных игр к тяжким преступлениям с тюремным сроком до 7 лет.',
      en: 'Article 278 classifies organizing gambling rings as a serious felony carrying up to 7 years of imprisonment.',
    },
    legalArticle: "O'zbekiston Respublikasi JK 278-moddasi",
  },
  {
    id: 3,
    category: 'cyber',
    difficulty: 'medium',
    question: {
      uz: "O'zbekistonda kriptovalyutalarni savdo-sotiqda tovar yoki xizmatlar uchun to'lov vositasi sifatida qo'llash qonuniy jihatdan qanday baholanadi?",
      'uz-Cyrl': 'Ўзбекистонда криптовалютани тўлов воситаси сифатида ишлатиш қонунан қандай баҳоланади?',
      ru: 'Как закон оценивает использование криптовалюты в качестве платежного средства за товары и услуги в Узбекистане?',
      en: 'How does Uzbek law govern the use of cryptocurrencies as a payment tender for consumer goods and services?',
    },
    options: [
      { uz: "Qat'iy taqiqlanadi va javobgarlikka sabab bo'ladi", 'uz-Cyrl': 'Қатъий тақиқланади ва жавобгарликка сабаб бўлади', ru: 'Строго запрещено и влечет юридическую ответственность', en: 'Strictly prohibited and subject to legal prosecution' },
      { uz: "Barcha do'konlarda to'liq erkin ruxsat etilgan", 'uz-Cyrl': 'Барча дўконларда эркин рухсат этилган', ru: 'Разрешено везде без ограничений', en: 'Freely permitted across all retail stores' },
      { uz: "Faqat chet el fuqarolari foydalanishi mumkin", 'uz-Cyrl': 'Фақат чет элликларга рухсат', ru: 'Только для нерезидентов', en: 'Only for foreign non-residents' },
      { uz: "Faqat umumiy ovqatlanish korxonalarida ruxsat berilgan", 'uz-Cyrl': 'Фақат ошхоналарда рухсат', ru: 'Только в сфере общепита', en: 'Permitted solely in restaurants' }
    ],
    correctIndex: 0,
    explanation: {
      uz: "O'zbekiston qonunchiligiga binoan, kripto-aktivlar faqat NAPP litsenziyasiga ega birjalarda investitsiya aktivi sifatida aylanadi, ularni to'lov vositasi sifatida ishlatish qat'iyan man etiladi.",
      'uz-Cyrl': 'Криптовалюталар тўлов воситаси сифатида ишлатилиши қатъий тақиқланган.',
      ru: 'Крипто-активы не могут служить средством платежа на территории РУз; закон разрешает лишь лицензированные инвестиционные операции.',
      en: 'Under NAPP regulations, crypto assets are strictly prohibited from serving as medium of exchange or retail payment currency.',
    },
    legalArticle: "O'RQ-837 va NAPP Nizomi",
  },
  {
    id: 4,
    category: 'enterprise',
    difficulty: 'medium',
    question: {
      uz: "Korxonada xaridlarni amalga oshirishda korrupsiya va firibgarlikning oldini olish uchun xalqaro qaysi boshqaruv standarti joriy etiladi?",
      'uz-Cyrl': 'Корхонада коррупцияга қарши халқаро қайси стандарт жорий этилади?',
      ru: 'Какой международный стандарт системы менеджмента внедряется для противодействия взяточничеству и коррупции на предприятиях?',
      en: 'Which international management system standard is adopted by enterprises to prevent bribery and corporate corruption?',
    },
    options: [
      { uz: "ISO 9001", 'uz-Cyrl': 'ISO 9001', ru: 'ISO 9001', en: 'ISO 9001' },
      { uz: "ISO 37001 (Antikorrupsiya komplayens)", 'uz-Cyrl': 'ISO 37001 (Антикоррупция комплаенс)', ru: 'ISO 37001 (Антикоррупционный комплаенс)', en: 'ISO 37001 (Anti-Bribery Management Systems)' },
      { uz: "ISO 14001", 'uz-Cyrl': 'ISO 14001', ru: 'ISO 14001', en: 'ISO 14001' },
      { uz: "ISO 22000", 'uz-Cyrl': 'ISO 22000', ru: 'ISO 22000', en: 'ISO 22000' }
    ],
    correctIndex: 1,
    explanation: {
      uz: "ISO 37001 — xalqaro antikorrupsiya boshqaruv tizimi bo'lib, xaridlar shaffofligi, xodimlarni tekshirish va manfaatlar to'qnashuvini bartaraf etishni ta'minlaydi.",
      'uz-Cyrl': 'ISO 37001 — коррупцияга қарши курашиш тизимининг халқаро стандартидир.',
      ru: 'Стандарт ISO 37001 устанавливает требования для создания, внедрения и аудита антикоррупционной системы на предприятии.',
      en: 'ISO 37001 specifies international requirements for instituting an organizational anti-bribery compliance framework.',
    },
    legalArticle: "ISO 37001 xalqaro standarti va O'zbekiston antikorrupsiya milliy strategiyasi",
  },
  {
    id: 5,
    category: 'macro',
    difficulty: 'hard',
    question: {
      uz: "Iqtisodiy xavfsizlik nazariyasida mamlakatning rasmiy oltin-valyuta zaxiralari kamida necha oylik tovarlar va xizmatlar importini qoplashga yetishi 'xavfsiz me'yor' (benchmark) hisoblanadi?",
      'uz-Cyrl': 'Олтин-валюта захиралари камида неча ойлик импортни қоплаши хавфсиз меъёр ҳисобланади?',
      ru: 'Согласно международным нормам экономической безопасности, золотовалютные резервы должны покрывать импорт товаров и услуг минимум на сколько месяцев?',
      en: 'In macro-prudential economics, official forex reserves should cover at minimum how many months of imports to meet safety adequacy standards?',
    },
    options: [
      { uz: "Kamida 1 oy", 'uz-Cyrl': 'Камида 1 ой', ru: 'Минимум 1 месяц', en: 'At least 1 month' },
      { uz: "Kamida 3 oy", 'uz-Cyrl': 'Камида 3 ой', ru: 'Минимум 3 месяца', en: 'At least 3 months' },
      { uz: "Kamida 24 oy", 'uz-Cyrl': 'Камида 24 ой', ru: 'Минимум 24 месяца', en: 'At least 24 months' },
      { uz: "Zaxira importga bog'liq emas", 'uz-Cyrl': 'Захира импортга боғлиқ эмас', ru: 'Резервы не привязаны к импорту', en: 'Reserves are not correlated with imports' }
    ],
    correctIndex: 1,
    explanation: {
      uz: "Xalqaro Valyuta Jamg'armasi (XVJ) mezoniga ko'ra, xavfsizlik chegarasi kamida 3 oylik import hisoblanadi. O'zbekiston Respublikasi esa bu ko'rsatkichni 12 oydan ortiq darajada mustahkam ushlab kelmoqda.",
      'uz-Cyrl': 'Халқаро меъёр камида 3 ой. Ўзбекистонда бу кўрсаткич 12 ойдан ортиқни ташкил этади.',
      ru: 'Международный критерий МВФ — покрытие не менее 3 месяцев импорта. Узбекистан удерживает резервы на уровне свыше 12 месяцев.',
      en: 'The IMF reserve adequacy guideline benchmarks at least 3 months of prospective imports. Uzbekistan maintains over 12 months coverage.',
    },
    legalArticle: "Xalqaro Valyuta Jamg'armasi (IMF) Adequacy of Reserves mezonlari",
  },
  {
    id: 6,
    category: 'legal',
    difficulty: 'easy',
    question: {
      uz: "O'zbekistonda yashirin iqtisodiyotga qarshi kurashish va xaridlarda kassa chekini talab qilishni rag'batlantirish uchun qanday dastur yo'lga qo'yilgan?",
      'uz-Cyrl': 'Ўзбекистонда чек талаб қилишни рағбатлантириш учун қандай дастур йўлга қўйилган?',
      ru: 'Какая государственная программа стимулирует требование фискальных чеков для борьбы с теневой экономикой в Узбекистане?',
      en: 'Which state incentive program encourages consumers to demand fiscal cash receipts to suppress the shadow economy?',
    },
    options: [
      { uz: "Soliq mobil ilovasi orqali 1% keshbek qaytarish tizimi", 'uz-Cyrl': 'Солиқ иловаси орқали 1% кэшбэк қайтариш', ru: 'Система возврата 1% кэшбэка через мобильное приложение Soliq', en: '1% consumer cashback program via the official Soliq app' },
      { uz: "Har bir chek uchun lotereya chiptasi berish", 'uz-Cyrl': 'Лотерея чиптаси бериш', ru: 'Выдача лотерейных билетов', en: 'Distributing lottery tickets for receipts' },
      { uz: "Naqd pul ishlatishni butunlay jinoiy javobgarlikka tortish", 'uz-Cyrl': 'Нақд пулни тақиқлаш', ru: 'Полный запрет наличных денег', en: 'Outlawing paper banknotes entirely' },
      { uz: "Xaridorlarga bepul mahsulot berish", 'uz-Cyrl': 'Текин маҳсулот бериш', ru: 'Раздача бесплатных товаров', en: 'Distributing free grocery items' }
    ],
    correctIndex: 0,
    explanation: {
      uz: "O'zbekiston Respublikasi Prezidenti qaroriga ko'ra, fuqarolar chakana savdoda chekni 'Soliq' ilovasida ro'yxatdan o'tkazib, 1% keshbek oladi. Bu orqali milliardlab so'mlik aylanma shaffoflashmoqda.",
      'uz-Cyrl': 'Чекни сканер қилиб 1% кэшбэк олиш тизими яширин иқтисодиётни қисқартиради.',
      ru: 'Возврат 1% от суммы чека гражданам через QR-сканирование в Soliq мотивирует потребителей требовать фискализацию расчетов.',
      en: 'QR receipt scanning returning 1% cashback to retail consumers institutionalizes civic oversight against unreported shadow turnovers.',
    },
    legalArticle: "O'zbekiston Respublikasi Prezidentining PQ-5252-son Qarori",
  }
];

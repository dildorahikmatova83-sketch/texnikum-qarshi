import { EducationalPrompt } from '../types';

export const AI_PROMPTS_DATA: EducationalPrompt[] = [
  {
    id: 'prompt-case-analyzer',
    title: {
      uz: "Real Iqtisodiy Xavf Tahlilchisi va Keys-Stadi Generatori",
      'uz-Cyrl': 'Реал Иқтисодий Хавф Таҳлилчиси ва Кейс-Стади Генератори',
      ru: 'Анализатор реальных экономических угроз и кейс-стади',
      en: 'Real-World Economic Risk & Case Study Analyzer',
    },
    targetRole: 'student',
    purpose: {
      uz: "O'zbekiston iqtisodiyotidagi har qanday tarmoq yoki korxona holatini kiritib, uning iqtisodiy xavfsizlik zaifliklarini chuqur tahlil qildiruvchi Sokratik instruksiya.",
      'uz-Cyrl': 'Ўзбекистон иқтисодиётидаги тармоқларни таҳлил қилувчи кўрсатма.',
      ru: 'Инструкция для детального стресс-тестирования любого сектора экономики Узбекистана на предмет уязвимостей.',
      en: 'Structured Socratic prompt engineered to stress-test any industry sector in Uzbekistan for economic vulnerabilities.',
    },
    sampleVariables: [
      { name: 'tarmoq', label: { uz: 'Tahlil qilinadigan soha', 'uz-Cyrl': 'Таҳлил соҳаси', ru: 'Сектор анализа', en: 'Target Sector' }, defaultVal: 'Agrosanoat va bug‘doy ta’minoti' },
      { name: 'tahdid', label: { uz: 'Kutilayotgan tashqi tahdid', 'uz-Cyrl': 'Ташқи таҳдид', ru: 'Внешняя угроза', en: 'External Shock' }, defaultVal: 'Mintaqaviy qurg‘oqchilik va import qilinadigan o‘g‘it narxlarining 40% ga oshishi' }
    ],
    promptTextUz: `Sen O'zbekiston Respublikasining Iqtisodiy xavfsizlik va strategik tahlil bo'yicha bosh maslahatchisi va akademik professorsan.

Vazifang: Talabalarga chuqur tahliliy va tanqidiy fikrlashni o'rgatish uchun quyidagi parametrlarga asoslangan holda professional iqtisodiy tahlil (Stress-test) tayyorla:

Tahlil sohasi: {{tarmoq}}
Birlamchi tahdid: {{tahdid}}

Quyidagi qat'iy reja asosida tahlilni amalga oshir:
1. TIZIMLI XAVF DIAGNOSTIKASI:
   - Ushbu tahdid sohaning o'zini o'zi ta'minlash ko'rsatkichlariga qanday zarba beradi?
   - Inflyatsiya, ish o'rinlari va aholining xarid qobiliyatiga multiplikativ ta'sirini bahola.
2. CHORALAR VA REGULYATSIYA (O'zbekiston qonunchiligi asosida):
   - Qaysi qonunlar va normativ hujjatlar (Soliq kodeksi, Bojxona tariflari, Davlat zaxiralari to'g'risidagi qonunlar) qo'llanilishi lozim?
   - Davlat byudjetidan sarflanmasdan qanday bozor mexanizmlarini (subsidiyalar, boj imtiyozlari, diversifikatsiya) ishga tushirish mumkin?
3. TALABA UCHUN 3 TA DILEMMA (Bahsli savollar):
   - O'quvchini ikkilanishga soluvchi, bir vaqtning o'zida ham ijobiy ham salbiy oqibatga ega bo'lgan 3 ta murakkab strategik tanlov savolini tuz.

Javobni aniq, akademik, ortiqcha lutf-mulozamatsiz, raqamlar va professional iqtisodiy terminologiya (AS-AD modeli, elastiklik, zaxiralar me'yori) bilan taqdim et.`,
    promptTextRu: `Вы — ведущий профессор и советник по экономической безопасности Республики Узбекистан. Подготовьте глубокий стресс-тест для студентов по сектору: {{tarmoq}} при угрозе: {{tahdid}} с разбором мультипликативного эффекта, правовой основы РУз и 3 дискуссионных дилемм.`,
    promptTextEn: `You are the Chief Economic Security Strategist and University Professor of Uzbekistan. Formulate a rigorous stress-test simulation on sector: {{tarmoq}} facing shock: {{tahdid}} with macro indicators and 3 provocative policy dilemmas.`
  },
  {
    id: 'prompt-teacher-lesson',
    title: {
      uz: "O'qituvchilar uchun: Interaktiv Seminar va Sokratik Bahs Ssenariysi",
      'uz-Cyrl': 'Ўқитувчилар учун: Интерфаол Семинар ва Баҳс Сценарийси',
      ru: 'Для преподавателей: Сценарий интерактивного семинара и дебатов',
      en: 'For Instructors: Interactive Seminar & Socratic Debate Designer',
    },
    targetRole: 'teacher',
    purpose: {
      uz: "Auditoriyadagi talabalarni 2 guruhga (Markaziy Bank / Iqtisodiyot vazirligi) bo'lib, jonli va qizg'in ilmiy bahs tashkil qilish uchun to'liq dars ssenariysi.",
      'uz-Cyrl': 'Талабалар ўртасида баҳс ташкил қилиш учун дарс сценарийси.',
      ru: 'Готовый план 80-минутного интерактивного занятия с ролевой игрой «Регулятор vs Бизнес».',
      en: 'Complete 80-minute pedagogical lesson plan featuring a high-stakes simulation debate between state regulators and market leaders.',
    },
    sampleVariables: [
      { name: 'mavzu', label: { uz: 'Dars mavzusi', 'uz-Cyrl': 'Дарс мавзуси', ru: 'Тема урока', en: 'Lesson Topic' }, defaultVal: 'Yashirin iqtisodiyotni qisqartirish: Qat’iy jarimalarmi yoki soliq yengilliklarimi?' },
      { name: 'davomiylik', label: { uz: 'Dars vaqti', 'uz-Cyrl': 'Дарс вақти', ru: 'Время урока', en: 'Duration' }, defaultVal: '80 daqiqa' }
    ],
    promptTextUz: `Sen oliy ta'lim pedagogikasi va iqtisodiyot metodikasi bo'yicha xalqaro darajadagi ekspertsan.

Universitet talabalari uchun "Iqtisodiy xavfsizlik" fanidan quyidagi mavzu bo'yicha 80 daqiqalik yuqori qiziqish uyg'otuvchi interaktiv dars ssenariysini ishlab chiq:

Mavzu: {{mavzu}}
Auditoriya: 2-3 kurs iqtisodiyot va moliya fakulteti talabalari.

Ssenariy quyidagi bloklarni o'z ichiga olsin:
1. "MUZ YORISH" (Icebreaker) - 10 daqiqa:
   - Talabalar fikrini tortuvchi provokatsion, real hayotiy paradoks (masalan, kassa cheki olmaslik orqali fuqaro qanday qilib o'z shahrining yo'llari ta'mirlanmasligiga sababchi bo'ladi?).
2. GURUHLAR ROLLI O'YINI - 40 daqiqa:
   - 1-Guruh: Davlat Soliq Qo'mitasi va Xavfsizlik idoralari (Qat'iy nazorat, raqamli monitoring, jazo choralari tarafdori).
   - 2-Guruh: Xususiy sektor va Tadbirkorlar palatasi (Soliq yukini kamaytirish, erkinlik, tekshiruvlarni to'xtatish tarafdori).
   - Har bir guruh uchun 3 tadan kuchli argument va O'zbekiston qonunchiligidan ashyoviy dalillar tayyorla.
3. MODERATOR UCHUN KUTILMAGAN O'ZGARISH (Black Swan Event) - 15 daqiqa:
   - Bahs qizigan paytda o'qituvchi e'lon qiladigan favqulodda yangilik (masalan: global bozor inqirozi yoki valyuta tebranishi).
4. YAKUNIY XULOSA VA BAHOLASH MEZONI - 15 daqiqa:
   - Qaysi mezonlar bo'yicha talabalarning tahliliy savodxonligi baholanadi?

Javobni o'qituvchi to'g'ridan-to'g'ri darsga olib kira oladigan qulay formatda taqdim et.`,
    promptTextRu: `Создайте 80-минутный интерактивный план университетского семинара по теме: {{mavzu}} с дебатами двух команд и кризисным сценарием.`,
    promptTextEn: `Draft a comprehensive 80-minute interactive university syllabus guide on topic: {{mavzu}} with structured roleplay debates and a black-swan crisis twist.`
  },
  {
    id: 'prompt-fraud-scanner',
    title: {
      uz: "Shubhali Resurs va Firibgarlik Sxemasi Ekspertiza Prompti",
      'uz-Cyrl': 'Шубҳали Ресурс ва Фирибгарлик Экспертизаси Промпти',
      ru: 'Экспертиза подозрительного интернет-ресурса и финсхем',
      en: 'Forensic Suspicious Resource & Scam Modus Operandi Prompt',
    },
    targetRole: 'researcher',
    purpose: {
      uz: "Ixtiyoriy shubhali reklama matni, havola yoki investitsiya taklifini kiritib, uning O'zbekiston qonunlariga muvofiq qanday jinoyat ekanligini fosh etish.",
      'uz-Cyrl': 'Шубҳали ҳавола ва рекламаларни қонуний таҳлил қилиш.',
      ru: 'Юридический и криминалистический анализ подозрительных финансовых предложений по статьям УК РУз.',
      en: 'Forensic audit of deceptive investment solicitations cross-referencing criminal statutes of Uzbekistan.',
    },
    sampleVariables: [
      { name: 'taklif_matni', label: { uz: 'Shubhali xabar yoki havola matni', 'uz-Cyrl': 'Шубҳали хабар матни', ru: 'Текст предложения', en: 'Offer Text' }, defaultVal: 'Telegramda: "Prezident jamg‘armasi nomidan yordam! Havola orqali kiring va kartangizga 1.2 mln so‘m oling. Faqat bugun!"' }
    ],
    promptTextUz: `Sen Kiber-moliyaviy xavfsizlik va adliya ekspertisan.

Quyidagi shubhali taklif matnini tahlil qil va uning xavfsizlik ekspertizasini tuz:

Tahlil qilinadigan taklif:
"{{taklif_matni}}"

Tahlil strukturasi:
1. PSIXOLOGIK TUZOQ VA IJTIMOIY MUHANDISLIK:
   - Matnda qurbonni shoshiltirish ("Faqat bugun!"), ochko'zlik yoki ishonch uyg'otish ("Prezident jamg'armasi") usullari qanday ishlatilgan?
2. KIBER-TEXNIK XATARLAR:
   - Soxta domen qanday tuzilgan?
   - Foydalanuvchining qaysi maxfiy ma'lumotlari (CVV, SMS-kod, sessiya tokeni) o'g'irlanishi ko'zda tutilgan?
3. O'ZBEKISTON RESPUBLIKASI JINOYAT QONUNCHILIGI BO'YICHA MALAKALASH:
   - O'zbekiston Respublikasi JKning qaysi moddalariga tushadi (masalan, JK 168-modda firibgarlik, JK 278-modda noqonuniy qimor, JK 188-1-modda piramida)?
   - Qanday jazo belgilangan?
4. FUQARO UCHUN QAT'IY PROTOKOL (Nima qilish kerak?):
   - Qadamma-qadam 3 ta harakat.

Natijani o'quvchilar darhol eslab qoladigan tushunarli tilda tuzib ber.`,
    promptTextRu: `Проведите криминалистический анализ подозрительного предложения: "{{taklif_matni}}" по статьям УК РУз и опишите алгоритм защиты.`,
    promptTextEn: `Perform a forensic digital hygiene analysis on the fraudulent solicitation: "{{taklif_matni}}" specifying relevant criminal statutes of Uzbekistan and counter-measures.`
  }
];

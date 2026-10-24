import { Lecture } from '../types';

export const LECTURES_DATA: Lecture[] = [
  {
    id: 'lec-1',
    number: 1,
    title: {
      uz: 'Iqtisodiy xavfsizlik asoslari va milliy barqarorlik',
      'uz-Cyrl': 'Иқтисодий хавфсизлик асослари ва миллий барқарорлик',
      ru: 'Основы экономической безопасности и национальная стабильность',
      en: 'Foundations of Economic Security and National Stability',
    },
    shortDesc: {
      uz: "Iqtisodiy xavfsizlik tushunchasi, ob'ektlari, sub'ektlari va davlat suverenitetini himoyalashning chegara ko'rsatkichlari (indikatorlari).",
      'uz-Cyrl': 'Иқтисодий хавфсизлик тушунчаси, объектлари, субъектлари ва давлат суверенитетини ҳимоялашнинг чегара кўрсаткичлари (индикаторлари).',
      ru: 'Понятие, объекты, субъекты и пороговые индикаторы экономической безопасности в защите суверенитета государства.',
      en: 'Concepts, entities, subjects, and threshold safety indicators in safeguarding sovereign state welfare.',
    },
    category: 'macro',
    estimatedMinutes: 12,
    slides: [
      {
        id: 1,
        title: {
          uz: "Iqtisodiy xavfsizlik nima?",
          'uz-Cyrl': 'Иқтисодий хавфсизлик нима?',
          ru: 'Что такое экономическая безопасность?',
          en: 'What is Economic Security?',
        },
        content: {
          uz: "Iqtisodiy xavfsizlik — bu milliy iqtisodiyotning tashqi va ichki tahdidlarga qaramay, barqaror o'sishi, aholi turmush darajasini kafolatlashi, davlat mustaqilligi va strategik resurslarini himoya qila olish holatidir.",
          'uz-Cyrl': 'Иқтисодий хавфсизлик — бу миллий иқтисодиётнинг ташқи ва ички таҳдидларга қарамай, барқарор ўсиши, аҳоли турмуш даражасини кафолатлаши, давлат мустақиллиги ва стратегик ресурсларини ҳимоя қила олиш ҳолатидир.',
          ru: 'Экономическая безопасность — это состояние защищенности национальной экономики от внутренних и внешних угроз, обеспечивающее устойчивый рост и независимость государства.',
          en: 'Economic security is the condition where a national economy is shielded from internal and external threats, ensuring steady growth, citizen welfare, and sovereign autonomy.',
        },
        highlight: {
          uz: "Asosiy tamoyil: iqtisodiy qaramlikka tushib qolmaslik va har qanday sharoitda mamlakatning hayotiy ehtiyojlarini ta'minlash.",
          'uz-Cyrl': 'Асосий тамойил: иқтисодий қарамликка тушиб қолмаслик ва ҳар қандай шароитда мамлакатнинг ҳаётий эҳтиёжларини таъминлаш.',
          ru: 'Главный принцип: недопущение экономической зависимости и гарантированное жизнеобеспечение страны.',
          en: 'Core principle: avoiding economic subservience and ensuring continuous vital supply of the country.',
        },
        bulletPoints: [
          {
            uz: "Moddiy asos: Oziq-ovqat, energiya va suv xavfsizligi.",
            'uz-Cyrl': 'Моддий асос: Озиқ-овқат, энергия ва сув хавфсизлиги.',
            ru: 'Материальная основа: Продовольственная, энергетическая и водная безопасность.',
            en: 'Material baseline: Food, energy, and water security.',
          },
          {
            uz: "Moliyaviy asos: Mustaqil pul-kredit tizimi va yetarli oltin-valyuta zaxiralari.",
            'uz-Cyrl': 'Молиявий асос: Мустақил пул-кредит тизими ва етарли олтин-валюта захиралари.',
            ru: 'Финансовая основа: Независимая денежная система и достаточные золотовалютные резервы.',
            en: 'Financial baseline: Sovereign monetary system and sufficient gold-forex reserves.',
          },
          {
            uz: "Huquqiy asos: Mulk daxlsizligi va shaffof qonunchilik.",
            'uz-Cyrl': 'Ҳуқуқий асос: Мулк дахлсизлиги ва шаффоф қонунчилик.',
            ru: 'Правовая основа: Неприкосновенность собственности и прозрачность законов.',
            en: 'Legal baseline: Inviolability of property and transparent rule of law.',
          }
        ],
        lawReference: "O'zbekiston Respublikasi Konstitutsiyasi 65-moddasi (Mulk daxlsizligi va bozor munosabatlari kafolati).",
        statOrFact: {
          uz: "O'zbekistonda 2026-yil holatiga ko'ra oltin-valyuta zaxiralari $35+ milliarddan oshiq bo'lib, 12 oylik importni qoplashga yetarli (xalqaro me'yor kamida 3 oy).",
          'uz-Cyrl': 'Ўзбекистонда 2026-йил ҳолатига кўра олтин-валюта захиралари $35+ миллиарддан ошиқ бўлиб, 12 ойлик импортни қоплашга етарли (халқаро меъёр камида 3 ой).',
          ru: 'В Узбекистане золотовалютные резервы превышают $35 млрд, покрывая свыше 12 месяцев импорта при международном нормативе в 3 месяца.',
          en: 'Uzbekistan holds over $35 billion in gold-forex reserves, covering 12+ months of imports (the international safe threshold is at least 3 months).',
        }
      },
      {
        id: 2,
        title: {
          uz: "Iqtisodiy xavfsizlikning chegara ko'rsatkichlari (Porogovye znacheniya)",
          'uz-Cyrl': 'Иқтисодий хавфсизликнинг чегара кўрсаткичлари (Пороговые значения)',
          ru: 'Пороговые индикаторы экономической безопасности',
          en: 'Threshold Safety Indicators (Critical Bounds)',
        },
        content: {
          uz: "Iqtisodiy xavfsizlik indikatorlari davlat barqarorligini baholash uchun xizmat qiluvchi chegara qiymatlardir. Agar ushbu ko'rsatkichlar me'yordan chiqib ketsa, davlat tizimli inqirozga yuz tutadi.",
          'uz-Cyrl': 'Иқтисодий хавфсизлик индикаторлари давлат барқарорлигини баҳолаш учун хизмат қилувчи чегара қийматлардир. Агар ушбу кўрсаткичлар меъёрдан чиқиб кетса, давлат тизимли инқирозга юз тутади.',
          ru: 'Индикаторы экономической безопасности — предельные значения, выход за рамки которых сигнализирует о системном кризисе и угрозе суверенитету.',
          en: 'Threshold indicators are critical quantitative boundaries beyond which national stability faces systemic structural failure.',
        },
        bulletPoints: [
          {
            uz: "Davlat tashqi qarzi: YaIMning 60 foizidan oshmasligi shart (O'zbekiston Respublikasi Qonunchiligida belgilangan qat'iy cheklov).",
            'uz-Cyrl': 'Давлат ташқи қарзи: ЯИМнинг 60 фоизидан ошмаслиги шарт (Ўзбекистон Республикаси Қонунчилигида белгиланган қатъий чеклов).',
            ru: 'Государственный долг: не более 60% к ВВП (законодательное ограничение в Республике Узбекистан).',
            en: 'Public debt: capped at 60% of GDP by Uzbekistan fiscal legislation.',
          },
          {
            uz: "Yillik inflyatsiya: 5-8% maqsadli target koridorida ushlab turilishi lozim.",
            'uz-Cyrl': 'Йиллик инфляция: 5-8% мақсадли таргетида ушлаб турилиши лозим.',
            ru: 'Годовая инфляция: целевой ориентир 5-8%.',
            en: 'Annual inflation target corridor: maintained within 5-8%.',
          },
          {
            uz: "Yashirin iqtisodiyot ulushi: YaIMning 15-20% dan oshmasligi kerak (ushbu darajadan oshganda byudjet daromadlari xavf ostida qoladi).",
            'uz-Cyrl': 'Яширин иқтисодиёт улуши: ЯИМнинг 15-20% дан ошмаслиги керак.',
            ru: 'Доля теневой экономики: безопасный порог не выше 15-20% к ВВП.',
            en: 'Shadow economy share: must stay below 15-20% of GDP.',
          }
        ],
        lawReference: "O'zbekiston Respublikasi 'Davlat qarzi to'g'risida'gi Qonuni (O'RQ-822)."
      }
    ],
    keyTerms: [
      {
        term: { uz: 'Iqtisodiy suverenitet', 'uz-Cyrl': 'Иқтисодий суверенитет', ru: 'Экономический суверенитет', en: 'Economic Sovereignty' },
        definition: { uz: "Davlatning o'z milliy boyliklarini erkin boshqarish va mustaqil iqtisodiy siyosat olib borish huquqi.", 'uz-Cyrl': 'Давлатнинг ўз миллий бойликларини эркин бошқариш ва мустақил иқтисодий сиёсат олиб бориш ҳуқуқи.', ru: 'Право государства самостоятельно распоряжаться национальными ресурсами.', en: 'The state right to independently govern national assets and economic choices.' }
      },
      {
        term: { uz: 'Chegara ko‘rsatkichi', 'uz-Cyrl': 'Чегара кўрсаткичи', ru: 'Пороговый индикатор', en: 'Threshold Indicator' },
        definition: { uz: "Buzilishi iqtisodiy tizimning buzilishi yoki falokatga olib keluvchi kritik me'yor.", 'uz-Cyrl': 'Бузилиши иқтисодий тизимнинг бузилиши ёки фалокатга олиб келувчи критик меъёр.', ru: 'Критическая граница, превышение которой ведёт к системному кризису.', en: 'A critical metric limit whose breach triggers economic destabilization.' }
      }
    ],
    checkpoint: {
      question: {
        uz: "O'zbekiston qonunchiligiga ko'ra, davlat qarzi miqdori YaIMning necha foizidan oshmasligi qat'iy belgilangan?",
        'uz-Cyrl': 'Ўзбекистон қонунчилигига кўра, давлат қарзи миқдори ЯИМнинг неча фоизидан ошмаслиги қатъий белгиланган?',
        ru: 'Согласно законодательству Узбекистана, государственный долг не должен превышать какого процента к ВВП?',
        en: 'According to Uzbekistan fiscal legislation, public debt is capped at what percentage of GDP?',
      },
      options: [
        { uz: "30 foiz", 'uz-Cyrl': '30 фоиз', ru: '30 процентов', en: '30 percent' },
        { uz: "60 foiz", 'uz-Cyrl': '60 фоиз', ru: '60 процентов', en: '60 percent' },
        { uz: "85 foiz", 'uz-Cyrl': '85 фоиз', ru: '85 процентов', en: '85 percent' },
        { uz: "Cheklov belgilanmagan", 'uz-Cyrl': 'Чеклов белгиланмаган', ru: 'Ограничений нет', en: 'No limitation' }
      ],
      correctIndex: 1,
      explanation: {
        uz: "To'g'ri! 'Davlat qarzi to'g'risida'gi qonunga ko'ra, davlat qarzining YaIMga nisbatan eng yuqori miqdori 60% etib qat'iy belgilangan.",
        'uz-Cyrl': 'Тўғри! "Давлат қарзи тўғрисида"ги қонунга кўра, давлат қарзининг ЯИМга нисбатан энг юқори миқдори 60% этиб қатъий белгиланган.',
        ru: 'Верно! Закон «О государственном долге» строго ограничивает максимальный объем госдолга на уровне 60% к ВВП.',
        en: 'Correct! Under the Public Debt Act of Uzbekistan, public debt must not exceed 60% of GDP to guarantee fiscal solvency.',
      }
    }
  },
  {
    id: 'lec-2',
    number: 2,
    title: {
      uz: 'Makroiqtisodiy xavfsizlik va moliya-kredit barqarorligi',
      'uz-Cyrl': 'Макроиқтисодий хавфсизлик ва молия-кредит барқарорлиги',
      ru: 'Макроэкономическая безопасность и финансово-кредитная стабильность',
      en: 'Macroeconomic Security and Financial Stability',
    },
    shortDesc: {
      uz: "Pul-kredit siyosati, inflyatsiya nazorati, de-dollarizatsiya jarayoni va milliy valyuta qadrini saqlash mexanizmlari.",
      'uz-Cyrl': 'Пул-кредит сиёсати, инфляция назорати, де-долларизация жараёни ва миллий валюта қадрини сақлаш механизмлари.',
      ru: 'Денежно-кредитная политика, таргетирование инфляции, дедолларизация и сохранение покупательной способности сума.',
      en: 'Monetary policy, inflation targeting, dedollarization, and purchasing power preservation of the national currency.',
    },
    category: 'macro',
    estimatedMinutes: 14,
    slides: [
      {
        id: 1,
        title: {
          uz: "Inflyatsiya va aholi xarid qobiliyati xavfsizligi",
          'uz-Cyrl': 'Инфляция ва аҳоли харид қобилияти хавфсизлиги',
          ru: 'Инфляция и защита покупательной способности',
          en: 'Inflation Control and Purchasing Power Protection',
        },
        content: {
          uz: "Yuqori inflyatsiya pulning qadrsizlanishiga, aholining real daromadlari pasayishiga va uzoq muddatli investitsiyalarning to'xtashiga olib keladi. O'zbekiston Markaziy banki inflyatsiyani jilovlash uchun 'inflyatsion targetlash' rejimini qo'llaydi.",
          'uz-Cyrl': 'Юқори инфляция пулнинг қадрсизланишига, аҳолининг реал даромадлари пасайишига ва узоқ муддатли инвестицияларнинг тўхташига олиб келади.',
          ru: 'Высокая инфляция обесценивает сбережения, снижает доходы населения и блокирует долгосрочные инвестиции. ЦБ Узбекистана применяет режим инфляционного таргетирования.',
          en: 'High inflation erodes purchasing power, reduces household real income, and impedes long-term investments. Central Bank of Uzbekistan implements inflation targeting.',
        },
        bulletPoints: [
          {
            uz: "Asosiy stavka: Markaziy bank iqtisodiyotdagi pul massasini boshqarishda asosiy foiz stavkasidan foydalanadi.",
            'uz-Cyrl': 'Асосий ставка: Марказий банк пул массасини бошқаришда асосий фоиз ставкасидан фойдаланади.',
            ru: 'Основная ставка: регулирование денежной массы и процентных ставок в экономике.',
            en: 'Policy rate: manages money supply and borrowing costs.',
          },
          {
            uz: "De-dollarizatsiya: Narxlar va shartnomalarni milliy valyuta — so'mda ifodalash va bank omonatlarini so'mga ko'chirish rag'batlantiriladi.",
            'uz-Cyrl': 'Де-долларизация: Нархлар ва шартномаларни сўмда ифодалаш ва омонатларни рағбатлантириш.',
            ru: 'Дедолларизация: фиксация цен в сумах и стимулирование сумовых депозитов.',
            en: 'Dedollarization: legally enforcing transactions in Uzbek Soum and incentivizing local currency deposits.',
          }
        ],
        lawReference: "O'zbekiston Respublikasining 'Valyutani tartibga solish to'g'risida'gi Qonuni.",
      }
    ],
    keyTerms: [
      {
        term: { uz: 'Inflyatsion targetlash', 'uz-Cyrl': 'Инфляцион таргетлаш', ru: 'Таргетирование инфляции', en: 'Inflation Targeting' },
        definition: { uz: "Markaziy bank tomonidan inflyatsiyaning aniq maqsadli darajasini e'lon qilish va unga erishish strategiyasi.", 'uz-Cyrl': 'Марказий банк томонидан инфляциянинг аниқ мақсадли даражасини эълон қилиш ва унга эришиш стратегияси.', ru: 'Комплекс мер ЦБ для удержания инфляции в публично объявленном коридоре.', en: 'Central bank monetary framework committed to achieving an explicit inflation rate target.' }
      }
    ],
    checkpoint: {
      question: {
        uz: "O'zbekiston Respublikasi hududida tovar va xizmatlar narxini chet el valyutasida belgilash qonunan qanday baholanadi?",
        'uz-Cyrl': 'Ўзбекистон Республикаси ҳудудида товар ва хизматлар нархини чет эл валютасида белгилаш қонунан қандай баҳоланади?',
        ru: 'Как оценивается законом указание цен на товары и услуги в иностранной валюте на территории Узбекистана?',
        en: 'How is pricing goods and services in foreign currencies treated by Uzbek law?',
      },
      options: [
        { uz: "Taqiqlanadi, barcha hisob-kitoblar faqat milliy valyuta (so'm)da bo'lishi shart", 'uz-Cyrl': 'Тақиқланади, барча ҳисоб-китоблар фақат сўмда бўлиши шарт', ru: 'Запрещено, все расчеты производятся только в национальной валюте (сум)', en: 'Forbidden, all domestic transactions must be denominated in national currency (Soum)' },
        { uz: "Har qanday valyutada ruxsat etiladi", 'uz-Cyrl': 'Ҳар қандай валютада рухсат этилади', ru: 'Разрешено в любой валюте', en: 'Allowed in any currency' },
        { uz: "Faqat ko'chmas mulk uchun ruxsat etiladi", 'uz-Cyrl': 'Фақат кўчмас мулк учун рухсат этилади', ru: 'Только для недвижимости', en: 'Only for real estate' },
        { uz: "Faqat AQSh dollarida ruxsat berilgan", 'uz-Cyrl': 'Фақат АҚШ долларида рухсат берилган', ru: 'Только в долларах США', en: 'Only in US Dollars' }
      ],
      correctIndex: 0,
      explanation: {
        uz: "To'g'ri! 'Valyutani tartibga solish to'g'risida'gi qonunga asosan, O'zbekiston hududida tovarlar, ishlar va xizmatlar narxi faqat milliy valyutada ifodalanishi shart.",
        'uz-Cyrl': 'Тўғри! "Валютани тартибга солиш тўғрисида"ги қонунга асосан, нархлар фақат миллий валютада ифодаланиши шарт.',
        ru: 'Верно! Закон прямо запрещает привязку внутренних цен к иностранной валюте.',
        en: 'Correct! Under the Currency Regulation Act, all domestic pricing must be expressed solely in Uzbek Soum to safeguard monetary integrity.',
      }
    }
  },
  {
    id: 'lec-3',
    number: 3,
    title: {
      uz: 'Oziq-ovqat va Energetika xavfsizligi',
      'uz-Cyrl': 'Озиқ-овқат ва Энергетика хавфсизлиги',
      ru: 'Продовольственная и энергетическая безопасность',
      en: 'Food and Energy Security',
    },
    shortDesc: {
      uz: "Bozor barqarorligi, asosiy iste'mol mahsulotlari mustaqilligi, strategik zaxiralar va 'yashil' energetika tizimi.",
      'uz-Cyrl': 'Бозор барқарорлиги, асосий истеъмол маҳсулотлари мустақиллиги, стратегик захиралар ва яшил энергетика.',
      ru: 'Рыночная стабильность, автономия в базовых продуктах питания, госрезервы и переход к возобновляемой энергетике.',
      en: 'Market resilience, self-sufficiency in essential commodities, state stockpiles, and clean energy transition.',
    },
    category: 'energy',
    estimatedMinutes: 10,
    slides: [
      {
        id: 1,
        title: {
          uz: "Oziq-ovqat mustaqilligining ahamiyati",
          'uz-Cyrl': 'Озиқ-овқат мустақиллигининг аҳамияти',
          ru: 'Значение продовольственной независимости',
          en: 'Significance of Food Sovereignty',
        },
        content: {
          uz: "Har qanday davlatning suvereniteti aholini asosiy oziq-ovqat mahsulotlari (bug'doy, guruch, go'sht, yog', shakar) bilan uzluksiz va hamyonbop ta'minlashga bog'liq. Jahon bozoridagi narx tebranishlari va logistika cheklovlariga qarshi strategik davlat zaxiralari saqlanadi.",
          'uz-Cyrl': 'Ҳар қандай давлатнинг суверенитети аҳолини асосий озиқ-овқат маҳсулотлари билан узлуксиз таъминлашга боғлиқ.',
          ru: 'Суверенитет любого государства опирается на бесперебойное снабжение граждан базовыми продуктами питания по доступным ценам.',
          en: 'National resilience relies upon continuous access to essential food staples at affordable prices shielded from global supply shocks.',
        },
        bulletPoints: [
          {
            uz: "Bug'doy va un mustaqilligi: O'zbekiston yillik g'alla yetishtirish hajmini 8+ million tonnaga yetkazdi.",
            'uz-Cyrl': 'Буғдой ва ун мустақиллиги: Ўзбекистон йиллик ғалла ҳосилини 8+ миллион тоннага етказди.',
            ru: 'Зерновая независимость: сбор урожая зерна превышает 8 млн тонн ежегодно.',
            en: 'Grain independence: domestic grain harvesting exceeds 8 million tons annually.',
          },
          {
            uz: "Suv resurslari xavfsizligi: Suv tejovchi tomchilatib sug'orish texnologiyalarini joriy qilish — hayot-mamot masalasi.",
            'uz-Cyrl': 'Сув ресурслари хавфсизлиги: Сув тежовчи томчилатиб суғориш технологиялари.',
            ru: 'Водная безопасность: внедрение капельного орошения и экономия водных ресурсов.',
            en: 'Water security: large-scale drip irrigation to confront regional water stress.',
          }
        ]
      }
    ],
    keyTerms: [
      {
        term: { uz: 'Strategik zaxira', 'uz-Cyrl': 'Стратегик захира', ru: 'Стратегический резерв', en: 'Strategic Stockpile' },
        definition: { uz: "Favqulodda vaziyatlar, qurg'oqchilik yoki tashqi cheklovlar davrida aholini ta'minlash uchun saqlanadigan oziq-ovqat va yoqilg'i zahirasi.", 'uz-Cyrl': 'Фавқулодда вазиятлар ёки чекловлар даврида аҳолини таъминлаш учун сақланадиган захира.', ru: 'Неприкосновенный запас продовольствия и топлива на случай ЧС и блокад.', en: 'National stockpiles of food and energy reserved for crises and emergencies.' }
      }
    ],
    checkpoint: {
      question: {
        uz: "Oziq-ovqat xavfsizligida 'importga haddan tashqari qaramlik' nimasi bilan xavfli hisoblanadi?",
        'uz-Cyrl': 'Озиқ-овқат хавфсизлигида "импортга ҳаддан ташқари қарамлик" нимаси билан хавфли ҳисобланади?',
        ru: 'Чем опасна чрезмерная импортозависимость в сфере продовольственной безопасности?',
        en: 'Why is excessive import dependency considered a critical hazard in food security?',
      },
      options: [
        { uz: "Tashqi inqiroz va sanksiyalar paytida mamlakatda oziq-ovqat taqchilligi va giperinflyatsiya xavfini keltirib chiqaradi", 'uz-Cyrl': 'Ташқи инқироз ва санкциялар пайтида тақчиллик ва гиперинфляция хавфини келтириб чиқаради', ru: 'В кризис провоцирует дефицит базовых продуктов и резкий скачок цен', en: 'It exposes the country to immediate shortages and hyperinflation during geopolitical disruptions' },
        { uz: "Hech qanday xavf tug'dirmaydi", 'uz-Cyrl': 'Ҳеч қандай хавф туғдирмайди', ru: 'Не несет никакой угрозы', en: 'It poses no threat whatsoever' },
        { uz: "Faqat eksportchilar foydasini oshiradi", 'uz-Cyrl': 'Фақат экспортчилар фойдасини оширади', ru: 'Увеличивает прибыль экспортеров', en: 'Only increases exporter profits' },
        { uz: "Mahalliy fermerlar ishlamasligiga imkon beradi", 'uz-Cyrl': 'Маҳаллий фермерлар ишламаслигига имкон беради', ru: 'Позволяет фермерам не работать', en: 'Allows local farmers not to work' }
      ],
      correctIndex: 0,
      explanation: {
        uz: "To'g'ri! Agar asosiy tovarlar faqat chetdan keltirilsa, xalqaro logistika to'xtashi bilan mamlakatda ocharchilik va narx portlashi vujudga keladi.",
        'uz-Cyrl': 'Тўғри! Халқаро логистика ёки бозорлар ёпилса, мамлакатда тақчиллик ва нархлар кескин ошиб кетиши мумкин.',
        ru: 'Верно! Разрыв цепочек поставок мгновенно парализует внутренний рынок.',
        en: 'Correct! Severed international shipping lines or trade embargoes immediately cause acute shortages and price shocks.',
      }
    }
  },
  {
    id: 'lec-4',
    number: 4,
    title: {
      uz: 'Korxona va Biznes xavfsizligi, Korrupsiyaga qarshi nazorat',
      'uz-Cyrl': 'Корхона ва Бизнес хавфсизлиги, Коррупцияга қарши назорат',
      ru: 'Экономическая безопасность предприятия и комплаенс-контроль',
      en: 'Enterprise Security, Fraud Prevention and Anti-Corruption',
    },
    shortDesc: {
      uz: "Buxgalteriya auditlari, firibgarlik (fraud) turlari, shubhali kontragentlar tekshiruvi, ISO 37001 standarti va ichki xavfsizlik.",
      'uz-Cyrl': 'Бухгалтерия аудитлари, фирибгарлик турлари, шубҳали контрагентлар текшируви ва комплаенс назорат.',
      ru: 'Аудит, противодействие мошенничеству (фрод), проверка контрагентов и внедрение антикоррупционного комплаенса.',
      en: 'Corporate audits, fraud mitigation, counterparty background checks, ISO 37001 compliance, and insider threat prevention.',
    },
    category: 'micro',
    estimatedMinutes: 15,
    slides: [
      {
        id: 1,
        title: {
          uz: "Korxona xavfsizligiga ichki va tashqi tahdidlar",
          'uz-Cyrl': 'Корхона хавфсизлигига ички ва ташқи таҳдидлар',
          ru: 'Внутренние и внешние угрозы бизнесу',
          en: 'Internal and External Threats to Enterprise',
        },
        content: {
          uz: "Korxona iqtisodiy xavfsizligi — uning moddiy, moliyaviy va intellektual resurslaridan samarali foydalanib, foyda olishi va noqonuniy xatti-harakatlardan himoyalanganligidir. Korxona bankrotliklarining 70% dan ortig'i ichki suiiste'molliklar va zaif nazorat tufayli yuz beradi.",
          'uz-Cyrl': 'Корхона иқтисодий хавфсизлиги — ресурслардан самарали фойдаланиб, ноқонуний хатти-ҳаракатлардан ҳимояланганлик ҳолатидир.',
          ru: 'Безопасность предприятия — защита ресурсов и устойчивость к внутренним злоупотреблениям и недобросовестной конкуренции.',
          en: 'Enterprise security guarantees preservation of physical, financial, and intellectual assets against embezzlement and fraud.',
        },
        bulletPoints: [
          {
            uz: "Kontragentlarni tekshirish (Due Diligence): Bir kunlik 'bir martalik' soxta firmalar bilan shartnoma tuzmaslik.",
            'uz-Cyrl': 'Контрагентларни текшириш (Due Diligence): Сохта фирмалар билан ишламаслик.',
            ru: 'Проверка контрагентов (Due Diligence): исключение фирм-однодневок и банкротов.',
            en: 'Due Diligence: screening against shell corporations and bankrupt vendors.',
          },
          {
            uz: "Komplayens-nazorat (Compliance): Qonunbuzarlik va poraxo'rlik holatlariga yo'l qo'ymaslik tizimi (ISO 37001).",
            'uz-Cyrl': 'Комплаенс-назорат (Compliance): Коррупцияга қарши ички назорат.',
            ru: 'Антикоррупционный комплаенс: внедрение международных стандартов честности.',
            en: 'Compliance control: institutional mechanisms combating bribery and conflicts of interest.',
          }
        ],
        lawReference: "O'zbekiston Respublikasining 'Korrupsiyaga qarshi kurashish to'g'risida'gi Qonuni."
      }
    ],
    keyTerms: [
      {
        term: { uz: 'Due Diligence', 'uz-Cyrl': 'Due Diligence', ru: 'Due Diligence (Проверка)', en: 'Due Diligence' },
        definition: { uz: "Shartnoma tuzishdan oldin hamkor kompaniyaning to'lov qobiliyati, soliq qarzdorligi va qonuniyligini chuqur tekshirish.", 'uz-Cyrl': 'Шартнома тузишдан олдин ҳамкор компаниянинг молиявий ва ҳуқуқий ҳолатини текшириш.', ru: 'Всесторонняя проверка надежности и платежеспособности партнера до подписания сделки.', en: 'Comprehensive assessment of a commercial partner before committing to transactions.' }
      }
    ],
    checkpoint: {
      question: {
        uz: "Korxona xaridlarida shubhali kontragentni aniqlashda qaysi belgi eng jiddiy xavf (qizil bayroqcha) hisoblanadi?",
        'uz-Cyrl': 'Корхона харидларида шубҳали контрагентни аниқлашда қайси белги энг жиддий хавф ҳисобланади?',
        ru: 'Какой признак контрагента является критическим «красным флагом» при закупках?',
        en: 'Which indicator represents the most severe red flag when screening a prospective vendor?',
      },
      options: [
        { uz: "Kompaniya bir necha kun oldin ochilgan, xodimlari va ofisi yo'q, 100% oldindan to'lov talab qilmoqda", 'uz-Cyrl': 'Компания бир неча кун олдин очилган, ходимлари ва офиси йўқ, 100% олдиндан тўлов талаб қилмоқда', ru: 'Фирма зарегистрирована пару дней назад, нет офиса и штата, требует 100% предоплату', en: 'Entity incorporated 3 days ago, has zero registered staff, and demands 100% upfront wire payment' },
        { uz: "Kompaniyaning rasmiy veb-sayti va soliq hisoboti ochiq e'lon qilingan", 'uz-Cyrl': 'Компаниянинг расмий веб-сайти ва солиқ ҳисоботи очиқ', ru: 'Имеет публичную отчетность и сайт', en: 'Entity has transparent public tax records and verified offices' },
        { uz: "Tegishli litsenziyaga ega davlat ro'yxatidan o'tgan korxona", 'uz-Cyrl': 'Тегишли лицензияга эга корхона', ru: 'Обладает действующими лицензиями', en: 'Entity possesses valid state operating licenses' },
        { uz: "Soliq qarziga ega emasligi soliq.uz tizimida tasdiqlangan", 'uz-Cyrl': 'Солиқ қарзи йўқлиги тасдиқланган', ru: 'Отсутствует задолженность по налогам', en: 'Tax clearance certificate confirmed on state tax portal' }
      ],
      correctIndex: 0,
      explanation: {
        uz: "To'g'ri! 'Bir kunlik' firmalar hech qanday moddiy bazaga ega emas, pullarni olgach g'oyib bo'ladi — bu firibgarlikning klassik sxemasidir.",
        'uz-Cyrl': 'Тўғри! Бундай "бир кунлик" фирмалар маблағларни ўзлаштириб қочиш учун очилади.',
        ru: 'Верно! Это классический признак фиктивной компании-однодневки для вывода средств.',
        en: 'Correct! Shell companies lack physical assets or workforce; receiving upfront capital and disappearing is the archetypal fraud modus operandi.',
      }
    }
  },
  {
    id: 'lec-5',
    number: 5,
    title: {
      uz: 'Raqamli Iqtisodiyot va Kiber-Moliyaviy Xavfsizlik',
      'uz-Cyrl': 'Рақамли Иқтисодиёт ва Кибер-Молиявий Хавфсизлик',
      ru: 'Цифровая экономика и киберфинансовая безопасность',
      en: 'Digital Economy and Cyber-Financial Hygiene',
    },
    shortDesc: {
      uz: "Bank kartalari fishingi, SMS-kod himoyasi, moliyaviy piramidalar, taqiqlangan qimor saytlari va qonuniy kripto-platformalar.",
      'uz-Cyrl': 'Банк карталари фишинги, SMS-код ҳимояси, молиявий пирамидалар ва тақиқланган сайтлар хавфи.',
      ru: 'Фишинг пластиковых карт, защита кодов подтверждения, финпирамиды, нелегальные казино и лицензирование крипто-активов.',
      en: 'Card phishing vectors, SMS verification hygiene, Ponzi schemes, illicit gambling webs, and legal crypto-assets regulatory framework.',
    },
    category: 'cyber',
    estimatedMinutes: 16,
    slides: [
      {
        id: 1,
        title: {
          uz: "Moliyaviy firibgarlik va fishingning zamonaviy usullari",
          'uz-Cyrl': 'Молиявий фирибгарлик ва фишингнинг замонавий усуллари',
          ru: 'Современные формы финансового фишинга',
          en: 'Modern Vectors of Financial Phishing',
        },
        content: {
          uz: "Raqamli to'lovlar (Humo, Uzcard, Click, Payme) kengayishi bilan birga firibgarlar ham o'z usullarini murakkablashtirdi. O'zbekistonda eng keng tarqalgan xavflar: soxta davlat kompensatsiyasi botlari, soxta auksionlar va bank xodimi nomidan qo'ng'iroqlar.",
          'uz-Cyrl': 'Рақамли тўловлар кенгайиши билан фирибгарлар ҳам ўз услубларини ривожлантирмоқда.',
          ru: 'С ростом онлайн-платежей мошенники используют методы социальной инженерии, фальшивые сайты госуслуг и звонки от лица службы безопасности банков.',
          en: 'Proliferation of digital payments has expanded social engineering schemes, phishing clones of state portals, and spoofed bank security calls.',
        },
        bulletPoints: [
          {
            uz: "Oltin qoida: Bank yoki to'lov tizimi xodimi HECH QACHON telefon orqali 6 yoki 4 xonali SMS-tasdiqlash kodini so'ramaydi!",
            'uz-Cyrl': 'Олтин қоида: Банк ходими ҲЕЧ ҚАЧОН SMS-кодни сўрамайди!',
            ru: 'Золотое правило: Сотрудник банка НИКОГДА не спрашивает SMS-код из уведомления!',
            en: 'Golden Rule: Bank personnel NEVER ask for the secret SMS authentication passcode!',
          },
          {
            uz: "Domen nomini tekshirish: Masalan, my.gov.uz rasmiy portali o'rniga 'my-gov-uzb.click' yoki 'yordam-prezident.xyz' kabi tuzoq manzillar ochiladi.",
            'uz-Cyrl': 'Домен номини текшириш: Сохта ва расмий манзилларни фарқлаш.',
            ru: 'Проверка домена: мошенники подделывают адреса, например my-gov-bonus.xyz вместо my.gov.uz.',
            en: 'Domain validation: detecting deceptive lookalike domains vs legitimate state portals.',
          }
        ],
        lawReference: "O'zbekiston Respublikasi Jinoyat kodeksi 168-moddasi (Firibgarlik), Kiberxavfsizlik to'g'risidagi Qonun."
      },
      {
        id: 2,
        title: {
          uz: "Kriptovalyutalar va litsenziyalangan aylanma",
          'uz-Cyrl': 'Криптовалюталар ва лицензияланган айланма',
          ru: 'Крипто-активы и правовое регулирование в Узбекистане',
          en: 'Crypto-Assets Legal Framework in Uzbekistan',
        },
        content: {
          uz: "O'zbekistonda kriptovalyutalar bilan muomala qilish Istiqbolli loyihalar milliy agentligi (NAPP) tomonidan qat'iy tartibga solinadi. Chet el litsenziyasiz birjalarida savdo qilish noqonuniy hisoblanadi va fuqarolarning mablag'lari himoyalanmaydi.",
          'uz-Cyrl': 'Ўзбекистонда крипто-активлар айланмаси НАПП томонидан тартибга солинади.',
          ru: 'Оборот крипто-активов в Узбекистане строго регулируется НАПП. Торговля на нелицензированных зарубежных площадках незаконна.',
          en: 'Crypto transactions in Uzbekistan are strictly overseen by NAPP. Trading on unauthorized offshore platforms carries legal penalties and total loss of consumer protection.',
        },
        bulletPoints: [
          {
            uz: "Ruxsat etilgan: Faqat O'zbekiston hududida NAPP litsenziyasini olgan rasmiy kripto-do'kon va birjalar.",
            'uz-Cyrl': 'Рухсат этилган: Фақат НАПП лицензиясига эга маҳаллий крипто-биржалар.',
            ru: 'Разрешено: только площадки с лицензией НАПП в юрисдикции Узбекистана.',
            en: 'Permitted: strictly domestically licensed platforms authorized by NAPP.',
          },
          {
            uz: "Qat'iy taqiqlangan: Kriptovalyutani tovar va xizmatlar uchun to'lov vositasi sifatida ishlatish jinoiy javobgarlikka sabab bo'ladi.",
            'uz-Cyrl': 'Тақиқланган: Тўлов воситаси сифатида ишлатиш мумкин эмас.',
            ru: 'Запрещено: использование крипто-активов в качестве платежного средства.',
            en: 'Prohibited: using crypto as payment tender for goods/services within domestic commerce.',
          }
        ]
      }
    ],
    keyTerms: [
      {
        term: { uz: 'Fishing (Phishing)', 'uz-Cyrl': 'Фишинг', ru: 'Фишинг', en: 'Phishing' },
        definition: { uz: "Foydalanuvchini aldab, uning shaxsiy ma'lumotlari, bank kartasi raqami va parolini o'g'irlashga qaratilgan kiber-qalloblik.", 'uz-Cyrl': 'Фойдаланувчини алдаб, пластик карта маълумотларини ўғирлаш услуби.', ru: 'Вид интернет-мошенничества для кражи логинов, паролей и реквизитов карт.', en: 'Deceptive cyber strategy engineered to steal private passwords and banking credentials.' }
      },
      {
        term: { uz: 'Ponzi sxemasi', 'uz-Cyrl': 'Понци схемаси', ru: 'Схема Понци', en: 'Ponzi Scheme' },
        definition: { uz: "Yangi jalb qilingan omonatchilarning pullari hisobidan eskilariga 'katta daromad' to'lab beriladigan moliyaviy piramida.", 'uz-Cyrl': 'Янги одамларнинг пули ҳисобига эскиларга пул тўланадиган сохта пирамида.', ru: 'Финансовая пирамида, где доход формируется за счет взносов новых участников.', en: 'Fraudulent investment scam where payouts are funded exclusively by subsequent investors.' }
      }
    ],
    checkpoint: {
      question: {
        uz: "Telefoningizga 'Sizga 1 200 000 so'm yordam puli ajratildi, qabul qilish uchun SMS-kodni kiriting' degan xabar keldi. Nima qilish kerak?",
        'uz-Cyrl': 'Телефонингизга ёрдам пули ҳақида хабар келиб, SMS-код сўралса нима қилиш керак?',
        ru: 'Вам пришло SMS: «Вам начислено пособие 1 200 000 сум, назовите код из SMS». Ваши действия?',
        en: 'You receive an SMS: "You received 1,200,000 Soum state compensation, reply with SMS passcode". What must you do?',
      },
      options: [
        { uz: "Hech qanday kodni jo'natmaslik, havolani ochmaslik va raqamni darhol bloklash", 'uz-Cyrl': 'Ҳеч қандай кодни жўнатмаслик ва рақамни блоклаш', ru: 'Ни в коем случае не передавать код, не переходить по ссылке и заблокировать отправителя', en: 'Never disclose the passcode, do not click the link, and immediately report/block the sender' },
        { uz: "Kodni jo'natib, pul tushishini kutish", 'uz-Cyrl': 'Кодни жўнатиб кутиш', ru: 'Отправить код и ждать перевода', en: 'Send the code and await deposit' },
        { uz: "Plastik kartaning oldi va orqa rasmini yuborish", 'uz-Cyrl': 'Карта расмини юбориш', ru: 'Отправить фото карты с двух сторон', en: 'Send a picture of both sides of your payment card' },
        { uz: "Do'stlarga tarqatib ko'proq pul olishga urinish", 'uz-Cyrl': 'Дўстларга тарқатиш', ru: 'Переслать друзьям для увеличения бонуса', en: 'Forward to friends to multiply bonuses' }
      ],
      correctIndex: 0,
      explanation: {
        uz: "To'g'ri! Davlat idoralari hech qachon shaxsiy hisoblarga SMS-kod orqali 'yordam puli' tarqatmaydi. Bu karta hisobidagi barcha mablag'larni o'g'irlash uchun tuzilgan fishing tuzog'idir.",
        'uz-Cyrl': 'Тўғри! Бу фирибгарларнинг тузоғи. Давлат органлари ҳеч қачон SMS-код сўрамайди.',
        ru: 'Верно! Государственные органы не выплачивают пособия через ссылки в SMS с запросом кодов подтверждения.',
        en: 'Correct! Legitimate government authorities never distribute social payouts via unsolicited links demanding authentication OTPs.',
      }
    }
  },
  {
    id: 'lec-6',
    number: 6,
    title: {
      uz: 'Tashqi Iqtisodiy Xavfsizlik, Xalqaro Sanksiyalar va Logistika',
      'uz-Cyrl': 'Ташқи Иқтисодий Хавфсизлик, Халқаро Санкциялар ва Логистика',
      ru: 'Внешнеэкономическая безопасность, санкции и транспортные коридоры',
      en: 'Foreign Economic Security, Sanctions Risks and Trade Corridors',
    },
    shortDesc: {
      uz: "Eksport diversifikatsiyasi, Jahon savdo tashkiloti (JST), ikkilamchi sanksiyalar xavfi va yangi temir yo'l yo'laklari.",
      'uz-Cyrl': 'Экспорт диверсификацияси, Жаҳон савдо ташкилоти, иккиламчи санкциялар хавфи ва транспорт йўлаклари.',
      ru: 'Диверсификация экспорта, вступление в ВТО, риски вторичных санкций и мультимодальные транспортные маршруты.',
      en: 'Export diversification, WTO accession dynamics, secondary sanctions exposure, and multimodal logistics arteries.',
    },
    category: 'global',
    estimatedMinutes: 13,
    slides: [
      {
        id: 1,
        title: {
          uz: "Iqtisodiy qaramlikni kamaytirish va yo'laklar integratsiyasi",
          'uz-Cyrl': 'Иқтисодий қарамликни камайтириш ва йўлаклар интеграцияси',
          ru: 'Снижение зависимости и новые логистические коридоры',
          en: 'Mitigating Trade Dependency & Transport Corridors',
        },
        content: {
          uz: "O'zbekiston dengizga to'g'ridan-to'g'ri chiqish yo'liga ega bo'lmagan (double landlocked) davlat hisoblanadi. Tashqi iqtisodiy xavfsizlikni ta'minlash uchun eksport-import yo'nalishlarini faqat bitta davlatga bog'lab qo'ymaslik (diversifikatsiya qilish) eng ustuvor vazifadir.",
          'uz-Cyrl': 'Ўзбекистон денгизга тўғридан-тўғри чиқиш йўлига эга бўлмаган (double landlocked) давлатдир.',
          ru: 'Узбекистан — страна без прямого выхода к морю (double landlocked). Диверсификация рынков сбыта и логистических артерий является ключевым условием безопасности.',
          en: 'Uzbekistan is a double-landlocked nation. Diversifying international supply corridors beyond single monopolized transit routes is vital for sovereign trade defense.',
        },
        bulletPoints: [
          {
            uz: "Xitoy - Qirg'iziston - O'zbekiston temir yo'li: Osiyo-Tinch okeani bozorlariga eng qisqa transport yo'lagi ochilishi.",
            'uz-Cyrl': 'Хитой - Қирғизистон - Ўзбекистон темир йўли қурилиши.',
            ru: 'Железная дорога Китай - Кыргызстан - Узбекистан: кратчайший доступ к мировым рынкам.',
            en: 'China-Kyrgyzstan-Uzbekistan railway project: shortest multimodal link to global sea lanes.',
          },
          {
            uz: "Ikkilamchi sanksiyalardan himoyalanish: Xalqaro to'lovlar va ikki xil maqsadga mo'ljallangan tovarlar aylanmasida qat'iy nazorat o'rnatish.",
            'uz-Cyrl': 'Иккиламчи санкциялардан ҳимоя: Тўловлар ва товарлар назорати.',
            ru: 'Защита от вторичных санкций: строгий комплаенс банков и контроль товаров двойного назначения.',
            en: 'Secondary sanctions shielding: rigorous banking compliance and dual-use commodity oversight.',
          }
        ]
      }
    ],
    keyTerms: [
      {
        term: { uz: 'Eksport diversifikatsiyasi', 'uz-Cyrl': 'Экспорт диверсификацияси', ru: 'Диверсификация экспорта', en: 'Export Diversification' },
        definition: { uz: "Eksport qilinadigan tovarlar va savdo hamkorlari sonini ko'paytirish orqali xatarlarni kamaytirish siyosati.", 'uz-Cyrl': 'Экспорт товарлари ва ҳамкорлар сонини кўпайтириш.', ru: 'Расширение спектра экспортируемых товаров и географии рынков для снижения рисков.', en: 'Broadening the mix of export goods and destination markets to insulate from partner recessions.' }
      }
    ],
    checkpoint: {
      question: {
        uz: "O'zbekiston kabi 'double landlocked' (dengizga chiqish uchun kamida ikki davlat chegarasini kesib o'tish zarur bo'lgan) davlat uchun qaysi strategiya tashqi iqtisodiy xavfsizlikni kuchaytiradi?",
        'uz-Cyrl': 'Денгизга тўғридан-тўғри чиқиш йўли йўқ давлат учун қайси стратегия xavfsizlikni kuchaytiradi?',
        ru: 'Какая стратегия усиливает внешнеэкономическую безопасность для страны, не имеющей выхода к морю?',
        en: 'Which strategy best bolsters the foreign economic security of a double-landlocked state?',
      },
      options: [
        { uz: "Bir nechta muqobil xalqaro transport yo'laklarini rivojlantirish va eksport bozorlarini diversifikatsiya qilish", 'uz-Cyrl': 'Бир нечта муқобил транспорт йўлакларини ривожлантириш ва бозорларни диверсификация қилиш', ru: 'Развитие альтернативных транспортных коридоров и диверсификация рынков', en: 'Developing multiple alternative transit corridors and diversifying export destinations' },
        { uz: "Barcha xalqaro savdoni butunlay to'xtatish", 'uz-Cyrl': 'Барча савдони тўхтатиш', ru: 'Полная остановка внешней торговли', en: 'Ceasing all international commerce' },
        { uz: "Faqat bitta qo'shni davlat portlariga qaram bo'lib qolish", 'uz-Cyrl': 'Фақат битта давлатга қарам бўлиш', ru: 'Использование исключительно одного маршрута', en: 'Relying exclusively on a single neighbor route' },
        { uz: "Mahalliy ishlab chiqarishni butunlay yopish", 'uz-Cyrl': 'Маҳаллий ишлаб чиқаришни ёпиш', ru: 'Закрытие местных фабрик', en: 'Shutting down domestic production' }
      ],
      correctIndex: 0,
      explanation: {
        uz: "To'g'ri! Muqobil yo'nalishlar (Trans-Kavkaz, Janubiy Osiyo, Xitoy-Qirg'iziston-O'zbekiston) bitta yo'lak yopilganda ham mamlakat iqtisodiyotining to'xtab qolmasligini kafolatlaydi.",
        'uz-Cyrl': 'Тўғри! Муқобил йўлаклар савдо узлуксизлигини таъминлайди.',
        ru: 'Верно! Наличие нескольких маршрутов исключает риск логистической изоляции.',
        en: 'Correct! Diversified corridors ensure uninterrupted trade flows even if one regional boundary encounters disruption.',
      }
    }
  }
];

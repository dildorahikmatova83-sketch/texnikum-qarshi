import { WebResourceItem } from '../types';

export const RESOURCES_REGISTRY: WebResourceItem[] = [
  {
    id: 'res-1xbet',
    name: '1xBet, Mostbet, Melbet, Pin-Up (Onlayn qimor va bukmeykerlik)',
    urlExample: '1xbet-zerkalo*.xyz, mostbet-uz*.online, pin-up-casino*.com',
    status: 'forbidden',
    category: 'scam_gambling',
    categoryTitle: {
      uz: 'Noqonuniy qimor va bukmeykerlik',
      'uz-Cyrl': 'Ноқонуний қимор ва букмекерлик',
      ru: 'Нелегальные азартные игры и букмекеры',
      en: 'Illegal Online Gambling & Sportsbook',
    },
    shortDesc: {
      uz: "O'zbekiston hududida noqonuniy faoliyat yurituvchi, aholi va yoshlarni moliyaviy qaramlikka va qarz botqog'iga yetaklovchi xorijiy qimor saytlari.",
      'uz-Cyrl': 'Ўзбекистон ҳудудида ноқонуний фаолият юритувчи, ёшларни қарз ботқоғига етакловчи қимор сайтлари.',
      ru: 'Иностранные сайты азартных игр, нелегально действующие в Узбекистане и ведущие к долговой яме и лудомании.',
      en: 'Unauthorized offshore gambling portals operating unlawfully in Uzbekistan, driving debt trap and addiction.',
    },
    risksOrBenefits: [
      {
        uz: "O'yinchining barcha pullari va shaxsiy ma'lumotlari xorijdagi noma'lum ofshor hisoblarga chiqib ketadi va qaytarib bo'lmaydi.",
        'uz-Cyrl': 'Ўйинчининг барча пуллари ва маълумотлари офшор ҳисобларга чиқиб кетади.',
        ru: 'Полная потеря средств и передача персональных данных в руки офшорных мошенников.',
        en: 'Total loss of deposits with funds funneled into untraceable offshore entities.',
      },
      {
        uz: "Plastik kartasini bukmeykerga to'lov qabul qilish (dropperlik) uchun bergan shaxslar noqonuniy pul aylantirishda sherik sifatida jinoiy javobgarlikka tortiladi.",
        'uz-Cyrl': 'Картасини берган шахслар жиноий жавобгарликка тортилади.',
        ru: 'Передача своих банковских карт для транзита ставок (дропперство) влечет уголовную ответственность за отмывание денег.',
        en: 'Lending bank cards to gambling rings as financial mules (droppers) incurs criminal prosecution for money laundering.',
      }
    ],
    legalBasis: "O'zbekiston Respublikasi JK 278-moddasi (Qimor va tavakkalchilikka asoslangan boshqa o'yinlarni tashkil etish hamda o'tkazish — 7 yilgacha ozodlikdan mahrum qilish), MJtK 191-moddasi.",
    warningSigns: [
      {
        uz: "O'zbekistonda bloklanganini aylanib o'tish uchun doimiy 'zerkalo' (ko'zgu) domenlar ochilishi.",
        'uz-Cyrl': 'Блоклашни айланиб ўтиш учун доимий кўзгу доменлар очилиши.',
        ru: 'Постоянная смена зеркал сайтов для обхода государственных блокировок.',
        en: 'Constant mirror domains created to bypass telecommunication blocks.',
      },
      {
        uz: "To'lovlar uchun jismoniy shaxslarning oddiy bank kartalari (P2P o'tkazmalar) berilishi.",
        'uz-Cyrl': 'Тўловлар учун жисмоний шахсларнинг банк карталари берилиши.',
        ru: 'Требование перевода депозитов на карты обычных физлиц (P2P-дропы).',
        en: 'Requiring deposits to be transferred to individual retail bank cards (P2P drops).',
      }
    ],
    verificationMethod: {
      uz: "O'zbekiston Axborotlashtirish va telekommunikatsiyalar sohasida nazorat inspeksiyasi tomonidan taqiqlangan saytlar reyestrida mavjud.",
      'uz-Cyrl': 'Ўзбекистон ахборотлаштириш инспекцияси тақиқлаган сайтлар рўйхатида мавжуд.',
      ru: 'Входит в официальный реестр запрещенных интернет-ресурсов Республики Узбекистан.',
      en: 'Included in the official registry of blocked unauthorized websites by Uzbekistan regulatory inspectors.',
    }
  },
  {
    id: 'res-pyramid',
    name: 'Moliyaviy piramidalar, soxta investitsiya botlari va "kripto-multiplikatorlar"',
    urlExample: 't.me/invest_uz_daromad_bot, uz-gold-investment*.site, passive-income-asia*.biz',
    status: 'forbidden',
    category: 'scam_pyramid',
    categoryTitle: {
      uz: 'Moliyaviy piramida va soxta investitsiya',
      'uz-Cyrl': 'Молиявий пирамида ва сохта инвестиция',
      ru: 'Финансовые пирамиды и фейк-инвестиции',
      en: 'Ponzi Schemes & Fake Investment Platforms',
    },
    shortDesc: {
      uz: "'Kuniga 5-10% kafolatlangan daromad' va'da qiluvchi, real iqtisodiy faoliyatga ega bo'lmagan klassik Ponzi sxemalari.",
      'uz-Cyrl': '"Кунига 5-10% кафолатланган даромад" ваъда қилувчи сохта пирамидалар.',
      ru: 'Схемы Понци, обещающие фантастическую гарантированную доходность (от 100% годовых) без реальной экономической деятельности.',
      en: 'Ponzi schemes promising surreal guaranteed yields without any actual economic operations.',
    },
    risksOrBenefits: [
      {
        uz: "Dastlabki 1-2 haftada oz miqdorda pul qaytarib, ishonch qozonadi, keyin katta summa kiritilgach akkauntni bloklab, pullarni o'zlashtiradi.",
        'uz-Cyrl': 'Дастлаб озгина қайтариб, кейин катта пулни олиб қочишади.',
        ru: 'Выплачивают копейки на старте для усыпления бдительности, а затем блокируют счет и исчезают.',
        en: 'Pay small bait yields initially to build trust, then lock larger sums and vanish.',
      },
      {
        uz: "Odam chaqirish (referal) talab qilinadi — o'quvchi o'zi bilmagan holda yaqinlarini firibgarlikka jalb qiladi.",
        'uz-Cyrl': 'Яқинларни ҳам шу тузоққа тортишга мажбур қилади.',
        ru: 'Принуждают привлекать родственников и друзей по реферальным ссылкам.',
        en: 'Mandate recruiting friends and relatives to keep receiving fake yields.',
      }
    ],
    legalBasis: "O'zbekiston Respublikasi JK 188-1-moddasi (Noqonuniy ravishda pul mablag'larini va (yoki) boshqa mol-mulkni jalb etishga doir faoliyat — 10 yilgacha ozodlikdan mahrum qilish).",
    warningSigns: [
      {
        uz: "Bozor stavkasidan bir necha barobar yuqori 'kafolatlangan' daromad va'dasi.",
        'uz-Cyrl': 'Бозор ставкасидан кескин юқори даромад ваъдаси.',
        ru: 'Обещание нереально высоких «гарантированных» процентов без риска.',
        en: 'Promises of astronomical guaranteed profits with zero risk.',
      },
      {
        uz: "Markaziy bank yoki NAPP litsenziyasi yo'qligi va kompaniya yuridik manzilining mavjud emasligi.",
        'uz-Cyrl': 'Марказий банк ёки НАПП лицензиясининг йўқлиги.',
        ru: 'Отсутствие лицензии ЦБ или НАПП и реального юридического адреса.',
        en: 'Absence of Central Bank or NAPP regulatory permits and physical incorporation.',
      }
    ],
    verificationMethod: {
      uz: "cbu.uz va finlit.uz saytlarida 'Moliyaviy tashkilotlar reyestri' orqali litsenziyani tekshirish zarur.",
      'uz-Cyrl': 'cbu.uz сайтида лицензия мавжудлигини текшириш лозим.',
      ru: 'Проверяется через публичный реестр лицензированных финорганизаций на сайте cbu.uz.',
      en: 'Cross-reference entity in the official licensed institutions database on cbu.uz.',
    }
  },
  {
    id: 'res-phishing',
    name: 'Soxta davlat yordami, moddiy kompensatsiya va soxta bank botlari',
    urlExample: 'davlat-yordam-2026*.xyz, presidential-subsidy*.info, click-tasdiq*.cc',
    status: 'forbidden',
    category: 'scam_phishing',
    categoryTitle: {
      uz: 'Fishing va Soxta Davlat Xizmatlari',
      'uz-Cyrl': 'Фишинг ва Сохта Давлат Хизматлари',
      ru: 'Фишинг и фальшивые госуслуги',
      en: 'Phishing & Impersonation of State Portals',
    },
    shortDesc: {
      uz: "Telegram va ijtimoiy tarmoqlarda Prezident qarori, Pensiya jamg'armasi yoki banklar nomidan 'har bir fuqaroga 800 000 so'm moddiy yordam' tarqatuvchi fishing tuzoqlari.",
      'uz-Cyrl': 'Телеграмда Президент қарори ёки банк номидан ёлғон ёрдам пули ваъда қилувчи фишинглар.',
      ru: 'Поддельные ресурсы, маскирующиеся под указы Президента и банки с обещанием «социальных выплат каждому гражданину».',
      en: 'Lookalike pages impersonating government decrees promising cash payouts to steal banking tokens.',
    },
    risksOrBenefits: [
      {
        uz: "Foydalanuvchi kartasining 16 xonali raqami, amal qilish muddati va SMS-tasdiqlash kodini kiritishi bilan hisobidagi barcha pul yechib olinadi.",
        'uz-Cyrl': 'Карта маълумотлари ва SMS-кодни киритиш билан барча пул ечиб олинади.',
        ru: 'Мгновенное списание всех средств с привязанных банковских карт после ввода SMS-кода.',
        en: 'Instant drainage of bank accounts upon entering card credentials and OTP codes.',
      }
    ],
    legalBasis: "O'zbekiston Respublikasi JK 168-moddasi (Firibgarlik axborot texnologiyalaridan foydalanib sodir etilishi — 8 yilgacha ozodlikdan mahrum qilish).",
    warningSigns: [
      {
        uz: "Rasmiy '.gov.uz' yoki '.uz' domeni o'rniga bepul yoki shubhali '.xyz', '.online', '.cc' domenlari ishlatilishi.",
        'uz-Cyrl': 'Расмий .gov.uz ўрнига шубҳали .xyz ёки .online ишлатилиши.',
        ru: 'Использование доменов .xyz, .online, .top вместо официального национального домена .gov.uz.',
        en: 'Use of suspicious domain extensions (.xyz, .top, .online) instead of official .gov.uz.',
      },
      {
        uz: "Pul o'tkazish uchun SMS-dan kelgan sirli kodni talab qilish.",
        'uz-Cyrl': 'SMS орқали келган сирли кодни киритишни талаб қилиш.',
        ru: 'Требование ввести одноразовый секретный SMS-код для получения средств.',
        en: 'Requiring confidential SMS authentication code to receive imaginary grants.',
      }
    ],
    verificationMethod: {
      uz: "Davlat xizmatlari va moddiy yordamlar faqat va faqat rasmiy my.gov.uz portali orqali amalga oshiriladi.",
      'uz-Cyrl': 'Барча давлат ёрдамлари фақат my.gov.uz орқали берилади.',
      ru: 'Все официальные субсидии и госуслуги оформляются исключительно на портале my.gov.uz.',
      en: 'Legitimate social subsidies are distributed strictly through the official my.gov.uz portal.',
    }
  },
  {
    id: 'res-mygov',
    name: 'my.gov.uz (Yagona interaktiv davlat xizmatlari portali)',
    urlExample: 'https://my.gov.uz',
    status: 'permitted',
    category: 'safe_gov',
    categoryTitle: {
      uz: 'Rasmiy Davlat Portali',
      'uz-Cyrl': 'Расмий Давлат Портали',
      ru: 'Официальный госпортал',
      en: 'Official Government Portal',
    },
    shortDesc: {
      uz: "O'zbekiston fuqarolari va talabalari uchun 700+ davlat xizmatlarini (diplom, talabalik ma'lumotnomasi, subsidiyalar, yashash joyi) xavfsiz taqdim etuvchi yagona markaz.",
      'uz-Cyrl': 'Ўзбекистон фуқаролари учун барча давлат хизматларини хавфсиз тақдим этувчи ягона портал.',
      ru: 'Единый портал интерактивных государственных услуг Узбекистана с высшим уровнем криптографической защиты данных.',
      en: 'Single Interactive State Services Portal of Uzbekistan with certified cryptographic data protection.',
    },
    risksOrBenefits: [
      {
        uz: "OneID (Yagona identifikatsiya tizimi) orqali xavfsiz autentifikatsiya.",
        'uz-Cyrl': 'OneID орқали юқори даражадаги хавфсиз тизим.',
        ru: 'Защищенная биометрическая и двухфакторная аутентификация через OneID.',
        en: 'Secured two-factor biometric authentication via national OneID framework.',
      },
      {
        uz: "Qonuniy kuchga ega elektron hujjatlar va QR-kodli ma'lumotnomalar olish.",
        'uz-Cyrl': 'Қонуний электрон ҳужжатлар олиш имконияти.',
        ru: 'Формирование юридически значимых электронных справок с защитным QR-кодом.',
        en: 'Generation of legally binding e-certificates with tamper-proof QR validation.',
      }
    ],
    legalBasis: "O'zbekiston Respublikasining 'Elektron hukumat to'g'risida'gi Qonuni.",
    verificationMethod: {
      uz: "Brauzer manzilida yashil qulf belgisi (SSL sertifikat) va aniq 'my.gov.uz' domeni ko'rinishi shart.",
      'uz-Cyrl': 'Манзилда аниқ my.gov.uz ва SSL хавфсизлик белгиси бўлиши керак.',
      ru: 'Проверяется по наличию защищенного HTTPS протокола и доменному имени строго my.gov.uz.',
      en: 'Verified by valid SSL security certificate and exact host address my.gov.uz.',
    }
  },
  {
    id: 'res-soliq',
    name: 'soliq.uz (O\'zbekiston Respublikasi Soliq Qo\'mitasi)',
    urlExample: 'https://soliq.uz',
    status: 'permitted',
    category: 'safe_gov',
    categoryTitle: {
      uz: 'Soliq va Iqtisodiy Nazorat',
      'uz-Cyrl': 'Солиқ ва Иқтисодий Назорат',
      ru: 'Налоговый и экономический контроль',
      en: 'Tax & Economic Oversight',
    },
    shortDesc: {
      uz: "Yashirin iqtisodiyotga qarshi kurash, 1% xarid keshbeki, shubhali kontragentlarni soliq qarzdorligi bo'yicha tekshirish va elektron hisob-fakturalar.",
      'uz-Cyrl': 'Яширин иқтисодиётга қарши кураш, 1% кэшбэк ва контрагентларни текшириш тизими.',
      ru: 'Официальный налоговый портал: проверка добросовестности партнеров, чек-кэшбэк и онлайн-декларирование.',
      en: 'National tax service: counterparty reliability screening, 1% retail cashback, and e-invoicing.',
    },
    risksOrBenefits: [
      {
        uz: "Tadbirkorlik sherigingizning 'soliq uzilishi' xavfini tekshirish va soxta korxonalardan himoyalanish.",
        'uz-Cyrl': 'Ҳамкорларнинг солиқ узилиши хавфини текшириш имкони.',
        ru: 'Инструмент «Проверь партнера» для оценки налоговых разрывов и благонадежности контрагента.',
        en: 'Free background screening of counterparties against insolvency and tax delinquencies.',
      },
      {
        uz: "Keshbek tizimi orqali chakana savdoda chek berishni talab qilib, iqtisodiy shaffoflikka hissa qo'shish.",
        'uz-Cyrl': 'Чек талаб қилиб, яширин иқтисодиётни қисқартиришга ҳисса қўшиш.',
        ru: 'Стимулирование фискализации розничной торговли через кэшбэк по чекам.',
        en: 'Encouraging receipt verification to eliminate cash shadow transactions.',
      }
    ],
    legalBasis: "O'zbekiston Respublikasi Soliq kodeksi.",
    verificationMethod: {
      uz: "Faqat '.gov.uz' davlat zonasidagi rasmiy sayt.",
      'uz-Cyrl': 'Фақат .gov.uz зонасидаги расмий сайт.',
      ru: 'Официальный государственный домен в зоне .uz.',
      en: 'Official state authority in the .gov.uz domain.',
    }
  },
  {
    id: 'res-cbu',
    name: 'cbu.uz & finlit.uz (Markaziy Bank va Finlit portali)',
    urlExample: 'https://cbu.uz, https://finlit.uz',
    status: 'permitted',
    category: 'safe_finance',
    categoryTitle: {
      uz: 'Rasmiy Moliyaviy Regulyator',
      'uz-Cyrl': 'Расмий Молиявий Регулятор',
      ru: 'Центральный банк и финграмотность',
      en: 'Central Bank & Financial Literacy',
    },
    shortDesc: {
      uz: "O'zbekiston pul-kredit siyosati, inflyatsiya statistikasi, litsenziyalangan banklar, to'lov tashkilotlari (Click, Payme, va h.k.) va mikromoliya tashkilotlarining to'liq rasmiy reyestri.",
      'uz-Cyrl': 'Ўзбекистон Марказий Банки, расмий валюта курслари ва молиявий ташкилотлар реестри.',
      ru: 'Официальный сайт регулятора: реестры банков, платежных систем, официальные курсы валют и проект Finlit.',
      en: 'Central Bank registry of licensed credit institutions, approved fintech providers, and consumer protection.',
    },
    risksOrBenefits: [
      {
        uz: "Biror bank yoki kredit tashkilotiga pul qo'yishdan oldin uning davlat litsenziyasini tekshirishning yagona ishonchli manbai.",
        'uz-Cyrl': 'Молиявий ташкилотнинг лицензиясини текширишнинг ягона манбаи.',
        ru: 'Единственный достоверный источник проверки законности любого банка или инвестиционной компании.',
        en: 'The definitive public database verifying whether a financial firm possesses a valid banking license.',
      }
    ],
    legalBasis: "O'zbekiston Respublikasining 'O'zbekiston Respublikasining Markaziy banki to'g'risida'gi Qonuni.",
    verificationMethod: {
      uz: "Markaziy bankning rasmiy veb-sayti va 'cbu.uz' domeni.",
      'uz-Cyrl': 'Марказий банкнинг cbu.uz расмий домени.',
      ru: 'Официальный адрес государственного регулятора cbu.uz.',
      en: 'Official regulatory domain cbu.uz.',
    }
  },
  {
    id: 'res-lexuz',
    name: 'lex.uz (Qonunchilik ma\'lumotlari milliy bazasi)',
    urlExample: 'https://lex.uz',
    status: 'permitted',
    category: 'safe_law',
    categoryTitle: {
      uz: 'Milliy Huquqiy Baza',
      'uz-Cyrl': 'Миллий Ҳуқуқий База',
      ru: 'Национальная правовая база',
      en: 'National Legislation Database',
    },
    shortDesc: {
      uz: "O'zbekiston Respublikasining barcha Qonunlari, Prezident Farmonlari, Hukumat qarorlari va xalqaro shartnomalarning asl, rasmiy matnlari.",
      'uz-Cyrl': 'Ўзбекистоннинг барча қонунлари ва Президент фармонларининг расмий манбаи.',
      ru: 'Эталонная база данных законодательства Республики Узбекистан под эгидой Министерства юстиции.',
      en: 'Official normative legal repository maintained by the Ministry of Justice of the Republic of Uzbekistan.',
    },
    risksOrBenefits: [
      {
        uz: "Iqtisodiy xavfsizlikka oid har qanday yangi qonun, cheklov va imtiyozlarning asl manbasini bepul va to'liq o'qish.",
        'uz-Cyrl': 'Барча иқтисодий қонунларни тўлиқ ва бепул ўқиш манбаи.',
        ru: 'Бесплатный доступ к подлинным актуальным редакциям кодексов и законов.',
        en: 'Free unlimited access to verified and updated articles of commercial, criminal, and tax codes.',
      }
    ],
    legalBasis: "O'zbekiston Respublikasining 'Normativ-huquqiy hujjatlar to'g'risida'gi Qonuni.",
    verificationMethod: {
      uz: "Adliya vazirligi tomonidan yuritiladigan rasmiy davlat axborot tizimi.",
      'uz-Cyrl': 'Адлия вазирлиги томонидан юритиладиган тизим.',
      ru: 'Государственная система Министерства юстиции.',
      en: 'Administered under the direct stewardship of the Ministry of Justice.',
    }
  },
  {
    id: 'res-eauksion',
    name: 'e-auksion.uz (Elektron onlayn-auksionlar platformasi)',
    urlExample: 'https://e-auksion.uz',
    status: 'permitted',
    category: 'safe_gov',
    categoryTitle: {
      uz: 'Shaffof Savdo Tizimi',
      'uz-Cyrl': 'Шаффоф Савдо Тизими',
      ru: 'Прозрачная торговая площадка',
      en: 'Transparent E-Auction System',
    },
    shortDesc: {
      uz: "Davlat aktivlari, yer uchastkalari, avtomobil raqamlari va ijara huquqlarini inson omilisiz, shaffof elektron savdo orqali sotib olish platformasi.",
      'uz-Cyrl': 'Давлат активлари ва ерларни шаффоф аукцион орқали олиш тизими.',
      ru: 'Государственная электронная площадка для открытых торгов госимуществом, землей и правами аренды.',
      en: 'Automated state auction portal eliminating intermediary corruption in public asset transactions.',
    },
    risksOrBenefits: [
      {
        uz: "Tadbirkorlikda poraxo'rlik va tanish-bilishchilikni bartaraf etuvchi to'liq avtomatlashtirilgan ochiq raqobat.",
        'uz-Cyrl': 'Коррупция ва таниш-билишчиликка йўл қўймайдиган тизим.',
        ru: 'Полное исключение коррупционных факторов за счет автоматического блокчейн-протоколирования ставок.',
        en: 'Total elimination of human discretion through audited electronic bidding.',
      }
    ],
    legalBasis: "O'zbekiston Respublikasi Prezidentining 'Elektron onlayn-auksionlarni tashkil etish to'g'risida'gi Farmoni.",
    verificationMethod: {
      uz: "Davlat aktivlarini boshqarish agentligi qoshidagi 'Elektron onlayn-auksionlarni tashkil etish' AJ.",
      'uz-Cyrl': 'Давлат активларини бошқариш агентлиги тизими.',
      ru: 'Официальный оператор АО «Электронные онлайн-аукционы».',
      en: 'Operated by the State Assets Management Agency of Uzbekistan.',
    }
  }
];

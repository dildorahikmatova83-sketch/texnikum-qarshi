import { MacroScenario, ScamDetectorScenario, EnterpriseCase } from '../types';

export const MACRO_SCENARIOS: MacroScenario[] = [
  {
    id: 1,
    title: {
      uz: "Jahon bozorida bug'doy va oziq-ovqat narxlarining 35% ga sakrashi",
      'uz-Cyrl': 'Жаҳон бозорида буғдой ва озиқ-овқат нархларининг 35% га сакраши',
      ru: 'Скачок мировых цен на пшеницу и продовольствие на 35%',
      en: 'Global 35% Surge in Wheat & Staple Food Commodity Prices',
    },
    description: {
      uz: "Qurg'oqchilik va geosiyosiy keskinlik sababli import qilinadigan un va don mahsulotlari narxi keskin oshdi. Ichki bozorda non va go'sht narxining ko'tarilish xavfi paydo bo'ldi. Qanday strategiya tanlaysiz?",
      'uz-Cyrl': 'Қурғоқчилик сабабли импорт қилинадиган дон нархи ошди. Ички бозорда нархлар кўтарилиш хавфи бор.',
      ru: 'Из-за засухи и кризиса логистики мировые цены на пшеницу подскочили. Возник риск скачка цен на хлеб и базовые продукты.',
      en: 'Severe drought and shipping bottlenecks triggered a 35% spike in grain prices. Domestic bread affordability is jeopardized.',
    },
    tag: {
      uz: 'Oziq-ovqat xavfsizligi',
      'uz-Cyrl': 'Озиқ-овқат хавфсизлиги',
      ru: 'Продовольственная безопасность',
      en: 'Food Security',
    },
    choices: [
      {
        text: {
          uz: "Davlat strategik don zaxiralarini ichki birjaga chiqarish va asosiy oziq-ovqat importiga vaqtinchalik boj stavkasini 0% ga tushirish",
          'uz-Cyrl': 'Давлат дон захираларини биржага чиқариш ва импорт божини 0% га тушириш',
          ru: 'Выброс госрезервов зерна на внутреннюю биржу и обнуление таможенных пошлин на импорт продовольствия',
          en: 'Release strategic state grain reserves onto domestic exchange and reduce food import tariffs to 0%',
        },
        impact: {
          inflation: -1.2,
          reserves: -0.8,
          budgetDeficit: +0.4,
          foodSecurityIndex: +12,
          publicTrust: +8,
        },
        feedback: {
          uz: "Ajoyib strategik qaror! Bozordagi taklif ko'paydi, chayqovchilar narxni oshira olmadi va aholi sarosimaga tushmadi. Kichik zaxira xarajati xalq farovonligini saqlab qoldi.",
          'uz-Cyrl': 'Ажойиб қарор! Бозорда таклиф кўпайди, сунъий нарх ошишининг олди олинди.',
          ru: 'Отличное решение! Предложение насытило рынок, спекуляции остановлены, потребительские цены стабилизировались.',
          en: 'Outstanding intervention! Flooding the exchange with reserves neutralized speculative price hikes while 0% tariffs diversified inflow.',
        },
        economicTheory: {
          uz: "Pigu va Keyns nazariyasi: Davlat intervensiyasi orqali sun'iy taqchillikni sindirish va agregat taklifni (Aggregate Supply) kengaytirish.",
          'uz-Cyrl': 'Пигу ва Кейнс назарияси: Давлат интервенцияси орқали нархни барқарорлаштириш.',
          ru: 'Кейнсианская интервенция: расширение совокупного предложения через товарные интервенции сглаживает ценовой шок.',
          en: 'Keynesian market stabilization: expanding aggregate supply via strategic buffer stocks eliminates speculative bubbles.',
        }
      },
      {
        text: {
          uz: "Bozorga qat'iy ma'muriy narx nazorati (barcha do'konlarda narxni majburiy muzlatish) joriy etish",
          'uz-Cyrl': 'Бозорда нархларни мажбурий музлатиш чорасини қўллаш',
          ru: 'Ввести жесткое директивное замораживание цен на прилавках',
          en: 'Impose strict state price caps and mandatory retail price freezing',
        },
        impact: {
          inflation: +2.5,
          reserves: 0,
          budgetDeficit: +0.8,
          foodSecurityIndex: -18,
          publicTrust: -15,
        },
        feedback: {
          uz: "Xato! Narxlarni sun'iy muzlatish natijasida do'konlarda mahsulot g'oyib bo'ldi, 'qora bozor' va uzun navbatlar paydo bo'ldi. Yashirin iqtisodiyot keskin o'sdi.",
          'uz-Cyrl': 'Хато! Нархни музлатиш қора бозор ва тақчилликни келтириб чиқарди.',
          ru: 'Провал! Директивные цены привели к исчезновению муки с полок, процветанию черного рынка и спекуляции.',
          en: 'Critical error! Price ceilings caused immediate retail shortages, empty shelves, hoarding, and flourishing black markets.',
        },
        economicTheory: {
          uz: "Klassik iqtisodiyot qonuni: Narx chegaralari (Price Ceilings) muqarrar taqchillik (Deficit) va noqonuniy savdoga olib keladi.",
          'uz-Cyrl': 'Классик қонун: Нархни мажбурий чеклаш тақчилликка олиб келади.',
          ru: 'Закон спроса и предложения: искусственный потолок цен всегда порождает дефицит и теневую торговлю.',
          en: 'Price ceiling theory: artificial caps below equilibrium guarantee shortages and non-price rationing.',
        }
      },
      {
        text: {
          uz: "Hech qanday chora ko'rmaslik, bozor o'zini o'zi tartibga solishini kutish",
          'uz-Cyrl': 'Ҳеч нарса қилмаслик, бозор ўзи ҳал қилишини кутиш',
          ru: 'Не вмешиваться, надеясь на автоматическую саморегуляцию рынка',
          en: 'Take no state action, relying on invisible hand of market self-adjustment',
        },
        impact: {
          inflation: +4.2,
          reserves: 0,
          budgetDeficit: 0,
          foodSecurityIndex: -10,
          publicTrust: -22,
        },
        feedback: {
          uz: "Xavfli passivlik! Narxlar erkin oshib ketdi, kam ta'minlangan qatlam qiyin ahvolda qoldi va aholining ijtimoiy noroziligi keskin kuchaydi.",
          'uz-Cyrl': 'Хавфли ҳаракатсизлик! Нархлар ошиб, кам таъминланганлар қийналди.',
          ru: 'Опасное бездействие! Инфляция ударила по уязвимым слоям, индекс доверия рухнул.',
          en: 'Hazardous inaction! Unchecked food inflation severely eroded real wages for the most vulnerable citizens.',
        },
        economicTheory: {
          uz: "Ijtimoiy-iqtisodiy adolat nazariyasi: Oziq-ovqat kabi birlamchi ehtiyoj tovarlarida davlat regulyatsiyasi bo'lmasa, ijtimoiy beqarorlik yuzaga keladi.",
          'uz-Cyrl': 'Ижтимоий адолат назарияси: Давлат ижтимоий ҳимояни таъминлаши шарт.',
          ru: 'Теория общественных благ: продовольственная безопасность требует активного участия государства.',
          en: 'Public goods economics: food stability is a non-negotiable prerequisite for socio-political equilibrium.',
        }
      }
    ]
  },
  {
    id: 2,
    title: {
      uz: "Tashqi valyuta bosimi va dollar kursining keskin tebranishi",
      'uz-Cyrl': 'Ташқи валюта босими ва доллар курсининг кескин тебраниши',
      ru: 'Внешнее валютное давление и резкие колебания курса доллара',
      en: 'External Currency Shock and Forex Volatility Pressure',
    },
    description: {
      uz: "Qo'shni savdo hamkorlarining milliy valyutalari devalvatsiyaga uchradi. O'zbekiston so'miga nisbatan spekulyativ bosim kuchaydi. Eksportchilar va importchilar muvozanati buzilish xavfi ostida.",
      'uz-Cyrl': 'Савдо ҳамкорлар валютаси қадрсизланди. Сўмга нисбатан босим кучайди.',
      ru: 'Валюты ключевых торговых партнеров девальвировались. Усилилось спекулятивное давление на сум.',
      en: 'Currencies of regional trading partners depreciated. Speculative pressures threaten foreign trade terms.',
    },
    tag: {
      uz: 'Pul-kredit xavfsizligi',
      'uz-Cyrl': 'Пул-кредит хавфсизлиги',
      ru: 'Монетарная безопасность',
      en: 'Monetary Defense',
    },
    choices: [
      {
        text: {
          uz: "Markaziy bank asosiy stavkasini 1.5% ga oshirish, omonat foizlarini jozibador qilish va valyuta kursini bozor tamoyiliga ko'ra moslashuvchan ushlash",
          'uz-Cyrl': 'Асосий ставкани 1.5% га ошириш ва омонатларни рағбатлантириш',
          ru: 'Повысить ключевую ставку на 1.5%, защитить вклады в сумах и сохранить гибкий плавающий курс',
          en: 'Hike Central Bank policy rate by 1.5%, enhance domestic deposit yields, and maintain managed flexible floating exchange rate',
        },
        impact: {
          inflation: -0.9,
          reserves: -0.3,
          budgetDeficit: +0.2,
          foodSecurityIndex: +2,
          publicTrust: +6,
        },
        feedback: {
          uz: "Klassik to'g'ri chora! Aholi pullarini bankdagi so'm omonatlarida saqlashda davom etdi, valyuta chayqovchiligi susaydi va eksport raqobatbardoshligi saqlab qolindi.",
          'uz-Cyrl': 'Тўғри қарор! Омонатлар сақланди, валюта чайқовchiligi сусайди.',
          ru: 'Грамотное решение! Привлекательные ставки удержали сбережения в национальной валюте, спекулятивная атака отбита.',
          en: 'Textbook central banking! High deposit yields retained savings in domestic currency, dampening speculative dollar runs.',
        },
        economicTheory: {
          uz: "Fisher effekti va Pul-kredit targetlash: Foiz stavkasi vositasida pul massasini boshqarish va valyuta spekulyatsiyasini jilovlash.",
          'uz-Cyrl': 'Фишер эффекти: Фоиз ставкаси ёрдамида пул бозорини бошқариш.',
          ru: 'Эффект Фишера: управление реальными процентными ставками стабилизирует валютный рынок без сжигания резервов.',
          en: 'Fisher effect and interest parity: positive real rates curb capital flight without squandering sovereign reserves.',
        }
      },
      {
        text: {
          uz: "Barcha oltin-valyuta zaxiralarini sarflab, dollar kursini eski nuqtada qat'iy ushlab turish",
          'uz-Cyrl': 'Барча захираларни сарфлаб курсни эски ҳолатда ушлаш',
          ru: 'Сжечь резервы на интервенции ради фиксации прежнего курса любой ценой',
          en: 'Burn state forex reserves on massive interventions to peg the rate artificially',
        },
        impact: {
          inflation: +1.5,
          reserves: -6.5,
          budgetDeficit: +1.8,
          foodSecurityIndex: -8,
          publicTrust: -14,
        },
        feedback: {
          uz: "Xavfli xato! Bir necha milliard dollar zaxira havoga uchdi, ammo bozor baribir o'z darajasiga chiqdi. Mamlakatning strategik moliyaviy immuniteti keskin zaiflashdi.",
          'uz-Cyrl': 'Хато! Миллиардлаб доллар захира бекорга сарфланди, иқтисодий хавф ошди.',
          ru: 'Катастрофическая ошибка! Резервы истощены, а неизбежная девальвация произошла позже, но с еще более разрушительной силой.',
          en: 'Disastrous mistake! Burning billions in reserves to defy market fundamentals only leaves sovereign coffers depleted.',
        },
        economicTheory: {
          uz: "Krugman birinchi avlod valyuta inqirozlari modeli: Qat'iy kursni zaxiralar hisobidan himoyalash zaxiralar tugashi bilan defoltga olib keladi.",
          'uz-Cyrl': 'Кругман модели: Захираларни сунъий сарфлаш молиявий инқирозга олиб келади.',
          ru: 'Модель валютных кризисов Кругмана: попытка удержать завышенный курс интервенциями истощает резервы регулятора.',
          en: 'Krugman currency crisis model: artificial pegs depleted through reserve interventions end in catastrophic speculative attacks.',
        }
      }
    ]
  },
  {
    id: 3,
    title: {
      uz: "Bank tizimiga uyushtirilgan koordinatsiyalangan kiberhujum",
      'uz-Cyrl': 'Банк тизимига уюштирилган координацияланган киберҳужум',
      ru: 'Скоординированная кибератака на платежные шлюзы банков',
      en: 'Coordinated Cyberattack on National Banking Infrastructure',
    },
    description: {
      uz: "Xakerlar guruhi to'lov ilovalari va banklararo tranzaksiyalar tarmog'iga DDoS hujum qildi. Ijtimoiy tarmoqlarda 'barcha kartalar bloklanadi' degan soxta mish-mishlar tarqatilmoqda.",
      'uz-Cyrl': 'Хакерлар тўлов тизимларига ҳужум қилди. Ижтимоий тармоқларда ваҳима тарқалмоқда.',
      ru: 'DDoS-атака парализовала процессинг карт. В мессенджерах запущены фейки о «заморозке всех счетов».',
      en: 'DDoS assault and intrusion attempts hit payment processing backbones alongside viral panic disinformation on social channels.',
    },
    tag: {
      uz: 'Kiber-iqtisodiy xavfsizlik',
      'uz-Cyrl': 'Кибер-иқтисодий хавфсизлик',
      ru: 'Кибербезопасность',
      en: 'Cyber Defense',
    },
    choices: [
      {
        text: {
          uz: "Zaxira kiberhimoya serverlarini ishga tushirish, Markaziy bank orqali zudlik bilan rasmiy rad etish bayonoti berish va barcha tranzaksiya ma'lumotlari daxlsiz ekanini e'lon qilish",
          'uz-Cyrl': 'Захира серверларни ишга тушириш ва расмий баёнот бериш',
          ru: 'Запустить резервные шлюзы защиты, выпустить экстренный официальный видео-брифинг ЦБ и опровергнуть панические слухи',
          en: 'Failover to redundant security scrubbing nodes, broadcast an immediate Central Bank reassurance briefing confirming fund integrity',
        },
        impact: {
          inflation: 0,
          reserves: -0.1,
          budgetDeficit: +0.1,
          foodSecurityIndex: 0,
          publicTrust: +12,
        },
        feedback: {
          uz: "Namunali inqiroz boshqaruvi! Zaxira himoya tarmoqlari hujumni qaytardi, shaffof va tezkor xabar berish esa banklardan omonatlarni ommaviy yechib olish sarosimasining (Bank Run) oldini oldi.",
          'uz-Cyrl': 'Аъло! Ҳужум қайтарилди, аҳоли ваҳимага берилмади.',
          ru: 'Блестящее антикризисное управление! Техническая защита отразила атаку, а открытая коммуникация предотвратила набег на банки.',
          en: 'Superb crisis leadership! Rapid failover isolated the malicious traffic while transparent communication averted a devastating bank run.',
        },
        economicTheory: {
          uz: "Moliyaviy institutlarga ishonch nazariyasi (Bank Run prevention): Shaffof axborot asossiz sarosimani sindiradi.",
          'uz-Cyrl': 'Банк тизимига ишонч назарияси: Тезкор ахборот ваҳимани тўхтатади.',
          ru: 'Теория Даймонда-Дибвига: предотвращение панического набега на банки через государственные гарантии и открытость.',
          en: 'Diamond-Dybvig banking model: asymmetric panic information triggers runs unless halted by prompt official credibility.',
        }
      }
    ]
  }
];

export const SCAM_DETECTOR_SCENARIOS: ScamDetectorScenario[] = [
  {
    id: 1,
    sourceType: 'sms',
    senderOrUrl: '+998901234567 (SMS)',
    messageContent: {
      uz: "Hurmatli fuqaro! Sizga davlat tomonidan 1 450 000 so'm bir martalik moddiy yordam ajratildi. Mablag'ni kartangizga qabul qilish uchun havola orqali o'ting: https://davlat-yordam-2026.xyz/bonus",
      'uz-Cyrl': 'Ҳурматли фуқаро! Сизга 1 450 000 сўм моддий ёрдам ажратилди. Қабул қилиш учун ҳаволага ўтинг: https://davlat-yordam-2026.xyz/bonus',
      ru: 'Уважаемый гражданин! Вам начислена материальная помощь 1 450 000 сум. Для зачисления на карту перейдите по ссылке: https://davlat-yordam-2026.xyz/bonus',
      en: 'Dear citizen! You have been granted a state subsidy of 1,450,000 Soum. To deposit into your card, click: https://davlat-yordam-2026.xyz/bonus',
    },
    isScam: true,
    threatLevel: 'critical',
    scamType: {
      uz: 'Davlat subsidiyasi niqobidagi fishing',
      'uz-Cyrl': 'Давлат ёрдами ниқобидаги фишинг',
      ru: 'Фишинг под видом государственной выплаты',
      en: 'Phishing under cover of government subsidy',
    },
    redFlags: [
      {
        uz: "Domen '.gov.uz' emas, balki shubhali '.xyz' bilan tugagan.",
        'uz-Cyrl': 'Домен .gov.uz эмас, .xyz билан тугаган.',
        ru: 'Используется поддельный домен зоны .xyz вместо государственного .gov.uz.',
        en: 'Deceptive domain suffix (.xyz) instead of official sovereign .gov.uz.',
      },
      {
        uz: "Oddiy mobil raqamdan (+99890...) yuborilgan, rasmiy davlat SMS-alfa nomi yo'q.",
        'uz-Cyrl': 'Давлат номидан эмас, оддий мобил рақамдан юборилган.',
        ru: 'Отправлено с обычного частного мобильного номера, а не от государственного буквенного отправителя.',
        en: 'Sent from an ordinary cell number rather than an official registered government SMS alphanumeric ID.',
      },
      {
        uz: "Davlat hech qachon shaxsiy kartaga pul tashlab berish uchun tashqi saytga kirishni talab qilmaydi.",
        'uz-Cyrl': 'Давлат ташқи сайт орқали пул тўламайди.',
        ru: 'Госорганы не запрашивают переход на сторонние страницы для начисления выплат.',
        en: 'Public agencies never request citizens to submit card credentials on external links.',
      }
    ],
    expertExplanation: {
      uz: "Bu fishing tuzog'idir. Ushbu saytga kirganingizda kartangizning 16 xonali raqami, amal qilish muddati va eng muhimi — SMS-tasdiqlash kodi so'raladi. Uni kiritishingiz bilanoq kartangizdagi barcha mablag' firibgarlar hisobiga yechib olinadi.",
      'uz-Cyrl': 'Бу фишинг сайти. Унда карта маълумотлари ва SMS-код сўралиб, барча пулингиз ўғирланади.',
      ru: 'Это классический фишинг. Страница имитирует госуслуги с целью выманивания номера карты, срока действия и одноразового SMS-пароля для хищения всех средств.',
      en: 'Classic financial credential-harvesting trap. The phishing landing page steals full card numbers, CVVs, and authorization OTPs to instantaneously empty the bank balance.',
    },
    legalNote: "O'zbekiston Respublikasi JK 168-moddasi (Firibgarlik). Bunday xabarlarni ichki ishlar organlarining kiberxavfsizlik bo'limiga xabar qilish zarur.",
  },
  {
    id: 2,
    sourceType: 'url',
    senderOrUrl: 'https://my.gov.uz/uz/service/view/421',
    messageContent: {
      uz: "Oliy ta'lim muassasalaridan talabalik to'g'risida ma'lumotnoma olish xizmati. Ariza berish bepul va OneID orqali avtorizatsiya qilinadi.",
      'uz-Cyrl': 'Олий таълим муассасаларидан талабалик тўғрисида маълумотнома олиш хизмати. OneID орқали кирилади.',
      ru: 'Услуга получения справки об обучении в вузе. Подача заявки бесплатна, авторизация через национальную систему OneID.',
      en: 'Official service for generating university student enrollment verification. Application is free and authenticated via OneID.',
    },
    isScam: false,
    threatLevel: 'none',
    redFlags: [],
    expertExplanation: {
      uz: "Bu 100% xavfsiz va rasmiy manba. Domen aniq 'my.gov.uz' bo'lib, davlat interaktiv xizmatlarining rasmiy portali hisoblanadi. Ma'lumotlar shifrlangan va xavfsiz himoyalangan.",
      'uz-Cyrl': 'Бу 100% хавфсиз ва расмий my.gov.uz давлат хизматлари сайти.',
      ru: 'Это полностью легитимный и безопасный ресурс: правильный домен gov.uz, валидный SSL-сертификат и интеграция с единой системой OneID.',
      en: 'Completely legitimate and secure resource: authentic .gov.uz sovereign domain, valid digital TLS certificate, and authorized OneID federation.',
    },
    legalNote: "O'zbekiston Respublikasining 'Elektron hukumat to'g'risida'gi Qonuniga muvofiq rasmiy axborot tizimi.",
  },
  {
    id: 3,
    sourceType: 'telegram',
    senderOrUrl: '@Uzbekneftgaz_Invest_Profit_Bot',
    messageContent: {
      uz: "🚀 'O'zbekneftgaz' aksiyadorlik kompaniyasining maxsus dasturi! Bugunoq 300 000 so'm kiriting va har kuni kafolatlangan 90 000 so'm daromad oling! Litsenziya №998-A. Bot orqali to'lov qiling!",
      'uz-Cyrl': '🚀 Ўзбекнефтгаз акциялари орқали кунига 90 000 сўм даромад олинг! Бот орқали пул киритинг!',
      ru: '🚀 Спецпрограмма от «Узбекнефтегаз»! Вложите 300 000 сум и получайте гарантированно по 90 000 сум каждый день! Оплата через бот!',
      en: '🚀 Special program by "Uzbekneftegaz"! Invest 300,000 Soum today and earn guaranteed 90,000 Soum daily passive income! Pay via bot!',
    },
    isScam: true,
    threatLevel: 'critical',
    scamType: {
      uz: 'Davlat kompaniyasi niqobidagi moliyaviy piramida',
      'uz-Cyrl': 'Давлат компанияси номидан фирибгарлик',
      ru: 'Финансовая пирамида под брендом госкомпании',
      en: 'Ponzi scheme impersonating a state corporation',
    },
    redFlags: [
      {
        uz: "Kuniga 30% daromad va'da qilinmoqda — bu iqtisodiy jihatdan real bo'lmagan, imkonsiz yolg'on.",
        'uz-Cyrl': 'Кунига 30% даромад ваъдаси — ёлғон.',
        ru: 'Обещание ежедневной доходности в 30% — математически невозможный обман.',
        en: 'Promising 30% daily yield is economically impossible and a definitive signature of fraud.',
      },
      {
        uz: "'O'zbekneftgaz' AJ hech qachon Telegram-bot orqali pul yig'maydi. Aksiyalar faqat 'Toshkent' Respublika fond birjasida rasmiy brokerlar orqali sotiladi.",
        'uz-Cyrl': 'Ўзбекнефтгаз телеграм орқали пул йиғмайди, акциялар фақат фонд биржасида сотилади.',
        ru: 'Госкомпании продают акции только через лицензированных биржевых брокеров на фондовой бирже РФБ «Тошкент».',
        en: 'State enterprises never crowd-fund deposits via Telegram bots. Securities are traded exclusively via licensed brokers on the Tashkent Stock Exchange.',
      }
    ],
    expertExplanation: {
      uz: "Firibgarlar taniqli davlat kompaniyalari (O'zbekneftgaz, Navoiy kon-metallurgiya kombinati) nomlaridan foydalanib, fuqarolarni chuv tushirmoqda. Botga kiritilgan pul shaxsiy dropper kartalariga o'tib, qaytarib bo'lmaydi.",
      'uz-Cyrl': 'Фирибгарлар давлат компаниялари номи билан одамларни алдамоқда.',
      ru: 'Мошенники используют авторитетные бренды национальных гигантов для выманивания денег на карты дропперов.',
      en: 'Perpetrators exploit reputable state conglomerates to mislead gullible citizens into transferring deposits to mule accounts.',
    },
    legalNote: "O'zbekiston Respublikasi JK 188-1-moddasi (Noqonuniy investitsiya jalb qilish).",
  },
  {
    id: 4,
    sourceType: 'sms',
    senderOrUrl: 'CLICK (Rasmiy SMS)',
    messageContent: {
      uz: "Tasdiqlash kodi: 8492. Xavfsizlik qoidasi: ushbu kodni HECH KIMGA, hatto CLICK yoki bank xodimiga ham aytmang!",
      'uz-Cyrl': 'Тасдиқлаш коди: 8492. Ушбу кодни ҲЕЧ КИМГА, ҳатто CLICK ходимига ҳам айтманг!',
      ru: 'Код подтверждения: 8492. Внимание: НИКОМУ не сообщайте этот код, даже сотрудникам CLICK или банка!',
      en: 'Verification code: 8492. Security notice: NEVER disclose this code to ANYONE, including CLICK or bank staff!',
    },
    isScam: false,
    threatLevel: 'none',
    redFlags: [],
    expertExplanation: {
      uz: "Bu to'lov tizimining haqiqiy xavfsizlik SMS xabari. E'tibor bering: xabarning o'zida ham bu kodni hech kimga aytmaslik qat'iy ogohlantirilgan. Agar bu vaqtda siz hech qanday amal bajarmagan bo'lsangiz, demak kimdir hisobingizga kirishga urinmoqda — kodni hech kimga bermang!",
      'uz-Cyrl': 'Бу тўлов тизимининг ҳақиқий SMS хабари. Кодни ҳеч кимга айтманг!',
      ru: 'Это подлинное SMS от официальной платежной системы с важным предупреждением о конфиденциальности одноразового пароля.',
      en: 'Authentic security transaction dispatch. Crucially, the system itself explicitly cautions never to share this passcode with any human agent.',
    },
    legalNote: "To'lov xizmatlari va to'lov tizimlari to'g'risidagi qonunchilik talablari.",
  }
];

export const ENTERPRISE_CASES: EnterpriseCase[] = [
  {
    id: 1,
    title: {
      uz: "Shubhali xarid tenderi: Bosh hisobchining qarindoshi",
      'uz-Cyrl': 'Шубҳали харид тендери: Бош ҳисобчининг қариндоши',
      ru: 'Подозрительный тендер: Фирма родственника главбуха',
      en: 'Suspicious Procurement: CFO Relative Shell Vendor',
    },
    department: {
      uz: "Ta'minot va Davlat xaridlari",
      'uz-Cyrl': 'Таъминот ва Давлат харидлари',
      ru: 'Снабжение и корпоративные закупки',
      en: 'Supply Chain & Procurement',
    },
    situation: {
      uz: "Katta ishlab chiqarish korxonasi kompyuter va server uskunalari sotib olish uchun tender e'lon qildi. Eng past narx taklif qilgan 'Tech-Advance MChJ' kompaniyasi 10 kun oldin ochilgan, bosh buxgalterning yaqin qarindoshi ta'sischiligida va 100% oldindan to'lov talab qilmoqda.",
      'uz-Cyrl': 'Корхона серверлар сотиб олиш учун тендер эълон қилди. 10 кун олдин очилган янги фирма 100% олдиндан пул сўрамоқда.',
      ru: 'Предприятие закупает серверное оборудование. Победителем с наименьшей ценой признано ООО, открытое 10 дней назад родственником главбуха и требующее 100% предоплату.',
      en: 'Enterprise is procuring server hardware. The lowest bidder was incorporated 10 days ago by the CFOs close relative, demanding 100% advance wire.',
    },
    evidence: [
      {
        uz: "Tadbirkorlik sub'ekti ro'yxatdan o'tganiga endi 10 kun bo'lgan, moddiy-texnik bazasi va ombori yo'q.",
        'uz-Cyrl': 'Корхона очилганига 10 кун бўлган, омбори ва ходимлари йўқ.',
        ru: 'Регистрация 10 дней назад, нулевой штат, отсутствие склада и авторизации от вендоров.',
        en: 'Registered 10 days prior, zero personnel, no warehouse infrastructure or vendor authorizations.',
      },
      {
        uz: "Korxona ichki komplayens qoidalariga zid ravishda manfaatlar to'qnashuvi mavjud.",
        'uz-Cyrl': 'Манфаатлар тўқнашуви яширилган.',
        ru: 'Скрытый конфликт интересов, нарушающий антикоррупционный регламент ISO 37001.',
        en: 'Hidden conflict of interest in direct violation of ISO 37001 compliance directives.',
      }
    ],
    options: [
      {
        text: {
          uz: "Tenderni darhol to'xtatish, manfaatlar to'qnashuvi bo'yicha xizmat tekshiruvi o'tkazish va faqat litsenziyaga ega rasmiy dilerlarni jalb qilish",
          'uz-Cyrl': 'Тендерни тўхтатиб, хизмат текшируви тайинлаш',
          ru: 'Немедленно аннулировать итоги тендера, начать служебное расследование конфликта интересов и привлечь официальных дилеров',
          en: 'Cancel tender immediately, initiate an internal compliance audit for conflict of interest, and source from verified official distributors',
        },
        riskScore: 5,
        isOptimal: true,
        consequence: {
          uz: "A'lo natija! Korxona 500 million so'mlik asossiz xarajatdan va soxta kontragent aldovidan saqlab qolindi.",
          'uz-Cyrl': 'Аъло! Корхона 500 миллион сўмлик зарардан сақлаб қолинди.',
          ru: 'Отличный результат! Предотвращен вывод 500 млн сумов на фирму-однодневку.',
          en: 'Superb outcome! Shielded the company from a 500M Soum embezzlement scheme and counterfeit hardware delivery.',
        }
      },
      {
        text: {
          uz: "Narx arzonligi uchun shartnomani imzolab, 100% pulni o'tkazib berish",
          'uz-Cyrl': 'Нарх арзонлиги учун пулни ўтказиб бериш',
          ru: 'Подписать договор из-за низкой цены и перечислить 100% аванс',
          en: 'Sign the contract to secure lowest quoted price and wire 100% advance',
        },
        riskScore: 95,
        isOptimal: false,
        consequence: {
          uz: "Katta fojia! 'Tech-Advance MChJ' pullarni yechib olib yo'q bo'ldi, uskunalar yetkazilmadi. Bosh hisobchi javobgarlikka tortildi.",
          'uz-Cyrl': 'Катта зарар! Фирма пулни олиб қочди, серверлар келмади.',
          ru: 'Катастрофа! Деньги обналичены и похищены, оборудование не поставлено, предприятие понесло колоссальные убытки.',
          en: 'Catastrophic failure! The shell company transferred the capital to offshore conduits and vanished without delivering servers.',
        }
      }
    ]
  }
];

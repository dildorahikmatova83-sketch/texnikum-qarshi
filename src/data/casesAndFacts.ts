import { CaseStudy, LocalizedString } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-uzb-forex',
    title: {
      uz: "O'zbekistonda valyuta bozorining liberallashuvi (2017): 'Qora bozor' ustidan g'alaba",
      'uz-Cyrl': 'Ўзбекистонда валюта бозорининг либераллашуви (2017)',
      ru: 'Либерализация валютного рынка в Узбекистане (2017): Ликвидация черного рынка',
      en: 'Forex Liberalization in Uzbekistan (2017): Dismantling the Dual Exchange Market',
    },
    region: 'uzbekistan',
    year: '2017 - Hozirgi davr',
    summary: {
      uz: "2017-yilgacha O'zbekistonda sun'iy rasmiy kurs va 'qora bozor' kursi o'rtasida 2 barobar farq bor edi. Bu korrupsiya, investitsiya to'xtashi va yashirin iqtisodiyot gullab-yashnashiga sabab bo'lgan.",
      'uz-Cyrl': '2017-йилгача расмий ва "қора бозор" курси ўртасида 2 баробар фарқ бўлиб, иқтисодиётни бўғиб турган.',
      ru: 'До 2017 года двойной курс валюты и дефицит конвертации душили прямые иностранные инвестиции и питали теневые схемы.',
      en: 'Prior to 2017, a 100% disparity between official pegged rates and street black-market rates crippled foreign capital inflows and fueled corruption.',
    },
    trigger: {
      uz: "Iqtisodiy turg'unlik va xorijiy investorlarning o'z foydasini xorijiy valyutada olib chiqa olmasligi.",
      'uz-Cyrl': 'Инвесторлар ўз даромадини олиб чиқа олмаслиги ва тизимли чекловлар.',
      ru: 'Невозможность свободной репатриации прибыли зарубежными компаниями и дефицит твердой валюты.',
      en: 'Inability of legitimate enterprises to repatriate profits and structural currency rationing.',
    },
    economicImpact: {
      uz: "Erkin konvertatsiya e'lon qilinishi bilan valyuta savdosi to'liq banklarga o'tdi. Eksport va import rasmiylashdi, xorijiy investitsiyalar hajmi 4 barobarga o'sdi.",
      'uz-Cyrl': 'Эркин конвертация савдони банкларга қайтарди ва инвестициялар 4 баробарга ошди.',
      ru: 'Переход к рыночному курсу вернул валютные потоки в банковский сектор, а объем прямых инвестиций вырос в 4 раза.',
      en: 'Floating unified exchange market redirected trillions of Soums into formal banking, quadupling FDI within three fiscal cycles.',
    },
    solutionAndLesson: {
      uz: "Iqtisodiy xavfsizlik ma'muriy taqiqlar bilan emas, balki bozor mexanizmlari, shaffoflik va qulay shart-sharoit yaratish orqali ta'minlanadi.",
      'uz-Cyrl': 'Иқтисодий хавфсизлик тақиқлар билан эмас, шаффоф бозор қоидалари билан мустаҳкамланади.',
      ru: 'Урок: Экономическая безопасность достигается прозрачностью рыночных правил, а не запретительными мерами.',
      en: 'Fundamental lesson: sovereign economic security is attained via transparent market mechanisms rather than rationing bans.',
    },
    keyIndicatorsAffected: ['Valyuta zaxiralari', 'To\'g\'ridan-to\'g\'ri investitsiyalar', 'Yashirin iqtisodiyot ulushi']
  },
  {
    id: 'case-cotton-boycott',
    title: {
      uz: "O'zbek paxtasiga qo'yilgan xalqaro boykotning (Cotton Campaign) bekor qilinishi",
      'uz-Cyrl': 'Ўзбек пахтасига қўйилган халқаро бойкотнинг бекор қилиниши',
      ru: 'Снятие глобального бойкота узбекского хлопка (Cotton Campaign)',
      en: 'Lifting the Global Cotton Campaign Boycott Against Uzbek Textiles',
    },
    region: 'uzbekistan',
    year: '2022',
    summary: {
      uz: "300 dan ortiq global brendlar (Nike, Adidas, H&M va boshqalar) majburiy mehnat tufayli o'zbek paxtasi va kiyim-kechaklarini sotib olishni taqiqlagan edi.",
      'uz-Cyrl': '300 дан ортиқ халқаро брендлар ўзбек пахтаси ва маҳсулотларига бойкот эълон қилган эди.',
      ru: 'Свыше 300 мировых брендов бойкотировали текстиль из-за принудительного труда, блокируя доступ к рынкам ЕС и США.',
      en: 'Over 300 global conglomerates enforced an embargo against Uzbek textile products citing forced labor in harvesting.',
    },
    trigger: {
      uz: "Paxta yetishtirishda ma'muriy buyruqbozlik va bolalar hamda davlat xizmatchilari mehnatidan noqonuniy foydalanish.",
      'uz-Cyrl': 'Мажбурий меҳнат ва маъмурий буйруқбозлик оқибати.',
      ru: 'Использование принудительного труда в хлопководстве и командно-административные методы.',
      en: 'Coercive mobilization practices during agricultural harvesting cycles.',
    },
    economicImpact: {
      uz: "Xalqaro mehnat tashkiloti (XMT) bilan hamkorlikda majburiy mehnat butunlay yo'q qilindi va klaster tizimi yo'lga qo'yildi. Boykot bekor qilinishi bilan to'qimachilik eksporti $3+ milliarddan oshdi.",
      'uz-Cyrl': 'Мажбурий меҳнатга чек қўйилиб, экспорт $3+ миллиарддан ошди.',
      ru: 'Ликвидация принудительного труда и создание частных хлопково-текстильных кластеров открыли экспорт на $3+ млрд.',
      en: 'Total institutional elimination of forced labor and privatization into agricultural clusters unlocked $3B+ in high value-added exports.',
    },
    solutionAndLesson: {
      uz: "Xalqaro standartlar, inson huquqlari va mehnat xavfsizligiga rioya qilish — milliy eksport va tashqi iqtisodiy xavfsizlikning ajralmas kafolatidir.",
      'uz-Cyrl': 'Халқаро стандартларга риоя қилиш — миллий экспорт хавфсизлигининг кафолати.',
      ru: 'Урок: Соблюдение международных стандартов труда и прав человека — обязательное условие глобальной конкурентоспособности.',
      en: 'Core takeaway: rigorous adherence to ethical labor governance directly fortifies sovereign trade immunity.',
    },
    keyIndicatorsAffected: ['Eksport hajmi', 'Ish o\'rinlari soni', 'Xalqaro kredit reytingi']
  },
  {
    id: 'case-enron',
    title: {
      uz: "Enron fojiasi (AQSh): Korporativ qalloblik va soxta buxgalteriya darsi",
      'uz-Cyrl': 'Энрон фожиаси: Корпоратив қаллоблик ва сохта бухгалтерия',
      ru: 'Крах корпорации Enron (США): Урок бухгалтерских фальсификаций',
      en: 'The Enron Collapse (USA): Anatomy of Corporate Financial Fraud',
    },
    region: 'international',
    year: '2001',
    summary: {
      uz: "AQShning 7-eng yirik energetika giganti bo'lgan Enron o'zining yuzlab million dollarlik qarzlarini offshor sho'ba korxonalarida yashirib, qog'ozda 'ulkan foyda' ko'rsatgan.",
      'uz-Cyrl': 'Энрон корхонаси қарзларини офшорларда яшириб, сохта фойда кўрсатган.',
      ru: 'Энергетический гигант скрывал миллиардные долги через офшорные структуры, рисуя фиктивную сверхприбыль.',
      en: 'Energy conglomerate concealed billions in debt via off-balance-sheet special purpose vehicles while booking phantom revenues.',
    },
    trigger: {
      uz: "Rahbariyatning o'z aksiyalari narxini sun'iy oshirib, bonus olish istagi va mustaqil auditning (Arthur Andersen) sotilishi.",
      'uz-Cyrl': 'Раҳбариятнинг сунъий бонус олиш истаги ва аудиторларнинг сотқинлиги.',
      ru: 'Жадность топ-менеджмента и сговор с аудиторской компанией Arthur Andersen.',
      en: 'Executive incentive distortion and systemic collusion by auditor Arthur Andersen.',
    },
    economicImpact: {
      uz: "Kompaniya bir kunda bankrot bo'ldi, 20 000 dan ortiq xodim ishsiz va nafaqasiz qoldi, dunyodagi eng nufuzli auditorlik firmasi (Arthur Andersen) tugatildi.",
      'uz-Cyrl': '20 000 xodim ishsiz qoldi, ulkan kompaniya bankrot bo\'ldi.',
      ru: 'Банкротство на $63 млрд, потеря пенсионных накоплений сотрудников и ликвидация аудитора из «Большой пятерки».',
      en: 'Record $63B insolvency, wiped out pension funds, and complete dissolution of Big-Five auditor Arthur Andersen.',
    },
    solutionAndLesson: {
      uz: "Ushbu falokatdan so'ng dunyoda moliyaviy hisobotlarni soxtalashtirishga qarshi qat'iy 'Sarbanes-Oxley' qonuni va ichki xavfsizlik auditlari majburiy qilindi.",
      'uz-Cyrl': 'Дунёда ички audit ва қатъий назорат қонунлари жорий этилди.',
      ru: 'Урок: Был принят строжайший закон Сарбейнза-Оксли (SOX), сделавший внутренний аудит и уголовную ответственность директоров обязательными.',
      en: 'Catalyzed the landmark Sarbanes-Oxley Act, mandating stringent internal financial controls and criminal accountability for executives.',
    },
    keyIndicatorsAffected: ['Kompaniya kapitalizatsiyasi', 'Xodimlar pensiya jamg\'armasi', 'Investorlar ishonchi']
  }
];

export const INTERESTING_FACTS: { fact: LocalizedString; source: string; category: string }[] = [
  {
    fact: {
      uz: "O'zbekiston dunyoda oltin qazib olish bo'yicha kuchli o'ntalikka kiradi. Navoiy kon-metallurgiya kombinatining Muruntov koni dunyodagi eng yirik ochiq oltin koni hisoblanadi.",
      'uz-Cyrl': 'Ўзбекистон олтин қазиб олишда дунёнинг етакчи ўнталигига киради. Мурунтов кони энг йирик карьердир.',
      ru: 'Узбекистан входит в топ-10 мировых лидеров по добыче золота. Месторождение Мурунтау признано крупнейшим в мире открытым золоторудным карьером.',
      en: 'Uzbekistan ranks among the top 10 global gold producers. The Muruntau deposit is the world\'s largest open-pit gold quarry.',
    },
    source: "World Gold Council & O'zbekiston Respublikasi Markaziy Banki",
    category: "Resurslar xavfsizligi"
  },
  {
    fact: {
      uz: "Bank kartalaridan pul o'g'irlanishining 92% dan ortig'i murakkab xakerlik hujumlari orqali emas, balki jabrlanuvchining o'zi SMS-kodni firibgarga aytib berishi (ijtimoiy muhandislik) oqibatida sodir bo'ladi.",
      'uz-Cyrl': 'Карталардан пул ўғирланишининг 92% дан ортиғи SMS-кодни ўз қўли билан бериб қўйиш оқибатида юз беради.',
      ru: 'Свыше 92% краж с пластиковых карт происходят не из-за взлома серверов, а методом социальной инженерии, когда жертва сама передает код из SMS.',
      en: 'Over 92% of retail card compromises result not from infrastructural zero-day exploits, but from social engineering wherein victims disclose SMS OTPs.',
    },
    source: "IIV Kiberxavfsizlik Markazi statistikasi",
    category: "Kiber-iqtisodiy xavfsizlik"
  },
  {
    fact: {
      uz: "O'zbekiston hududida o'zaro to'lovlar uchun kriptovalyutani qabul qilgan do'kon yoki shaxsga ma'muriy va jinoiy javobgarlik choralari qo'llaniladi.",
      'uz-Cyrl': 'Ўзбекистонда криптовалютани тўловга қабул қилиш жиноий жавобгарликка сабаб бўлади.',
      ru: 'Прием криптовалюты в качестве оплаты за любые товары и услуги в Узбекистане незаконен и влечет строгие санкции.',
      en: 'Accepting cryptocurrencies as commercial tender for merchandise or services in Uzbekistan is unlawful and penalized under statutory law.',
    },
    source: "NAPP va O'zbekiston Respublikasi Qonunchiligi",
    category: "Moliyaviy huquq"
  }
];

import { GlossaryItem } from '../types';

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    id: 'g-inf',
    term: { uz: 'Inflyatsiya', 'uz-Cyrl': 'Инфляция', ru: 'Инфляция', en: 'Inflation' },
    definition: {
      uz: "Iqtisodiyotda tovarlar va xizmatlar umumiy narx darajasining uzoq muddatli o'sishi va milliy valyuta xarid qobiliyatining pasayishi.",
      'uz-Cyrl': 'Иқтисодиётда нархларнинг умумий ўсиши ва пулнинг қадрсизланиши.',
      ru: 'Устойчивое повышение общего уровня цен на товары и услуги, приводящее к снижению покупательной способности денег.',
      en: 'A broad sustained increase in the prices of goods and services over time, eroding currency purchasing power.',
    },
    category: 'macro',
    formulaOrRule: "Inflyatsiya = ((CPI_t - CPI_{t-1}) / CPI_{t-1}) * 100%"
  },
  {
    id: 'g-stag',
    term: { uz: 'Stagflyatsiya', 'uz-Cyrl': 'Стагфляция', ru: 'Стагфляция', en: 'Stagflation' },
    definition: {
      uz: "Iqtisodiy o'sishning to'xtashi (stagnatsiya), yuqori ishsizlik va shu bilan bir vaqtda yuqori inflyatsiya kuzatiladigan eng og'ir makroiqtisodiy inqiroz.",
      'uz-Cyrl': 'Иқтисодий ўсиш тўхташи ва бир вақтда юқори инфляция кузатилиши.',
      ru: 'Состояние экономики, при котором застой производства и высокая безработица сочетаются с высокой инфляцией.',
      en: 'A toxic macroeconomic condition combining economic stagnation, high unemployment, and soaring price inflation.',
    },
    category: 'macro',
  },
  {
    id: 'g-default',
    term: { uz: 'Defolt (Default)', 'uz-Cyrl': 'Дефолт', ru: 'Дефолт', en: 'Sovereign Default' },
    definition: {
      uz: "Qarz oluvchining (davlat yoki korxonaning) o'z qarz majburiyatlari bo'yicha foiz yoki asosiy summani o'z vaqtida to'lay olmaslik holati.",
      'uz-Cyrl': 'Қарз олувчининг ўз мажбуриятларини тўлай олмаслик ҳолати.',
      ru: 'Неспособность или отказ заемщика выполнить свои долговые обязательства по выплате процентов или основного долга.',
      en: 'The failure of a sovereign borrower or corporation to meet scheduled debt interest or principal repayments.',
    },
    category: 'macro',
  },
  {
    id: 'g-dd',
    term: { uz: 'Due Diligence (Lozim darajadagi ehtiyotkorlik)', 'uz-Cyrl': 'Due Diligence', ru: 'Due Diligence', en: 'Due Diligence' },
    definition: {
      uz: "Kompaniya bilan shartnoma tuzishdan oldin uning moliyaviy barqarorligi, soliq intizomi, benefitsiarlari va qonuniyligini chuqur tekshirish auditi.",
      'uz-Cyrl': 'Шартномадан олдин ҳамкор компанияни чуқур текшириш.',
      ru: 'Процедура детальной независимой проверки объекта инвестирования или контрагента перед совершением сделки.',
      en: 'Comprehensive financial, regulatory, and legal investigation of a prospective transaction counterparty.',
    },
    category: 'corporate',
    formulaOrRule: "Soliq.uz + Lex.uz + Davlat reyestri filtri"
  },
  {
    id: 'g-ponzi',
    term: { uz: 'Ponzi sxemasi (Moliyaviy piramida)', 'uz-Cyrl': 'Понци схемаси', ru: 'Схема Понци', en: 'Ponzi Scheme' },
    definition: {
      uz: "Eski ishtirokchilarga daromad real biznes orqali emas, faqat yangi jalb qilingan odamlarning pullari hisobidan to'lanadigan noqonuniy firibgarlik modeli.",
      'uz-Cyrl': 'Янги одамларнинг пули ҳисобига эскиларга пул тўланадиган сохта пирамида.',
      ru: 'Мошенническая структура, где прибыль ранним участникам выплачивается исключительно за счет средств вновь прибывших.',
      en: 'A fraudulent investment operation paying returns to earlier participants using capital from new entrants.',
    },
    category: 'digital',
    formulaOrRule: "JK 188-1-moddasi (10 yilgacha qamoq)"
  },
  {
    id: 'g-dropper',
    term: { uz: 'Dropper (Tranzit qatnashchi)', 'uz-Cyrl': 'Дроппер', ru: 'Дроппер (Дроп)', en: 'Money Mule (Dropper)' },
    definition: {
      uz: "O'zining bank kartasini yoki elektron hamyonini firibgarlar, bukmeykerlar yoki narkotik sotuvchilarga noqonuniy pullarni aylantirish uchun ijaraga bergan shaxs.",
      'uz-Cyrl': 'Ўз банк картасини жиноятчиларга пул айлантириш учун берган шахс.',
      ru: 'Подставное лицо, предоставляющее свои банковские карты преступникам для транзита и обналичивания украденных средств.',
      en: 'An individual whose payment cards or accounts are recruited to launder or transit illegally obtained funds.',
    },
    category: 'digital',
    formulaOrRule: "Jinoiy faoliyatga sheriklik va jazo"
  },
  {
    id: 'g-shadow',
    term: { uz: 'Yashirin iqtisodiyot', 'uz-Cyrl': 'Яширин иқтисодиёт', ru: 'Теневая экономика', en: 'Shadow Economy' },
    definition: {
      uz: "Davlat ro'yxatidan va soliq hisobidan yashirilgan, kassa cheki berilmaydigan, 'konvertdagi oylik' tarzida amalga oshiriladigan iqtisodiy faoliyat.",
      'uz-Cyrl': 'Давлат ва солиқдан яширилган норасмий иқтисодий фаолият.',
      ru: 'Экономическая деятельность, скрываемая от государственного учета, налогообложения и официальной статистики.',
      en: 'Economic activities deliberately hidden from public authorities to avoid tax and administrative regulation.',
    },
    category: 'macro',
  },
  {
    id: 'g-iso37001',
    term: { uz: 'ISO 37001 Komplayens', 'uz-Cyrl': 'ISO 37001 Комплаенс', ru: 'ISO 37001 Комплаенс', en: 'ISO 37001 Anti-Bribery' },
    definition: {
      uz: "Korxonalarda poraxo'rlik, manfaatlar to'qnashuvi va xizmat mavqeini suiiste'mol qilishning oldini olishga qaratilgan xalqaro boshqaruv standarti.",
      'uz-Cyrl': 'Корхоналарда коррупцияга қарши халқаро бошқарув стандарти.',
      ru: 'Международный стандарт, задающий параметры построения эффективной антикоррупционной политики в организации.',
      en: 'International benchmark defining standards for anti-bribery management frameworks across organizations.',
    },
    category: 'corporate',
  }
];

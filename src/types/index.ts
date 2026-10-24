export type Language = 'uz' | 'uz-Cyrl' | 'ru' | 'en';
export type Theme = 'light' | 'dark';

export interface LocalizedString {
  uz: string;
  'uz-Cyrl': string;
  ru: string;
  en: string;
}

export interface LectureSlide {
  id: number;
  title: LocalizedString;
  content: LocalizedString;
  highlight?: LocalizedString;
  bulletPoints?: LocalizedString[];
  lawReference?: string;
  statOrFact?: LocalizedString;
}

export interface Lecture {
  id: string;
  number: number;
  title: LocalizedString;
  shortDesc: LocalizedString;
  category: 'macro' | 'micro' | 'cyber' | 'energy' | 'global';
  estimatedMinutes: number;
  slides: LectureSlide[];
  keyTerms: { term: LocalizedString; definition: LocalizedString }[];
  checkpoint: {
    question: LocalizedString;
    options: LocalizedString[];
    correctIndex: number;
    explanation: LocalizedString;
  };
}

export type ResourceCategory = 'scam_gambling' | 'scam_pyramid' | 'scam_phishing' | 'safe_gov' | 'safe_finance' | 'safe_law';

export interface WebResourceItem {
  id: string;
  name: string;
  urlExample: string;
  status: 'forbidden' | 'permitted';
  category: ResourceCategory;
  categoryTitle: LocalizedString;
  shortDesc: LocalizedString;
  risksOrBenefits: LocalizedString[];
  legalBasis: string; // E.g., "O'zbekiston JK 278-moddasi, MJtK 191-moddasi"
  warningSigns?: LocalizedString[];
  officialAlternative?: string;
  verificationMethod: LocalizedString;
}

export interface MacroIndicator {
  inflation: number; // % (e.g. 8.5)
  reserves: number; // $ Billion (e.g. 35.0)
  budgetDeficit: number; // % GDP (e.g. 3.2)
  foodSecurityIndex: number; // % (e.g. 78)
  publicTrust: number; // % (e.g. 82)
}

export interface MacroScenarioChoice {
  text: LocalizedString;
  impact: {
    inflation: number;
    reserves: number;
    budgetDeficit: number;
    foodSecurityIndex: number;
    publicTrust: number;
  };
  feedback: LocalizedString;
  economicTheory: LocalizedString;
}

export interface MacroScenario {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  tag: LocalizedString;
  choices: MacroScenarioChoice[];
}

export interface ScamDetectorScenario {
  id: number;
  sourceType: 'sms' | 'telegram' | 'url' | 'email';
  senderOrUrl: string;
  messageContent: LocalizedString;
  visualPreview?: string;
  isScam: boolean;
  threatLevel: 'none' | 'medium' | 'critical';
  scamType?: LocalizedString;
  redFlags: LocalizedString[];
  expertExplanation: LocalizedString;
  legalNote: string;
}

export interface EnterpriseCase {
  id: number;
  title: LocalizedString;
  department: LocalizedString;
  situation: LocalizedString;
  evidence: LocalizedString[];
  options: {
    text: LocalizedString;
    riskScore: number; // 0 to 100
    isOptimal: boolean;
    consequence: LocalizedString;
  }[];
}

export interface QuizQuestion {
  id: number;
  category: 'macro' | 'enterprise' | 'cyber' | 'legal';
  difficulty: 'easy' | 'medium' | 'hard';
  question: LocalizedString;
  options: LocalizedString[];
  correctIndex: number;
  explanation: LocalizedString;
  legalArticle?: string;
}

export interface CaseStudy {
  id: string;
  title: LocalizedString;
  region: 'uzbekistan' | 'international';
  year: string;
  summary: LocalizedString;
  trigger: LocalizedString;
  economicImpact: LocalizedString;
  solutionAndLesson: LocalizedString;
  keyIndicatorsAffected: string[];
}

export interface GlossaryItem {
  id: string;
  term: LocalizedString;
  definition: LocalizedString;
  category: 'macro' | 'corporate' | 'digital' | 'law';
  formulaOrRule?: string;
}

export interface EducationalPrompt {
  id: string;
  title: LocalizedString;
  targetRole: 'student' | 'teacher' | 'researcher';
  purpose: LocalizedString;
  promptTextUz: string;
  promptTextRu: string;
  promptTextEn: string;
  sampleVariables: { name: string; label: LocalizedString; defaultVal: string }[];
}

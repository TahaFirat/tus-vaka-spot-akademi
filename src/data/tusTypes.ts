export type TusSessionType = 'TTBT' | 'KTBT';

export type TusBranchId =
  | 'biyokimya'
  | 'mikrobiyoloji'
  | 'patoloji'
  | 'farmakoloji'
  | 'anatomi'
  | 'fizyoloji'
  | 'histoloji'
  | 'dahiliye'
  | 'pediatri'
  | 'cerrahi'
  | 'kadindogum';

export type OptionLetter = 'A' | 'B' | 'C' | 'D' | 'E';

export interface TusBranchMeta {
  id: TusBranchId;
  name: string;
  shortName: string;
  session: TusSessionType;
  osymWeight: number; // Official TUS question share weight
  subTopics: string[];
  description: string;
  badgeColor: string;
}

export interface TusQuestionOption {
  letter: OptionLetter;
  text: string;
  differentialNote: string; // Explains when this option would be correct or why it is the answer
}

export interface TusVakaQuestion {
  id: string;
  session: TusSessionType;
  branchId: TusBranchId;
  branchName: string;
  subTopic: string;
  difficulty: 'Temel Spot' | 'Klinik Vaka' | 'İleri Ayırıcı Tanı';
  examFrequency: 'Her TUS Sorulur' | 'Yüksek Verimli Vaka' | 'Altın Standart Spot';
  stem: string;
  clinicalClues: string[];
  options: TusQuestionOption[];
  correctOption: OptionLetter;
  stepByStepMechanism: string;
  differentialSummary: string;
  highYieldPearl: string;
  firstLineVsGoldStandard: string;
  isOsymTwin?: boolean;
  osymYearTag?: string;
}

export interface TusSpotCard {
  id: string;
  session: TusSessionType;
  branchId: TusBranchId;
  branchName: string;
  subTopic: string;
  statement: string;
  isTrue: boolean;
  criticalHighlight: string;
  correctMedicalFact: string;
  comparisonNote: string;
  highYieldPearl: string;
  isOsymTwin?: boolean;
  osymYearTag?: string;
}

export type ClinicalGuideCategory =
  | 'Tanı & Altın Standart'
  | 'Toksikoloji & Antidotlar'
  | 'Hız Kısıtlayıcı Enzimler'
  | 'Patognomonik Bulgular & Triyadlar'
  | 'Genetik & Translokasyonlar';

export interface TusClinicalGuideEntry {
  id: string;
  category: ClinicalGuideCategory;
  branchId: TusBranchId;
  branchName: string;
  title: string;
  firstChoiceOrFeature: string;
  goldStandardOrTarget: string;
  clinicalTrapNote: string;
  pearl: string;
}

export interface DifferentialEntitySeed {
  entityName: string; // Correct option text (e.g. disease, enzyme, drug, nerve, pathogen)
  patientVignette: string; // Clinical case stem
  clues: string[]; // Highlighted clinical clues inside stem
  questionPrompt: string; // e.g., "Bu hastada en olası tanı / ilk tercih görüntüleme / eksik enzim aşağıdakilerden hangisidir?"
  mechanism: string; // Step-by-step clinical mechanism
  whenCorrectNote: string; // Differential note for option list
  firstVsGold: string; // First-line vs Gold standard or key comparison
  pearl: string; // High-yield TUS pearl
  trueStatement: string; // True spot statement
  falseStatement: string; // False spot statement with classic TUS trap
  falseHighlight: string; // Critical error phrase in false statement
}

export interface DifferentialClusterSeed {
  branchId: TusBranchId;
  subTopic: string;
  difficulty: 'Temel Spot' | 'Klinik Vaka' | 'İleri Ayırıcı Tanı';
  examFrequency: 'Her TUS Sorulur' | 'Yüksek Verimli Vaka' | 'Altın Standart Spot';
  entities: [
    DifferentialEntitySeed,
    DifferentialEntitySeed,
    DifferentialEntitySeed,
    DifferentialEntitySeed,
    DifferentialEntitySeed
  ];
}

export interface StructuredEntitySeed {
  name: string; // Concise entity/diagnosis/drug/nerve/pathogen name (no spoilers)
  target: string; // Primary enzyme, gene, receptor, pathogen, nerve/vessel, or mechanism (never repeat `name`)
  hallmark: string; // Pathognomonic clinical/lab/biopsy/imaging finding (never mention any entity `name`)
  vignette: string; // Realistic patient case stem with age/sex/findings (never mention `name` or `target` verbatim)
  clues: string[]; // 3 concise clinical clues from the vignette (never mention `name`)
  management: string; // Diagnostic gold standard or first-line specific therapy (never mention any entity `name`)
  pearl: string; // High-yield TUS golden rule sentence
  trapFalse: string; // Plausible false predicate for classic TUS trap (without prefixing `name`, e.g. "otozomal dominant kalıtılır ve...")
  trapHighlight: string; // Exact false substring inside `trapFalse`
}

export interface StructuredClusterSeed {
  branchId: TusBranchId;
  subTopic: string;
  difficulty: 'Temel Spot' | 'Klinik Vaka' | 'İleri Ayırıcı Tanı';
  examFrequency: 'Her TUS Sorulur' | 'Yüksek Verimli Vaka' | 'Altın Standart Spot';
  osymTwinYear?: '2025' | '2024' | '2023' | '2022' | '2021' | '2020' | '2019';
  entities: [
    StructuredEntitySeed,
    StructuredEntitySeed,
    StructuredEntitySeed,
    StructuredEntitySeed,
    StructuredEntitySeed
  ];
}

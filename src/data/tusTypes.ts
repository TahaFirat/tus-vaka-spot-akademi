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

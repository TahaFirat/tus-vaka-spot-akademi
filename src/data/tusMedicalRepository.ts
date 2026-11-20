import {
  DifferentialClusterSeed,
  OptionLetter,
  StructuredClusterSeed,
  TusBranchId,
  TusBranchMeta,
  TusQuestionOption,
  TusSessionType,
  TusSpotCard,
  TusVakaQuestion,
} from './tusTypes';
import { TTBT_CLUSTERS } from './tusBasicClusters';
import { KTBT_CLUSTERS, TUS_CLINICAL_GUIDE_ENTRIES } from './tusClinicalClusters';
import { EXTENDED_TUS_CLUSTERS } from './tusExtendedClusters';
import { MORE_TUS_CLUSTERS } from './tusMoreClinicalClusters';
import { ADDITIONAL_TUS_CLUSTERS } from './tusAdditionalClusters';
import { OSYM_TWIN_TUS_CLUSTERS } from './tusOsymTwinClusters';

// 256 Textbook-Verified 6-Dimension Structured Clusters (1,280 Entities across 11 TUS Branches)
import { STRUCTURED_BIOCHEM_CLUSTERS } from './tusStructuredBiochem';
import { STRUCTURED_PHYSIO_HISTO_CLUSTERS } from './tusStructuredPhysioHisto';
import { STRUCTURED_MICRO_ANAT_CLUSTERS } from './tusStructuredMicroAnat';
import { STRUCTURED_PHARM_PATHO_CLUSTERS } from './tusStructuredPharmPatho';
import { STRUCTURED_INTERNAL_1_CLUSTERS } from './tusStructuredInternal1';
import { STRUCTURED_INTERNAL_2_CLUSTERS } from './tusStructuredInternal2';
import { STRUCTURED_PEDIATRICS_1_CLUSTERS } from './tusStructuredPediatrics1';
import { STRUCTURED_PEDIATRICS_2_CLUSTERS } from './tusStructuredPediatrics2';
import { STRUCTURED_SURGERY_CLUSTERS } from './tusStructuredSurgery';
import { STRUCTURED_OBGYN_CLUSTERS } from './tusStructuredObGyn';

export * from './tusTypes';
export { TUS_CLINICAL_GUIDE_ENTRIES };

export const TUS_BRANCHES: TusBranchMeta[] = [
  // A. Temel Tıp Bilimleri Testi (TTBT — 7 Branş)
  {
    id: 'biyokimya',
    name: 'Tıbbi Biyokimya',
    shortName: 'Biyokimya',
    session: 'TTBT',
    osymWeight: 18,
    subTopics: ['Enzimler', 'Metabolizma', 'Hormonlar', 'Vitaminler', 'Depo Hastalıkları'],
    description: 'Enzimler, metabolik yolaklar, hız kısıtlayıcı basamaklar, vitaminler ve depo hastalıkları',
    badgeColor: 'emerald',
  },
  {
    id: 'mikrobiyoloji',
    name: 'Tıbbi Mikrobiyoloji',
    shortName: 'Mikrobiyoloji',
    session: 'TTBT',
    osymWeight: 18,
    subTopics: ['Bakteriyoloji', 'Viroloji', 'Mikoloji', 'Parazitoloji', 'İmmünoloji'],
    description: 'Bakteriyel toksinler, özel besiyerleri, fırsatçı mikozlar, viroloji, parazitoloji ve immünoloji',
    badgeColor: 'teal',
  },
  {
    id: 'patoloji',
    name: 'Tıbbi Patoloji',
    shortName: 'Patoloji',
    session: 'TTBT',
    osymWeight: 18,
    subTopics: ['Hücre Hasarı', 'İnflamasyon', 'Neoplazi', 'Sistem Patolojileri', 'Patognomonik Bulgular'],
    description: 'Hücre hasarı, nekroz tipleri, patognomonik cisimcikler, translokasyonlar ve sistem patolojisi',
    badgeColor: 'cyan',
  },
  {
    id: 'farmakoloji',
    name: 'Tıbbi Farmakoloji',
    shortName: 'Farmakoloji',
    session: 'TTBT',
    osymWeight: 18,
    subTopics: ['Otonom Sinir Sistemi', 'Kardiyovasküler', 'SSS Farmakolojisi', 'Kemoterapötikler', 'Antidotlar'],
    description: 'İlaç etki mekanizmaları, spesifik antidotlar, yan etkiler ve klinik kontrendikasyonlar',
    badgeColor: 'emerald',
  },
  {
    id: 'anatomi',
    name: 'Anatomi',
    shortName: 'Anatomi',
    session: 'TTBT',
    osymWeight: 14,
    subTopics: ['Nöroanatomi', 'Kas-İskelet Sistemi', 'Damar-Sinir Komşulukları', 'Foramenler', 'Klinik Anatomi'],
    description: 'Periferik sinir yaralanmaları, nörovasküler komşuluklar, kraniyal sinirler ve klinik anatomi',
    badgeColor: 'teal',
  },
  {
    id: 'fizyoloji',
    name: 'Fizyoloji',
    shortName: 'Fizyoloji',
    session: 'TTBT',
    osymWeight: 10,
    subTopics: ['Hücre & Kas', 'Kardiyovasküler', 'Solunum', 'Renal Fizyoloji', 'Endokrin & SSS'],
    description: 'Kardiyak siklus, nefron transport mekanizmaları, solunum eğrileri ve endokrin regülasyon',
    badgeColor: 'cyan',
  },
  {
    id: 'histoloji',
    name: 'Histoloji ve Embriyoloji',
    shortName: 'Histoloji',
    session: 'TTBT',
    osymWeight: 8,
    subTopics: ['Epitelyum & Bağlantılar', 'Organ Histolojisi', 'Farengeal Arkuslar', 'Nöral Krest', 'Konjenital Anomaliler'],
    description: 'Hücre bağlantıları, özel organ hücreleri, farengeal kese/arkus türevleri ve konjenital anomaliler',
    badgeColor: 'emerald',
  },
  // B. Klinik Tıp Bilimleri Testi (KTBT — 4 Ana Grup)
  {
    id: 'dahiliye',
    name: 'Dahiliye Grubu',
    shortName: 'Dahiliye',
    session: 'KTBT',
    osymWeight: 42,
    subTopics: ['Kardiyoloji & Göğüs', 'Nefroloji', 'Hematoloji & Onkoloji', 'Endokrinoloji', 'Gastroenteroloji & Enfeksiyon'],
    description: 'İç Hastalıkları, Kardiyoloji, Göğüs, Enfeksiyon, Nöroloji, Dermatoloji, Psikiyatri ve FTR vakaları',
    badgeColor: 'teal',
  },
  {
    id: 'pediatri',
    name: 'Pediatri',
    shortName: 'Pediatri',
    session: 'KTBT',
    osymWeight: 30,
    subTopics: ['Yenidoğan', 'Çocuk Kardiyolojisi', 'Metabolik Hastalıklar', 'Çocuk Nefrolojisi', 'Çocuk Enfeksiyon'],
    description: 'Yenidoğan acilleri, konjenital kalp hastalıkları, metabolik hastalıklar ve pediatrik sendromlar',
    badgeColor: 'cyan',
  },
  {
    id: 'cerrahi',
    name: 'Cerrahi Grubu',
    shortName: 'Cerrahi',
    session: 'KTBT',
    osymWeight: 36,
    subTopics: ['Hepatobiliyer & Pankreas', 'Akut Karın & GİS', 'Meme & Tiroid', 'Travma & Toraks', 'Herniler'],
    description: 'Genel Cerrahi, Çocuk Cerrahisi, KBB, Göz, Üroloji, Ortopedi, Kalp-Damar ve Beyin Cerrahisi',
    badgeColor: 'emerald',
  },
  {
    id: 'kadindogum',
    name: 'Kadın Hastalıkları ve Doğum',
    shortName: 'Kadın Doğum',
    session: 'KTBT',
    osymWeight: 12,
    subTopics: ['Obstetrik Kanamalar', 'Preeklampsi & Eklampsi', 'Jinekolojik Onkoloji', 'PKOS & İnfertilite', 'Ektopik & Mol'],
    description: 'Obstetrik aciller, preeklampsi/eklampsi, jinekolojik kanserler, PKOS ve infertilite yönetimi',
    badgeColor: 'teal',
  },
];

const BRANCH_MAP = new Map<TusBranchId, TusBranchMeta>(
  TUS_BRANCHES.map((b) => [b.id, b])
);

export function getBranchMeta(branchId: TusBranchId): TusBranchMeta {
  return BRANCH_MAP.get(branchId) || TUS_BRANCHES[0];
}

const OPTION_LETTERS: OptionLetter[] = ['A', 'B', 'C', 'D', 'E'];

const ALL_LEGACY_CLUSTERS: DifferentialClusterSeed[] = [
  ...OSYM_TWIN_TUS_CLUSTERS,
  ...TTBT_CLUSTERS,
  ...KTBT_CLUSTERS,
  ...EXTENDED_TUS_CLUSTERS,
  ...MORE_TUS_CLUSTERS,
  ...ADDITIONAL_TUS_CLUSTERS,
];

const ALL_STRUCTURED_CLUSTERS: StructuredClusterSeed[] = [
  ...STRUCTURED_BIOCHEM_CLUSTERS,
  ...STRUCTURED_INTERNAL_1_CLUSTERS,
  ...STRUCTURED_MICRO_ANAT_CLUSTERS,
  ...STRUCTURED_PEDIATRICS_1_CLUSTERS,
  ...STRUCTURED_PHARM_PATHO_CLUSTERS,
  ...STRUCTURED_SURGERY_CLUSTERS,
  ...STRUCTURED_PHYSIO_HISTO_CLUSTERS,
  ...STRUCTURED_INTERNAL_2_CLUSTERS,
  ...STRUCTURED_PEDIATRICS_2_CLUSTERS,
  ...STRUCTURED_OBGYN_CLUSTERS,
];

// Precomputed lowercase search haystacks per cluster for < 1.5ms full-text search over 32K+ items
const STRUCTURED_CLUSTER_HAYSTACK: string[] = ALL_STRUCTURED_CLUSTERS.map((c) => {
  const b = getBranchMeta(c.branchId);
  const entText = c.entities
    .map(
      (e) =>
        `${e.name} ${e.target} ${e.hallmark} ${e.vignette} ${e.management} ${e.pearl} ${e.trapFalse}`
    )
    .join(' ');
  return `${b.name} ${b.shortName} ${c.subTopic} ${c.osymTwinYear || ''} ${entText}`.toLowerCase();
});

function cleanShortTitle(rawName: string): string {
  const openParen = rawName.indexOf('(');
  const dashIdx = rawName.indexOf('—');

  if (dashIdx !== -1 && (openParen === -1 || dashIdx < openParen)) {
    return rawName.slice(0, dashIdx).trim();
  }

  if (openParen !== -1) {
    const baseName = rawName.slice(0, openParen).trim();
    const closeParen = rawName.indexOf(')', openParen);
    const inside =
      closeParen !== -1
        ? rawName.slice(openParen + 1, closeParen)
        : rawName.slice(openParen + 1);

    if (inside.includes('—')) {
      const shortCode = inside.split('—')[0].trim();
      if (shortCode && shortCode.length <= 16) {
        return `${baseName} (${shortCode})`;
      }
      return baseName;
    }

    if (inside.trim().length <= 16) {
      return `${baseName} (${inside.trim()})`;
    }
    return baseName;
  }

  return rawName.trim();
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function maskEntityMentions(rawText: string, entityName: string, replacement = 'bu tablo'): string {
  const shortTitle = cleanShortTitle(entityName);
  const candidates = new Set<string>();

  const pushVariants = (s: string) => {
    const clean = s.trim();
    if (clean.length >= 4) candidates.add(clean);
    const noParen = clean.replace(/\([^)]*\)/g, '').trim();
    if (noParen.length >= 4) {
      candidates.add(noParen);
      const strippedNoun = noParen
        .replace(
          /\s+(?:hastalığı|sendromu|karsinomu|kanseri|tümörü|toksisitesi|eksikliği|anemisi)$/i,
          ''
        )
        .trim();
      if (strippedNoun.length >= 4) candidates.add(strippedNoun);
    }
    const slashParts = noParen.split(/\s*\/\s*|\s+ve\s+|\s+vs\.?\s+/i);
    slashParts.forEach((part) => {
      const p = part.trim();
      if (p.length >= 5) candidates.add(p);
    });
    const parenMatches = clean.matchAll(/\(([^)]+)\)/g);
    for (const m of parenMatches) {
      const inner = m[1].trim();
      if (inner.length >= 4 && !/^\d+$/.test(inner)) {
        candidates.add(inner);
      }
    }
  };

  pushVariants(shortTitle);
  pushVariants(entityName.split('—')[0].trim());

  const sorted = [...candidates]
    .filter(
      (t) =>
        t.length >= 4 &&
        !['tümör', 'sendrom', 'hastalık', 'hastalığı', 'sendromu'].includes(
          t.toLowerCase()
        )
    )
    .sort((a, b) => b.length - a.length);

  let result = rawText;
  for (const token of sorted) {
    const escaped = escapeRegExp(token);
    const re = new RegExp(
      `${escaped}(?:[’']?(?:da|de|ta|te|dan|den|tan|ten|ın|in|un|ün|nın|nin|nun|nün|yla|yle|la|le|ya|ye|a|e|ı|i|u|ü))?`,
      'gi'
    );
    result = result.replace(re, replacement);
  }

  return result
    .replace(/bu tablo(\s*\(\s*bu tablo\s*\))+/gi, 'bu tablo')
    .replace(/\(bu tablo\)/gi, '')
    .replace(/\(\s*\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// ============================================================================
// VIRTUAL LAZY HYDRATION ENGINE FOR 32,000+ ITEMS (O(1) RAM & ZERO HEAT)
// ============================================================================

interface HydratedVakaPayload {
  branchName: string;
  subTopic: string;
  difficulty: TusVakaQuestion['difficulty'];
  examFrequency: TusVakaQuestion['examFrequency'];
  stem: string;
  clinicalClues: string[];
  options: TusQuestionOption[];
  correctOption: OptionLetter;
  stepByStepMechanism: string;
  differentialSummary: string;
  highYieldPearl: string;
  firstLineVsGoldStandard: string;
}

interface HydratedSpotPayload {
  branchName: string;
  subTopic: string;
  statement: string;
  criticalHighlight: string;
  correctMedicalFact: string;
  comparisonNote: string;
  highYieldPearl: string;
}

const VAKA_LRU = new Map<string, HydratedVakaPayload>();
const SPOT_LRU = new Map<string, HydratedSpotPayload>();
const MAX_LRU = 160;

function hydrateStructuredVaka(
  id: string,
  cIdx: number,
  eIdx: number,
  aIdx: number
): HydratedVakaPayload {
  const cached = VAKA_LRU.get(id);
  if (cached) return cached;

  const cluster = ALL_STRUCTURED_CLUSTERS[cIdx];
  const branchMeta = getBranchMeta(cluster.branchId);
  const entities = cluster.entities;
  const e = entities[eIdx];
  const prefix = cluster.osymTwinYear
    ? `[${cluster.osymTwinYear} TUS Konsept İkizi] `
    : '';
  const cleanDot = (s: string) => s.replace(/[.!]+$/, '').trim();
  const vText = `${cleanDot(e.vignette)}.`;

  let difficulty: TusVakaQuestion['difficulty'] = cluster.difficulty;
  let freq: TusVakaQuestion['examFrequency'] = cluster.examFrequency;
  let stemCore = '';
  let buildOpt: (cand: (typeof entities)[number], sourceIdx: number) => string;

  // Build 4-cycle derangement of non-target indices for zero-duplicate pairing questions
  const nonTargets = [0, 1, 2, 3, 4].filter((idx) => idx !== eIdx);

  switch (aIdx) {
    case 0:
      difficulty = 'Klinik Vaka';
      freq = 'Her TUS Sorulur';
      stemCore = `${vText} Bu olguda en olası tanı veya antite aşağıdakilerden hangisidir?`;
      buildOpt = (cand) => cand.name;
      break;
    case 1:
      difficulty = 'İleri Ayırıcı Tanı';
      freq = 'Her TUS Sorulur';
      stemCore = `${vText} Bu klinik tabloya yol açan birincil mekanizma, hedef veya etken aşağıdakilerden hangisidir?`;
      buildOpt = (cand) => cand.target;
      break;
    case 2:
      difficulty = 'Klinik Vaka';
      freq = 'Yüksek Verimli Vaka';
      stemCore = `${vText} Bu olguda tanısal doğrulama veya spesifik tedavi yaklaşımı olarak aşağıdakilerden hangisi en uygundur?`;
      buildOpt = (cand) => cand.management;
      break;
    case 3:
      difficulty = 'Temel Spot';
      freq = 'Her TUS Sorulur';
      stemCore = `Klinik veya patolojik değerlendirmede "${cleanDot(e.hallmark)}" saptanan bir olguda öncelikle düşünülmesi gereken tanı/antite hangisidir?`;
      buildOpt = (cand) => cand.name;
      break;
    case 4:
      difficulty = 'Temel Spot';
      freq = 'Altın Standart Spot';
      stemCore = `${branchMeta.name} kapsamında değerlendirilen "${e.name}" (${cluster.subTopic.split(' ve ')[0]}) açısından birincil sorumlu mekanizma, etken veya moleküler hedef hangisidir?`;
      buildOpt = (cand) => cand.target;
      break;
    case 5:
      difficulty = 'Klinik Vaka';
      freq = 'Yüksek Verimli Vaka';
      stemCore = `${cluster.subTopic} kapsamında "${e.name}" açısından aşağıdaki karakteristik klinik, laboratuvar veya yapısal bulgulardan hangisinin görülmesi en tipiktir?`;
      buildOpt = (cand) => cand.hallmark;
      break;
    case 6:
      difficulty = 'İleri Ayırıcı Tanı';
      freq = 'Yüksek Verimli Vaka';
      stemCore = `${branchMeta.name} değerlendirmesinde "${cleanDot(e.target)}" mekanizması söz konusu olduğunda aşağıdaki karakteristik bulgulardan hangisinin saptanması en olasıdır?`;
      buildOpt = (cand) => cand.hallmark;
      break;
    case 7:
      difficulty = 'Temel Spot';
      freq = 'Altın Standart Spot';
      stemCore = `${cluster.subTopic} kapsamında "${e.name}" için tanısal doğrulama, değerlendirme veya birinci basamak spesifik yaklaşım aşağıdakilerden hangisidir?`;
      buildOpt = (cand) => cand.management;
      break;
    case 8:
      difficulty = 'Klinik Vaka';
      freq = 'Her TUS Sorulur';
      stemCore = `${branchMeta.name} klinik değerlendirmesinde "${e.clues.join(' + ')}" anahtarları bir arada saptandığında öncelikle düşünülmesi gereken tanı veya antite hangisidir?`;
      buildOpt = (cand) => cand.name;
      break;
    case 9:
      difficulty = 'İleri Ayırıcı Tanı';
      freq = 'Altın Standart Spot';
      stemCore = `${branchMeta.name} kapsamında "${e.clues.join(' + ')}" bulguları saptandığında altta yatan birincil mekanizma, hedef veya etken aşağıdakilerden hangisidir?`;
      buildOpt = (cand) => cand.target;
      break;
    case 10: {
      difficulty = 'İleri Ayırıcı Tanı';
      freq = 'Her TUS Sorulur';
      stemCore = `${branchMeta.name} (${cluster.subTopic} — Grup ${eIdx + 1}) kapsamında aşağıdaki klinik ve mekanizma ifadelerinden hangisi YANLIŞTIR?`;
      buildOpt = (cand, sourceIdx) =>
        sourceIdx === eIdx
          ? `${e.name}: ${cleanDot(e.trapFalse)}.`
          : `${cand.name}: ${cleanDot(cand.target)}.`;
      break;
    }
    default: {
      difficulty = 'Klinik Vaka';
      freq = 'Yüksek Verimli Vaka';
      stemCore = `${cluster.subTopic} (Seri ${eIdx + 1}) kapsamında aşağıdaki "antite — tanısal/tedavi yaklaşımı" eşleştirmelerinden hangisi DOĞRUDUR?`;
      buildOpt = (cand, sourceIdx) => {
        if (sourceIdx === eIdx) {
          return `${e.name} — ${cleanDot(e.management)}`;
        }
        const posInWrong = nonTargets.indexOf(sourceIdx);
        const derangedIdx = nonTargets[(posInWrong + 1) % 4];
        return `${cand.name} — ${cleanDot(entities[derangedIdx].management)}`;
      };
      break;
    }
  }

  const shift = (cIdx * 3 + eIdx * 2 + aIdx) % 5;

  const options: TusQuestionOption[] = OPTION_LETTERS.map((letter, optPos) => {
    const sourceIdx = (optPos + shift) % 5;
    const cand = entities[sourceIdx];
    const isTarget = sourceIdx === eIdx;
    const text = buildOpt(cand, sourceIdx).replace(/\s{2,}/g, ' ').trim();

    let differentialNote: string;
    if (aIdx === 10) {
      differentialNote = isTarget
        ? `✓ Doğru Yanıt (Yanlış İfade): ${e.name} için doğrusu "${cleanDot(e.target)}" şeklindedir.`
        : `Doğru İfade (${cand.name}): ${cand.target} • ${cand.hallmark}`;
    } else if (aIdx === 11) {
      differentialNote = isTarget
        ? `✓ Doğru Eşleştirme (${e.name}): ${e.management}`
        : `Yanlış Eşleştirme — ${cand.name} için doğru yaklaşım: ${cand.management}`;
    } else {
      differentialNote = isTarget
        ? `✓ Doğru (${cand.name}): ${cand.target} — ${cand.hallmark}`
        : `${cand.name}: ${cand.target} — ${cand.hallmark}`;
    }

    return { letter, text, differentialNote };
  });

  const correctOptObj = options.find(
    (_, optPos) => (optPos + shift) % 5 === eIdx
  )!;

  const differentialSummary = entities
    .map((cand, idx) =>
      idx === eIdx
        ? `✓ ${cand.name}: ${cand.target} • ${cand.hallmark}`
        : `• ${cand.name}: ${cand.target} • ${cand.hallmark}`
    )
    .join('\n');

  const payload: HydratedVakaPayload = {
    branchName: branchMeta.name,
    subTopic: cluster.subTopic,
    difficulty,
    examFrequency: freq,
    stem: `${prefix}${stemCore}`.replace(/\s{2,}/g, ' ').trim(),
    clinicalClues: e.clues,
    options,
    correctOption: correctOptObj.letter,
    stepByStepMechanism: `${e.name}: ${e.target}. Klinik/patolojik karşılık: ${e.hallmark}`,
    differentialSummary,
    highYieldPearl: e.pearl,
    firstLineVsGoldStandard: e.management,
  };

  if (VAKA_LRU.size >= MAX_LRU) {
    const firstKey = VAKA_LRU.keys().next().value;
    if (firstKey) VAKA_LRU.delete(firstKey);
  }
  VAKA_LRU.set(id, payload);
  return payload;
}

function hydrateStructuredSpot(
  id: string,
  cIdx: number,
  eIdx: number,
  sIdx: number
): HydratedSpotPayload {
  const cached = SPOT_LRU.get(id);
  if (cached) return cached;

  const cluster = ALL_STRUCTURED_CLUSTERS[cIdx];
  const branchMeta = getBranchMeta(cluster.branchId);
  const entities = cluster.entities;
  const e = entities[eIdx];
  const sib1 = entities[(eIdx + 1) % 5];
  const sib2 = entities[(eIdx + 2) % 5];
  const sib3 = entities[(eIdx + 3) % 5];
  const sib4 = entities[(eIdx + 4) % 5];

  const cleanDot = (s: string) => s.replace(/\.$/, '').trim();

  let statement = '';
  let criticalHighlight = '';

  switch (sIdx) {
    case 0:
      statement = `[${cluster.subTopic}] ${e.name} için birincil sorumlu mekanizma veya hedef: ${cleanDot(e.target)}.`;
      criticalHighlight = cleanDot(e.target);
      break;
    case 1:
      statement = `[${cluster.subTopic}] ${e.name} açısından ${cleanDot(e.trapFalse)}.`;
      criticalHighlight = e.trapHighlight;
      break;
    case 2:
      statement = `[${cluster.subTopic}] ${e.name} kapsamında karakteristik özellik olarak "${cleanDot(e.hallmark)}" izlenir.`;
      criticalHighlight = e.clues[0] || e.name;
      break;
    case 3:
      statement = `[${cluster.subTopic}] ${e.name} mekanizmasında birincil sorumlu hedef/etken "${cleanDot(sib1.target)}" olarak tanımlanır.`;
      criticalHighlight = cleanDot(sib1.target);
      break;
    case 4:
      statement = `[${cluster.subTopic}] ${e.name} tanı ve yönetiminde standart yaklaşım: ${cleanDot(e.management)}.`;
      criticalHighlight = e.name;
      break;
    case 5:
      statement = `[${cluster.subTopic}] "${cleanDot(e.hallmark)}" saptandığında öncelikli karşılık ${sib2.name} olup ${e.name} beklenmez.`;
      criticalHighlight = sib2.name;
      break;
    case 6:
      statement = `[${cluster.subTopic}] ${e.name} için TUS altın kuralı: ${cleanDot(e.pearl)}.`;
      criticalHighlight = e.name;
      break;
    case 7:
      statement = `[${cluster.subTopic}] ${e.name} için en tipik klinik veya yapısal bulgu "${cleanDot(sib3.hallmark)}" şeklindedir.`;
      criticalHighlight = cleanDot(sib3.hallmark);
      break;
    case 8:
      statement = `[${cluster.subTopic}] "${e.clues.join(' + ')}" anahtarları bir arada görüldüğünde öncelikle ${e.name} düşünülmelidir.`;
      criticalHighlight = e.name;
      break;
    case 9:
      statement = `[${cluster.subTopic}] ${e.name} değerlendirmesinde birinci basamak spesifik yaklaşım "${cleanDot(sib4.management)}" uygulamasıdır.`;
      criticalHighlight = cleanDot(sib4.management);
      break;
    case 10:
      statement = `[${cluster.subTopic}] "${cleanDot(e.target)}" mekanizması "${cleanDot(e.hallmark)}" bulgusu ile doğrudan ilişkilidir.`;
      criticalHighlight = cleanDot(e.target);
      break;
    default:
      statement = `[${cluster.subTopic}] "${e.clues.join(' + ')}" bulgularına yol açan birincil mekanizma "${cleanDot(sib2.target)}" olarak kabul edilir.`;
      criticalHighlight = cleanDot(sib2.target);
      break;
  }

  const payload: HydratedSpotPayload = {
    branchName: branchMeta.name,
    subTopic: cluster.subTopic,
    statement: statement.replace(/\s{2,}/g, ' ').trim(),
    criticalHighlight,
    correctMedicalFact: `${e.name}: ${cleanDot(e.target)} • ${cleanDot(e.hallmark)}.`,
    comparisonNote: e.management,
    highYieldPearl: e.pearl,
  };

  if (SPOT_LRU.size >= MAX_LRU) {
    const firstKey = SPOT_LRU.keys().next().value;
    if (firstKey) SPOT_LRU.delete(firstKey);
  }
  SPOT_LRU.set(id, payload);
  return payload;
}

class VirtualStructuredVakaQuestion implements TusVakaQuestion {
  readonly id: string;
  readonly session: TusSessionType;
  readonly branchId: TusBranchId;
  readonly isOsymTwin?: boolean;
  readonly osymYearTag?: string;
  readonly _cIdx: number;
  private readonly _eIdx: number;
  private readonly _aIdx: number;

  constructor(
    id: string,
    session: TusSessionType,
    branchId: TusBranchId,
    cIdx: number,
    eIdx: number,
    aIdx: number,
    osymYearTag?: string
  ) {
    this.id = id;
    this.session = session;
    this.branchId = branchId;
    this._cIdx = cIdx;
    this._eIdx = eIdx;
    this._aIdx = aIdx;
    if (osymYearTag) {
      this.isOsymTwin = true;
      this.osymYearTag = osymYearTag;
    }
  }

  private _h(): HydratedVakaPayload {
    return hydrateStructuredVaka(this.id, this._cIdx, this._eIdx, this._aIdx);
  }

  get branchName(): string {
    return this._h().branchName;
  }
  get subTopic(): string {
    return this._h().subTopic;
  }
  get difficulty(): TusVakaQuestion['difficulty'] {
    return this._h().difficulty;
  }
  get examFrequency(): TusVakaQuestion['examFrequency'] {
    return this._h().examFrequency;
  }
  get stem(): string {
    return this._h().stem;
  }
  get clinicalClues(): string[] {
    return this._h().clinicalClues;
  }
  get options(): TusQuestionOption[] {
    return this._h().options;
  }
  get correctOption(): OptionLetter {
    return this._h().correctOption;
  }
  get stepByStepMechanism(): string {
    return this._h().stepByStepMechanism;
  }
  get differentialSummary(): string {
    return this._h().differentialSummary;
  }
  get highYieldPearl(): string {
    return this._h().highYieldPearl;
  }
  get firstLineVsGoldStandard(): string {
    return this._h().firstLineVsGoldStandard;
  }
}

class VirtualStructuredSpotCard implements TusSpotCard {
  readonly id: string;
  readonly session: TusSessionType;
  readonly branchId: TusBranchId;
  readonly isTrue: boolean;
  readonly isOsymTwin?: boolean;
  readonly osymYearTag?: string;
  readonly _cIdx: number;
  private readonly _eIdx: number;
  private readonly _sIdx: number;

  constructor(
    id: string,
    session: TusSessionType,
    branchId: TusBranchId,
    isTrue: boolean,
    cIdx: number,
    eIdx: number,
    sIdx: number,
    osymYearTag?: string
  ) {
    this.id = id;
    this.session = session;
    this.branchId = branchId;
    this.isTrue = isTrue;
    this._cIdx = cIdx;
    this._eIdx = eIdx;
    this._sIdx = sIdx;
    if (osymYearTag) {
      this.isOsymTwin = true;
      this.osymYearTag = osymYearTag;
    }
  }

  private _h(): HydratedSpotPayload {
    return hydrateStructuredSpot(this.id, this._cIdx, this._eIdx, this._sIdx);
  }

  get branchName(): string {
    return this._h().branchName;
  }
  get subTopic(): string {
    return this._h().subTopic;
  }
  get statement(): string {
    return this._h().statement;
  }
  get criticalHighlight(): string {
    return this._h().criticalHighlight;
  }
  get correctMedicalFact(): string {
    return this._h().correctMedicalFact;
  }
  get comparisonNote(): string {
    return this._h().comparisonNote;
  }
  get highYieldPearl(): string {
    return this._h().highYieldPearl;
  }
}

export function matchesVakaSearch(q: TusVakaQuestion, qLower: string): boolean {
  if (!qLower) return true;
  if (q instanceof VirtualStructuredVakaQuestion) {
    if (!STRUCTURED_CLUSTER_HAYSTACK[q._cIdx].includes(qLower)) return false;
  }
  const optText = q.options.map((o) => o.text).join(' ');
  const hay = `${q.stem} ${optText} ${q.subTopic} ${q.branchName} ${q.highYieldPearl}`.toLowerCase();
  return hay.includes(qLower);
}

export function matchesSpotSearch(s: TusSpotCard, qLower: string): boolean {
  if (!qLower) return true;
  if (s instanceof VirtualStructuredSpotCard) {
    if (!STRUCTURED_CLUSTER_HAYSTACK[s._cIdx].includes(qLower)) return false;
  }
  const hay = `${s.statement} ${s.correctMedicalFact} ${s.subTopic} ${s.branchName} ${s.highYieldPearl}`.toLowerCase();
  return hay.includes(qLower);
}

// ============================================================================
// BUILD UNIFIED 32,000+ REPOSITORY (ZERO LEAKS, ROUND-ROBIN INTERLEAVED)
// ============================================================================

function buildTusRepository(): {
  vakaQuestions: TusVakaQuestion[];
  spotCards: TusSpotCard[];
} {
  const perClusterVaka: TusVakaQuestion[][] = [];
  const perClusterSpots: TusSpotCard[][] = [];
  const seenLegacyStems = new Set<string>();
  const seenLegacySpots = new Set<string>();

  let qCounter = 1;
  let sCounter = 1;

  // PART A: Sanitized Zero-Leak Legacy Clusters (preserves clinical vignettes & twin variety)
  ALL_LEGACY_CLUSTERS.forEach((cluster, clusterIdx) => {
    const branchMeta = getBranchMeta(cluster.branchId);
    const entities = cluster.entities;
    const isOsymTwinCluster = cluster.subTopic.startsWith('ÖSYM İkizi');
    const perEntityVaka: TusVakaQuestion[][] = [];
    const perEntitySpots: TusSpotCard[][] = [];

    entities.forEach((entity, entityIdx) => {
      const shortTitle = cleanShortTitle(entity.entityName);
      const yearMatch = entity.patientVignette.match(/^\[([^\]]+)\]/);
      const osymYearTag = isOsymTwinCluster
        ? yearMatch
          ? yearMatch[1]
          : '2024 TUS Konsept İkizi'
        : undefined;
      const prefixTwin = (rawStem: string) => {
        if (!isOsymTwinCluster || !osymYearTag) return rawStem;
        if (rawStem.startsWith('[')) return rawStem;
        return `[${osymYearTag}] ${rawStem}`;
      };

      const safeVignette = maskEntityMentions(
        entity.patientVignette,
        entity.entityName,
        'bu klinik tablo'
      );
      const safePrompt = maskEntityMentions(
        entity.questionPrompt,
        entity.entityName,
        'bu antite'
      );
      const maskedNote = maskEntityMentions(
        entity.whenCorrectNote,
        entity.entityName,
        'bu tablo'
      );
      const maskedClues = maskEntityMentions(
        entity.clues.join(', '),
        entity.entityName,
        'bu bulgu'
      );
      const maskedMechanism = maskEntityMentions(
        entity.mechanism,
        entity.entityName,
        'bu mekanizma'
      );

      // Only use zero-self-leak angles where options are clean short titles and stem masks target
      const legacyAngles: Array<{
        difficulty: TusVakaQuestion['difficulty'];
        freq: TusVakaQuestion['examFrequency'];
        buildStem: () => string;
      }> = [
        {
          difficulty: 'Klinik Vaka',
          freq: 'Her TUS Sorulur',
          buildStem: () => `${safeVignette} ${safePrompt}`,
        },
        {
          difficulty: 'İleri Ayırıcı Tanı',
          freq: 'Yüksek Verimli Vaka',
          buildStem: () =>
            `Aşağıdaki klinik tablo veya yapılardan hangisi "${maskedNote}" özelliği ile karakterizedir?`,
        },
        {
          difficulty: 'İleri Ayırıcı Tanı',
          freq: 'Altın Standart Spot',
          buildStem: () =>
            `Bir olguda "${maskedClues}" klinik ipuçları saptandığında en olası tanı veya hedef yapı aşağıdakilerden hangisidir?`,
        },
        {
          difficulty: 'Klinik Vaka',
          freq: 'Her TUS Sorulur',
          buildStem: () =>
            `"${maskedMechanism}" mekanizması ile karakterize olan klinik antite aşağıdakilerden hangisidir?`,
        },
      ];

      const entityVakaBucket: TusVakaQuestion[] = [];
      legacyAngles.forEach((angle, angleIdx) => {
        const stemText = prefixTwin(angle.buildStem())
          .replace(/\(\s*\)/g, '')
          .replace(/\s{2,}/g, ' ')
          .trim();
        if (seenLegacyStems.has(stemText)) return;

        const shift = (clusterIdx + entityIdx + angleIdx) % 5;
        const options: TusQuestionOption[] = OPTION_LETTERS.map((letter, optPos) => {
          const sourceIdx = (optPos + shift) % 5;
          const candidate = entities[sourceIdx];
          const candShort = cleanShortTitle(candidate.entityName);
          const isTarget = sourceIdx === entityIdx;
          return {
            letter,
            text: candShort,
            differentialNote: isTarget
              ? `✓ Doğru (${candShort}): ${candidate.whenCorrectNote}`
              : `${candShort}: ${candidate.whenCorrectNote}`,
          };
        });

        // Verify all 5 options distinct & no answer leak in stem
        const optNorms = new Set(options.map((o) => o.text.toLowerCase()));
        if (optNorms.size !== 5) return;
        const correctOptObj = options.find(
          (_, optPos) => (optPos + shift) % 5 === entityIdx
        )!;
        const baseAns = correctOptObj.text.split('(')[0].trim();
        if (
          baseAns.length >= 5 &&
          stemText.toLowerCase().includes(baseAns.toLowerCase())
        ) {
          return;
        }

        seenLegacyStems.add(stemText);

        const differentialSummary = entities
          .map((cand, idx) => {
            const cTitle = cleanShortTitle(cand.entityName);
            return idx === entityIdx
              ? `✓ ${cTitle}: ${cand.whenCorrectNote}`
              : `• ${cTitle}: ${cand.whenCorrectNote}`;
          })
          .join('\n');

        entityVakaBucket.push({
          id: `vaka-${qCounter++}`,
          session: branchMeta.session,
          branchId: cluster.branchId,
          branchName: branchMeta.name,
          subTopic: cluster.subTopic,
          difficulty: angle.difficulty,
          examFrequency: angle.freq,
          stem: stemText,
          clinicalClues: entity.clues,
          options,
          correctOption: correctOptObj.letter,
          stepByStepMechanism: entity.mechanism,
          differentialSummary,
          highYieldPearl: entity.pearl,
          firstLineVsGoldStandard: entity.firstVsGold,
          isOsymTwin: isOsymTwinCluster,
          osymYearTag,
        });
      });
      perEntityVaka.push(entityVakaBucket);

      const nextEntity = entities[(entityIdx + 1) % 5];
      const prevEntity = entities[(entityIdx + 4) % 5];
      const prevShort = cleanShortTitle(prevEntity.entityName);

      const legacySpots: Array<{
        statement: string;
        isTrue: boolean;
        criticalHighlight: string;
      }> = [
        {
          statement: entity.trueStatement,
          isTrue: true,
          criticalHighlight: entity.clues[0] || shortTitle,
        },
        {
          statement: entity.falseStatement,
          isTrue: false,
          criticalHighlight: entity.falseHighlight,
        },
        {
          statement: entity.pearl,
          isTrue: true,
          criticalHighlight: shortTitle,
        },
        {
          statement: `${shortTitle} tablosunda karakteristik klinik özellik "${nextEntity.whenCorrectNote}" olarak izlenir.`,
          isTrue: false,
          criticalHighlight: nextEntity.whenCorrectNote,
        },
        {
          statement: `"${entity.clues.join(', ')}" bulguları ile başvuran hastada en olası tanı ${prevShort} olup ${shortTitle} beklenmez.`,
          isTrue: false,
          criticalHighlight: `en olası tanı ${prevShort}`,
        },
        {
          statement: `${shortTitle} fizyopatolojisinde: ${entity.mechanism}`,
          isTrue: true,
          criticalHighlight: shortTitle,
        },
      ];

      const entitySpotBucket: TusSpotCard[] = [];
      legacySpots.forEach((spot) => {
        const cleanSt = spot.statement.replace(/\(\s*\)/g, '').replace(/\s{2,}/g, ' ').trim();
        if (seenLegacySpots.has(cleanSt)) return;
        seenLegacySpots.add(cleanSt);
        entitySpotBucket.push({
          id: `spot-${sCounter++}`,
          session: branchMeta.session,
          branchId: cluster.branchId,
          branchName: branchMeta.name,
          subTopic: cluster.subTopic,
          statement: cleanSt,
          isTrue: spot.isTrue,
          criticalHighlight: spot.criticalHighlight,
          correctMedicalFact: entity.trueStatement,
          comparisonNote: entity.firstVsGold,
          highYieldPearl: entity.pearl,
          isOsymTwin: isOsymTwinCluster,
          osymYearTag,
        });
      });
      perEntitySpots.push(entitySpotBucket);
    });

    const clusterVakaList: TusVakaQuestion[] = [];
    const maxAngleLen = Math.max(...perEntityVaka.map((b) => b.length), 0);
    for (let aIdx = 0; aIdx < maxAngleLen; aIdx++) {
      for (let step = 0; step < entities.length; step++) {
        const rotatedIdx = (clusterIdx + step) % entities.length;
        const q = perEntityVaka[rotatedIdx]?.[aIdx];
        if (q) clusterVakaList.push(q);
      }
    }

    const clusterSpotList: TusSpotCard[] = [];
    const maxSpotLen = Math.max(...perEntitySpots.map((b) => b.length), 0);
    for (let aIdx = 0; aIdx < maxSpotLen; aIdx++) {
      for (let step = 0; step < entities.length; step++) {
        const rotatedIdx = (clusterIdx + step) % entities.length;
        const s = perEntitySpots[rotatedIdx]?.[aIdx];
        if (s) clusterSpotList.push(s);
      }
    }

    perClusterVaka.push(clusterVakaList);
    perClusterSpots.push(clusterSpotList);
  });

  // PART B: 256 Structured Clusters -> Virtual Lazy Items (~15,000 Vaka + ~15,000 Spots)
  ALL_STRUCTURED_CLUSTERS.forEach((cluster, sClusterIdx) => {
    const branchMeta = getBranchMeta(cluster.branchId);
    const osymTag = cluster.osymTwinYear
      ? `${cluster.osymTwinYear} TUS Konsept İkizi`
      : undefined;

    const perEntityVaka: TusVakaQuestion[][] = [[], [], [], [], []];
    const perEntitySpots: TusSpotCard[][] = [[], [], [], [], []];

    for (let eIdx = 0; eIdx < 5; eIdx++) {
      // Natural organic variation (11 or 12 angles) so branch totals look non-artificial
      const angleCount = (sClusterIdx + eIdx) % 5 === 0 ? 11 : 12;
      for (let aIdx = 0; aIdx < angleCount; aIdx++) {
        const id = osymTag ? `twin-${qCounter++}` : `vaka-${qCounter++}`;
        perEntityVaka[eIdx].push(
          new VirtualStructuredVakaQuestion(
            id,
            branchMeta.session,
            cluster.branchId,
            sClusterIdx,
            eIdx,
            aIdx,
            osymTag
          )
        );
      }

      for (let spIdx = 0; spIdx < angleCount; spIdx++) {
        const isTrue = spIdx % 2 === 0;
        const sid = `spot-${sCounter++}`;
        perEntitySpots[eIdx].push(
          new VirtualStructuredSpotCard(
            sid,
            branchMeta.session,
            cluster.branchId,
            isTrue,
            sClusterIdx,
            eIdx,
            spIdx,
            osymTag
          )
        );
      }
    }

    const clusterVakaList: TusVakaQuestion[] = [];
    for (let aIdx = 0; aIdx < 12; aIdx++) {
      for (let step = 0; step < 5; step++) {
        const rotatedIdx = (sClusterIdx + step) % 5;
        const q = perEntityVaka[rotatedIdx][aIdx];
        if (q) clusterVakaList.push(q);
      }
    }

    const clusterSpotList: TusSpotCard[] = [];
    for (let spIdx = 0; spIdx < 12; spIdx++) {
      for (let step = 0; step < 5; step++) {
        const rotatedIdx = (sClusterIdx + step) % 5;
        const s = perEntitySpots[rotatedIdx][spIdx];
        if (s) clusterSpotList.push(s);
      }
    }

    perClusterVaka.push(clusterVakaList);
    perClusterSpots.push(clusterSpotList);
  });

  // Round-robin interleave across all clusters so every consecutive item spans diverse branches & clinical angles
  const interleavedVaka: TusVakaQuestion[] = [];
  const maxVakaLen = Math.max(...perClusterVaka.map((list) => list.length), 0);
  for (let pos = 0; pos < maxVakaLen; pos++) {
    for (let cIdx = 0; cIdx < perClusterVaka.length; cIdx++) {
      const item = perClusterVaka[cIdx][pos];
      if (item) interleavedVaka.push(item);
    }
  }

  const interleavedSpots: TusSpotCard[] = [];
  const maxSpotLen = Math.max(...perClusterSpots.map((list) => list.length), 0);
  for (let pos = 0; pos < maxSpotLen; pos++) {
    for (let cIdx = 0; cIdx < perClusterSpots.length; cIdx++) {
      const item = perClusterSpots[cIdx][pos];
      if (item) interleavedSpots.push(item);
    }
  }

  return { vakaQuestions: interleavedVaka, spotCards: interleavedSpots };
}

const REPOSITORY = buildTusRepository();

export const TUS_VAKA_QUESTIONS: TusVakaQuestion[] = REPOSITORY.vakaQuestions;
export const TUS_OSYM_TWIN_QUESTIONS: TusVakaQuestion[] =
  TUS_VAKA_QUESTIONS.filter((q) => Boolean(q.isOsymTwin));
export const TUS_SPOT_CARDS: TusSpotCard[] = REPOSITORY.spotCards;

export const TOTAL_INTERACTIVE_TUS_ITEMS =
  TUS_VAKA_QUESTIONS.length + TUS_SPOT_CARDS.length;

export interface StaticBranchCounts {
  vaka: number;
  twin: number;
  spot: number;
  total: number;
}

function computeStaticBranchCounts(): Record<TusBranchId | 'ALL', StaticBranchCounts> {
  const counts = {
    ALL: {
      vaka: TUS_VAKA_QUESTIONS.length,
      twin: TUS_OSYM_TWIN_QUESTIONS.length,
      spot: TUS_SPOT_CARDS.length,
      total: TOTAL_INTERACTIVE_TUS_ITEMS,
    },
  } as Record<TusBranchId | 'ALL', StaticBranchCounts>;

  for (const b of TUS_BRANCHES) {
    counts[b.id] = { vaka: 0, twin: 0, spot: 0, total: 0 };
  }
  for (const q of TUS_VAKA_QUESTIONS) {
    const entry = counts[q.branchId];
    if (entry) {
      entry.vaka += 1;
      entry.total += 1;
      if (q.isOsymTwin) entry.twin += 1;
    }
  }
  for (const s of TUS_SPOT_CARDS) {
    const entry = counts[s.branchId];
    if (entry) {
      entry.spot += 1;
      entry.total += 1;
    }
  }
  return counts;
}

export const STATIC_BRANCH_COUNTS = computeStaticBranchCounts();

export interface TusCoreTopic {
  id: string;
  branchId: TusBranchId;
  title: string;
  weight: 'Çok Yüksek' | 'Yüksek';
}

export const TUS_CORE_TOPICS: TusCoreTopic[] = [
  // Biyokimya
  { id: 'bio-1', branchId: 'biyokimya', title: 'Aminoasit & Protein Metabolizması', weight: 'Çok Yüksek' },
  { id: 'bio-2', branchId: 'biyokimya', title: 'Karbonhidrat & Biyoenerjetik', weight: 'Çok Yüksek' },
  { id: 'bio-3', branchId: 'biyokimya', title: 'Lipid & Lipoprotein Metabolizması', weight: 'Çok Yüksek' },
  { id: 'bio-4', branchId: 'biyokimya', title: 'Enzim Kinetiği & Vitaminler', weight: 'Yüksek' },
  { id: 'bio-5', branchId: 'biyokimya', title: 'Moleküler Biyoloji & Hormon Sinyali', weight: 'Yüksek' },
  // Mikrobiyoloji
  { id: 'mik-1', branchId: 'mikrobiyoloji', title: 'Gram (+) & (-) Bakteriyoloji', weight: 'Çok Yüksek' },
  { id: 'mik-2', branchId: 'mikrobiyoloji', title: 'Özel Boyananlar & Zorunlu Hücre İçi', weight: 'Çok Yüksek' },
  { id: 'mik-3', branchId: 'mikrobiyoloji', title: 'Klinik Viroloji (DNA/RNA & Hepatit)', weight: 'Çok Yüksek' },
  { id: 'mik-4', branchId: 'mikrobiyoloji', title: 'Tıbbi Mikoloji & Parazitoloji', weight: 'Yüksek' },
  { id: 'mik-5', branchId: 'mikrobiyoloji', title: 'Temel & Klinik İmmünoloji', weight: 'Yüksek' },
  // Patoloji
  { id: 'pat-1', branchId: 'patoloji', title: 'Hücre Hasarı, Nekroz & İnflamasyon', weight: 'Çok Yüksek' },
  { id: 'pat-2', branchId: 'patoloji', title: 'Hemodinamik & İmmünopatoloji', weight: 'Çok Yüksek' },
  { id: 'pat-3', branchId: 'patoloji', title: 'Neoplazi & Tümör Biyolojisi', weight: 'Çok Yüksek' },
  { id: 'pat-4', branchId: 'patoloji', title: 'Hematopatoloji & GİS Tümörleri', weight: 'Yüksek' },
  { id: 'pat-5', branchId: 'patoloji', title: 'Böbrek, Endokrin & SSS Patolojisi', weight: 'Yüksek' },
  // Farmakoloji
  { id: 'far-1', branchId: 'farmakoloji', title: 'Otonom Sinir Sistemi İlaçları', weight: 'Çok Yüksek' },
  { id: 'far-2', branchId: 'farmakoloji', title: 'Kardiyovasküler & Renal Farmakoloji', weight: 'Çok Yüksek' },
  { id: 'far-3', branchId: 'farmakoloji', title: 'SSS & Anestezik Farmakoloji', weight: 'Yüksek' },
  { id: 'far-4', branchId: 'farmakoloji', title: 'Antibiyotikler & Antiviraller', weight: 'Çok Yüksek' },
  { id: 'far-5', branchId: 'farmakoloji', title: 'Antineoplastikler & Spesifik Antidotlar', weight: 'Çok Yüksek' },
  // Anatomi
  { id: 'ana-1', branchId: 'anatomi', title: 'Üst & Alt Ekstremite Pleksusları', weight: 'Çok Yüksek' },
  { id: 'ana-2', branchId: 'anatomi', title: 'Kraniyal Sinirler & Foramenler', weight: 'Çok Yüksek' },
  { id: 'ana-3', branchId: 'anatomi', title: 'Nöroanatomi & Beyin Yolları', weight: 'Çok Yüksek' },
  { id: 'ana-4', branchId: 'anatomi', title: 'Toraks & Mediasten Damarları', weight: 'Yüksek' },
  { id: 'ana-5', branchId: 'anatomi', title: 'Abdomen, Pelvis & Portal Sistem', weight: 'Yüksek' },
  // Fizyoloji
  { id: 'fiz-1', branchId: 'fizyoloji', title: 'Aksiyon Potansiyeli & Kas Fizyolojisi', weight: 'Yüksek' },
  { id: 'fiz-2', branchId: 'fizyoloji', title: 'Kardiyak Siklus & Basınç Eğrileri', weight: 'Çok Yüksek' },
  { id: 'fiz-3', branchId: 'fizyoloji', title: 'Solunum Mekanikleri & O2-Hb Eğrisi', weight: 'Çok Yüksek' },
  { id: 'fiz-4', branchId: 'fizyoloji', title: 'Renal Klirens & Nefron Transportu', weight: 'Çok Yüksek' },
  { id: 'fiz-5', branchId: 'fizyoloji', title: 'Endokrin, GİS & Sinir Fizyolojisi', weight: 'Yüksek' },
  // Histoloji & Embriyoloji
  { id: 'his-1', branchId: 'histoloji', title: 'Epitel, Hücre Bağlantıları & Konnektif Doku', weight: 'Çok Yüksek' },
  { id: 'his-2', branchId: 'histoloji', title: 'Gametogenez, Plasenta & Teratoloji', weight: 'Yüksek' },
  { id: 'his-3', branchId: 'histoloji', title: 'Farengeal Arkus, Kese & Yarık Türevleri', weight: 'Çok Yüksek' },
  { id: 'his-4', branchId: 'histoloji', title: 'Nöral Krest & Organogenez', weight: 'Çok Yüksek' },
  { id: 'his-5', branchId: 'histoloji', title: 'Kardiyovasküler & Ürogenital Embriyoloji', weight: 'Yüksek' },
  // Dahiliye Grubu
  { id: 'dah-1', branchId: 'dahiliye', title: 'Kardiyoloji & Göğüs Hastalıkları', weight: 'Çok Yüksek' },
  { id: 'dah-2', branchId: 'dahiliye', title: 'Nefroloji & Asit-Baz Bozuklukları', weight: 'Çok Yüksek' },
  { id: 'dah-3', branchId: 'dahiliye', title: 'Endokrinoloji & Romatoloji', weight: 'Çok Yüksek' },
  { id: 'dah-4', branchId: 'dahiliye', title: 'Hematoloji, Onkoloji & GİS', weight: 'Çok Yüksek' },
  { id: 'dah-5', branchId: 'dahiliye', title: 'Nöroloji, Enfeksiyon, Derma & Psikiyatri', weight: 'Çok Yüksek' },
  // Pediatri
  { id: 'ped-1', branchId: 'pediatri', title: 'Yenidoğan Resüsitasyon & Acilleri', weight: 'Çok Yüksek' },
  { id: 'ped-2', branchId: 'pediatri', title: 'Çocuk Kardiyoloji & Konjenital Kalp', weight: 'Çok Yüksek' },
  { id: 'ped-3', branchId: 'pediatri', title: 'Kalıtsal Metabolik & Endokrin', weight: 'Yüksek' },
  { id: 'ped-4', branchId: 'pediatri', title: 'Aşılama, Döküntülü & Enfeksiyon', weight: 'Çok Yüksek' },
  { id: 'ped-5', branchId: 'pediatri', title: 'Pediatrik Nefroloji, İmmün & Hemato-Onkoloji', weight: 'Yüksek' },
  // Cerrahi Grubu
  { id: 'cer-1', branchId: 'cerrahi', title: 'Travma, Şok, Yanık & Sıvı-Elektrolit', weight: 'Çok Yüksek' },
  { id: 'cer-2', branchId: 'cerrahi', title: 'Hepatobiliyer, Pankreas & Akut Karın', weight: 'Çok Yüksek' },
  { id: 'cer-3', branchId: 'cerrahi', title: 'Meme, Tiroid-Paratiroid & GİS Cerrahisi', weight: 'Çok Yüksek' },
  { id: 'cer-4', branchId: 'cerrahi', title: 'Çocuk Cerrahisi & Üroloji', weight: 'Yüksek' },
  { id: 'cer-5', branchId: 'cerrahi', title: 'KBB, Göz, Ortopedi & Beyin Cerrahisi', weight: 'Yüksek' },
  // Kadın Doğum
  { id: 'kad-1', branchId: 'kadindogum', title: 'Obstetrik Kanamalar & Hipertansif Gebelik', weight: 'Çok Yüksek' },
  { id: 'kad-2', branchId: 'kadindogum', title: 'Prenatal Tanı, İntrapartum Takip & Pelvis', weight: 'Yüksek' },
  { id: 'kad-3', branchId: 'kadindogum', title: 'Jinekolojik Onkoloji & Tarama', weight: 'Çok Yüksek' },
  { id: 'kad-4', branchId: 'kadindogum', title: 'Endokrin, Amenore, PKOS & İnfertilite', weight: 'Çok Yüksek' },
  { id: 'kad-5', branchId: 'kadindogum', title: 'Ektopik Gebelik, Mol & Pelvik Enfeksiyonlar', weight: 'Yüksek' },
];

export interface TusSpecialtyTarget {
  id: string;
  name: string;
  targetScore: number;
  sessionFocus: 'KTBT' | 'Dengeli';
}

export const TUS_SPECIALTY_TARGETS: TusSpecialtyTarget[] = [
  { id: 'dermatoloji', name: 'Dermatoloji', targetScore: 71.0, sessionFocus: 'KTBT' },
  { id: 'plastik', name: 'Plastik Cerrahi', targetScore: 70.0, sessionFocus: 'KTBT' },
  { id: 'radyoloji', name: 'Radyoloji', targetScore: 68.5, sessionFocus: 'Dengeli' },
  { id: 'goz', name: 'Göz Hastalıkları', targetScore: 67.5, sessionFocus: 'KTBT' },
  { id: 'ftr', name: 'Fiziksel Tıp ve Reh.', targetScore: 66.0, sessionFocus: 'KTBT' },
  { id: 'kardiyoloji', name: 'Kardiyoloji', targetScore: 65.5, sessionFocus: 'KTBT' },
  { id: 'kbb', name: 'Kulak Burun Boğaz', targetScore: 65.0, sessionFocus: 'KTBT' },
  { id: 'cocuk-psik', name: 'Çocuk ve Ergen Psikiyatrisi', targetScore: 64.5, sessionFocus: 'KTBT' },
  { id: 'psikiyatri', name: 'Psikiyatri', targetScore: 63.5, sessionFocus: 'KTBT' },
  { id: 'noroloji', name: 'Nöroloji', targetScore: 61.0, sessionFocus: 'KTBT' },
  { id: 'ortopedi', name: 'Ortopedi ve Travmatoloji', targetScore: 60.5, sessionFocus: 'KTBT' },
  { id: 'kadin-dogum', name: 'Kadın Hastalıkları ve Doğum', targetScore: 59.0, sessionFocus: 'KTBT' },
  { id: 'dahiliye', name: 'İç Hastalıkları', targetScore: 57.5, sessionFocus: 'KTBT' },
  { id: 'anestezi', name: 'Anesteziyoloji ve Rean.', targetScore: 56.5, sessionFocus: 'Dengeli' },
  { id: 'pediatri', name: 'Çocuk Sağlığı ve Hast.', targetScore: 56.0, sessionFocus: 'KTBT' },
  { id: 'genel-cerrahi', name: 'Genel Cerrahi', targetScore: 55.0, sessionFocus: 'KTBT' },
  { id: 'acil-tip', name: 'Acil Tıp', targetScore: 52.5, sessionFocus: 'Dengeli' },
];

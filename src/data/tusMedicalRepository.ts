import {
  DifferentialClusterSeed,
  OptionLetter,
  TusBranchId,
  TusBranchMeta,
  TusQuestionOption,
  TusSpotCard,
  TusVakaQuestion,
} from './tusTypes';
import { TTBT_CLUSTERS } from './tusBasicClusters';
import { KTBT_CLUSTERS, TUS_CLINICAL_GUIDE_ENTRIES } from './tusClinicalClusters';
import { EXTENDED_TUS_CLUSTERS } from './tusExtendedClusters';
import { MORE_TUS_CLUSTERS } from './tusMoreClinicalClusters';
import { ADDITIONAL_TUS_CLUSTERS } from './tusAdditionalClusters';
import { OSYM_TWIN_TUS_CLUSTERS } from './tusOsymTwinClusters';

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

const ALL_CLUSTERS: DifferentialClusterSeed[] = [
  ...OSYM_TWIN_TUS_CLUSTERS,
  ...TTBT_CLUSTERS,
  ...KTBT_CLUSTERS,
  ...EXTENDED_TUS_CLUSTERS,
  ...MORE_TUS_CLUSTERS,
  ...ADDITIONAL_TUS_CLUSTERS,
];

function cleanShortTitle(rawName: string): string {
  const openParen = rawName.indexOf('(');
  const dashIdx = rawName.indexOf('—');

  // Case 1: '—' appears before any '(' (e.g. "Foramen Ovale — N. Mandibularis (CN V3)")
  if (dashIdx !== -1 && (openParen === -1 || dashIdx < openParen)) {
    return rawName.slice(0, dashIdx).trim();
  }

  // Case 2: '(' appears in rawName
  if (openParen !== -1) {
    const baseName = rawName.slice(0, openParen).trim();
    const closeParen = rawName.indexOf(')', openParen);
    const inside =
      closeParen !== -1
        ? rawName.slice(openParen + 1, closeParen)
        : rawName.slice(openParen + 1);

    // If '—' is inside parentheses (e.g. "Von Gierke (Tip I — Glukoz-6-Fosfataz)")
    if (inside.includes('—')) {
      const shortCode = inside.split('—')[0].trim();
      if (shortCode && shortCode.length <= 16) {
        return `${baseName} (${shortCode})`;
      }
      return baseName;
    }

    // Keep short abbreviations like (TTN), (RDS), (HSP), (MEN 1), strip long spoilers
    if (inside.trim().length <= 16) {
      return `${baseName} (${inside.trim()})`;
    }
    return baseName;
  }

  return rawName.trim();
}

// Branch-specific extra angle count so each of the 11 branches has realistic, varied question counts
const BRANCH_EXTRA_ANGLE_MAP: Record<TusBranchId, number> = {
  dahiliye: 8,
  pediatri: 7,
  patoloji: 7,
  farmakoloji: 6,
  cerrahi: 8,
  biyokimya: 7,
  mikrobiyoloji: 6,
  kadindogum: 7,
  anatomi: 6,
  fizyoloji: 7,
  histoloji: 5,
};

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Removes direct answer-name leaks from Angles 2, 6, 7 ("hangisidir?" stems)
function redactTargetFromStem(rawText: string, entityName: string): string {
  const shortTitle = cleanShortTitle(entityName);
  const candidates = new Set<string>();

  const pushVariants = (s: string) => {
    const clean = s.trim();
    if (clean.length >= 4) candidates.add(clean);
    const noParen = clean.replace(/\([^)]*\)/g, '').trim();
    if (noParen.length >= 4) {
      candidates.add(noParen);
      const strippedNoun = noParen
        .replace(/\s+(?:hastalığı|sendromu|karsinomu|kanseri|tümörü|toksisitesi|eksikliği|anemisi)$/i, '')
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
  // Also include prefix before dash in full entityName
  const preDash = entityName.split('—')[0].trim();
  pushVariants(preDash);

  // Sort longest first so multi-word phrases mask cleanly before shorter tokens
  const sorted = [...candidates]
    .filter((t) => t.length >= 4 && !['tümör', 'sendrom', 'hastalık', 'hastalığı', 'sendromu'].includes(t.toLowerCase()))
    .sort((a, b) => b.length - a.length);

  let result = rawText;
  for (const token of sorted) {
    const escaped = escapeRegExp(token);
    const re = new RegExp(
      `${escaped}(?:[’']?(?:da|de|ta|te|dan|den|tan|ten|ın|in|un|ün|nın|nin|nun|nün|yla|yle|la|le|ya|ye|a|e|ı|i|u|ü))?`,
      'gi'
    );
    result = result.replace(re, 'ilgili antite');
  }

  return result
    .replace(/ilgili antite(\s*\(\s*ilgili antite\s*\))+/gi, 'ilgili antite')
    .replace(/\(ilgili antite\)/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function buildTusRepository(): {
  vakaQuestions: TusVakaQuestion[];
  spotCards: TusSpotCard[];
} {
  const perClusterVaka: TusVakaQuestion[][] = [];
  const perClusterSpots: TusSpotCard[][] = [];
  const seenVakaStems = new Set<string>();
  const seenSpotStatements = new Set<string>();

  let qCounter = 1;
  let sCounter = 1;

  ALL_CLUSTERS.forEach((cluster, clusterIdx) => {
    const branchMeta = getBranchMeta(cluster.branchId);
    const entities = cluster.entities;
    const perEntityVaka: TusVakaQuestion[][] = [];
    const perEntitySpots: TusSpotCard[][] = [];
    const maxAnglesForBranch = BRANCH_EXTRA_ANGLE_MAP[cluster.branchId] || 7;
    const isOsymTwinCluster = cluster.subTopic.startsWith('ÖSYM İkizi');
    const shortSubTopic = cluster.subTopic.replace(/^ÖSYM İkizi\s*•\s*/i, '').trim();

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

      const maskedNote = redactTargetFromStem(entity.whenCorrectNote, entity.entityName);
      const maskedClues = redactTargetFromStem(entity.clues.join(', '), entity.entityName);
      const maskedFirstGold = redactTargetFromStem(
        entity.firstVsGold.split('•')[0].trim(),
        entity.entityName
      );
      const maskedMechanism = redactTargetFromStem(entity.mechanism, entity.entityName);

      // 8 distinct, zero-error question formats where options are concise and 100% matched to the question stem
      const allAngleDefinitions: Array<{
        angleTitle: string;
        difficulty: TusVakaQuestion['difficulty'];
        freq: TusVakaQuestion['examFrequency'];
        buildStem: () => string;
        buildOptionText: (e: typeof entity) => string;
      }> = [
        {
          angleTitle: 'Klinik Vaka',
          difficulty: 'Klinik Vaka',
          freq: 'Her TUS Sorulur',
          buildStem: () => `${entity.patientVignette} ${entity.questionPrompt}`,
          buildOptionText: (e) => cleanShortTitle(e.entityName),
        },
        {
          angleTitle: 'Ayırıcı Tanı',
          difficulty: 'İleri Ayırıcı Tanı',
          freq: 'Yüksek Verimli Vaka',
          buildStem: () =>
            `Aşağıdaki klinik tablo veya yapılardan hangisi "${maskedNote}" özelliği ile karakterizedir?`,
          buildOptionText: (e) => cleanShortTitle(e.entityName),
        },
        {
          angleTitle: 'İlk Tercih & Altın Standart',
          difficulty: 'Temel Spot',
          freq: 'Altın Standart Spot',
          buildStem: () =>
            `"${shortTitle}" tablosunda (${shortSubTopic}) geçerli olan tanısal altın standart veya tedavi yaklaşımı aşağıdakilerden hangisidir?`,
          buildOptionText: (e) => e.firstVsGold,
        },
        {
          angleTitle: 'Mekanizma & Klinik Özellik',
          difficulty: 'Klinik Vaka',
          freq: 'Yüksek Verimli Vaka',
          buildStem: () =>
            `Klinikte "${shortTitle}" tanısı konulan bir hastada (${shortSubTopic}) beklenen temel mekanizma ve klinik bulgu eşleşmesi hangisidir?`,
          buildOptionText: (e) => e.whenCorrectNote,
        },
        {
          angleTitle: 'TUS Altın Kuralı',
          difficulty: 'Temel Spot',
          freq: 'Her TUS Sorulur',
          buildStem: () =>
            `${branchMeta.shortName} (${cluster.subTopic}) kapsamında "${shortTitle}" için geçerli olan altın kural aşağıdakilerden hangisidir?`,
          buildOptionText: (e) => e.pearl,
        },
        {
          angleTitle: 'Klinik Anahtar Eşleştirmesi',
          difficulty: 'İleri Ayırıcı Tanı',
          freq: 'Altın Standart Spot',
          buildStem: () =>
            `Bir hastada "${maskedClues}" bulguları saptandığında ve "${maskedFirstGold}" kuralı geçerli olduğunda en olası tanı/hedef hangisidir?`,
          buildOptionText: (e) => cleanShortTitle(e.entityName),
        },
        {
          angleTitle: 'Fizyopatolojik Mekanizma',
          difficulty: 'İleri Ayırıcı Tanı',
          freq: 'Her TUS Sorulur',
          buildStem: () =>
            `"${maskedMechanism}" mekanizması ile gelişen klinik tablo veya anatomik/farmakolojik antite aşağıdakilerden hangisidir?`,
          buildOptionText: (e) => cleanShortTitle(e.entityName),
        },
        {
          angleTitle: 'Doğru Klinik Yaklaşım',
          difficulty: 'Klinik Vaka',
          freq: 'Yüksek Verimli Vaka',
          buildStem: () =>
            `${cluster.subTopic} ayırıcı tanısında "${shortTitle}" için aşağıdaki klinik ifadelerden hangisi doğrudur?`,
          buildOptionText: (e) => e.trueStatement,
        },
      ];

      // Vary question count per entity/cluster so every branch has a distinct, natural count
      const effectiveCount =
        entityIdx % 2 === 0
          ? maxAnglesForBranch
          : Math.max(5, maxAnglesForBranch - 1);
      const angleDefinitions = allAngleDefinitions.slice(0, effectiveCount);

      const entityVakaBucket: TusVakaQuestion[] = [];
      angleDefinitions.forEach((angle, angleIdx) => {
        const stemText = prefixTwin(angle.buildStem());
        if (seenVakaStems.has(stemText)) {
          return;
        }
        seenVakaStems.add(stemText);

        const shift = (clusterIdx + entityIdx + angleIdx) % 5;
        const options: TusQuestionOption[] = OPTION_LETTERS.map((letter, optPos) => {
          const sourceIdx = (optPos + shift) % 5;
          const candidate = entities[sourceIdx];
          const candShort = cleanShortTitle(candidate.entityName);
          const isTarget = sourceIdx === entityIdx;
          return {
            letter,
            text: angle.buildOptionText(candidate),
            differentialNote: isTarget
              ? `✓ Doğru (${candShort}): ${candidate.whenCorrectNote}`
              : `${candShort}: ${candidate.whenCorrectNote}`,
          };
        });

        const correctOptObj = options.find(
          (_, optPos) => (optPos + shift) % 5 === entityIdx
        )!;

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

      // Spot Cards per entity
      const nextEntity = entities[(entityIdx + 1) % 5];
      const prevEntity = entities[(entityIdx + 4) % 5];
      const prevShort = cleanShortTitle(prevEntity.entityName);

      const allEntitySpots: Array<{
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
          statement: `${shortTitle} yaklaşımında; ${entity.firstVsGold}`,
          isTrue: true,
          criticalHighlight: entity.firstVsGold.split('•')[0].trim(),
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

      const entitySpots = allEntitySpots.slice(0, effectiveCount);
      const entitySpotBucket: TusSpotCard[] = [];

      entitySpots.forEach((spot) => {
        if (seenSpotStatements.has(spot.statement)) return;
        seenSpotStatements.add(spot.statement);
        entitySpotBucket.push({
          id: `spot-${sCounter++}`,
          session: branchMeta.session,
          branchId: cluster.branchId,
          branchName: branchMeta.name,
          subTopic: cluster.subTopic,
          statement: spot.statement,
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

    // Interleave angles & rotate starting entity per cluster so clinical vignettes & ALL years (2019–2025) lead cleanly!
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
    const maxSpotAngleLen = Math.max(...perEntitySpots.map((b) => b.length), 0);
    for (let aIdx = 0; aIdx < maxSpotAngleLen; aIdx++) {
      for (let step = 0; step < entities.length; step++) {
        const rotatedIdx = (clusterIdx + step) % entities.length;
        const s = perEntitySpots[rotatedIdx]?.[aIdx];
        if (s) clusterSpotList.push(s);
      }
    }

    perClusterVaka.push(clusterVakaList);
    perClusterSpots.push(clusterSpotList);
  });

  // Round-robin interleave across clusters so every consecutive question comes from a different branch/topic
  // with 100% uniqueness (zero collisions or duplicates)
  const interleavedVaka: TusVakaQuestion[] = [];
  const maxVakaLen = Math.max(...perClusterVaka.map((list) => list.length));
  for (let pos = 0; pos < maxVakaLen; pos++) {
    for (let cIdx = 0; cIdx < perClusterVaka.length; cIdx++) {
      const item = perClusterVaka[cIdx][pos];
      if (item) {
        interleavedVaka.push(item);
      }
    }
  }

  const interleavedSpots: TusSpotCard[] = [];
  const maxSpotLen = Math.max(...perClusterSpots.map((list) => list.length));
  for (let pos = 0; pos < maxSpotLen; pos++) {
    for (let cIdx = 0; cIdx < perClusterSpots.length; cIdx++) {
      const item = perClusterSpots[cIdx][pos];
      if (item) {
        interleavedSpots.push(item);
      }
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

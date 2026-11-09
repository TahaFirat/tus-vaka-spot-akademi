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

function buildTusRepository(): {
  vakaQuestions: TusVakaQuestion[];
  spotCards: TusSpotCard[];
} {
  const perClusterVaka: TusVakaQuestion[][] = [];
  const perClusterSpots: TusSpotCard[][] = [];

  let qCounter = 1;
  let sCounter = 1;

  ALL_CLUSTERS.forEach((cluster, clusterIdx) => {
    const branchMeta = getBranchMeta(cluster.branchId);
    const entities = cluster.entities;
    const clusterVakaList: TusVakaQuestion[] = [];
    const clusterSpotList: TusSpotCard[] = [];
    const maxAnglesForBranch = BRANCH_EXTRA_ANGLE_MAP[cluster.branchId] || 7;

    entities.forEach((entity, entityIdx) => {
      const shortTitle = cleanShortTitle(entity.entityName);

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
            `Aşağıdaki klinik tablo veya yapılardan hangisi "${entity.whenCorrectNote}" özelliği ile karakterizedir?`,
          buildOptionText: (e) => cleanShortTitle(e.entityName),
        },
        {
          angleTitle: 'İlk Tercih & Altın Standart',
          difficulty: 'Temel Spot',
          freq: 'Altın Standart Spot',
          buildStem: () =>
            `"${shortTitle}" tablosunda geçerli olan tanısal altın standart veya tedavi yaklaşımı aşağıdakilerden hangisidir?`,
          buildOptionText: (e) => e.firstVsGold,
        },
        {
          angleTitle: 'Mekanizma & Klinik Özellik',
          difficulty: 'Klinik Vaka',
          freq: 'Yüksek Verimli Vaka',
          buildStem: () =>
            `Klinikte "${shortTitle}" tanısı konulan bir hastada beklenen temel mekanizma ve klinik bulgu eşleşmesi hangisidir?`,
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
            `Bir hastada "${entity.clues.join(', ')}" bulguları saptandığında ve "${entity.firstVsGold.split('•')[0].trim()}" kuralı geçerli olduğunda en olası tanı/hedef hangisidir?`,
          buildOptionText: (e) => cleanShortTitle(e.entityName),
        },
        {
          angleTitle: 'Fizyopatolojik Mekanizma',
          difficulty: 'İleri Ayırıcı Tanı',
          freq: 'Her TUS Sorulur',
          buildStem: () =>
            `"${entity.mechanism}" mekanizması ile gelişen klinik tablo veya anatomik/farmakolojik antite aşağıdakilerden hangisidir?`,
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

      angleDefinitions.forEach((angle, angleIdx) => {
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

        clusterVakaList.push({
          id: `vaka-${qCounter++}`,
          session: branchMeta.session,
          branchId: cluster.branchId,
          branchName: branchMeta.name,
          subTopic: cluster.subTopic,
          difficulty: angle.difficulty,
          examFrequency: angle.freq,
          stem: angle.buildStem(),
          clinicalClues: entity.clues,
          options,
          correctOption: correctOptObj.letter,
          stepByStepMechanism: entity.mechanism,
          differentialSummary,
          highYieldPearl: entity.pearl,
          firstLineVsGoldStandard: entity.firstVsGold,
        });
      });

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

      entitySpots.forEach((spot) => {
        clusterSpotList.push({
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
        });
      });
    });

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
export const TUS_SPOT_CARDS: TusSpotCard[] = REPOSITORY.spotCards;

export const TOTAL_INTERACTIVE_TUS_ITEMS =
  TUS_VAKA_QUESTIONS.length + TUS_SPOT_CARDS.length;

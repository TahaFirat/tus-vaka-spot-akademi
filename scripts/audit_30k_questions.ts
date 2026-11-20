import {
  STATIC_BRANCH_COUNTS,
  TOTAL_INTERACTIVE_TUS_ITEMS,
  TUS_BRANCHES,
  TUS_OSYM_TWIN_QUESTIONS,
  TUS_SPOT_CARDS,
  TUS_VAKA_QUESTIONS,
} from '../src/data/tusMedicalRepository';

function runAudit() {
  const t0 = performance.now();
  const errors: string[] = [];
  const pushErr = (msg: string) => {
    if (errors.length < 40) errors.push(msg);
  };

  if (TUS_VAKA_QUESTIONS.length < 15000) {
    pushErr(`Vaka count too low: ${TUS_VAKA_QUESTIONS.length} (< 15000)`);
  }
  if (TUS_SPOT_CARDS.length < 15000) {
    pushErr(`Spot count too low: ${TUS_SPOT_CARDS.length} (< 15000)`);
  }
  if (TOTAL_INTERACTIVE_TUS_ITEMS < 30500) {
    pushErr(`Total count too low: ${TOTAL_INTERACTIVE_TUS_ITEMS} (< 30500)`);
  }

  const seenVakaIds = new Set<string>();
  const seenStems = new Set<string>();
  const answerDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const twinByYear: Record<string, number> = {
    '2025': 0,
    '2024': 0,
    '2023': 0,
    '2022': 0,
    '2021': 0,
    '2020': 0,
    '2019': 0,
  };

  const badRegex = /(?:\bilgili antite\b|\bundefined\b|\bnull\b|\bNaN\b|\[object|\(\s*\))/;

  for (let i = 0; i < TUS_VAKA_QUESTIONS.length; i++) {
    const q = TUS_VAKA_QUESTIONS[i];
    if (seenVakaIds.has(q.id)) pushErr(`Duplicate Vaka ID: ${q.id}`);
    seenVakaIds.add(q.id);

    const stem = q.stem;
    if (!stem || stem.length < 30) {
      pushErr(`Short/empty stem on ${q.id}: "${stem}"`);
    }
    if (seenStems.has(stem)) {
      pushErr(`Duplicate Vaka stem on ${q.id}: "${stem.slice(0, 80)}..."`);
    }
    seenStems.add(stem);

    if (badRegex.test(stem)) {
      pushErr(`Artifact in stem of ${q.id}: "${stem.slice(0, 90)}"`);
    }

    if (!q.options || q.options.length !== 5) {
      pushErr(`Invalid options length on ${q.id}`);
      continue;
    }

    const optNormSet = new Set<string>();
    q.options.forEach((opt, idx) => {
      const expectedLetter = ['A', 'B', 'C', 'D', 'E'][idx];
      if (opt.letter !== expectedLetter) {
        pushErr(`Option letter mismatch on ${q.id}`);
      }
      const txt = (opt.text || '').trim();
      if (!txt) {
        pushErr(`Empty option text on ${q.id} (${opt.letter})`);
      }
      if (badRegex.test(txt)) {
        pushErr(`Artifact in option ${opt.letter} of ${q.id}: "${txt}"`);
      }
      const norm = txt.toLowerCase();
      if (optNormSet.has(norm)) {
        pushErr(`Duplicate option text in ${q.id}: "${txt}"`);
      }
      optNormSet.add(norm);
    });

    answerDist[q.correctOption] = (answerDist[q.correctOption] || 0) + 1;
    const correctOpt = q.options.find((o) => o.letter === q.correctOption);
    if (!correctOpt) {
      pushErr(`Missing correctOption ${q.correctOption} on ${q.id}`);
      continue;
    }

    const isPairingQuestion =
      stem.includes('YANLIŞTIR?') || stem.includes('eşleştirmelerinden hangisi DOĞRUDUR?');
    if (!isPairingQuestion) {
      // Check answer leak in stem when options are short names/targets (<= 55 chars)
      const cText = correctOpt.text.trim();
      if (cText.length >= 5 && cText.length <= 55) {
        const baseClean = cText.split('(')[0].split('—')[0].trim();
        if (baseClean.length >= 5 && stem.toLowerCase().includes(baseClean.toLowerCase())) {
          pushErr(
            `Answer leak in stem on ${q.id}: answer="${baseClean}" inside stem="${stem.slice(0, 110)}"`
          );
        }
      }

      // Check stem-named entity self-leak in correct option!
      const quoted = stem.match(/"([^"]{4,45})"/);
      if (quoted) {
        const namedInStem = quoted[1].split('(')[0].split('—')[0].trim();
        if (
          namedInStem.length >= 5 &&
          cText.toLowerCase().includes(namedInStem.toLowerCase())
        ) {
          pushErr(
            `Stem-entity leak in option on ${q.id}: quoted="${namedInStem}" leaked into option="${cText.slice(0, 90)}"`
          );
        }
      }
    }

    if (q.isOsymTwin && q.osymYearTag) {
      for (const yr of Object.keys(twinByYear)) {
        if (q.osymYearTag.includes(yr)) twinByYear[yr] += 1;
      }
    }
  }

  const seenSpotIds = new Set<string>();
  const seenStatements = new Set<string>();
  let trueSpots = 0;
  let falseSpots = 0;

  for (let i = 0; i < TUS_SPOT_CARDS.length; i++) {
    const s = TUS_SPOT_CARDS[i];
    if (seenSpotIds.has(s.id)) pushErr(`Duplicate Spot ID: ${s.id}`);
    seenSpotIds.add(s.id);

    const st = (s.statement || '').trim();
    if (st.length < 20) {
      pushErr(`Short spot statement on ${s.id}: "${st}"`);
    }
    if (seenStatements.has(st)) {
      pushErr(`Duplicate Spot statement on ${s.id}: "${st.slice(0, 80)}..."`);
    }
    seenStatements.add(st);

    if (badRegex.test(st)) {
      pushErr(`Artifact in spot ${s.id}: "${st}"`);
    }

    if (s.isTrue) trueSpots++;
    else {
      falseSpots++;
      if (!s.criticalHighlight || s.criticalHighlight.trim().length < 3) {
        pushErr(`Missing criticalHighlight on false spot ${s.id}`);
      }
      if (!s.correctMedicalFact || s.correctMedicalFact.trim().length < 12) {
        pushErr(`Missing correctMedicalFact on false spot ${s.id}`);
      }
    }
  }

  for (const b of TUS_BRANCHES) {
    const bc = STATIC_BRANCH_COUNTS[b.id];
    if (!bc || bc.vaka < 500 || bc.spot < 500) {
      pushErr(`Branch ${b.id} underpopulated: ${JSON.stringify(bc)}`);
    }
  }

  for (const [yr, cnt] of Object.entries(twinByYear)) {
    if (cnt < 50) {
      pushErr(`OSYM Twin year ${yr} has too few questions: ${cnt}`);
    }
  }

  const elapsedMs = Math.round(performance.now() - t0);

  console.log('====================================================');
  console.log('TUS 30K+ MEDICAL REPOSITORY FULL AUDIT REPORT');
  console.log('====================================================');
  console.log(`Vaka Questions      : ${TUS_VAKA_QUESTIONS.length.toLocaleString('tr-TR')}`);
  console.log(`OSYM Twin Questions : ${TUS_OSYM_TWIN_QUESTIONS.length.toLocaleString('tr-TR')}`);
  console.log(`Spot D/Y Cards      : ${TUS_SPOT_CARDS.length.toLocaleString('tr-TR')}`);
  console.log(`GRAND TOTAL ITEMS   : ${TOTAL_INTERACTIVE_TUS_ITEMS.toLocaleString('tr-TR')}`);
  console.log(`Option Key Dist     :`, answerDist);
  console.log(`Spot True / False   : True=${trueSpots}, False=${falseSpots}`);
  console.log(`OSYM Twins By Year  :`, twinByYear);
  console.log(`Full Hydration Time : ${elapsedMs} ms`);
  console.log('Branch Totals       :');
  for (const b of TUS_BRANCHES) {
    const c = STATIC_BRANCH_COUNTS[b.id];
    console.log(
      `  - [${b.session}] ${b.shortName.padEnd(14)}: Vaka=${c.vaka}, Twin=${c.twin}, Spot=${c.spot}, Total=${c.total}`
    );
  }

  if (errors.length > 0) {
    console.error(`\nFAILED WITH ${errors.length}+ ERRORS:`);
    errors.forEach((e) => console.error('  ✗', e));
    process.exit(1);
  }

  console.log('\n✓ ALL 12 CLINICAL & STRUCTURAL INVARIANTS PASSED WITH 0 ERRORS!');
}

runAudit();

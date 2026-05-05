function showTab(name, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

function colorKpi(el, val, good, warn, inverse = false) {
  el.classList.remove('good', 'warn', 'bad');
  if (!inverse) {
    if (val >= good) el.classList.add('good');
    else if (val >= warn) el.classList.add('warn');
    else el.classList.add('bad');
  } else {
    if (val <= good) el.classList.add('good');
    else if (val <= warn) el.classList.add('warn');
    else el.classList.add('bad');
  }
}

function calculateTRS() {
  const tempsFonc = parseFloat(document.getElementById('tempsFonc').value);
  const tempsTotal = parseFloat(document.getElementById('tempsTotal').value);
  const prodReelle = parseFloat(document.getElementById('prodReelle').value);
  const prodTheo = parseFloat(document.getElementById('prodTheo').value);
  const piecesConformes = parseFloat(document.getElementById('piecesConformes').value);
  const piecesTotal = parseFloat(document.getElementById('piecesTotal').value);

  const r = calculerTRS(tempsFonc, tempsTotal, prodReelle, prodTheo, piecesConformes, piecesTotal);

  document.getElementById('trs-results').classList.remove('hidden');

  const elTrs = document.getElementById('res-trs');
  const elDispo = document.getElementById('res-dispo');
  const elPerf = document.getElementById('res-perf');
  const elQual = document.getElementById('res-qual');

  elTrs.innerText = r.trs.toFixed(1) + '%';
  elDispo.innerText = r.disponibilite.toFixed(1) + '%';
  elPerf.innerText = r.performance.toFixed(1) + '%';
  elQual.innerText = r.qualite.toFixed(1) + '%';

  colorKpi(elTrs, r.trs, 85, 65);
  colorKpi(elDispo, r.disponibilite, 90, 75);
  colorKpi(elPerf, r.performance, 90, 75);
  colorKpi(elQual, r.qualite, 98, 95);
}

function calculateQualite() {
  const total = parseFloat(document.getElementById('q-total').value);
  const rebut = parseFloat(document.getElementById('q-rebut').value);
  const retouche = parseFloat(document.getElementById('q-retouche').value);
  const fpy = parseFloat(document.getElementById('q-fpy').value);
  const defauts = parseFloat(document.getElementById('q-defauts').value);
  const cout = parseFloat(document.getElementById('q-cout').value);

  const r = calculerQualite(total, rebut, retouche, fpy, defauts, cout);

  document.getElementById('qualite-results').classList.remove('hidden');

  const elRebut = document.getElementById('q-rebut-val');
  const elRetouche = document.getElementById('q-retouche-val');
  const elFpy = document.getElementById('q-fpy-val');
  const elPpm = document.getElementById('q-ppm-val');
  const elConf = document.getElementById('q-conf-val');
  const elCout = document.getElementById('q-cout-val');

  elRebut.innerText = r.txRebut.toFixed(2) + '%';
  elRetouche.innerText = r.txRetouche.toFixed(2) + '%';
  elFpy.innerText = r.txFpy.toFixed(1) + '%';
  elPpm.innerText = r.ppm.toLocaleString();
  elConf.innerText = r.txConformite.toFixed(1) + '%';
  elCout.innerText = r.cout.toLocaleString() + ' €';

  colorKpi(elRebut, r.txRebut, 1, 3, true);
  colorKpi(elRetouche, r.txRetouche, 2, 5, true);
  colorKpi(elFpy, r.txFpy, 95, 90);
  colorKpi(elPpm, r.ppm, 500, 2000, true);
  colorKpi(elConf, r.txConformite, 99, 97);
}

function calculateFournisseur() {
  const total = parseFloat(document.getElementById('f-total').value);
  const heure = parseFloat(document.getElementById('f-heure').value);
  const pieces = parseFloat(document.getElementById('f-pieces').value);
  const defauts = parseFloat(document.getElementById('f-defauts').value);
  const completes = parseFloat(document.getElementById('f-completes').value);
  const reclamations = parseFloat(document.getElementById('f-reclamations').value);

  const r = calculerFournisseur(total, heure, pieces, defauts, completes, reclamations);

  document.getElementById('fournisseur-results').classList.remove('hidden');

  const elOtd = document.getElementById('f-otd-val');
  const elPpm = document.getElementById('f-ppm-val');
  const elService = document.getElementById('f-service-val');
  const elConf = document.getElementById('f-conf-val');
  const elRecl = document.getElementById('f-recl-val');

  elOtd.innerText = r.otd.toFixed(1) + '%';
  elPpm.innerText = r.ppm.toLocaleString();
  elService.innerText = r.txService.toFixed(1) + '%';
  elConf.innerText = r.txConformite.toFixed(2) + '%';
  elRecl.innerText = r.txReclamations.toFixed(1) + '%';

  colorKpi(elOtd, r.otd, 95, 85);
  colorKpi(elPpm, r.ppm, 500, 2000, true);
  colorKpi(elService, r.txService, 95, 85);
  colorKpi(elConf, r.txConformite, 99, 97);
  colorKpi(elRecl, r.txReclamations, 2, 5, true);
}

function calculateAmelio() {
  const total = parseFloat(document.getElementById('a-total').value);
  const clotures = parseFloat(document.getElementById('a-clotures').value);
  const efficaces = parseFloat(document.getElementById('a-efficaces').value);
  const recurrents = parseFloat(document.getElementById('a-recurrents').value);
  const idees = parseFloat(document.getElementById('a-idees').value);
  const mises = parseFloat(document.getElementById('a-mises').value);

  const r = calculerAmelio(total, clotures, efficaces, recurrents, idees, mises);

  document.getElementById('amelio-results').classList.remove('hidden');

  const elCloture = document.getElementById('a-cloture-val');
  const elCapa = document.getElementById('a-capa-val');
  const elRecur = document.getElementById('a-recur-val');
  const elPrev = document.getElementById('a-prev-val');
  const elIdees = document.getElementById('a-idees-val');

  elCloture.innerText = r.txCloture.toFixed(1) + '%';
  elCapa.innerText = r.txCapa.toFixed(1) + '%';
  elRecur.innerText = r.txRecurrence.toFixed(1) + '%';
  elPrev.innerText = r.txPrevention.toFixed(1) + '%';
  elIdees.innerText = r.txIdees.toFixed(1) + '%';

  colorKpi(elCloture, r.txCloture, 80, 60);
  colorKpi(elCapa, r.txCapa, 80, 60);
  colorKpi(elRecur, r.txRecurrence, 10, 20, true);
  colorKpi(elPrev, r.txPrevention, 80, 60);
  colorKpi(elIdees, r.txIdees, 70, 50);
}
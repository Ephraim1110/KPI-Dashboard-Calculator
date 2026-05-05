function disponibilite(tempsFonc, tempsTotal) {
  return (tempsFonc / tempsTotal) * 100;
}

function performance(prodReelle, prodTheo) {
  return (prodReelle / prodTheo) * 100;
}

function qualite(piecesConformes, piecesTotal) {
  return (piecesConformes / piecesTotal) * 100;
}

function calculerTRS(tempsFonc, tempsTotal, prodReelle, prodTheo, piecesConformes, piecesTotal) {
  const d = disponibilite(tempsFonc, tempsTotal);
  const p = performance(prodReelle, prodTheo);
  const q = qualite(piecesConformes, piecesTotal);
  const trs = (d / 100) * (p / 100) * (q / 100) * 100;
  return { disponibilite: d, performance: p, qualite: q, trs: trs };
}
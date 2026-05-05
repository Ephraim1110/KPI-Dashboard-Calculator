function calculateTRS() {
  // 1. Récupérer les valeurs des inputs
  const tempsFonc = parseFloat(document.getElementById('tempsFonc').value);
  const tempsTotal = parseFloat(document.getElementById('tempsTotal').value);
  const prodReelle = parseFloat(document.getElementById('prodReelle').value);
  const prodTheo = parseFloat(document.getElementById('prodTheo').value);
  const piecesConformes = parseFloat(document.getElementById('piecesConformes').value);
  const piecesTotal = parseFloat(document.getElementById('piecesTotal').value);
  
  const resultat = calculerTRS(tempsFonc, tempsTotal, prodReelle, prodTheo, piecesConformes, piecesTotal);

  document.getElementById('res-dispo').innerText = `Disponibilité : ${resultat.disponibilite.toFixed(2)}%`;
  document.getElementById('res-perf').innerText = `Performance : ${resultat.performance.toFixed(2)}%`;
  document.getElementById('res-qual').innerText = `Qualité : ${resultat.qualite.toFixed(2)}%`;
  document.getElementById('res-trs').innerHTML = `<strong>TRS Global : ${resultat.trs.toFixed(2)}%</strong>`;
}
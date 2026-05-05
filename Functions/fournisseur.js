function calculerFournisseur(total, heure, pieces, defauts, completes, reclamations) {
  const otd = (heure / total) * 100;
  const ppm = Math.round((defauts / pieces) * 1000000);
  const txService = (completes / total) * 100;
  const txConformite = ((pieces - defauts) / pieces) * 100;
  const txReclamations = (reclamations / total) * 100;

  return {
    otd: otd,
    ppm: ppm,
    txService: txService,
    txConformite: txConformite,
    txReclamations: txReclamations
  };
}
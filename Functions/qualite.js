function calculerQualite(total, rebut, retouche, fpy, defauts, cout) {
  const txRebut = (rebut / total) * 100;
  const txRetouche = (retouche / total) * 100;
  const txFpy = (fpy / total) * 100;
  const ppm = Math.round((defauts / total) * 1000000);
  const txConformite = ((total - rebut) / total) * 100;

  return {
    txRebut: txRebut,
    txRetouche: txRetouche,
    txFpy: txFpy,
    ppm: ppm,
    txConformite: txConformite,
    cout: cout
  };
}
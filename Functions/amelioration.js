function calculerAmelio(total, clotures, efficaces, recurrents, idees, mises) {
  const txCloture = (clotures / total) * 100;
  const txCapa = (efficaces / clotures) * 100;
  const txRecurrence = (recurrents / total) * 100;
  const txPrevention = ((total - recurrents) / total) * 100;
  const txIdees = (mises / idees) * 100;

  return {
    txCloture: txCloture,
    txCapa: txCapa,
    txRecurrence: txRecurrence,
    txPrevention: txPrevention,
    txIdees: txIdees
  };
}
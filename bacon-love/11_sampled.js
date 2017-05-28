/**
 * 11. Sampled
 * @param Bacon
 * @param nidelva (Property) water levels for Nidelva
 * @param leirelva (Property water levels for Leirelva
 * @param buttonClicked (EventStream)
 * @return {*} EventStream of the sum of the water level samples.
 */
module.exports = (Bacon, nidelva, leirelva, buttonClicked) => nidelva
  .combine(leirelva, (a, b) => a + b)
  .sampledBy(buttonClicked)

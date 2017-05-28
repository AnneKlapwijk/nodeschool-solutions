/**
 * 9. Combining Observables part ii
 * @param Bacon
 * @param sector1Count
 * @param sector2Count
 * @param sector3Count
 * @param sector4Count
 * @return {*}
 */
module.exports = (Bacon, sector1Count, sector2Count, sector3Count, sector4Count
) => Bacon
  .combineTemplate({
    sector1: sector1Count,
    sector2: sector2Count,
    sector3: sector3Count,
    sector4: sector4Count,
    sector5: Bacon.constant(0) // always return 0 since no EDF ships are deployed to sector five
  })

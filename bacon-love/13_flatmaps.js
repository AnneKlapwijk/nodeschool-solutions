/**
 * 13. Generate Linear Stream of River Data
 * We are only interested in the data points where the water level is above the average
 * water level in Nidelva (200 000 liters).
 * @param Bacon
 * @param riverFlowInCubicFeet (EventStream) tuples from the data specialists
 * @param litresInCubicFeet (Number) factor to multiply cubic feet with to get liters
 * @return {*} EventStream with whole liters from Nidelva. E.g. [190000, 180000, etc]
 */
module.exports = (Bacon, riverFlowInCubicFeet, litresInCubicFeet) =>
  riverFlowInCubicFeet.flatMap(data => {
    const averageWaterLevel = 200000
    const waterLevelPerSecond = data[0]
    const numberOfSamples = data[1]
    const litres = Math.round(waterLevelPerSecond * litresInCubicFeet)

    return litres > averageWaterLevel
      ? Bacon.interval(0, litres).take(numberOfSamples)
      : Bacon.never()
  })

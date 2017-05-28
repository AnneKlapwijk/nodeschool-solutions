/**
 * 7. Fold and Scan
 * @param Bacon
 * @param enteringShips (EventStream)
 * @param destroyerPosition (Property)
 * @return {{shipTally: *, threatReport: *}}
 */
module.exports = (Bacon, enteringShips, destroyerPosition) => {
  // The running tally of Zrrk ships
  const shipTally = enteringShips
      .map(ship => ship.type === 'zrrk' ? 1 : 0)
      .scan(0, (a, b) => a + b)

  const destroyerHasArrived = destroyerPosition.map(pos => pos < 1)

  // The report of ships immediately following the Destroyer
  const threatReport = enteringShips
      .filter(destroyerHasArrived)
      .take(5)
      .fold({}, (report, ship) => {
        report[ship.type] = ++report[ship.type] || 1
        return report
      })

  return { shipTally, threatReport }
}

/**
 * 6. Map and Filter
 * @param Bacon
 * @param enteringShips (EventStream)
 * @param destroyerPosition (Property)
 * @return {{ships: *, threat: *, postArrivalShips: *}}
 */
module.exports = (Bacon, enteringShips, destroyerPosition) => {
  const ships = enteringShips.map(ship => ship.type === 'zrrk' ? 1 : 0)
  return {
		// ship counter
    ships,
		// threat level
    threat: destroyerPosition.map(pos => {
      return pos > 5
				? 'low'
				: pos > 2
					? 'medium'
					: pos >= 1
						? 'high'
						: 'extreme'
    }),
		// ship counter post arrival
    postArrivalShips: ships.filter(destroyerPosition.filter(pos => pos < 1))
  }
}

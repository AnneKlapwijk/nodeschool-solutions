/**
 * 10. And or Or or Maybe Not
 * Returns a property with the value true if we should activate the
 * report system, or false if there is no worries.
 * @param Bacon
 * @param riverFlow (EventStream) liters per second
 * @param inCriticalMode (Property) Boolean
 * @param isOnBreak (Property) Boolean
 * @param isSingleGate (Property) Boolean
 * @param systemActive (Property) Boolean
 * @param riverFlowLimit (Int)
 * @return {*} (Property) Boolean
 */
module.exports = (Bacon, riverFlow, inCriticalMode, isOnBreak, isSingleGate, systemActive, riverFlowLimit) => {
  /*
   We are only interested in having the report-system active if it is turned
   on and only one of the water gates are open, or if the system is in critical
   mode (this trumps if the system is active and if more than one gate is open).
   */
  const shouldReport = systemActive.and(isSingleGate).or(inCriticalMode)

  /*
   We only want to be reported if the river flow is above a specific
   threshold.
   */
  const riverLimitExceeded = riverFlow.map(flow => flow > riverFlowLimit)

  /*
   The people working as this particular dam are passionate about lunch, and
   won't be bothered in the lunch time.
   */
  const outsideLunchTime = isOnBreak.not()

  return shouldReport.and(riverLimitExceeded).and(outsideLunchTime)
}

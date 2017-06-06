/**
 * 12. Selective Data by Timing
 * Taking Samples From EventStreams and Stopping Streams
 * @param Bacon
 * @param riverQuality (EventStream) water quality
 * @param untilSwitchTurnedOff (Function) holding true when system is active
 * @param sampleTime (Int) interval to take samples in milliseconds
 * @return {*} EventStream of quality samples
 */
module.exports = (Bacon, riverQuality, untilSwitchTurnedOff, sampleTime) =>
  riverQuality
    .debounceImmediate(sampleTime)
    .takeWhile(untilSwitchTurnedOff)

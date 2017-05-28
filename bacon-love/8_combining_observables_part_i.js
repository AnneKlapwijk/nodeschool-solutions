/**
 * 8. Combining Observables part i
 * @param Bacon
 * @param messages (EventStream)
 * @param keys (EventStream)
 * @param decoderFunction {Function} takes a single parameter [message, key]
 * @return {*}
 */
module.exports = (Bacon, messages, keys, decoderFunction) =>
  messages
    .zip(keys)
    .map(decoderFunction)

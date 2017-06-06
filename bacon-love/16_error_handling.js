/**
 * 16. Error Handling
 * @param Bacon
 * @param asyncTask
 * @return {*}
 */
module.exports = (Bacon, asyncTask) =>
  asyncTask
    .map(false)
    .mapError(true)
    .toProperty(false)

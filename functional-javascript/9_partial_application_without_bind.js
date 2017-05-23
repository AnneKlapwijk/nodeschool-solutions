/**
 * 9. Partial Application without Bind
 * @param namespace
 * @return function
 */
function logger(namespace) {
  return function() {
    console.log.apply(console, [`${namespace} ${[...arguments].join(' ')}`])
  }
}

module.exports = logger

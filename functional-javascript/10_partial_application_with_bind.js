/**
 * 10. Partial Application with Bind
 * @param namespace
 * @return function
 */
function logger(namespace) {
  // Create a function with a preset leading argument
  return console.log.bind(console, namespace)
}

module.exports = logger

const warn = logger('WARN:')
warn('this is a warning message', 'with more info')

/**
 * 15. Async Loops
 * @param userIds {Array} of numeric user ids
 * @param load {Function} used to load user objects, expects and id and callback
 * @param done {Function} expects an Array of user objects (as retrieved from load())
 * @return {Array}
 */
function loadUsers(userIds, load, done) {
  return done(userIds.map(id => load(id)))
}

module.exports = loadUsers

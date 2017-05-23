/**
 * 4. Basic Filter
 * @param messages
 * @returns {Array}
 */
function getShortMessages(messages) {
  return messages.map(message => message.message)
		.filter(message => message.length < 50)
}

module.exports = getShortMessages

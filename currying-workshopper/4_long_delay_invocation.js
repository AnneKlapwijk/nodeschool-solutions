let sum = 0

const longDelayInvocation = a => {
  if (typeof a === 'number') {
    sum += a
    return longDelayInvocation
  }

  return sum
}

module.exports = longDelayInvocation

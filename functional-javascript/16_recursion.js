/**
 * 16. Recursion
 * @param tree
 */
function getDependencies(tree) {
  function recursiveCall (dependencies = {}) {
    if (!dependencies) return []
    return Object.keys(dependencies).reduce(
      (acc, dependency) => {
        return acc.concat(
          `${dependency}@${dependencies[dependency].version}`,
          recursiveCall(dependencies[dependency].dependencies) || []
        )
      },
      []
    )
  }
  let dependencies = tree.dependencies ? recursiveCall(tree.dependencies) : []
  let uniqueDependencies = [...new Set(dependencies)]
  return uniqueDependencies.sort()
}

module.exports = getDependencies  // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

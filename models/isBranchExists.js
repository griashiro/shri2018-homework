const getBranches = require('./getters/getBranches')

module.exports = async (branchName) => {
  const branches = await getBranches()
  return branches.some(branch => branch.name === branchName)
}

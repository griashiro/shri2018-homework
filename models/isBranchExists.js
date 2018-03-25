const getShellStdOut = require('../helpers/shell').getStdOut
const git = require('../helpers/git')

const getBranches = require('./getters/getBranches')

module.exports = async (branchName) => {
  const branches = await getBranches()
  return branches.names.includes(branchName)
}

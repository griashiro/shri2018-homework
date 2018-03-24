const getShellStdOut = require('../helpers/get-shell-std-out')
const git = require('../helpers/git')

const getAllBranchesNames = require('./getAllBranchesNames')

module.exports = async (branchName) => {
  const branches = await getAllBranchesNames()
  return branches.names.includes(branchName)
}

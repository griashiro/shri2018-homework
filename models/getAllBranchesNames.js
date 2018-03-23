const getShellStdOut = require('../helpers/get-shell-std-out')
const git = require('../helpers/git')

const parseBranches = require('../helpers/parse-branches')
const sliceCols = require('../helpers/slice-columns')

module.exports = async () => {
  const stdout = await getShellStdOut(git.branch())
  return parseBranches(sliceCols(stdout, 2))
}

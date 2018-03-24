const getShellStdOut = require('../helpers/shell').getStdOut
const git = require('../helpers/git')

const getCommitsFrom = require('./getCommitsFrom')

module.exports = async (commitHash, branchName) => {
  const commits = await getCommitsFrom(branchName)
  return commits.hashes.includes(commitHash)
}

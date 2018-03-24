const getShellStdOut = require('../helpers/get-shell-std-out')
const git = require('../helpers/git')

const sliceCols = require('../helpers/slice-columns')
const getCommitUrl = require('../helpers/get-commit-url')

module.exports = async (branchName) => {
  const stdout = await getShellStdOut(git.log(branchName))

  const hashes = sliceCols(stdout, 0, 7).split(/\n/)
  const messages = sliceCols(stdout, 8).split(/\n/)
  const hrefs = hashes.map(hash => {
    return getCommitUrl(branchName, hash)
  })

  return {
    hashes, hrefs, messages
  }
}

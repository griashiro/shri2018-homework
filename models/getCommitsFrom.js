const getShellStdOut = require('../helpers/get-shell-std-out')
const git = require('../helpers/git')

const sliceCols = require('../helpers/slice-columns')

module.exports = async (branchName) => {
  const stdout = await getShellStdOut(git.log(branchName))

  const hashes = sliceCols(stdout, 0, 7).split(/\n/)
  const messages = sliceCols(stdout, 8).split(/\n/)

  return {
    hashes, messages
  }
}

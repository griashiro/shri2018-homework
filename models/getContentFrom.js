const getShellStdOut = require('../helpers/get-shell-std-out')
const git = require('../helpers/git')

module.exports = async (hash) => {
  return await getShellStdOut(git.cat(hash))
}

const getShellStdOut = require('../../helpers/shell').getStdOut
const git = require('../../helpers/git')

module.exports = (hash) => {
  return getShellStdOut(git.cat(hash))
}

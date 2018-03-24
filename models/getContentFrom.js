const getShellStdOut = require('../helpers/shell').getStdOut
const git = require('../helpers/git')

module.exports = async (hash) => {
  return await getShellStdOut(git.cat(hash))
}

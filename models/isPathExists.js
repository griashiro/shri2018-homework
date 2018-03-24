const getShellStdOut = require('../helpers/shell').getStdOut
const git = require('../helpers/git')

module.exports = async (treeIsh, path) => {
  const stdout = await getShellStdOut(git.ls(treeIsh, path))
  return Boolean(stdout.trim())
}

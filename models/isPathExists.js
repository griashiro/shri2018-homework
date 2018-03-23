const getShellStdOut = require('../helpers/get-shell-std-out')
const git = require('../helpers/git')

module.exports = async (treeIsh, path) => {
  const stdout = await getShellStdOut(git.ls(treeIsh, path))
  return Boolean(stdout.trim())
}

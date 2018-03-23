const getShellStdOut = require('../helpers/get-shell-std-out')
const git = require('../helpers/git')

const removeFullPath = require('../helpers/remove-full-path')
const parsetGitLsStdout = require('../helpers/parse-git-ls-stdout')

module.exports = async (treeIsh, path) => {
  const stdout = await getShellStdOut(git.ls(treeIsh, path))

  return removeFullPath(parsetGitLsStdout(stdout, path))
}
